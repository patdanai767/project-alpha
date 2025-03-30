import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bell, Star, X } from "lucide-react";
import Modal from "../Modal/Modal";
import axios from "axios";
import { config } from "../../config";
import Swal from "sweetalert2";

export default function EventCard({
  id,
  title,
  trainer,
  trainee,
  startedTime,
  endTime,
  status,
  user,
}) {
  const [trainerData] = useState(trainer);
  const [statusFeed] = useState(status);
  const [openModal, setOpenModal] = useState(false);
  const [rating, setRating] = useState();
  const [review, setReview] = useState();
  const [totalStars] = useState(5);
  const [course, setCourse] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("/api/course");
      setCourse(res.data.find((val) => val.createdBy._id === trainerData?._id));
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

  const handleReview = () => {
    setOpenModal(!openModal);
  };

  const handleChange = (e) => {
    setReview((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      const payload = { ...review, point: rating };
      await axios.patch(
        `/api/meeting/${id}`,
        { status: "end" },
        config.headers()
      );
      await axios
        .patch(`/api/course/${course._id}/review`, payload, config.headers())
        .then(() => {
          Swal.fire({
            title: "Success!",
            icon: "success",
            timer: 2000,

          }).then(() => {
            window.location.reload()
          });
          
        });
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <>
      {trainerData?._id ? (
        <div className="p-3 flex border mx-14 border-black rounded-lg">
          <div className="flex items-center w-full justify-between">
            <div className="flex">
              <img
                src={trainerData?.profileImage}
                className="w-[50px] h-[50px] object-cover bg-lime mr-4 rounded-lg border-none"
              />
              <div>
                <div className="font-semibold text-[20px]">
                  {trainerData?.fullname}
                </div>
                <div>{title}</div>
              </div>
            </div>
            <div>{formatData(startedTime)}</div>
            <div>
              {formatDate(startedTime)} - {formatDate(endTime)}
            </div>
            {statusFeed === "continue" && statusFeed ? (
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="items-center gap-1 flex cursor-pointer rounded-lg border p-1 px-6 border-slate-500 text-slate-500"
              >
                <div>Cancel reminder</div>{" "}
                <Bell className="w-[20px] h-[20px]" />
              </motion.div>
            ) : (
              <motion.div
                onClick={handleReview}
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="items-center gap-1 flex cursor-pointer rounded-lg border p-1 px-6 border-green text-green"
              >
                <div>Review</div> <Star className="w-[20px] h-[20px]" />
              </motion.div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}

      <Modal open={openModal}>
        <div className="justify-items-end mt-3 mr-3">
          <X
            size={32}
            className="cursor-pointer"
            onClick={() => setOpenModal(false) & setRating(0) & setReview({})}
          />
        </div>
        <div className="px-8 pb-8 grid gap-6">
          <h1 className="font-semibold text-[24px] flex justify-center">{`Review to ${trainerData?.fullname}`}</h1>
          <div className="flex justify-center gap-4">
            {[...Array(totalStars)].map((_, index) => {
              const starValue = index + 1;
              return (
                <motion.div
                  key={starValue}
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                >
                  <Star
                    size={32}
                    onClick={() => setRating(starValue)}
                    className="cursor-pointer"
                    strokeWidth={0}
                    fill={`${starValue <= rating ? "gold" : "gray"}`}
                  />
                </motion.div>
              );
            })}
          </div>
          <div>
            <p className="text-[20px] font-medium mb-1">Description</p>
            <textarea
              name="description"
              onChange={handleChange}
              className="p-[12px] rounded-xl border border-lightblue bg-transparent w-full overflow-x-scroll"
            />
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
            <div>Submit</div>
          </motion.div>
        </div>
      </Modal>
    </>
  );
}
