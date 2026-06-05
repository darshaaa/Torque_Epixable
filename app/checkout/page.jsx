import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col lg:flex-row md:p-6 bg-black min-h-screen overflow-y-hidden md:px-40">
      {/* Left Section - Contact & Shipping */}
      <div className="lg:w-2/3 bg-black text-white p-6 rounded-lg">
        <p className="text-center text-4xl font-bold mb-4 text-[#00DAFF]">Title</p>

        <h2 className="text-2xl font-semibold mt-6">Shipping <span className="text-[#00DAFF]">Address</span></h2>

        <div className="flex mt-2 space-x-2">
          <input type="text" placeholder="First name" className="w-1/2 p-2 border border-gray-400 placeholder-gray-500 rounded" />
          <input type="text" placeholder="Last name" className="w-1/2 p-2 border border-gray-400 placeholder-gray-500 rounded" />
        </div>
        <input type="tel" placeholder="Phone Number" className="w-full p-2 border border-gray-400 placeholder-gray-500 rounded mt-2" />
        <input type="email" placeholder="Email" className="w-full p-2 border border-gray-400 placeholder-gray-500 rounded mt-2" />
        <input type="text" placeholder="Address" className="w-full p-2 border border-gray-400 placeholder-gray-500 rounded mt-2" />
        <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full p-2 border border-gray-400 placeholder-gray-500 rounded mt-2" />
        <input type="text" placeholder="Postal Code" className="w-full p-2 border border-gray-400 placeholder-gray-500 rounded mt-2" />

        <div className="flex mt-2 space-x-2">
          <select className="w-1/3 p-2 border border-gray-400 rounded">
            <option>Country</option>
            <option>India</option>
          </select>
          <select className="w-1/3 p-2 border border-gray-400 rounded">
            <option>State</option>
            <option>Karnataka</option>
            <option>Maharashtra</option>
            <option>Delhi</option>
            <option>Tamil Nadu</option>
          </select>
          <select className="w-1/3 p-2 border border-gray-400 rounded">
            <option>City</option>
          </select>
        </div>

        <Link href="/paymentPage" className="bg-[#00DAFF] w-full block text-black font-semibold p-3 rounded mt-4 text-center">
          CONTINUE TO SHIPPING
        </Link>
      </div>

      {/* Right Section - Order Summary */}
      <div className="lg:w-1/3 text-white p-6 rounded-lg shadow-md mt-6 lg:mt-0 lg:ml-6">
        <div className="flex justify-center w-full p-4">
          <div className="w-full max-w-md p-4 rounded-2xl text-white">
            <div className="flex items-center gap-4 border-b pb-4">
              <img
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyfGVufDB8fDB8fHww"
                alt="Grovo Delight+ Californian Almonds 200g"
                width={64}
                height={64}
                className="rounded"
              />
              <div className="flex-1">
                <p className="text-sm font-medium">Grovo Delight+ Californian Almonds 200g</p>
                <p className="text-lg font-semibold">₹216.00</p>
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="discount" className="text-sm font-medium">Discount code</label>
              <div className="flex gap-2 mt-1">
                <input id="discount" placeholder="Discount code" className="flex-1 p-2 border border-zinc-300 rounded-md" />
                <button className="border border-[#00DAFF] text-[#00DAFF] px-6 py-2 rounded-md">Apply</button>
              </div>
            </div>

            <div className="mt-4 text-sm">
              <div className="flex justify-between">
                <p>Subtotal</p>
                <p>₹216.00</p>
              </div>
              <div className="flex justify-between text-gray-500 mt-1">
                <p>Shipping</p>
                <p>Enter shipping address</p>
              </div>
            </div>

            <div className="mt-4 font-bold text-lg border-t pt-4">
              <div className="flex justify-between">
                <p>Total</p>
                <p className="text-xl">₹216.00</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">Including ₹23.14 in taxes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
