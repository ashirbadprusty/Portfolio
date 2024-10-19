import React from 'react';
import { AiFillCopyrightCircle } from 'react-icons/ai';
import { MdMail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className="bg-DarkGray py-3 px-2 md:px-4 w-full flex justify-between items-center text-xs font-normal text-LightGray ">
      <div className='flex items-center'>
        <div className="mr-1 text-base">
          <AiFillCopyrightCircle />
        </div>
        <span>2024 All Rights Reserved.</span>
      </div>
      <div className="flex items-center">
        <a target="_blank" rel="noreferrer">
          Made with ❤️ by <span className='font-bold'>Ashirbad</span>
        </a>
      </div>
      {/* Email section visible on md (1024px) and larger screens */}
      <div className="hidden md:flex items-center">
        <div className="mr-1 text-base">
          <MdMail />
        </div>
        <div>ashirbadprusty3@gmail.com</div>
      </div>
    </div>
  );
};

export default Footer;
