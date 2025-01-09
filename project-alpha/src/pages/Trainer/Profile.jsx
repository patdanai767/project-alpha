import React from "react";

const Profile = () => {
  return (
    <div className="h-full flex flex-wrap flex-col relative font-montserrat">
      <div className="">
        <div class="w-[190px] h-[44px] top-[204px] left-[208px] absolute ">
          <h1 class="font-semibold text-[36px]  text-center leading-{43.88px}  ">
            My Profile
          </h1>
        </div>
        <div class=" h-[44px] mt-[312px] ml-[208px] gap-[32px] flex ">
          <div class="w-[1024px] gap-[64px]  items-center ">
            <div class="w-[1024] h-[256] gap-[64px] flex ">
              <div class=" w-[200px] h-[256px] gap-16px ">
                <img class="bg-lime w-[200px] h-[200px] " />
                <div class="grow">
                  <div class="ml-2 mt-5 flex items-center gap-x-2">
                    <button
                      type="button"
                      class=" py-1 px-3 inline-flex items-center gap-x-2 text-[20px] font-semibold rounded-lg border border-black bg-blue-600 text-black hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                      data-hs-file-upload-trigger=""
                    >
                      Upload photo
                      <svg
                        class="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" x2="12" y1="3" y2="15"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="w-[760px] h-[208px] gap-[32px]">
                <div class="w-[760px] h-[88px] gap-[8px] ">
                  <div class="  w-[600] text-[20px] leading-{24.38px} font-semibold">
                    Trainer Name
                  </div>

                  <input
                    className="flex  items-center justify-between "
                    id="hs-toggle-password"
                    type="Name"
                    name="Name"
                    class="mt-2 mb-3  w-[760px] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black font-montserrat padding-[16px]"
                    placeholder="Trainer A"
                    required=""
                  ></input>
                  <div class="mt-2 w-[600] text-[20px] leading-{24.38px} font-semibold ">
                    Activity
                  </div>

                  <input
                    className="flex  items-center justify-between "
                    id="hs-toggle-password"
                    type="Name"
                    name="Name"
                    class="mt-2 mb-3  w-[760px] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black font-montserrat padding-[16px] "
                    placeholder="Weight Training"
                    required=""
                  ></input>
                </div>
              </div>
            </div>
            <div class="mt-[40px] w-[1024px] h-[88px] gap-[8px] flex ">
              <div class="w-[508px] h-[24px] gap-[8px]">
                <div class="text-[20px] text-black w-[600px] leading-{24.38} font-montserrat font-semibold ml-1.5">
                  Price
                </div>
                <input
                  className="bg-transparent w-[508px] h-[56px] rounded-[12px] border border-black padding-[16px] gap-[10px]"
                  id="hs-toggle-password"
                  type="Name"
                  name="Name"
                  class="mt-2 mb-3 w-[508px] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px]"
                  placeholder="750 THB"
                  required=""
                ></input>
              </div>
              <div class="w-[508px] h-[24px] gap-[8px]">
                <div class="text-[20px] text-black w-[600px] leading-{24.38} font-montserrat font-semibold ml-1.5">
                  Course duration
                </div>
                <input
                  className="bg-transparent w-[508px] h-[56px] rounded-[12px] border border-black padding-[16px] gap-[10px]"
                  id="hs-toggle-password"
                  type="Name"
                  name="Name"
                  class="mt-2 mb-3 w-[508px] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px]"
                  placeholder="30-min course"
                  required=""
                ></input>
              </div>
            </div>
            <div class="mt-[40px] w-[1024px] h-[88px] gap-[8px] flex ">
              <div class="w-[508px] h-[24px] gap-[8px]">
                <div class="text-[20px] text-black w-[600px] leading-{24.38} font-montserrat font-semibold ml-1.5">
                  Business hours<p>Day</p>
                </div>
                <input
                  className="bg-transparent w-[508px] h-[56px] rounded-[12px] border border-black padding-[16px] gap-[10px]"
                  id="hs-toggle-password"
                  type="Name"
                  name="Name"
                  class="mt-2 mb-3 w-[508px] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px]"
                  placeholder="Mon - Fri"
                  required=""
                ></input>
              </div>
              <div class="mt-[30px] -[508px] h-[24px] gap-[8px]">
                <div class="text-[20px] text-black w-[600px] leading-{24.38} font-montserrat font-semibold ml-1.5">
                  Time
                </div>
                <input
                  className="bg-transparent w-[508px] h-[56px] rounded-[12px] border border-black padding-[16px] gap-[10px]"
                  id="hs-toggle-password"
                  type="Name"
                  name="Name"
                  class="mt-2 mb-3 w-[508px] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px]"
                  placeholder="16:00 - 18:00"
                  required=""
                ></input>
              </div>
            </div>
            <div class="mt-[70px] w-[1024px] h-[165px] gap-[8px] flex ">
              <div class="w-[508px] h-[24px] gap-[8px]">
                <label
                  for="large-input"
                  class="text-[20px] text-black w-[600px] leading-{24.38} font-montserrat font-semibold ml-1.5"
                >
                  About Me
                </label>
                <input
                  type="text"
                  id=""
                  class="mt-2 mb-3 w-[1024px] h-[128px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px]"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
