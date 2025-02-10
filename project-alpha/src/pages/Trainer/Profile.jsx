import React, { useState } from "react";






const Profile = () => {
  const [aboutMe, setAboutMe] = useState([]);
  const [isLimitReached, setIsLimitReached] = useState(false);
  const [educations, setEducations] = useState([1]);
  const [workExperience, setWorkExperience] = useState([1]);
  const [Certificates, setCertificates] = useState([1]);

  const [showDeleteWarning, setShowDeleteWarning] = useState(false);


  const handleAboutMechange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= 500) {
      setAboutMe(inputText);
      setIsLimitReached(inputText.length === 500);
    }
  };


  const addEducations = () => {
    if (educations.length < 3) {
      setEducations([...educations, { id: Date.now(), school: '', faculty: '' }]);
    }
  };

  const addWorkExperience = () => {
    if (workExperience.length < 3) {
      setWorkExperience([...workExperience, { id: Date.now(), company: '', position: '' }]);
    }
  };

  const addCertificates = () => {
    if (Certificates.length < 3) {
      setCertificates([...Certificates, { id: Date.now(), certificate: '', description: '' }]);
    }
  };

  const hanleEducationChange = (id, field, value) => {
    setEducations(
      educations.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
  };
  const hanleWorkExperienceChange = (id, field, value) => {
    setWorkExperience(
      workExperience.map((work) =>
        work.id === id ? { ...work, [field]: value } : work
      )
    );
  };
  const hanleCertificates = (id, field, value) => {
    setWorkExperience(
      workExperience.map((cer) =>
        cer.id === id ? { ...cer, [field]: value } : cer
      )
    );
  };
  const removeEducation = (id) => {
    if (educations.length > 1) {
      setEducations(educations.filter((edu) => edu.id !== id));
      showDeleteWarning(false);
    } else {
      setShowDeleteWarning(true);
    }
  };

  const removeWorkExperience = (id) => {
    if (workExperience.length > 1) {
      setWorkExperience(workExperience.filter((edu) => edu.id !== id));
      showDeleteWarning(false);
    } else {
      setShowDeleteWarning(true);
    }
  };

  const removeCertificates = (id) => {
    if (Certificates.length > 1) {
      setCertificates(Certificates.filter((cer) => cer.id !== id));
      showDeleteWarning(false);
    } else {
      setShowDeleteWarning(true);
    }
  };






  return (
    <div class="flex lg:justify-center ml-[10px] lg:ml-[0px] bg-sky">
      <div className=" flex flex-wrap flex-col relative font-montserrat">
        <div className="">
          <div class=" w-[190px] h-[44px] top-[204px]  absolute ">
            <h1 class=" font-semibold text-[36px]  text-center leading-{43.88px}  ">
              My Profile
            </h1>
          </div>
          <div class="mt-[312px] gap-[32px] flex">
            <div class="lg:w-[1024px] w-[94vw] resize-none gap-[64px]  items-center ">
              <div class="lg:w-[1024px] w-[90vw] resize-none h-auto lg:justify-between   flex flex-col lg:flex-row ">
                <div class="lg:w-[200px] w-[90vw] items-center justify-center flex flex-col  h-auto ">
                  <img class="bg-lime w-[200px] h-[200px] " />
                  <div class="">
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
                <div class="w-[760px] h-[208px] gap-[32px] mt-5 lg:mt-0 ">
                  <div class="w-[760px] h-[88px] gap-[8px] ">
                    <div class="w-[600]  text-[20px] leading-{24.38px} font-semibold">
                      Trainer Name
                    </div>

                    <input
                      className="flex  items-center justify-between "
                      id="hs-toggle-password"
                      type="Name"
                      name="Name"
                      class="mt-2 mb-3  lg:w-[760px] w-[93vw] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black font-montserrat padding-[16px]"
                      placeholder="Trainer A"
                      required=""
                    ></input>
                    <div class="mt-2 w-[600] text-[20px] leading-{24.38px} font-semibold ">
                      Activity
                    </div>

                    <input
                      className="flex  items-center justify-between "
                      class="mt-2 mb-3  lg:w-[760px] w-[93vw] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black font-montserrat padding-[16px] "
                      placeholder="Weight Training"
                      required=""
                    ></input>
                  </div>
                </div>
              </div>
              
              <div class="mt-[40px] w-[1024px] lg:h-[88px] gap-[8px] h-auto lg:justify-between   flex flex-col lg:flex-row ">
                <div class="w-[508px] h-[24px] gap-[8px]">
                  <div class="text-[20px] text-black w-[600px] leading-{24.38} font-montserrat font-semibold ml-1.5">
                    Price
                  </div>
                  <input
                    className="bg-transparent w-[508px] h-[56px] rounded-[12px] border border-black padding-[16px] gap-[10px]"
                    class="mt-2 mb-3 lg:w-[508px] w-[93vw]  h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px]"
                    placeholder="750 THB"
                    required=""
                  ></input>
                </div>
                <div class="w-[508px] h-[24px] gap-[8px] mt-[90px] lg:mt-0">
                  <div class="text-[20px] text-black w-[600px] leading-{24.38} font-montserrat font-semibold ml-1.5">
                    Course duration
                  </div>
                  <input
                    className="bg-transparent w-[508px] h-[56px] rounded-[12px] border border-black padding-[16px] gap-[10px]"
                    class="mt-2  mb-3 lg:w-[508px] w-[93vw] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px]"
                    placeholder="30-min course"
                    required=""
                  ></input>
                </div>
              </div>
              <div class="mt-[40px]  w-[1024px] h-[88px] gap-[8px] justify-between flex flex-col lg:flex-row">
                <div class="w-[508px] h-[24px] gap-[8px] mt-[50px] lg:mt-0">
                  <div class="text-[20px] text-black w-[600px] leading-{24.38} font-montserrat font-semibold ml-1.5">
                    Business hours<p>Day</p>
                  </div>
                  <input
                    className="bg-transparent w-[508px] h-[56px] rounded-[12px] border border-black padding-[16px] gap-[10px]"
                    class="mt-2 mb-3 lg:w-[508px] w-[93vw] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px]"
                    placeholder="Mon - Fri"
                    required=""
                  ></input>
                </div>
                <div class="lg:mt-[30px] w-[508px] h-[24px] gap-[8px] mt-[120px]">
                  <div class="text-[20px] text-black w-[600px] leading-{24.38} font-montserrat font-semibold ml-1.5">
                    Time
                  </div>
                  <input
                    className="bg-transparent w-[508px] h-[56px] rounded-[12px] border border-black padding-[16px] gap-[10px]"
                    class="mt-2 mb-3 lg:w-[508px] w-[93vw] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px]"
                    placeholder="16:00 - 18:00"
                    required=""
                  ></input>
                </div>
              </div>
              <div class="mt-[70px] w-[1024px] h-[165px]  gap-[8px] flex ">
                <div class="w-[1024px] h-[24px] gap-[8px] mt-[160px] lg:mt-0 flex flex-col">
                  <label
                    for="large-input"
                    class="text-[24px] text-black w-[600px] leading-{24.38} font-montserrat font-semibold ml-1.5"
                  >
                    About Me {aboutMe.length}/500
                  </label>
                  <textarea
                    class="peer lg:w-[1024px] w-[93vw] h-[128px]  min-h-[100px]  resize-none rounded-[12px]  border  border-black outline-black  bg-transparent px-3 py-2.5  text-sm font-normal text-blue-gray-700  
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
              <div class="w-[1024px] h-[1000px] mt-[190px] gap-8 lg:mt-[40px] ">
                <div class="text-[24px] leading-{29.26} font-semibold"
                >Resume
                </div>

                <div class="w-[1024px] h-[1208px]">
                  <div class="w-[1024px]  h-auto gap-16 ">
                    <div>
                      <div class="flex justify-between w-[93vw] lg:w-[1024px]  ">
                        <div class=" text-[20px] w-[600px] ml-3 mt-3 font-semibold "
                        >Education ({educations.length}/3)
                        </div>


                        {educations.length <= 3 && (
                          <button
                            onClick={addEducations}
                            class="lg:w-[91px] w-[100px] h-[40px] paddind-[8px] border border-black text-white bg-green  font-medium rounded-[12px] px-5  me-3 mb-2 "
                          >Add +
                          </button>
                        )}
                      </div>

                      {/*การ์ดข้อมูลการศึกษา*/}
                      <div className="space-y-4">


                      </div>
                    </div>

                    {educations.map((edu) => (
                      <div key={edu.id} className=" mt-3 lg:w-[1024px] w-[93vw] h-[248px] flex justify-between  border  border-black p-4 rounded-[12px]  padding-[16px] gap-8 ">
                        <div>
                          <div class=" text-black font-semibold">Year</div>
                          <div class="lg:w-[147px] lg:h-[56px] mt-2 ">
                            <div class=" grid place-items-center bg-transparent  lg:w-[147px] w-[100px] lg:h-[56px] h-[40px] rounded-[12px] border border-black padding-[16px] "
                            >2023 - 2024</div>
                            
                            
                          </div>
                        </div>
                        <div class="lg:w-[837px] w-[66vw] h-auto ml-[-16px] ">
                          <div class=" font-semibold text-[16px] text-black">
                            Detail
                          </div>
                          <div class="w-[837px]  h-[64px] gap-8">
                            <div class=" font-semibold text-[16px] text-black mt-2">
                              School / University
                            </div>
                            <input
                              className=" bg-transparent w-[830px] h-[36px] rounded-[12px] border border-black padding-[16px] gap-[10px]"
                              class="mt-2 mb-3 lg:w-[830px] w-[65vw] h-[36px]  gap-[10px]  rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px] text-[16px]"
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
                              class="grid mt-2 mb-3  lg:w-[830px] w-[65vw] h-[36px]  gap-[10px]  rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px] text-[16px]"
                              placeholder="IoT Engineering"
                              required=""
                            />
                          </div>
                          <div class="flex lg:w-[837px] w-[67vw] h-[40px] justify-end mt-3 ">
                            <button
                              onClick={() => removeEducation(edu.id)}
                              class="lg:w-[116px] w-[100px] h-[40px] padding-[8px] border border-black text-white bg-red  font-medium rounded-[12px] text-sm px-5 py-2.5  me-2 mb-2"
                            >Delete
                            </button>
                          </div>
                        </div>
                      </div>



                    ))}

                    {/*การ์ด Work experience**/}
                    <div class="w-[1024px] h-[304px] gap-16 ">
                      <div class="flex justify-between w-[93vw] lg:w-[1024px] ">

                        <div class=" text-[20px] w-[600px] ml-3 mt-3 font-semibold"
                        >Work Experience ({workExperience.length}/3)
                        </div>
                        <button
                          onClick={addWorkExperience}
                          class="lg:w-[91px] w-[100px] h-[40px] mt-3 lg:mt-2 paddind-[8px] border border-black text-white bg-green  font-medium rounded-[12px] px-5  me-3 mb-2"
                        >Add +
                        </button>
                      </div>


                      {/*การ์ด Work experience*/}
                      <div className="space-y-4">
                      </div>
                      {workExperience.map((work) => (

                        <div key={work.id} className=" mt-3 lg:w-[1024px] w-[93vw] h-[248px] flex justify-between  border  border-black p-4 rounded-[12px]  padding-[16px] gap-8 ">
                          <div>
                            <div class="text-black font-semibold">Year</div>
                            <div class="lg:w-[147px] lg:h-[56px]  mt-2 ">
                              <div class="grid place-items-center bg-transparent  lg:w-[147px] w-[100px] lg:h-[56px] h-[40px] rounded-[12px] border border-black padding-[16px] "
                              >2023 - 2024</div>
                            </div>
                          </div>
                          <div class="lg:w-[837px] w-[66vw] h-auto ml-[-16px]">
                            <div class=" font-semibold text-[16px] text-black">
                              Detail
                            </div>
                            <div class="w-[837px] h-[64px] gap-8">
                              <div class=" font-semibold text-[16px] text-black mt-2">
                                Workplace / Fitness
                              </div>
                              <input
                                className=" bg-transparent w-[830px] h-[36px] rounded-[12px] border border-black padding-[16px] gap-[10px]"
                                class="mt-2 mb-3 lg:w-[830px] w-[65vw] h-[36px]  gap-[10px]  rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px] text-[16px]"
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
                                class="grid mt-2 mb-3  lg:w-[830px] w-[65vw] h-[36px]  gap-[10px]  rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px] text-[16px]"
                                placeholder="Personal trainer"
                                required=""
                              />
                            </div>
                            <div class="flex lg:w-[837px] w-[67vw] h-[40px] justify-end mt-3  ">
                              <button
                                onClick={() => removeWorkExperience(work.id)}
                                class="lg:w-[116px] w-[100px] h-[40px] padding-[8px] border border-black text-white bg-red  font-medium rounded-[12px] text-sm px-5 py-2.5  me-2 mb-2"
                              >Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}


                      {/*ใบcer**/}

                      <div class="w-[1024px] h-[304px] gap-16 ">
                        <div class="flex justify-between w-[93vw] lg:w-[1024px] ">

                          <div class=" text-[20px] w-[600px] ml-3 mt-3 font-semibold"
                          >Certifications ({Certificates.length}/3)
                          </div>
                          {educations.length <= 3 && (
                            <button
                              onClick={addCertificates}
                              class="lg:w-[91px] w-[100px] h-[40px] mt-3 lg:mt-2 paddind-[8px] border border-black text-white bg-green  font-medium rounded-[12px] px-5  me-3 mb-2"
                            >Add +
                            </button>
                          )}
                        </div>
                        {/*ใบcer*/}
                        <div className="space-y-4">
                        </div>
                        {Certificates.map((cer) => (
                          <div key={cer.id} className="mt-3 lg:w-[1024px] w-[93vw] h-[248px] flex justify-between  border  border-black p-4 rounded-[12px]  padding-[16px] gap-8 ">
                            <div>
                              <div class="text-black font-semibold">Year</div>
                              <div class="lg:w-[147px] lg:h-[56px]  mt-2 ">
                                <div class="grid place-items-center bg-transparent  lg:w-[147px] w-[100px] lg:h-[56px] h-[40px] rounded-[12px] border border-black padding-[16px] "
                                >2023 - 2024</div>
                              </div>
                            </div>
                            <div class="lg:w-[837px] w-[66vw] h-auto ml-[-16px]">
                              <div class=" font-semibold text-[16px] text-black">
                                Detail
                              </div>
                              <div class="w-[837px] h-[64px] gap-8">
                                <div class=" font-semibold text-[16px] text-black mt-2">
                                  Certificate name
                                </div>
                                <input
                                  className=" bg-transparent w-[830px] h-[36px] rounded-[12px] border border-black padding-[16px] gap-[10px]"
                                  class="mt-2 mb-3 lg:w-[830px] w-[65vw] h-[36px]  gap-[10px]  rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px] text-[16px]"
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
                                  class="grid mt-2 mb-3  lg:w-[830px] w-[65vw] h-[36px]  gap-[10px]  rounded-[12px] bg-transparent outline-black py-3 ps-4 border border-black  padding-[16px] text-[16px]"
                                  placeholder="KMITL"
                                  required=""
                                />
                              </div>
                              <div class="flex lg:w-[837px] w-[67vw] h-[40px] justify-end mt-3  ">
                                <button
                                  onClick={() => removeCertificates(cer.id)}
                                  class="w-[116px] h-[40px]  border border-black text-white bg-red  font-medium rounded-[12px] text-sm px-5 py-2.5 me-2 mb-2 "
                                >Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}


                        <button class=" lg:w-[1024px] w-[93vw] h-[56px]  border border-black text-white bg-blue  font-medium rounded-[12px] text-sm  mt-3"
                        >Save Change
                        </button>
                      </div>
                    </div>
                  </div>

                </div>

              </div>





            </div>
          </div>
        </div>
      </div>
    </div>
    


  );



};

export default Profile;
