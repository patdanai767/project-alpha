import { motion } from "framer-motion";

function MessageBox({ text, sender }) {
  return (
    <motion.div>
      {sender ? (
        <div className="flex items-center w-[100px] h-fit">
          <div className="rounded-full w-[50px] h-[50px] mr-3 bg-lime">
            <img
              src=""
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </div>
          <div className="border p-3 m-1 bg-blue rounded-xl w-fit text-white">
            {text}
          </div>
          <div className="text-gray-300">18:00pm</div>
        </div>
      ) : (
        <div className="flex items-center justify-end">
          <div className="w-[40%] flex justify-end">
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
