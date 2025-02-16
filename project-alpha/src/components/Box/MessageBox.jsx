import { motion } from "framer-motion";

function MessageBox({ text, sender, date }) {
  const formatDate = (mongoDate) => {
    const date = new Date(mongoDate);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  };
  return (
    <motion.div>
      {sender ? (
        <div className="flex items-center h-fit">
          <div className="rounded-full w-[50px] h-[50px] mr-3 bg-lime">
            <img
              src=""
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </div>
          <div className="w-[40%] flex">
            <div className="border p-3 m-1 bg-blue rounded-xl w-fit text-white">
              {text}
            </div>
            <div className="text-gray-300 content-end mb-1">{formatDate(date)}</div>
          </div>
        </div>
      ) : (
        <div className="flex justify-end">
          <div className="w-[40%] flex justify-end">
            <div className="text-gray-300 content-end mb-1">{formatDate(date)}</div>
            <div className="border p-3 m-1 bg-green rounded-xl text-white w-fit break-word">
              {text}
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default MessageBox;
