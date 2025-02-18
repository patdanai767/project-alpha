import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { config } from "../../config";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Account() {
  const [user, setUser] = useState({ email: "" });
  const [data, setData] = useState({
    username: "",
    fullname: "",
  });
  const [image, setImage] = useState();
  const [uploadPic, setUploadPic] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookies.get("AUTH_KEY")) {
      navigate("/");
    }
    fetchData();
    console.log(user)
  }, []);

  const fetchData = async () => {
    try {
      await axios.get("/api/user/profile", config.headers()).then((res) => {
        setUser(res.data);
        setData({ username: res.data.username, fullname: res.data.fullname });
        setImage(res.data.profileImage)
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleClickSave = async () => {
    const pic = new FormData();
    pic.append("file", uploadPic);
    pic.append("upload_preset", "Project_alpha");
    try {
      const upload = await axios.post(
        "https://api.cloudinary.com/v1_1/dqevqj0cc/image/upload",
        pic
      );

      const { url } = upload.data;
      console.log(url);

      const payloadUpdate = {
        ...data,
        profileImage: url,
      };

      await axios
        .patch(`/api/user/${user._id}`, payloadUpdate, config.headers())
        .then(() => {
          window.location.reload();
        });
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
    setUploadPic(file[0]);
  };

  return (
    <div className="flex justify-center mt-[74px]">
      <div className="min-h-screen md:w-[60%]">
        <div className="text-[36px] font-semibold">My Account</div>
        <div className="gird">
          <div className="flex gap-8">
            <div className="justify-center">
              <div className="w-[200px] h-[200px] bg-lime rounded-lg">
                <img
                  className="w-[200px] h-[200px] object-cover"
                  alt=""
                  src={image}
                />
              </div>
              <input
                accept="image/*"
                className="hidden"
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <div
                className="mt-4 w-[200px] h-10 border bg-lightblue text-white content-center text-center rounded-lg text-[20px] cursor-pointer"
                onClick={handleFileClick}
              >
                Upload photo
              </div>
            </div>
            <div className="w-full">
              <div className="text-[24px] font-semibold">Account</div>
              <div className="grid gap-3">
                <div className="grid gap-1">
                  <div>Username</div>
                  <input
                    value={data.username}
                    onChange={handleChange}
                    type="text"
                    name="username"
                    className="p-[14px] rounded-xl border border-blue bg-transparent w-full"
                  />
                </div>
                <div className="grid gap-1">
                  <div>Fullname</div>
                  <input
                    value={data.fullname}
                    onChange={handleChange}
                    type="text"
                    name="fullname"
                    className="p-[14px] rounded-xl border border-blue bg-transparent w-full"
                  />
                </div>
                <div className="grid gap-1">
                  <div>Email</div>
                  <input
                    disabled
                    value={user.email}
                    onChange={handleChange}
                    name="email"
                    type="email"
                    className="p-[14px] rounded-xl border border-blue bg-transparent w-full"
                  />
                </div>
              </div>
              <div
                onClick={handleClickSave}
                className="text-[20px] mt-6 float-end w-[250px] text-center cursor-pointer bg-blue px-12 py-4 rounded-lg text-white"
              >
                Save Change
              </div>
            </div>
          </div>
          <div className="border w-full border-black my-16" />
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
