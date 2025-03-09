import { motion } from "framer-motion";
import { Bell, Pencil, X } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../../config";
import Swal from "sweetalert2";

export default function EventCardTrainer({
  id,
  title,
  trainer,
  trainee,
  startedTime,
  endTime,
  user,
}) {
  const [trainerData] = useState(trainer);
  const [traineeData] = useState(trainee);
  const [userData] = useState(user);
  const currentDate = new Date();

  useEffect(() => {}, []);

  const formatData = (mongoDate) => {
    if (!mongoDate) return;
    const date = new Date(mongoDate);
    const dateFormat = date.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      timeZone: "UTC",
    });

    return `${dateFormat}`;
  };

  const formatDate = (mongoDate) => {
    if (!mongoDate) return;
    const date = new Date(mongoDate);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  };

  const handleDelete = () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showConfirmButton: "Confirm",
        showCancelButton: true,
      }).then((res) => {
        if (res.isConfirmed) {
          Swal.fire({
            title: "Already deleted!",
            icon: "success",
            timer: 2000,
          }).then(async () => {
            await axios.delete(`/api/meeting/${id}`, config.headers());
            window.location.reload();
          });
        }
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleFeedback = async () => {
    try {
      await axios
        .patch(`/api/meeting/${id}`, { status: "finish" }, config.headers())
        .then(() => {
          Swal.fire({
            title: "Meeting is ended!",
            icon: "success",
            timer: 2000,
          });
        });
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <div className="p-3 flex border border-black rounded-lg">
      <div className="flex flex-col md:flex-row items-start md:items-center w-full justify-between">
        <div className="flex w-full justify-between">
          {/* text + image */}
          <div className="flex justify-center items-center md:flex-row">
            {userData?._id === trainerData?._id ? (
              <img
                src={traineeData?.profileImage}
                className="size-[50px] object-cover bg-lime mr-4 rounded-lg border-none"
              />
            ) : (
              <img
                src={trainerData?.profileImage}
                className="size-[50px] object-cover bg-lime mr-4 rounded-lg border-none"
              />
            )}

            <div className="flex flex-col">
              <div className="flex flex-col">
                {userData?._id === trainerData?._id ? (
                  <div className="font-semibold text-[20px]">
                    {traineeData?.fullname}
                  </div>
                ) : (
                  <div className="font-semibold text-[20px]">
                    {trainerData?.fullname}
                  </div>
                )}

                <div>{title}</div>
              </div>
              <div className="flex gap-4">
                <div className="block md:hidden">{formatData(startedTime)}</div>
                <div className="block md:hidden">
                  {formatDate(startedTime)} - {formatDate(endTime)}
                </div>
              </div>
            </div>
          </div>
          {/* icons */}
          {new Date(endTime) < currentDate ? (
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className=" md:hidden items-center gap-1 flex cursor-pointer rounded-lg border my-3 p-1 px-6 border-green text-green"
            >
              <div>Feedback</div>
            </motion.div>
          ) : (
            <div className="flex flex-col-reverse gap-2">
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="block md:hidden justify-items-center items-center content-center gap-1 cursor-pointer rounded-lg border p-2 md:p-1 px-0 md:px-3 border-gray text-gray"
              >
                <Bell size={16} />
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="block md:hidden justify-items-center items-center content-center gap-1 cursor-pointer rounded-lg border p-2 md:p-1 text-white bg-lightblue"
              >
                <Pencil size={16} />
              </motion.div>
              <motion.div
                onClick={handleDelete}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="block md:hidden justify-items-center items-center content-center gap-1 cursor-pointer rounded-lg border p-2 text-white bg-red"
              >
                <X size={16} />
              </motion.div>
            </div>
          )}
        </div>
        <div className="flex w-full">
          <div className="hidden md:block w-full">
            {formatData(startedTime)}
          </div>
          <div className="hidden md:block w-full">
            {formatDate(startedTime)} - {formatDate(endTime)}
          </div>
        </div>
        {new Date(endTime) < currentDate ? (
          <motion.div
            onClick={handleFeedback}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="hidden md:block items-center gap-1 cursor-pointer rounded-lg border my-3 p-1 px-8 border-green text-green"
          >
            <div className="flex">Finish</div>
          </motion.div>
        ) : (
          <div className="flex gap-3 justify-end">
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="hidden md:block items-center content-center gap-1 cursor-pointer rounded-lg border p-2 md:p-1 md:px-3 border-gray text-gray"
            >
              <Bell className="w-[20px] h-[20px]" />
            </motion.div>
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="hidden md:block items-center content-center gap-1 cursor-pointer rounded-lg border p-2 text-white bg-lightblue"
            >
              <Pencil className="w-[20px] h-[20px]" />
            </motion.div>
            <motion.div
              onClick={handleDelete}
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="hidden md:block items-center content-center gap-1 cursor-pointer rounded-lg border p-2 text-white bg-red"
            >
              <X className="w-[20px] h-[20px]" />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
