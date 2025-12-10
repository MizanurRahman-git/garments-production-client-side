import React from "react";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 my-10 gap-10 items-center">
      <div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Name" />
              <label className="label">Phone</label>
              <input type="number" className="input" placeholder="Phone" />
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Phone</label>
              <textarea className="border h-20" name=""></textarea>
              <button className="btn btn-neutral mt-4">Submit</button>
            </fieldset>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-sm bg-[#cee4e1] shadow-lg rounded-2xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            Febric Fasion
          </h2>

          <div className="space-y-4 text-sm text-gray-800">
            <div>
              <p className="font-semibold mb-1">Address</p>
              <p className="link link-primary no-underline hover:underline cursor-pointer">
                House 12, Road 5, Fashion Street, <br />
                Dhaka, Bangladesh
              </p>
            </div>
            <div>
              <p className="font-semibold mb-1">Phone</p>
              <p className=" link-primary no-underline hover:underline cursor-pointer">
                +880 1234 567 890
              </p>
            </div>

            <div>
              <p className="font-semibold mb-1">Email</p>
              <p className="link link-primary no-underline hover:underline cursor-pointer">
                info@febricfasion.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
