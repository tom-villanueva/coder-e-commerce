import React, { useEffect, useState } from 'react';

const CheckoutForm = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    emailConfirmation: '',
  });

  const [btnDisabled, setBtnDisabled] = useState(true);

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

  return (
    <>
      <label
        for="firstNameInput"
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
        for="lastNameInput"
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
        for="telefonoInput"
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
        for="emailInput"
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
        for="emailConfirmationInput"
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
        onClick={() => console.log('AA')}
      >
        Comprar
      </button>
    </>
  );
};

export default CheckoutForm;
