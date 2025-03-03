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

  useEffect(() => {
    if (!Cookies.get("AUTH_KEY")) {
      navigate("/");
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await axios.get(
      "/api/conversation/myMessage",
      config.headers()
    );
    const resUser = await axios.get("/api/user/profile", config.headers());
    setMessages(res.data);
    setUser(resUser.data);
  };

  const filteredData = messages.filter((item, index, self) => {
    return (
      self.findIndex(
        (i) =>
          i.sentToId._id === item.sentToId._id &&
          item.sentFromId._id === user._id
      ) === index
    );
  });

  const filteredSearch = filteredData.filter((item) => {
    return search.toLowerCase === ""
      ? item
      : item.sentToId.fullname.toLowerCase().includes(search);
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
                  <Link to={`/messenger/${message.sentToId._id}`} key={index}>
                    <MessageCard fullname={message.sentToId.fullname} />
                  </Link>
                ))
              : ""}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
