import MessageCard from "../../components/Card/MessageCard";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { config } from "../../config";

export default function Messenger() {
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (!Cookies.get("AUTH_KEY")) {
      navigate("/");
    }
    fetchData();
    console.log(
      messages.filter((item, index, self) => {
        return (
          self.findIndex(
            (i) =>
              i.sentFromId._id === item.sentFromId._id &&
              item.sentToId._id === user._id
          ) === index
        );
      })
    );
  }, []);

  const fetchData = async () => {
    const res = await axios.get(
      `${API_BASE_URL}/conversation/myMessage`,
      config.headers()
    );
    const resUser = await axios.get(`${API_BASE_URL}/user/profile`, config.headers());
    setMessages(res.data);
    setUser(resUser.data);
  };

  const filteredData = messages.filter((item, index, self) => {
    return (
      self.findIndex(
        (i) =>
          i.sentFromId._id === item.sentFromId._id &&
          item.sentToId._id === user._id
      ) === index
    );
  });

  const filteredSearch = filteredData.filter((item) => {
    return search.toLowerCase === ""
      ? item
      : item.sentFromId.fullname.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <motion.div className="w-full h-screen bg-sky flex flex-col">
      <div className="flex flex-grow ">
        <div className="w-full md:w-1/4 md:border-r-hidden md:border-r border-blue py-[16px] overflow-auto">
          <div className=" justify-center text-xl font-semibold pb-[16px] mb-10">
            <div className="px-[32px] text-[24px] my-4">Chat</div>
            <div className="flex px-[32px]">
              <motion.input
                type="text"
                placeholder="Search Messenger"
                className="text-[16px] font-medium bg-gray/20 focus:bg-lightblue/20 focus:placeholder:text-lightblue focus:outline-lightblue text-black w-full px-6 py-2 rounded-xl truncate"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div>
            {filteredSearch
              ? filteredSearch.map((message, index) => (
                  <Link to={`/messenger/${message.sentFromId._id}`} key={index}>
                    <MessageCard
                      fullname={message.sentFromId.fullname}
                      image={message.sentFromId.profileImage}
                    />
                  </Link>
                ))
              : ""}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
