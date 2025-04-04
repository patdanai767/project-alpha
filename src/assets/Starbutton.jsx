import React, { useState } from 'react';

const StarButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <svg 
    fill="#000000" 
    height="25px" width="25px" 
    version="1.1" id="Capa_1" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" 
	  viewBox="0 0 500 500" 
    xml:space="preserve">
<polygon points="473.486,182.079 310.615,157.952 235.904,11.23 162.628,158.675 0,184.389 117.584,299.641 91.786,462.257 
	237.732,386.042 384.416,460.829 357.032,298.473 "/>
</svg>
  );
};

export default StarButton;