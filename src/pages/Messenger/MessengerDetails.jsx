import MessageCard from "../../components/Card/MessageCard";
import { ChevronLeft, Send } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import MessageBox from "../../components/Box/MessageBox";
import axios from "axios";
import { config } from "../../config";

export default function MessengerDetails() {
  const { id } = useParams();
  const [sendMessage, setSendMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState();
  const [reload, setReload] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!Cookies.get("AUTH_KEY")) {
      navigate("/");
    }
    const interval = setInterval(fetchData, 1000);
    fetchData();
    return () => {
      clearInterval(interval);
    };
  }, [reload]);

  const fetchData = async () => {
    const res = await axios.get(
      `${API_BASE_URL}/conversation/myMessage`,
      config.headers()
    );
    const resUser = await axios.get(
      `${API_BASE_URL}/user/profile`,
      config.headers()
    );
    setMessages(res.data);
    setUser(resUser.data);
  };

  const submitMessage = async () => {
    try {
      const payload = {
        content: sendMessage,
        sentToId: id,
        mediaURL: "",
      };
      await axios.post(
        `${API_BASE_URL}/conversation/sentMessage`,
        payload,
        config.headers()
      );
      setReload(!reload);
      setSendMessage("");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const senderIdentify = (message) => {
    if (user.email === message.sentFromId.email) {
      return false;
    } else {
      return true;
    }
  };

  const filterMessages = messages.filter(
    (item) => item.sentToId._id === id || item.sentFromId._id === id
  );

  const filteredData = messages.filter((item, index, self) => {
    return (
      self.findIndex(
        (i) =>
          i.sentFromId._id === item.sentFromId._id &&
          item.sentToId._id === user._id
      ) === index
    );
  });

  const filteredName = filteredData.filter(
    (item) => item.sentFromId._id === id
  );

  const filteredSearch = filteredData.filter((item) => {
    return search.toLowerCase === ""
      ? item
      : item.sentFromId.fullname.toLowerCase().includes(search.toLowerCase());
  });

  const handleBack = () => {
    navigate("/messenger");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      buttonRef.current.click();
    }
  };

  return (
    <motion.div className="w-full h-screen bg-sky flex flex-col">
      <div className="overflow-auto h-screen flex flex-grow ">
        {/* left side */}
        <div className="hidden md:block w-full md:w-1/4 border-r border-blue py-[16px] overflow-auto">
          <div className=" justify-center text-xl font-semibold pb-[16px] mb-10">
            <div className="px-[32px] text-[24px] my-4">Chat</div>
            <div className="flex px-[32px]">
              <motion.input
                type="text"
                placeholder="Search Messenger"
                className="text-[16px] font-medium bg-gray/20 focus:bg-lightblue/20 focus:placeholder:text-lightblue focus:outline-lightblue text-black w-full px-6 py-2 rounded-xl truncate"
                onChange={(e) => setSearch(e.target.value)}
              ></motion.input>
            </div>
          </div>
          <div>
            {filteredSearch
              ? filteredSearch.map((message, index) => (
                  <Link to={`/messenger/${message.sentFromId._id}`} key={index}>
                    <MessageCard
                      fullname={message.sentFromId.fullname}
                      image={message.sentFromId.profileImage}
                      messages={messages.filter(
                        (dataMessage) => dataMessage.sentFromId._id === user._id
                      )}
                    />
                  </Link>
                ))
              : ""}
          </div>
        </div>
        {/* right side */}
        <div className="w-full md:w-3/4 flex flex-col">
          <div className="flex gap-8 items-center p-[32px] bg-transparent text-black border-blue border-b mb-4 md:border-b-none text-[20px] font-semibold">
            <div
              className="block md:hidden cursor-pointer"
              onClick={handleBack}
            >
              <ChevronLeft />
            </div>
            <div className="flex">
              {filteredName[0] ? filteredName[0].sentFromId.fullname : ""}
            </div>
          </div>
          <div className="overflow-auto flex-grow">
            <div className="px-[16px] sm:px-[32px]">
              {filterMessages
                ? filterMessages.map((message, index) => (
                    <MessageBox
                      key={index}
                      text={message.content}
                      sender={senderIdentify(message)}
                      date={message.createdAt}
                      image={message.sentFromId.profileImage}
                    />
                  ))
                : ""}
            </div>
          </div>
          <div className="bg-lightblue sticky bottom-0">
            <div className="flex p-[32px] gap-[8px] items-center">
              <input
                type="text"
                className="h-[50px] rounded-[12px] w-full px-4"
                placeholder="Message"
                value={sendMessage}
                onKeyDown={handleKeyDown}
                onChange={(e) => setSendMessage(e.target.value)}
              />
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                className="p-[13px] bg-sky rounded-[12px] cursor-pointer"
                onClick={() => submitMessage()}
                ref={buttonRef}
              >
                <Send color="blue" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
