import React from 'react';
import { FaDownload } from "react-icons/fa";

const Download = () => {
  return (
    <a
      href='/AshirbadMERN .pdf'
      target='_blank'
      rel='noopener noreferrer'
      className='flex flex-row text-LightGray items-center gap-x-4 pb-6 pt-4'
    >
      <span className='text-Snow'>Download Resume</span>
      <span><FaDownload /></span>
    </a>
  );
};

export default Download;
