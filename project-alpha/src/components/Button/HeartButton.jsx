import React, { useState } from 'react';

const HeartButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <button
      onClick={toggleLike}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-7 h-7 ${liked ? 'text-red-500 hover:text-red-400' : 'text-gray-400 fill-none hover:text-black'}`}
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          class = "heart"
          fillRule="evenodd"
          strokeWidth='2'
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        />
      </svg>
    </button>
  );
};

export default HeartButton;