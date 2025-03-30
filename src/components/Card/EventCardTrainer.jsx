import { motion } from "framer-motion";
import { Bell, Pencil, X } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import { config } from "../../config";
import Swal from "sweetalert2";
import Modal from "../Modal/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
  const [openModal, setOpenModal] = useState(false);
  const [data, setData] = useState({
    title: "",
    startedAt: "",
    endAt: "",
    trainee: "",
    description: "",
  });
  const [startDate, setStartDate] = useState(new Date(startedTime));
  const [endDate, setEndDate] = useState(new Date(endTime));
  const [trainees, setTrainees] = useState();
  const currentDate = new Date();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      if (id) {
        const res = await axios.get(`${API_BASE_URL}/meeting/${id}`);
        const resCourse = await axios.get(
          `${API_BASE_URL}/course/myCourse`,
          config.headers()
        );
        setData({
          title: res.data.title,
          startedAt: res.data.startedAt,
          endAt: res.data.endAt,
          trainee: res.data.trainee._id,
          description: res.data.description,
        });
        setTrainees(
          resCourse.data.trainees.filter((val) => val._id !== trainee._id)
        );
      }
    } catch (error) {
      throw new Error(error);
    }
  };

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

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);

    return currentDate.getTime() < selectedDate.getTime();
  };

  const filterPassedStartTime = (time) => {
    const startDateTime = startDate;
    const selectedDate = new Date(time);

    return startDateTime < selectedDate;
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
            await axios.delete(`${API_BASE_URL}/meeting/${id}`, config.headers());
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
        .patch(`${API_BASE_URL}/meeting/${id}`, { status: "finish" }, config.headers())
        .then(() => {
          Swal.fire({
            title: "Meeting is ended!",
            icon: "success",
            timer: 2000,
          }).then(() => {
            window.location.reload();
          });
        });
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        ...data,
        startedAt: startDate,
        endAt: endDate,
      };
      await axios
        .patch(`${API_BASE_URL}/meeting/${id}`, payload, config.headers())
        .then(() => {
          Swal.fire({
            title: "Already updated!",
            icon: "success",
            timer: 2000,
          }).then(() => {
            window.location.reload();
          });
        });
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <>
      {userData?._id === trainerData?._id ? (
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
                  <Skeleton />
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
                    <div className="block md:hidden">
                      {formatData(startedTime)}
                    </div>
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
                    onClick={() => setOpenModal(!openModal)}
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
                  onClick={() => setOpenModal(!openModal)}
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
      ) : (
        ""
      )}

      <Modal open={openModal}>
        <div className="justify-items-end mt-3 mr-3 w-[400px] md:w-[600px]">
          <X
            size={32}
            className="cursor-pointer"
            onClick={() => setOpenModal(false)}
          />
        </div>
        <div className="px-8 pb-8 grid gap-6">
          <h1 className="font-semibold text-[24px] flex justify-center">
            Edit event
          </h1>
          <div>
            <p className="text-[20px] font-medium mb-1">Trainee</p>
            <select
              name="trainee"
              onChange={handleChange}
              className="p-[12px] rounded-xl border border-lightblue bg-transparent w-full"
            >
              <option value={trainee?._id}>{trainee?.fullname}</option>
              {trainees
                ? trainees.map((val) => (
                    <option key={val?._id} value={val?._id}>
                      {val?.fullname}
                    </option>
                  ))
                : ""}
            </select>
          </div>
          <div>
            <p className="text-[20px] font-medium mb-1">Title</p>
            <input
              name="title"
              value={data.title}
              type="text"
              onChange={handleChange}
              className="p-[12px] rounded-xl border border-lightblue bg-transparent w-full overflow-x-scroll"
            />
          </div>
          <div>
            <p className="text-[20px] font-medium mb-1">Description</p>
            <textarea
              name="description"
              type="text"
              value={data.description}
              onChange={handleChange}
              className="p-[12px] rounded-xl border border-lightblue bg-transparent w-full overflow-x-scroll"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[20px] font-medium mb-1">Start</p>
              <DatePicker
                showTimeSelect
                dateFormat="Pp"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                minDate={new Date()}
                filterTime={filterPassedTime}
                className="text-center cursor-pointer p-[10px] rounded-xl border border-lightblue bg-transparent w-full"
              />
            </div>
            <div>
              <p className="text-[20px] font-medium mb-1">End</p>
              <DatePicker
                showTimeSelect
                dateFormat="Pp"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                filterTime={filterPassedStartTime}
                minDate={startDate}
                className="text-center cursor-pointer p-[10px] rounded-xl border border-lightblue bg-transparent w-full"
              />
            </div>
          </div>
          <motion.div
            onClick={handleSubmit}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="items-center justify-center flex cursor-pointer rounded-lg border p-1 px-6 bg-blue border-blue text-sky"
          >
            <div>Save Change</div>
          </motion.div>
        </div>
      </Modal>
    </>
  );
}
