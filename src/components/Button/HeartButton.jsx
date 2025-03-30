import React, { useEffect, useState } from "react";
import { config } from "../../config";
import axios from "axios";

const HeartButton = ({ courseId, isLike }) => {
  const [liked, setLiked] = useState(isLike || false);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    fetchLike();
  }, []);

  const fetchLike = async () => {
    const res = await axios.get(`${API_BASE_URL}/course/myFavorite`, config.headers());
    const isLiked = res.data.find((val) => val._id === courseId);
    if (isLiked) {
      setLiked(true);
    }
  };

  const handleLike = async () => {
    const res = await axios.patch(
      `${API_BASE_URL}/course/${courseId}/like`,
      {},
      config.headers()
    );
    if (res.status === 200) {
      setLiked(true);
    }
  };

  const handleUnlike = async () => {
    const res = await axios.patch(
      `${API_BASE_URL}/course/${courseId}/removeLike`,
      {},
      config.headers()
    );
    if (res.status === 200) {
      setLiked(false);
    }
  };

  return (
    <>
      {liked ? (
        <button onClick={handleUnlike}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-7 h-7 ${
              liked
                ? "text-red hover:text-red-400"
                : "text-gray-400 fill-none hover:text-black"
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              className="heart"
              fillRule="evenodd"
              strokeWidth="2"
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            />
          </svg>
        </button>
      ) : (
        <button onClick={handleLike}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-7 h-7 ${
              liked
                ? "text-red hover:text-red-400"
                : "text-gray-400 fill-none hover:text-black"
            }`}
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              className="heart"
              fillRule="evenodd"
              strokeWidth="2"
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            />
          </svg>
        </button>
      )}
    </>
  );
};

export default HeartButton;
