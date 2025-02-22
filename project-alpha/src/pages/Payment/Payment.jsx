import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";

const Payment = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-cyan-600">
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Latest Customers
            </h5>
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View all
            </a>

            <div>
              <button
                onClick={() => setIsOpen(true)}
                type="button"
                className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                pay
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal open={isOpen} onClose={() => setIsOpen(false)} title={"Payment"}>
        <div className="mx-6">
          <div className="my-4 p-8 bg-blue/25 rounded-lg grid grid-cols-1 gap-4 ">
            <div className="flex items-center justify-center font-bold">
              TOTAL AMOUNT
            </div>
            <div className="flex items-center justify-center text-[24px]">
              100 ฿
            </div>
          </div>
          <div className="my-4">Payment method</div>
          <div className="grid grid-cols-1 gap-3">
            <div className="border rounded-lg">
              <input className="py-3 flex w-full mx-3" placeholder="Card Number" />
            </div>
            <div className="border rounded-lg">
              <input className="py-3 flex w-full mx-3" placeholder="Name on Card Number" />
            </div>
            <div></div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Payment;
