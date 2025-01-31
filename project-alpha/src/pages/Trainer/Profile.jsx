import React, { useState } from "react";
import { use } from "react";





const Profile = () => {
  const [aboutMe, setAboutMe] = useState("");
  const [isLimitReached, setIsLimitReached] = useState(false);
  const [educations, setEducations] = useState("");
  const [workExperience, setWorkExperience] = useState("");


  const handleAboutMechange = (e) => {
    const inputText = e.target.value;
    if(inputText.length <=500){
      setAboutMe(inputText);
      setIsLimitReached(inputText.length === 500);
    }
  };


  const addEducations = () => {
    if (educations.length < 3){
      setEducations([...educations,{id: educations.length + 1}]);
    }
  };

  const addWorkExperience = () => {
    if (workExperience.length < 3){
      setEducations([...workExperience,{id: workExperience.length + 1}]);
    }
  };


  return (
    <div class="flex justify-center bg-sky">
      <div className="  flex flex-wrap flex-col relative font-montserrat">
        <div className="">
          <div class="w-[190px] h-[44px] top-[204px]  absolute ">
            <h1 class="font-semibold text-[36px]  text-center leading-{43.88px}  ">
              My Profile
            </h1>
          </div>
          <div class=" mt-[312px] gap-[32px] flex">
            <div class="w-[1024px] resize-none gap-[64px]  items-center ">
              <div class="w-[1024] resize-none h-[256px] gap-[64px] flex ">
                <div class="w-[200px] h-[256px] gap-16px ">
                  <img class="bg-lime w-[200px] h-[200px] " />
                  <div class="grow">
                    <div class=" ml-2 mt-5  items-center gap-x-2">
                      <button
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
                    <div class="w-[600]  text-[20px] leading-{24.38px} font-semibold">
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
                    class="mt-2 mb-3 w-[508px] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px]"
                    placeholder="Mon - Fri"
                    required=""
                  ></input>
                </div>
                <div class="mt-[30px] w-[508px] h-[24px] gap-[8px]">
                  <div class="text-[20px] text-black w-[600px] leading-{24.38} font-montserrat font-semibold ml-1.5">
                    Time
                  </div>
                  <input
                    className="bg-transparent w-[508px] h-[56px] rounded-[12px] border border-black padding-[16px] gap-[10px]"
                    class="mt-2 mb-3 w-[508px] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px]"
                    placeholder="16:00 - 18:00"
                    required=""
                  ></input>
                </div>
              </div>
              <div class="mt-[70px] w-[1024px] h-[165px] gap-[8px] flex ">
                <div class="w-[1024px] h-[24px] gap-[8px]">
                  <label
                    for="large-input"
                    class="text-[24px] text-black w-[600px] leading-{24.38} font-montserrat font-semibold ml-1.5"
                  >
                    About Me {aboutMe.length}/500
                  </label>
                  <textarea
                    class="peer w-[1024px] h-[128px]  min-h-[100px]  resize-none rounded-[12px]  border  border-black outline-black  bg-transparent px-3 py-2.5  text-sm font-normal text-blue-gray-700  
                    outline-0 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900   disabled:resize-none  disabled:bg-blue-gray-50"                    
                    placeholder="Write something about yourself... "
                    rows="3"
                    value={aboutMe}
                    onChange={handleAboutMechange} >                   
                  </textarea>
                  {isLimitReached && (
                    <p className="text-red mt-2 text-sm ">
                      You have reached the 500-character limit.
                    </p>
                  )}
                 

                </div>
              </div>
              <div class="w-[1024px] h-[1000px] gap-8 mt-[40px]">
                <div class="text-[24px] leading-{29.26} font-semibold"
                >Resume
                </div>
                <div class="w-[1024px] h-[1208px]">
                  <div class="w-[1024px] h-[568px] gap-16">
                    <div>
                      <div class="flex justify-between">
                        <div class=" text-[20px] w-[600px] ml-3 mt-3 font-semibold"
                        >Education ({educations.length}/3)
                        </div>
                        <button
                          class="w-[91px] h-[40px] paddind-[8px] border border-black text-white bg-green  font-medium rounded-[12px] px-5  me-2 mb-2 "
                        >Add +
                        </button>
                      </div>
                      {/*การ์ดข้อมูลการศึกษา*/}
                      <div className="space-y-4">

                        <div class="w-[1024px] h-[248px] flex justify-between  border  border-black p-4 rounded-[12px]  padding-[16px] gap-8 ">
                          <div>
                            <div class=" text-black font-semibold">Year</div>
                            <div class="w-[147px] h-[56px]  mt-2 ">
                              <div class="grid place-items-center bg-transparent  w-[147px] h-[56px] rounded-[12px] border border-black padding-[16px] gap-[10px]"
                              >2023 - 2024</div>
                            </div>
                          </div>
                          <div class="w-[837px] h-[218px] ml-[-16px] ">
                            <div class=" font-semibold text-[16px] text-black">
                              Detail
                            </div>
                            <div class="w-[837px] h-[64px] gap-8">
                              <div class=" font-semibold text-[16px] text-black mt-2">
                                School / University
                              </div>
                              <input
                                className=" bg-transparent w-[830px] h-[36px] rounded-[12px] border border-black padding-[16px] gap-[10px]"
                                class="mt-2 mb-3 w-[830px] h-[36px]  gap-[10px]  rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px] text-[16px]"
                                placeholder="KMITL"
                                required=""
                              />
                            </div>
                            <div class="w-[837px] h-[64px] mt-4">
                              <div class="  font-semibold text-[16px] text-black mt-2 ">
                                Faculty / Bachelor
                              </div>
                              <input
                                className=" bg-transparent w-[830px] h-[36px] rounded-[12px] border border-black padding-[16px] gap-[10px]"
                                class="grid mt-2 mb-3  w-[830px] h-[36px]  gap-[10px]  rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px] text-[16px]"
                                placeholder="IoT Engineering"
                                required=""
                              />
                            </div>
                            <div class="flex w-[837px] h-[40px] justify-end mt-3">
                              <button
                                class="w-[116px] h-[40px] padding-[8px] border border-black text-white bg-red  font-medium rounded-[12px] text-sm px-5 py-2.5 me-2 mb-2 "
                              >Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*การ์ด Work experience**/}
                    <div class="w-[1024px] h-[304px] gap-16 ">
                      <div class="flex justify-between mt-3 ">

                        <div class=" text-[20px] w-[600px] ml-3 mt-3 font-semibold"
                        >Work Experience ({workExperience.length}/3)
                        </div>
                        <button
                          class="w-[91px] h-[40px]  border border-black text-white bg-green font-medium rounded-[12px]  px-5  me-4 mb-2 "
                        >Add +
                        </button>
                      </div>
                      {/*การ์ด Work experience*/}
                      <div className="space-y-4">

                        <div class="w-[1024px] h-[248px] flex justify-between  border  border-black p-4 rounded-[12px]  padding-[16px] gap-8 ">
                          <div>
                            <div class=" text-black font-semibold">Year</div>
                            <div class="w-[147px] h-[56px]  mt-2 ">
                              <div class="grid place-items-center bg-transparent  w-[147px] h-[56px] rounded-[12px] border border-black padding-[16px] gap-[10px]"
                              >2023 - 2024</div>
                            </div>
                          </div>
                          <div class="w-[837px] h-[218px] ml-[-16px] ">
                            <div class=" font-semibold text-[16px] text-black">
                              Detail
                            </div>
                            <div class="w-[837px] h-[64px] gap-8">
                              <div class=" font-semibold text-[16px] text-black mt-2">
                                Workplace / Fitness
                              </div>
                              <input
                                className=" bg-transparent w-[830px] h-[36px] rounded-[12px] border border-black padding-[16px] gap-[10px]"
                                class="mt-2 mb-3 w-[830px] h-[36px]  gap-[10px]  rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px] text-[16px]"
                                placeholder="KMITL Fitness"
                                required=""
                              />
                            </div>
                            <div class="w-[837px] h-[64px] mt-4">
                              <div class="  font-semibold text-[16px] text-black mt-2 ">
                                Description
                              </div>
                              <input
                                className=" bg-transparent w-[830px] h-[36px] rounded-[12px] border border-black padding-[16px] gap-[10px]"
                                class="grid mt-2 mb-3  w-[830px] h-[36px]  gap-[10px]  rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px] text-[16px]"
                                placeholder="Personal trainer"
                                required=""
                              />
                            </div>
                            <div class="flex w-[837px] h-[40px] justify-end mt-3 ">
                              <button
                                class="w-[116px] h-[40px]  border border-black text-white bg-red  font-medium rounded-[12px] text-sm px-5 py-2.5 me-2 mb-2 "
                              >Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*ใบcer**/}
                    <div class="w-[1024px] h-[304px] gap-16 ">
                      <div class="flex justify-between mt-2">

                        <div class=" text-[20px] w-[600px] ml-3 mt-3 font-semibold"
                        >Certifications
                        </div>
                        <button
                          class="w-[91px] h-[40px]  border border-black text-white bg-green font-medium rounded-[12px]  px-5  me-4 mb-2 "
                        >Add +
                        </button>
                      </div>
                      {/*ใบcer*/}
                      <div className="space-y-4">

                        <div class="w-[1024px] h-[248px] flex justify-between  border  border-black p-4 rounded-[12px]  padding-[16px] gap-8 ">
                          <div>
                            <div class=" text-black font-semibold">Year</div>
                            <div class="w-[147px] h-[56px]  mt-2 ">
                              <div class="grid place-items-center bg-transparent  w-[147px] h-[56px] rounded-[12px] border border-black padding-[16px] gap-[10px]"
                              >2023 - 2024</div>
                            </div>
                          </div>
                          <div class="w-[837px] h-[218px] ml-[-16px] ">
                            <div class=" font-semibold text-[16px] text-black">
                              Detail
                            </div>
                            <div class="w-[837px] h-[64px] gap-8">
                              <div class=" font-semibold text-[16px] text-black mt-2">
                                Certificate name
                              </div>
                              <input
                                className=" bg-transparent w-[830px] h-[36px] rounded-[12px] border border-black padding-[16px] gap-[10px]"
                                class="mt-2 mb-3 w-[830px] h-[36px]  gap-[10px]  rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px] text-[16px]"
                                placeholder="KMITL"
                                required=""
                              />
                            </div>
                            <div class="w-[837px] h-[64px] mt-4">
                              <div class="  font-semibold text-[16px] text-black mt-2 ">
                                Description
                              </div>
                              <input
                                className=" bg-transparent w-[830px] h-[36px] rounded-[12px] border border-black padding-[16px] gap-[10px]"
                                class="grid mt-2 mb-3  w-[830px] h-[36px]  gap-[10px]  rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px] text-[16px]"
                                placeholder="KMITL"
                                required=""
                              />
                            </div>
                            <div class="flex w-[837px] h-[40px] justify-end mt-3 ">
                              <button
                                class="w-[116px] h-[40px]  border border-black text-white bg-red  font-medium rounded-[12px] text-sm px-5 py-2.5 me-2 mb-2 "
                              >Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button class="w-[1024px] h-[56px]  border border-black text-white bg-blue  font-medium rounded-[12px] text-sm px-5 py-2.5 me-2 mb-2 "
                >Save Change
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  

  );



};

export default Profile;
