import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { config } from "../../config";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [aboutMe, setAboutMe] = useState([]);
  const [isLimitReached, setIsLimitReached] = useState(false);
  const [educations, setEducations] = useState([1]);
  const [workExperience, setWorkExperience] = useState([1]);
  const [Certificates, setCertificates] = useState([1]);

  const [profile, setProfile] = useState({ 
    username:'',
    title:'',
    price:'',
    duration:'',
    description:''

  });
  
  const [image, setImage] = useState();


  const fetchDataProfile = async () => {
    try {
      const {data} = await axios.get("http://localhost:8080/course", config.headers())
      setProfile({
        username:data[0].createdBy.username,
        title:data[0].category.title,
        price:data[0].price,
        duration:data[0].duration,
        description:data[0].category.description, 
        id:data[0]._id
      })
      
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleClickSave = async () => {
    try {
      await axios.patch(`http://localhost:8080/course/${profile.id}`, profile, config.headers());
    } catch (error) {
      throw Error(error);
    }
  };

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const fileInputRef = useRef();

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files;
    setImage(URL.createObjectURL(file[0]));
  };

  const fetchDataEducation = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/education",
        config.headers()
      );

      setDataEducation(data);
    } catch (error) {
      console.log("fetchDataEducation error: " + error);
    }
  };
  const fetchDataCertifies = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/certifies",
        config.headers()
      );

      setDataCertificates(data);
    } catch (error) {
      console.log("fetchDataCertifies error: " + error);
    }
  };
  const fetchDataexps = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/work-exps",
        config.headers()
      );

      setDataExperience(data);
    } catch (error) {
      console.log("fetchDataCertifies error: " + error);
    }
  };

  useEffect(() => {
    
    fetchDataProfile()
    fetchDataEducation();
    fetchDataCertifies();
    fetchDataexps();
  }, []);

  const [dataEducation, setDataEducation] = useState([
    {
      placeEducated: "kmitl",
      description: "engineer",
      duration: "2023-2030",
      isEditing: false,
    },
  ]);
  const [dataExperience, setDataExperience] = useState([
    {
      title: "Personal trainer in KMITL Gym",
      description:
        "This certifies that me has successfully demonstrated and understanding",
      duration: "period",
      isEditing: false,
    },
  ]);
  const [dataCertificates, setDataCertificates] = useState([
    {
      title: "Personal trainer in KMITL Gym",
      description:
        "This certifies that me has successfully demonstrated and understanding",
      duration: "period",
      isEditing: false,
    },
  ]);

  const handleChangeDataEducation = (id, field, value) => {
    setDataEducation(
      dataEducation.map((edu) =>
        edu._id === id ? { ...edu, [field]: value } : edu
      )
    );
  };
  const handleChangeDataExperience = (id, field, value) => {
    setDataExperience(
      dataExperience.map((edu) =>
        edu._id === id ? { ...edu, [field]: value } : edu
      )
    );
  };

  const handleChangeDataCertificates = (id, field, value) => {
    setDataCertificates(
      dataCertificates.map((edu) =>
        edu._id === id ? { ...edu, [field]: value } : edu
      )
    );
  };

  const toggleEditEducation = (id) => {
    setDataEducation(
      dataEducation.map((edu) =>
        edu._id === id ? { ...edu, isEditing: !edu.isEditing } : edu
      )
    );
  };
  const toggleEditExperience = (id) => {
    setDataExperience(
      dataExperience.map((edu) =>
        edu._id === id ? { ...edu, isEditing: !edu.isEditing } : edu
      )
    );
  };
  const toggleEditCertificates = (id) => {
    setDataCertificates(
      dataCertificates.map((edu) =>
        edu._id === id ? { ...edu, isEditing: !edu.isEditing } : edu
      )
    );
  };

  const handleAboutMechange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= 500) {
      setAboutMe(inputText);
      setIsLimitReached(inputText.length === 500);
    }
  };

  const addEducation = async () => {
    if (dataEducation.length < 3) {
      const newEducation = {
        placeEducated: "Input",
        description: "Input",
        duration: "0000-0000",
        isEditing: false,
      };
      try {
        await axios.post(
          "http://localhost:8080/education",
          newEducation,
          config.headers()
        );
        fetchDataEducation();
      } catch (error) {
        console.log(`error add data ${error}`);
      }
    }
  };

  const addWorkExperience = async () => {
    if (workExperience.length < 3) {
      const newworkExperience = {
        title: "Input",
        description: "Input",
        duration: "0000-0000",
        isEditing: false,
      };
      try {
        await axios.post(
          "http://localhost:8080/work-exps",
          newworkExperience,
          config.headers()
        );
        fetchDataexps();
      } catch (error) {
        console.log(`error add data ${error}`);
      }
    }
  };

  const addCertificates = async () => {
    if (dataCertificates.length < 3) {
      const newCertificates = {
        title: "Input",
        description: "Input",
        duration: "0000-0000",
        isEditing: false,
      };
      try {
        await axios.post(
          "http://localhost:8080/certifies",
          newCertificates,
          config.headers()
        );
        fetchDataCertifies();
      } catch (error) {
        console.log(`error add data ${error}`);
      }
    }
  };

  const handleSaveEducation = async (id) => {
    try {
      const educationToUpdate = dataEducation.find((edu) => edu._id === id);

      const newDataEducation = {
        placeEducated: educationToUpdate.placeEducated,
        description: educationToUpdate.description,
        duration: educationToUpdate.duration,
        isEditing: educationToUpdate.isEditing,
      };

      await axios.patch(
        `http://localhost:8080/education/${id}`,
        newDataEducation,
        config.headers()
      );
      console.log("success");

      toggleEditEducation(id);
    } catch (error) {
      console.log("Error updating education:", error);
    }
  };
  const handleSaveExperience = async (id) => {
    try {
      const experiencToUpdate = dataExperience.find((edu) => edu._id === id);

      const newDataExperienc = {
        title: experiencToUpdate.title,
        description: experiencToUpdate.description,
        duration: experiencToUpdate.duration,
        isEditing: experiencToUpdate.isEditing,
      };

      await axios.patch(
        `http://localhost:8080/work-exps/${id}`,
        newDataExperienc,
        config.headers()
      );
      console.log("success");

      toggleEditExperience(id);
    } catch (error) {
      console.log("Error updating experienc:", error);
    }
  };
  const handleSaveCertificates = async (id) => {
    try {
      const certificatesToUpdate = dataCertificates.find(
        (edu) => edu._id === id
      );

      const newDataCertificates = {
        title: certificatesToUpdate.title,
        description: certificatesToUpdate.description,
        duration: certificatesToUpdate.duration,
        isEditing: certificatesToUpdate.isEditing,
      };

      await axios.patch(
        `http://localhost:8080/certifies/${id}`,
        newDataCertificates,
        config.headers()
      );
      console.log("success");

      toggleEditCertificates(id);
    } catch (error) {
      console.log("Error updating Certificates:", error);
    }
  };

  const removeEducation = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8080/education/${id}`,
        config.headers()
      );
      setDataEducation((prevData) => prevData.filter((edu) => edu._id !== id));
    } catch (error) {
      console.log(`error delete ${error}`);
    }
  };

  const removeWorkExperience = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8080/work-exps/${id}`,
        config.headers()
      );
      setDataExperience((prevData) => prevData.filter((edu) => edu._id !== id));
    } catch (error) {
      console.log(`error delete ${error}`);
    }
  };

  const removeCertificates = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8080/certifies/${id}`,
        config.headers()
      );
      setDataCertificates((prevData) =>
        prevData.filter((edu) => edu._id !== id)
      );
    } catch (error) {
      console.log(`error delete ${error}`);
    }
  };

  return (
    <div className="flex lg:justify-center ml-[10px] lg:ml-0 bg-[#EFFAFD] h-auto">
      <div className=" flex flex-wrap flex-col relative font-montserra">
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
                  <img
                    className="w-[200px] h-[200px] object-cover bg-lime rounded-md"
                    alt=""
                    src={image}
                  />
                  <input
                    accept="image/*"
                    className="hidden"
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                  />
                  <div
                    className="mt-3 cursor-pointer py-1 px-6 inline-flex items-center gap-x-2 text-[20px] font-semibold rounded-lg border border-gray-300 bg-[#4A8BDF] text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    onClick={handleFileClick}
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
                      className="mt-2 mb-3  lg:w-[760px] w-[93vw] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4  border-2 border-lightblue font-montserrat p-[16px]"
                      placeholder="Trainer A"
                      required=""
                      value={profile.username}
                    ></input>
                    <div className="mt-2 w-[600] text-[20px] leading-{24.38px} font-semibold ">
                      Activity
                    </div>

                    <input
                      //   className="flex  items-center justify-between "
                      className="mt-2 mb-3  lg:w-[760px] w-[93vw] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border-2 border-lightblue  font-montserrat p-[16px] "
                      placeholder="Weight Training"
                      required=""
                      value={profile.title}
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
                    className="mt-2 mb-3 lg:w-[508px] w-[93vw]  h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border-2 border-lightblue   p-[16px]"
                    placeholder="750 THB"
                    required=""
                    value={profile.price}
                  ></input>
                </div>
                <div className="w-[508px] h-[24px] gap-[8px] mt-[90px] lg:mt-0">
                  <div className="text-[20px] text-black w-[600px] leading-{24.38} font-montserrat font-semibold ml-1.5">
                    Course duration
                  </div>
                  <input
                    // className="bg-transparent w-[508px] h-[56px] rounded-[12px] border border-black p-[16px] gap-[10px]"
                    className="mt-2  mb-3 lg:w-[508px] w-[93vw] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border-2 border-lightblue   p-[16px]"
                    placeholder="30-min course"
                    required=""
                    value={profile.duration}
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
                    className="mt-2 mb-3 lg:w-[508px] w-[93vw] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border-2 border-lightblue   p-[16px]"
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
                    className="mt-2 mb-3 lg:w-[508px] w-[93vw] h-[56px]  gap-[10px] ml-[0.5vh] rounded-[12px] bg-transparent outline-black py-3 ps-4 border-2 border-lightblue   p-[16px]"
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
                    className="peer lg:w-[1024px] w-[93vw] h-[128px]  min-h-[100px]  resize-none rounded-[12px]  border-2 border-lightblue  outline-black  bg-transparent px-3 py-2.5  text-sm font-normal text-blue-gray-700  
                    outline-0 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900   disabled:resize-none  disabled:bg-blue-gray-50"
                    placeholder="Write something about yourself... "
                    rows="3"
                    value={aboutMe}
                    onChange={handleAboutMechange}
                  ></textarea>
                  {isLimitReached && (
                    <p className="text-red mt-2 text-sm ">
                      You have reached the 500-character limit.
                    </p>
                  )}

                <div>
              <div
                onClick={handleClickSave}
                className="text-[20px] my-4 float-end w-[250px] text-center cursor-pointer bg-lightblue  py-2 rounded-lg text-white "
              >
                Save Change
              </div>
              </div>

                  {/* Resume part */}
                </div>
              </div>
              <div className="w-[1024px] h-[1000px] mt-[190px] gap-8 lg:mt-[40px] ">
                <div className="text-[24px] leading-{29.26} font-semibold">
                  Resume
                </div>

                <div className="w-[1024px] h-[1208px]">
                  <div className="w-[1024px]  h-auto gap-16 ">
                    <div>
                      <div className="flex justify-between w-[93vw] lg:w-[1024px]  ">
                        <div className=" text-[20px] w-[600px] ml-3 mt-3 font-semibold ">
                          Education ({dataEducation.length}/3)
                        </div>

                        {educations.length <= 3 && (
                          <div>
                            <button
                              onClick={addEducation}
                              className="lg:w-[91px] w-[100px] h-[40px] mt-3 lg:mt-2 paddind-[8px] border border-black text-white bg-[#38A32A]  font-medium rounded-[12px] px-5  me-3 mb-2"
                            >
                              Add +
                            </button>
                          </div>
                        )}
                      </div>

                      {/*การ์ดข้อมูลการศึกษา*/}
                      <div className="space-y-4"></div>
                    </div>

                    {dataEducation.map((edu) => (
                      <div
                        key={edu._id}
                        className="mt-3 lg:w-[1024px] w-[93vw] h-[200px] border-2 border-lightblue rounded-[12px] p-[16px] gap-8"
                      >
                        <div className="flex">
                          <div className="w-2/12">
                            <p className="font-bold mb-[8px] text-xl">Year</p>
                            {edu.isEditing ? (
                              <input
                                className="bg-transparent lg:w-[100px] w-[30px] h-[34px] pl-2 rounded-[8px] border border-lightblue padding-[16px] gap-[10px] bg-blue-100 focus:border-gray-600"
                                value={edu.duration}
                                onChange={(e) =>
                                  handleChangeDataEducation(
                                    edu._id,
                                    "duration",
                                    e.target.value
                                  )
                                }
                                name="duration"
                              />
                            ) : (
                              <p className="mb-[8px]">{edu.duration}</p>
                            )}
                            <p></p>
                          </div>
                          <div className="w-7/12">
                            <div>
                              <p className="font-bold mb-[8px] text-xl">
                                Details
                              </p>
                              <p className="mb-[8px] font-bold text-base">
                                School / University
                              </p>
                              {edu.isEditing ? (
                                <input
                                  className="bg-transparent lg:w-[825px] w-[200px] h-[34px] pl-2 rounded-[8px] border border-lightblue padding-[16px] gap-[10px] bg-blue-100 focus:border-gray-600"
                                  value={edu.placeEducated}
                                  onChange={(e) =>
                                    handleChangeDataEducation(
                                      edu._id,
                                      "placeEducated",
                                      e.target.value
                                    )
                                  }
                                  name="placeEducated"
                                />
                              ) : (
                                <p className="mb-[8px]">{edu.placeEducated}</p>
                              )}
                              <p className="mb-[8px] font-bold text-base">
                                Faculty / Bachelor
                              </p>
                              {edu.isEditing ? (
                                <input
                                  className="bg-transparent lg:w-[825px] w-[200px] h-[34px] pl-2 rounded-[8px] border border-lightblue padding-[16px] gap-[10px] bg-blue-100 focus:border-gray-600"
                                  value={edu.description}
                                  onChange={(e) =>
                                    handleChangeDataEducation(
                                      edu._id,
                                      "description",
                                      e.target.value
                                    )
                                  }
                                  name="description"
                                />
                              ) : (
                                <p className="mb-[8px]">{edu.description}</p>
                              )}
                            </div>
                          </div>
                          <div className="w-3/12 justify-between">
                            <div className="gap-1 flex justify-end">
                              {edu.isEditing ? (
                                <>
                                  <button
                                    onClick={() => toggleEditEducation(edu._id)}
                                    className="w-[101px] h-[36px] border border-gray-600 text-gray-600 bg-gray-200 font-medium rounded-[12px] text-base"
                                  >
                                    Cancel
                                  </button>
                                  <button
                                    onClick={() => handleSaveEducation(edu._id)}
                                    className="w-[101px] h-[36px] border border-black text-white bg-[#4A8BDF] font-medium rounded-[12px] text-base"
                                  >
                                    SAVE
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button
                                    onClick={() => toggleEditEducation(edu._id)}
                                    className="w-[80px] h-[36px] border border-black text-white bg-[#4A8BDF] font-medium rounded-[12px] text-base"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    onClick={() => removeEducation(edu._id)}
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
                        <div className=" text-[20px] w-[600px] ml-3 mt-3 font-semibold">
                          Work Experience ({dataExperience.length}/3)
                        </div>
                        <div>
                          <button
                            onClick={addWorkExperience}
                            className="lg:w-[91px] w-[100px] h-[40px] mt-3 lg:mt-2 paddind-[8px] border border-black text-white bg-[#38A32A]  font-medium rounded-[12px] px-5  me-3 mb-2"
                          >
                            Add +
                          </button>
                        </div>
                      </div>

                      {/*การ์ด Work experience*/}
                      <div className="space-y-4"></div>
                      {dataExperience.map((edu) => (
                        <div
                          key={edu._id}
                          className="mt-3 lg:w-[1024px] w-[93vw] h-[200px] border-2 border-lightblue rounded-[12px] p-[16px] gap-8"
                        >
                          <div className="flex">
                            <div className="w-2/12">
                              <p className="font-bold mb-[8px] text-xl">Year</p>
                              {edu.isEditing ? (
                                <input
                                  className="bg-transparent lg:w-[100px] w-[30px] h-[34px] pl-2 rounded-[8px] border border-lightblue padding-[16px] gap-[10px] bg-blue-100 focus:border-gray-600"
                                  value={edu.duration}
                                  onChange={(e) =>
                                    handleChangeDataExperience(
                                      edu._id,
                                      "duration",
                                      e.target.value
                                    )
                                  }
                                  name="duration"
                                />
                              ) : (
                                <p className="mb-[8px]">{edu.duration}</p>
                              )}
                            </div>
                            <div className="w-7/12">
                              <div>
                                <p className="font-bold mb-[8px] text-xl">
                                  Details
                                </p>
                                <p className="mb-[8px] font-bold text-bas">
                                  Workplace / Fitness
                                </p>
                                {edu.isEditing ? (
                                  <input
                                    className="bg-transparent lg:w-[825px] w-[200px] h-[34px] pl-2 rounded-[8px] border border-lightblue padding-[16px] gap-[10px] bg-blue-100 focus:border-gray-600"
                                    value={edu.title}
                                    onChange={(e) =>
                                      handleChangeDataExperience(
                                        edu._id,
                                        "title",
                                        e.target.value
                                      )
                                    }
                                    name="title"
                                  />
                                ) : (
                                  <p className="mb-[8px]">{edu.title}</p>
                                )}
                                <p className="mb-[8px] font-bold text-bas">
                                  Description
                                </p>
                                {edu.isEditing ? (
                                  <input
                                    className="bg-transparent lg:w-[825px] w-[200px] h-[34px] pl-2 rounded-[8px] border border-lightblue padding-[16px] gap-[10px] bg-blue-100 focus:border-gray-600"
                                    value={edu.description}
                                    onChange={(e) =>
                                      handleChangeDataExperience(
                                        edu._id,
                                        "description",
                                        e.target.value
                                      )
                                    }
                                    name="description"
                                  />
                                ) : (
                                  <p className="mb-[8px]">{edu.description}</p>
                                )}
                              </div>
                            </div>
                            <div className="w-3/12 justify-between">
                              <div className="gap-1 flex justify-end">
                                {edu.isEditing ? (
                                  <>
                                    <button
                                      onClick={() =>
                                        toggleEditExperience(edu._id)
                                      }
                                      className="w-[101px] h-[36px] border border-gray-600 text-gray-600 bg-gray-200 font-medium rounded-[12px] text-base"
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      onClick={() =>
                                        handleSaveExperience(edu._id)
                                      }
                                      className="w-[101px] h-[36px] border border-black text-white bg-[#4A8BDF] font-medium rounded-[12px] text-base"
                                    >
                                      SAVE
                                    </button>
                                  </>
                                ) : (
                                  <>
                                    <button
                                      onClick={() =>
                                        toggleEditExperience(edu._id)
                                      }
                                      className="w-[80px] h-[36px] border border-black text-white bg-[#4A8BDF] font-medium rounded-[12px] text-base"
                                    >
                                      Edit
                                    </button>
                                    <button
                                      onClick={() =>
                                        removeWorkExperience(edu._id)
                                      }
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
                          <div className=" text-[20px] w-[600px] ml-3 mt-3 font-semibold">
                            Certifications ({dataCertificates.length}/3)
                          </div>
                          {dataCertificates.length <= 3 && (
                            <div>
                              <button
                                onClick={addCertificates}
                                className="lg:w-[91px] w-[100px] h-[40px] mt-3 lg:mt-2 paddind-[8px] border border-black text-white bg-[#38A32A]  font-medium rounded-[12px] px-5  me-3 mb-2"
                              >
                                Add +
                              </button>
                            </div>
                          )}
                        </div>
                        {/*ใบcer*/}
                        <div className="space-y-4"></div>
                        {dataCertificates.map((edu) => (
                          <div
                            key={edu._id}
                            className="mt-3 lg:w-[1024px] w-[93vw] h-[200px] border-2 border-lightblue rounded-[12px] p-[16px] gap-8"
                          >
                            <div className="flex">
                              <div className="w-2/12">
                                <p className="font-bold mb-[8px] text-xl">
                                  Year
                                </p>
                                {edu.isEditing ? (
                                  <input
                                    className="bg-transparent lg:w-[100px] w-[30px] h-[34px] pl-2 rounded-[8px] border border-lightblue padding-[16px] gap-[10px] bg-blue-100 focus:border-gray-600"
                                    value={edu.duration}
                                    onChange={(e) =>
                                      handleChangeDataCertificates(
                                        edu._id,
                                        "duration",
                                        e.target.value
                                      )
                                    }
                                    name="duration"
                                  />
                                ) : (
                                  <p className="mb-[8px]">{edu.duration}</p>
                                )}
                              </div>
                              <div className="w-7/12">
                                <div>
                                  <p className="font-bold mb-[8px] text-xl">
                                    Details
                                  </p>
                                  <p className="mb-[8px] font-bold text-bas">
                                    Certificate name
                                  </p>
                                  {edu.isEditing ? (
                                    <input
                                      className="bg-transparent lg:w-[825px] w-[200px] h-[34px] pl-2 rounded-[8px] border border-lightblue padding-[16px] gap-[10px] bg-blue-100 focus:border-gray-600"
                                      value={edu.title}
                                      onChange={(e) =>
                                        handleChangeDataCertificates(
                                          edu._id,
                                          "title",
                                          e.target.value
                                        )
                                      }
                                      name="title"
                                    />
                                  ) : (
                                    <p className="mb-[8px]">{edu.title}</p>
                                  )}
                                  <p className="mb-[8px] font-bold text-bas">
                                    Description
                                  </p>
                                  {edu.isEditing ? (
                                    <input
                                      className="bg-transparent lg:w-[825px] w-[200px] h-[34px] pl-2 rounded-[8px] border border-lightblue padding-[16px] gap-[10px] bg-blue-100 focus:border-gray-600"
                                      value={edu.description}
                                      onChange={(e) =>
                                        handleChangeDataCertificates(
                                          edu._id,
                                          "description",
                                          e.target.value
                                        )
                                      }
                                      name="description"
                                    />
                                  ) : (
                                    <p className="mb-[8px]">
                                      {edu.description}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="w-3/12 justify-between">
                                <div className="gap-1 flex justify-end">
                                  {edu.isEditing ? (
                                    <>
                                      <button
                                        onClick={() =>
                                          toggleEditCertificates(edu._id)
                                        }
                                        className="w-[101px] h-[36px] border border-gray-600 text-gray-600 bg-gray-200 font-medium rounded-[12px] text-base"
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        onClick={() =>
                                          handleSaveCertificates(edu._id)
                                        }
                                        className="w-[101px] h-[36px] border border-black text-white bg-[#4A8BDF] font-medium rounded-[12px] text-base"
                                      >
                                        SAVE
                                      </button>
                                    </>
                                  ) : (
                                    <>
                                      <button
                                        onClick={() =>
                                          toggleEditCertificates(edu._id)
                                        }
                                        className="w-[80px] h-[36px] border border-black text-white bg-[#4A8BDF] font-medium rounded-[12px] text-base"
                                      >
                                        Edit
                                      </button>
                                      <button
                                        onClick={() =>
                                          removeCertificates(edu._id)
                                        }
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
