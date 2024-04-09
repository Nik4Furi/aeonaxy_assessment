import React, { useState } from 'react';

const HomeCard = ({ title, description, img }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`w-[40%] rounded overflow-hidden border shadow-lg ${isHovered && 'border-primary'  } cursor-pointer `}
      onClick={() => setIsHovered(!isHovered)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        className={`max-w-[80%] max-h-[30vh] mx-auto ${isHovered ? 'scale-85' : 'scale-60'} transition-transform`}
        src={img}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className={`font-bold text-xl mb-2 text-center ${isHovered && 'text-primary'}`}>{title}</div>
        <p className={`text-gray-700 text-center text-xs ${isHovered ? 'block' : 'hidden'} transition-opacity`}>{description}</p>
      </div>
    </div>
  );
};

export default HomeCard;
