import React from "react";

export default function Account() {
  return (
    <div className="flex justify-center mt-[74px]">
      <div className="min-h-screen md:w-[60%]">
        <div className="text-[36px] font-semibold">My Account</div>
        <div className="gird">
          <div className="flex gap-8">
            <div className="justify-center">
              <div className="w-[200px] h-[200px] bg-lime rounded-lg">
                <img></img>
              </div>
              <div className="">
                <input
                  className="mt-4 rounded-lg border w-[200px]"
                  type="file"
                ></input>
              </div>
            </div>
            <div className="w-full">
              <div className="text-[24px] font-semibold">Account</div>
              <div className="grid gap-3">
                <div className="grid gap-1">
                  <div>Username</div>
                  <input
                    value="Skibidi"
                    type="text"
                    className="p-[14px] rounded-xl border border-blue bg-transparent w-full"
                  />
                </div>
                <div className="grid gap-1">
                  <div>Fullname</div>
                  <input
                    value="Skibidi"
                    type="text"
                    className="p-[14px] rounded-xl border border-blue bg-transparent w-full"
                  />
                </div>
                <div className="grid gap-1">
                  <div>Email</div>
                  <input
                    disabled
                    value="Skibidi"
                    type="text"
                    className="p-[14px] rounded-xl border border-blue bg-transparent w-full"
                  />
                </div>
              </div>
              <div className="text-[20px] mt-6 float-end w-[250px] text-center cursor-pointer bg-blue px-12 py-4 rounded-lg text-white">
                Save Change
              </div>
            </div>
          </div>
          <div className="border w-full border-black my-16"/>
          <div>
            <div className="text-[24px] font-semibold mb-4">Payments</div>
            <div>
              <table className="w-full">
                <thead>
                  <tr className="py-2 border-b-2 border-blue grid grid-cols-4">
                    <th>Date</th>
                    <th>Time</th>
                    <th>Tokens used / received</th>
                    <th>Current tokens</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="py-4 border-b border-blue grid grid-cols-4 text-center">
                    <td>Nov 14,2024</td>
                    <td>23.17</td>
                    <td>+10</td>
                    <td>10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
