import MessageCard from "../../components/Card/MessageCard";
import { Send } from "lucide-react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MessageBox from "../../components/Box/MessageBox";
import axios from "axios";
import { config } from "../../config";

export default function Messenger() {
  const [sendMessage, setSendMessage] = useState();
  const [messages, setMessages] = useState("");
  const [user, setUser] = useState();
  const [reload, setReload] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookies.get("AUTH_KEY")) {
      navigate("/");
    }
    fetchData();
  }, [reload]);

  const fetchData = async () => {
    const res = await axios.get(
      "/api/conversation/myMessage",
      config.headers()
    );
    const resUser = await axios.get("/api/user/profile", config.headers());
    setMessages(res.data);
    setUser(resUser.data);
  };

  const submitMessage = async () => {
    try {
      const payload = {
        content: sendMessage,
        sentToId: "676e48cdda6887c0a0598c15",
        mediaURL: "",
      };
      await axios.post(
        "/api/conversation/sentMessage",
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

  return (
    <motion.div className="w-full h-screen bg-sky flex flex-col">
      <div className="flex flex-grow ">
        <div className=" w-1/4 border-r border-blue py-[16px] overflow-auto">
          <div className=" justify-center text-xl font-semibold pb-[16px] mb-10">
            <div className="px-[32px] text-[24px] my-4">Chat</div>
            <div className="flex px-[32px]">
              <motion.input
                type="text"
                placeholder="Search Messenger"
                className="text-[16px] font-medium bg-slate-200 w-full px-6 py-2 rounded-xl"
              ></motion.input>
            </div>
          </div>
          <div>
            <MessageCard />
            <MessageCard />
            <MessageCard />
            <MessageCard />
          </div>
        </div>
        <div className="w-3/4 flex flex-col">
          <div className="p-[32px] bg-lightblue text-white text-[20px]">
            Trainer A
          </div>
          <div className="px-[16px] sm:px-[32px] flex-grow">
            {messages
              ? messages.map((message, index) => (
                  <MessageBox
                    key={index}
                    text={message.content}
                    sender={senderIdentify(message)}
                  />
                ))
              : ""}
          </div>
          <div className="bg-lightblue">
            <div className="flex p-[32px] gap-[8px] items-center">
              <input
                type="text"
                className="h-[50px] rounded-[12px] w-full px-4"
                placeholder="Message"
                value={sendMessage}
                onChange={(e) => setSendMessage(e.target.value)}
              />
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                className="p-[13px] bg-sky rounded-[12px] cursor-pointer"
                onClick={() => submitMessage()}
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
