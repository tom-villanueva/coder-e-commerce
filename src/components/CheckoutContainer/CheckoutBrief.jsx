import React from 'react';
import { ClipboardDocumentCheckIcon } from '@heroicons/react/24/solid';
import Swal from 'sweetalert2';

const CheckoutBrief = ({ orderId }) => {
  return (
    <div className="flex flex-col bg-white px-6 py-6 text-center">
      <h2 className="mb-6 pb-2 text-center text-lg">Purchase Summary</h2>
      <p className="mb-6 pb-2 text-gray-500">Thank you for your purchase!</p>
      <p className="mb-6 pb-2 text-gray-500">
        {`Your order ID is: `}
        <span className="font-bold text-black">{orderId}</span>
        <button
          onClick={() => {
            navigator.clipboard.writeText(orderId).then(val =>
              Swal.fire({
                title: 'Copied to clipboard!',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false,
                position: 'top-end',
                backdrop: false,
              })
            );
          }}
        >
          <ClipboardDocumentCheckIcon className="h-5 w-5 text-indigo-600" />
        </button>
      </p>
      <p className="mb-6 pb-2 text-gray-500">
        Please copy this ID somewhere safe
      </p>
    </div>
  );
};

export default CheckoutBrief;
