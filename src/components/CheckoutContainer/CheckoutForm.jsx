import {
  addDoc,
  collection,
  doc,
  updateDoc,
  writeBatch,
} from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useCart } from '../../context/CartContext';
import { db } from '../../firebaseConfig';
import Backdrop from '../Backdrop/Backdrop';

const CheckoutForm = ({ handleOrderId }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    emailConfirmation: '',
  });

  const [btnDisabled, setBtnDisabled] = useState(true);
  const cart = useCart();

  const validateEmail = email => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return !emailRegex.test(email);
  };

  useEffect(() => {
    setBtnDisabled(
      userData.firstName === '' ||
        userData.lastName === '' ||
        userData.phone === '' ||
        userData.email === '' ||
        userData.emailConfirmation === '' ||
        validateEmail(userData.email) ||
        validateEmail(userData.emailConfirmation) ||
        userData.email !== userData.emailConfirmation
    );
  }, [userData]);

  const handleOnChange = e => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const firebaseSubmit = async () => {
    setIsLoading(true);

    const order = {
      buyer: {
        name: `${userData.firstName} ${userData.lastName}`,
        email: userData.email,
        phone: userData.phone,
        date: new Date(),
      },
      items: cart.items,
      total: cart.getTotalItemsPrice(),
    };

    try {
      let orderCollectionRef = collection(db, 'orders');

      const newProduct = await addDoc(orderCollectionRef, order);

      const batch = writeBatch(db);

      cart.items.forEach(product => {
        let refDoc = doc(db, 'products', product.id);

        batch.update(refDoc, { stock: product.stock - product.quantity });
      });

      await batch.commit();

      cart.clearItems();

      Swal.fire({
        title: 'Purchased!',
        icon: 'success',
        timer: 3500,
        showConfirmButton: false,
        position: 'top-end',
        backdrop: false,
      });

      handleOrderId(newProduct.id);
    } catch (error) {
      Swal.fire({
        title: `Error in purchase! ${error}`,
        icon: 'error',
        timer: 3500,
        showConfirmButton: false,
        position: 'top-end',
        backdrop: false,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOnSubmit = async e => {
    e.preventDefault();

    Swal.fire({
      title: `Are you sure you want to purchase?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then(result => {
      if (result.isConfirmed) {
        firebaseSubmit();
      } else if (result.isDenied) {
        Swal.fire('Not purchased!', '', 'info');
      }
    });
  };

  return (
    <form onSubmit={handleOnSubmit} className="px-6">
      {isLoading && <Backdrop />}
      <label
        htmlFor="firstNameInput"
        className="mb-2 block text-sm font-medium text-purple-900"
      >
        Nombre
      </label>
      <input
        type="text"
        name="firstName"
        id="firstNameInput"
        className="block w-full rounded-lg border border-purple-100 bg-purple-50 p-2.5 text-sm text-purple-900 focus:border-purple-500 focus:ring-purple-500 "
        placeholder="Ingrese nombre"
        required
        onChange={handleOnChange}
      />

      <label
        htmlFor="lastNameInput"
        className="mb-2 block text-sm font-medium text-purple-900"
      >
        Apellido
      </label>
      <input
        type="text"
        name="lastName"
        id="lastNameInput"
        className="block w-full rounded-lg border border-purple-100 bg-purple-50 p-2.5 text-sm text-purple-900 focus:border-purple-500 focus:ring-purple-500 "
        placeholder="Ingrese apellido"
        required
        onChange={handleOnChange}
      />

      <label
        htmlFor="telefonoInput"
        className="mb-2 block text-sm font-medium text-purple-900"
      >
        Teléfono
      </label>
      <input
        type="text"
        name="phone"
        id="telefonoInput"
        className="block w-full rounded-lg border border-purple-100 bg-purple-50 p-2.5 text-sm text-purple-900 focus:border-purple-500 focus:ring-purple-500 "
        placeholder="Ingrese telefono"
        required
        onChange={handleOnChange}
      />
      {/* Email */}
      <label
        htmlFor="emailInput"
        className="mb-2 block text-sm font-medium text-purple-900"
      >
        Email
      </label>
      <input
        type="email"
        name="email"
        id="emailInput"
        className="block w-full rounded-lg border border-purple-100 bg-purple-50 p-2.5 text-sm text-purple-900 focus:border-purple-500 focus:ring-purple-500 "
        placeholder="Ingrese email"
        required
        onChange={handleOnChange}
      />

      <label
        htmlFor="emailConfirmationInput"
        className="mb-2 block text-sm font-medium text-purple-900"
      >
        Repita email
      </label>
      <input
        type="text"
        name="emailConfirmation"
        id="emailConfirmationInput"
        className="block w-full rounded-lg border border-purple-100 bg-purple-50 p-2.5 text-sm text-purple-900 focus:border-purple-500 focus:ring-purple-500 "
        placeholder="Confirme email"
        required
        onChange={handleOnChange}
      />

      <button
        className="mt-2 inline-block rounded bg-purple-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-purple-800 hover:shadow-lg focus:bg-purple-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg disabled:bg-slate-50 disabled:text-gray-500"
        disabled={btnDisabled}
        type="submit"
      >
        Comprar
      </button>
    </form>
  );
};

export default CheckoutForm;
