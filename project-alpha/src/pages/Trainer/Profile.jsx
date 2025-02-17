import { useState } from "react";

const Profile = () => {
  const [aboutMe, setAboutMe] = useState([]);
  const [isLimitReached, setIsLimitReached] = useState(false);
  const [educations, setEducations] = useState([1]);
  const [workExperience, setWorkExperience] = useState([1]);
  const [Certificates, setCertificates] = useState([1]);

  const [showDeleteWarning, setShowDeleteWarning] = useState(false);

  const [editEducation,setEditEducation] = useState(false)
  const [editExperience,setEditExperience] = useState(false)
  const [editCertificates,setEditCertificates] = useState(false)

  const [dataEducation,setDataEducation] = useState([
    { id:1,
      school:"kmitl",
      faculty:"engineer",
      year:"2023",
      isEditing:false
    }
  ])
  const [dataExperience,setDataExperience] = useState([
    { id:1,
      work:"scg",
      descript:"dev",
      year:"2023",
      isEditing:false
    }
  ])
  const [dataCertificates,setDataCertificates] = useState([
    { id:1,
      cer:"js",
      descript:"programming",
      year:"2023",
      isEditing:false
    }
  ])

  const handleChangeDataEducation = (id, field, value) => {
    setDataEducation(dataEducation.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };
  const handleChangeDataExperience = (id, field, value) => {
    setDataExperience(dataExperience.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };
  
  const handleChangeDataCertificates= (id, field, value) => {
    setDataCertificates(dataCertificates.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };
  
  const toggleEditEducation = (id) => {
    setDataEducation(dataEducation.map(edu =>
      edu.id === id ? { ...edu, isEditing: !edu.isEditing } : edu
    ))
  }
  const toggleEditExperience = (id) => {
    setDataExperience(dataExperience.map(edu =>
      edu.id === id ? { ...edu, isEditing: !edu.isEditing } : edu
    ))
  }
  const toggleEditCertificates = (id) => {
    setDataCertificates(dataCertificates.map(edu =>
      edu.id === id ? { ...edu, isEditing: !edu.isEditing } : edu
    ))
  }
  

  const handleAboutMechange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= 500) {
      setAboutMe(inputText);
      setIsLimitReached(inputText.length === 500);
    }
  };


  const addEducation = () => {
    if (dataEducation.length < 3) {
      const newEducation = {
        id: Date.now(),
        school: "",
        faculty: "",
        year: "2023",
        isEditing: true
      };
      setDataEducation([...dataEducation, newEducation]);
    }
  }
  

  const addWorkExperience = () => {
    if (workExperience.length < 3) {
      const newworkExperience = {
        id: Date.now(),
        work: "",
        descript: "",
        year: "2023",
        isEditing: true
      };
      setDataExperience([...dataExperience, newworkExperience])
    }
  };

  const addCertificates = () => {
    if (dataCertificates.length < 3) {
      const newCertificates = {
        id: Date.now(),
        cer: "",
        descript: "",
        year: "2023",
        isEditing: true
      }
      setDataCertificates([...dataCertificates, newCertificates])
    }
  };

  const hanleEducationChange = (id, field, value) => {
    setEducations(
      educations.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    )
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
    if (dataEducation.length > 1) {
      setDataEducation(dataEducation.filter(edu => edu.id !== id));
    } else {
      setShowDeleteWarning(true);
    }
  };

  const removeWorkExperience = (id) => {
    if (dataExperience.length > 1) {
      setDataExperience(dataExperience.filter((edu) => edu.id !== id));
      showDeleteWarning(false);
    } else {
      setShowDeleteWarning(true);
    }
  };

  const removeCertificates = (id) => {
    if (dataCertificates.length > 1) {
      setDataCertificates(dataCertificates.filter((cer) => cer.id !== id));
      showDeleteWarning(false);
    } else {
      setShowDeleteWarning(true);
    }
  };






  return (
    <div className="flex lg:justify-center ml-[10px] lg:ml-0 bg-[#EFFAFD]">
      <div className=" flex flex-wrap flex-col relative font-montserrat">
        <div className="">
          <div className=" w-[190px] h-[44px] top-[204px]  absolute ">
            <h1 className=" font-semibold text-[36px]  text-center leading-{43.88px}  ">
              My Profile
            </h1>
          </div>
          <div className="mt-[312px] gap-[32px] flex">
            <div className="lg:w-[1024px] w-[94vw] resize-none gap-[64px]  items-center ">
              <div className="lg:w-[1024px] w-[90vw] resize-none h-auto lg:justify-between   flex flex-col lg:flex-row ">
                <div className="lg:w-[200px] w-[90vw] items-center justify-center flex flex-col  h-auto ">
                  <img className="bg-[#DDF344] w-[200px] h-[200px] " />
                  <div className="">
                    <div className=" ml-2 mt-5  items-center gap-x-2">
                      <button
                        className=" py-1 px-3 inline-flex items-center gap-x-2 text-[20px] font-semibold rounded-lg border border-gray-300 bg-[#4A8BDF] text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        data-hs-file-upload-trigger=""
                        
                      >
                        Upload photo
                        <svg
                          className="shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                          <polyline points="17 8 12 3 7 8"></polyline>
                          <line x1="12" x2="12" y1="3" y2="15"></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-[760px] h-[208px] gap-[32px] mt-5 lg:mt-0 ">
                  <div className="w-[760px] h-[88px] gap-[8px] ">
                    <div className="w-[600]  text-[20px] leading-{24.38px} font-semibold ">
                      Trainer Name
                    </div>

                    <input
                    //   className="flex  items-center justify-between "
                      id="hs-toggle-password"
                      type="Name"
                      name="Name"
                      className="mt-2 mb-3  lg:w-[760px] w-[93vw] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4  border-2 border-blue-400 font-montserrat p-[16px]"
                      placeholder="Trainer A"
                      required=""
                    ></input>
                    <div className="mt-2 w-[600] text-[20px] leading-{24.38px} font-semibold ">
                      Activity
                    </div>

                    <input
                    //   className="flex  items-center justify-between "
                      className="mt-2 mb-3  lg:w-[760px] w-[93vw] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border-2 border-blue-400  font-montserrat p-[16px] "
                      placeholder="Weight Training"
                      required=""
                    ></input>
                  </div>
                </div>
              </div>
              
              <div className="mt-[40px] w-[1024px] lg:h-[88px] gap-[8px] h-auto lg:justify-between   flex flex-col lg:flex-row ">
                <div className="w-[508px] h-[24px] gap-[8px]">
                  <div className="text-[20px] text-black w-[600px] leading-{24.38} font-montserrat font-semibold ml-1.5">
                    Price
                  </div>
                  <input
                    // className="bg-transparent w-[508px] h-[56px] rounded-[12px] border border-black p-[16px] gap-[10px]"
                    className="mt-2 mb-3 lg:w-[508px] w-[93vw]  h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border-2 border-blue-400   p-[16px]"
                    placeholder="750 THB"
                    required=""
                  ></input>
                </div>
                <div className="w-[508px] h-[24px] gap-[8px] mt-[90px] lg:mt-0">
                  <div className="text-[20px] text-black w-[600px] leading-{24.38} font-montserrat font-semibold ml-1.5">
                    Course duration
                  </div>
                  <input
                    // className="bg-transparent w-[508px] h-[56px] rounded-[12px] border border-black p-[16px] gap-[10px]"
                    className="mt-2  mb-3 lg:w-[508px] w-[93vw] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border-2 border-blue-400   p-[16px]"
                    placeholder="30-min course"
                    required=""
                  ></input>
                </div>
              </div>
              <div className="mt-[40px]  w-[1024px] h-[88px] gap-[8px] justify-between flex flex-col lg:flex-row">
                <div className="w-[508px] h-[24px] gap-[8px] mt-[50px] lg:mt-0">
                  <div className="text-[20px] text-black w-[600px] leading-{24.38} font-montserrat font-semibold ml-1.5">
                    Business hours<p>Day</p>
                  </div>
                  <input
                    // className="bg-transparent w-[508px] h-[56px] rounded-[12px] border border-black p-[16px] gap-[10px]"
                    className="mt-2 mb-3 lg:w-[508px] w-[93vw] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border-2 border-blue-400   p-[16px]"
                    placeholder="Mon - Fri"
                    required=""
                  ></input>
                </div>
                <div className="lg:mt-[30px] w-[508px] h-[24px] gap-[8px] mt-[120px]">
                  <div className="text-[20px] text-black w-[600px] leading-{24.38} font-montserrat font-semibold ml-1.5">
                    Time
                  </div>
                  <input
                    // className="bg-transparent w-[508px] h-[56px] rounded-[12px] border border-black p-[16px] gap-[10px]"
                    className="mt-2 mb-3 lg:w-[508px] w-[93vw] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border-2 border-blue-400   p-[16px]"
                    placeholder="16:00 - 18:00"
                    required=""
                  ></input>
                </div>
              </div>
              <div className="mt-[70px] w-[1024px] h-[165px]  gap-[8px] flex ">
                <div className="w-[1024px] h-[24px] gap-[8px] mt-[160px] lg:mt-0 flex flex-col">
                  <label
                    // for="large-input"
                    className="text-[24px] text-black w-[600px] leading-{24.38} font-montserrat font-semibold ml-1.5"
                  >
                    About Me {aboutMe.length}/500
                  </label>
                  <textarea
                    className="peer lg:w-[1024px] w-[93vw] h-[128px]  min-h-[100px]  resize-none rounded-[12px]  border-2 border-blue-400  outline-black  bg-transparent px-3 py-2.5  text-sm font-normal text-blue-gray-700  
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

                   {/* Resume part */}

                </div>
              </div>
              <div className="w-[1024px] h-[1000px] mt-[190px] gap-8 lg:mt-[40px] ">
                <div className="text-[24px] leading-{29.26} font-semibold"
                >Resume
                </div>

                <div className="w-[1024px] h-[1208px]">
                  <div className="w-[1024px]  h-auto gap-16 ">
                    <div>
                      <div className="flex justify-between w-[93vw] lg:w-[1024px]  ">
                        <div className=" text-[20px] w-[600px] ml-3 mt-3 font-semibold "
                        >Education ({dataEducation.length}/3)
                        </div>


                        {educations.length <= 3 && (
                          <div>
                            <button
                            onClick={addEducation}
                            className="lg:w-[91px] w-[100px] h-[40px] mt-3 lg:mt-2 paddind-[8px] border border-black text-white bg-[#38A32A]  font-medium rounded-[12px] px-5  me-3 mb-2"
                            >Add +
                            </button>
                          </div>
                        )}
                      </div>

                      {/*การ์ดข้อมูลการศึกษา*/}
                      <div className="space-y-4">


                      </div>
                    </div>

                    {dataEducation.map((edu) => (
                      <div key={edu.id} className="mt-3 lg:w-[1024px] w-[93vw] h-[200px] border-2 border-blue-400 rounded-[12px] p-[16px] gap-8">
                        <div className="flex">
                          <div className="w-2/12">
                            <p className="font-bold mb-[8px] text-xl">Year</p>
                            <p>{edu.year}</p>
                          </div>
                          <div className="w-7/12">
                            <div>
                              <p className="font-bold mb-[8px] text-xl">Details</p>
                              <p className="mb-[8px] font-bold text-base">School / University</p>
                              {edu.isEditing ? (
                                <input
                                  className="bg-transparent lg:w-[825px] w-[200px] h-[34px] pl-2 rounded-[8px] border border-blue-400 padding-[16px] gap-[10px] bg-blue-100 focus:border-gray-600"
                                  value={edu.school}
                                  onChange={(e) => handleChangeDataEducation(edu.id, 'school', e.target.value)}
                                  name="school"
                                />
                              ) : (
                                <p className="mb-[8px]">{edu.school}</p>
                              )}
                              <p className="mb-[8px] font-bold text-base">Faculty / Bachelor</p>
                              {edu.isEditing ? (
                                <input
                                  className="bg-transparent lg:w-[825px] w-[200px] h-[34px] pl-2 rounded-[8px] border border-blue-400 padding-[16px] gap-[10px] bg-blue-100 focus:border-gray-600"
                                  value={edu.faculty}
                                  onChange={(e) => handleChangeDataEducation(edu.id, 'faculty', e.target.value)}
                                  name="faculty"
                                />
                              ) : (
                                <p className="mb-[8px]">{edu.faculty}</p>
                              )}
                            </div>
                          </div>
                          <div className="w-3/12 justify-between">
                            <div className="gap-1 flex justify-end">
                              {edu.isEditing ? (
                                <>
                                  <button
                                    onClick={() => toggleEditEducation(edu.id)}
                                    className="w-[101px] h-[36px] border border-gray-600 text-gray-600 bg-gray-200 font-medium rounded-[12px] text-base"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    onClick={() => toggleEditEducation(edu.id)}
                                    className="w-[101px] h-[36px] border border-black text-white bg-[#4A8BDF] font-medium rounded-[12px] text-base"
                                  >
                                    SAVE
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    onClick={() => toggleEditEducation(edu.id)}
                                    className="w-[80px] h-[36px] border border-black text-white bg-[#4A8BDF] font-medium rounded-[12px] text-base"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    onClick={() => removeEducation(edu.id)}
                                    className="w-[101px] h-[36px] border border-black text-white bg-[#EC697F] font-medium rounded-[12px] text-base"
                                  >
                                    Delete
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}


                    {/*การ์ด Work experience**/}
                    <div className="w-[1024px] h-[304px] gap-16 ">
                      <div className="flex justify-between w-[93vw] lg:w-[1024px] ">

                        <div className=" text-[20px] w-[600px] ml-3 mt-3 font-semibold"
                        >Work Experience ({dataExperience.length}/3)
                        </div>
                            <div>
                            <button
                            onClick={addWorkExperience}
                            className="lg:w-[91px] w-[100px] h-[40px] mt-3 lg:mt-2 paddind-[8px] border border-black text-white bg-[#38A32A]  font-medium rounded-[12px] px-5  me-3 mb-2"
                            >Add +
                            </button>
                            </div>
                        </div>


                      {/*การ์ด Work experience*/}
                      <div className="space-y-4">
                      </div>
                      {dataExperience.map((edu) => (
                      <div key={edu.id} className="mt-3 lg:w-[1024px] w-[93vw] h-[200px] border-2 border-blue-400 rounded-[12px] p-[16px] gap-8">
                        <div className="flex">
                          <div className="w-2/12">
                            <p className="font-bold mb-[8px] text-xl">Year</p>
                            <p>{edu.year}</p>
                          </div>
                          <div className="w-7/12">
                            <div>
                              <p className="font-bold mb-[8px] text-xl">Details</p>
                              <p className="mb-[8px] font-bold text-bas">Workplace / Fitness</p>
                              {edu.isEditing ? (
                                <input
                                  className="bg-transparent lg:w-[825px] w-[200px] h-[34px] pl-2 rounded-[8px] border border-blue-400 padding-[16px] gap-[10px] bg-blue-100 focus:border-gray-600"
                                  value={edu.work}
                                  onChange={(e) => handleChangeDataExperience(edu.id, 'work', e.target.value)}
                                  name="work"
                                />
                              ) : (
                                <p className="mb-[8px]">{edu.work}</p>
                              )}
                              <p className="mb-[8px] font-bold text-bas">Description</p>
                              {edu.isEditing ? (
                                <input
                                  className="bg-transparent lg:w-[825px] w-[200px] h-[34px] pl-2 rounded-[8px] border border-blue-400 padding-[16px] gap-[10px] bg-blue-100 focus:border-gray-600"
                                  value={edu.descript}
                                  onChange={(e) => handleChangeDataExperience(edu.id, 'descript', e.target.value)}
                                  name="descript"
                                />
                              ) : (
                                <p className="mb-[8px]">{edu.descript}</p>
                              )}
                            </div>
                          </div>
                          <div className="w-3/12 justify-between">
                            <div className="gap-1 flex justify-end">
                              {edu.isEditing ? (
                                <>
                                  <button
                                    onClick={() => toggleEditExperience(edu.id)}
                                    className="w-[101px] h-[36px] border border-gray-600 text-gray-600 bg-gray-200 font-medium rounded-[12px] text-base"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    onClick={() => toggleEditExperience(edu.id)}
                                    className="w-[101px] h-[36px] border border-black text-white bg-[#4A8BDF] font-medium rounded-[12px] text-base"
                                  >
                                    SAVE
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    onClick={() => toggleEditExperience(edu.id)}
                                    className="w-[80px] h-[36px] border border-black text-white bg-[#4A8BDF] font-medium rounded-[12px] text-base"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    onClick={() => removeWorkExperience(edu.id)}
                                    className="w-[101px] h-[36px] border border-black text-white bg-[#EC697F] font-medium rounded-[12px] text-base"
                                  >
                                    Delete
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                      
                      {/*ใบcer**/}

                      <div className="w-[1024px] h-[304px] gap-16 ">
                        <div className="flex justify-between w-[93vw] lg:w-[1024px] ">

                          <div className=" text-[20px] w-[600px] ml-3 mt-3 font-semibold"
                          >Certifications ({dataCertificates.length}/3)
                          </div>
                          {dataCertificates.length <= 3 && (
                            <div>
                                <button
                                onClick={addCertificates}
                                className="lg:w-[91px] w-[100px] h-[40px] mt-3 lg:mt-2 paddind-[8px] border border-black text-white bg-[#38A32A]  font-medium rounded-[12px] px-5  me-3 mb-2"
                                >Add +
                                </button>
                            </div>
                          )}

                        </div>
                        {/*ใบcer*/}
                        <div className="space-y-4">
                        </div>
                        {dataCertificates.map((edu) => (
                      <div key={edu.id} className="mt-3 lg:w-[1024px] w-[93vw] h-[200px] border-2 border-blue-400 rounded-[12px] p-[16px] gap-8">
                        <div className="flex">
                          <div className="w-2/12">
                            <p className="font-bold mb-[8px] text-xl">Year</p>
                            <p>{edu.year}</p>
                          </div>
                          <div className="w-7/12">
                            <div>
                              <p className="font-bold mb-[8px] text-xl">Details</p>
                              <p className="mb-[8px] font-bold text-bas">Certificate name</p>
                              {edu.isEditing ? (
                                <input
                                  className="bg-transparent lg:w-[825px] w-[200px] h-[34px] pl-2 rounded-[8px] border border-blue-400 padding-[16px] gap-[10px] bg-blue-100 focus:border-gray-600"
                                  value={edu.cer}
                                  onChange={(e) => handleChangeDataCertificates(edu.id, 'cer', e.target.value)}
                                  name="cer"
                                />
                              ) : (
                                <p className="mb-[8px]">{edu.cer}</p>
                              )}
                              <p className="mb-[8px] font-bold text-bas">Description</p>
                              {edu.isEditing ? (
                                <input
                                  className="bg-transparent lg:w-[825px] w-[200px] h-[34px] pl-2 rounded-[8px] border border-blue-400 padding-[16px] gap-[10px] bg-blue-100 focus:border-gray-600"
                                  value={edu.descript}
                                  onChange={(e) => handleChangeDataCertificates(edu.id, 'descript', e.target.value)}
                                  name="descript"
                                />
                              ) : (
                                <p className="mb-[8px]">{edu.descript}</p>
                              )}
                            </div>
                          </div>
                          <div className="w-3/12 justify-between">
                            <div className="gap-1 flex justify-end">
                              {edu.isEditing ? (
                                <>
                                  <button
                                    onClick={() => toggleEditCertificates(edu.id)}
                                    className="w-[101px] h-[36px] border border-gray-600 text-gray-600 bg-gray-200 font-medium rounded-[12px] text-base"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    onClick={() => toggleEditCertificates(edu.id)}
                                    className="w-[101px] h-[36px] border border-black text-white bg-[#4A8BDF] font-medium rounded-[12px] text-base"
                                  >
                                    SAVE
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    onClick={() => toggleEditCertificates(edu.id)}
                                    className="w-[80px] h-[36px] border border-black text-white bg-[#4A8BDF] font-medium rounded-[12px] text-base"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    onClick={() => removeCertificates(edu.id)}
                                    className="w-[101px] h-[36px] border border-black text-white bg-[#EC697F] font-medium rounded-[12px] text-base"
                                  >
                                    Delete
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                        {/* {editCertificates ? (<div>
                          {Certificates.map((cer) => (
                          <div key={cer.id} className="mt-3 lg:w-[1024px] w-[93vw] h-[200px] border-2 border-blue-400   rounded-[12px]  p-[16px] gap-[16px] ">
                                <div className="flex">
                                    <div className="w-2/12">
                                        <p className="font-bold mb-[8px] text-xl">Year</p>
                                        <p>2023</p>
                                    </div>
                                    <div className="w-7/12">
                                        <div>
                                        <p className="font-bold mb-[8px] text-xl">Details</p>
                                        <p className="mb-[8px] font-bold text-bas">Certificate name</p>
                                        <input className=" bg-transparent lg:w-[825px] w-[200px] h-[34px] pl-2 rounded-[8px] border border-blue-400  padding-[16px] gap-[10px] bg-blue-100 focus:border-gray-600"></input>
                                        <p className="mb-[8px] font-bold text-bas">Description</p>
                                        <input className=" bg-transparent lg:w-[825px] w-[200px] h-[34px] pl-2 rounded-[8px] border border-blue-400  padding-[16px] gap-[10px] bg-blue-100 focus:border-gray-600"></input>
                                        </div>
                                    </div>
                                    <div className="w-3/12 justify-between">
                                        <div className="gap-1 flex justify-end">
                                            <button
                                            onClick={() => handleSaveCertificates()}
                                            className="w-[101px] h-[36px]  border border-gray-600 text-gray-600 bg-gray-200 font-medium rounded-[12px] text-base"
                                            >Cancel
                                            </button>
                                            <button
                                            onClick={() => removeCertificates(cer.id)}
                                            className="w-[101px] h-[36px]  border border-black text-white bg-[#4A8BDF]  font-medium rounded-[12px] text-base "
                                            >SAVE
                                            </button>
                                        </div>
                                    </div>
                                </div>
                          </div>
                        ))}
                        </div>):(<div>
                          {Certificates.map((cer) => (
                          <div key={cer.id} className="mt-3 lg:w-[1024px] w-[93vw] h-[200px] border-2 border-blue-400   rounded-[12px]  p-[16px] gap-[16px] ">
                                <div className="flex">
                                    <div className="w-2/12">
                                        <p className="font-bold mb-[8px] text-xl">Year</p>
                                        <p>2023</p>
                                    </div>
                                    <div className="w-7/12">
                                        <div>
                                        <p className="font-bold mb-[8px] text-xl">Details</p>
                                        <p className="mb-[8px] font-bold text-bas">Certificate name</p>
                                        <p className="mb-[8px]">KMITL</p>
                                        <p className="mb-[8px] font-bold text-bas">Description</p>
                                        <p className="mb-[8px]">IoT Engineering</p>
                                        </div>
                                    </div>
                                    <div className="w-3/12 justify-between">
                                        <div className="gap-1 flex justify-end">
                                            <button
                                            onClick={() => handleEditCertificates()}
                                            className="w-[80px] h-[36px]  border border-black text-white bg-[#4A8BDF]  font-medium rounded-[12px] text-base "                                            >Edit
                                            </button>
                                            <button
                                            onClick={() => removeCertificates(cer.id)}
                                            className="w-[101px] h-[36px]  border border-black text-white bg-[#EC697F]  font-medium rounded-[12px] text-base "
                                            >Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                          </div>
                        ))}
                        </div>)} */}
                    
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
