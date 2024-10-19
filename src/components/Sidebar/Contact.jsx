import React from 'react';

const Contact = () => {
  const email = "ashirbadprusty3@gmail.com";  // Replace with your actual email
  const phone = "+91 8338045845";  // Replace with your actual phone number

  return (
    <div className='flex flex-col space-y-2 pt-6'>
      <div className='flex flex-col'>
        <span className='text-Snow text-xs font-bold'>Email Address</span>
        {/* Mailto Link using a regular <a> tag */}
        <span className='text-xs text-gray-600'>
          <a href={`mailto:${email}`}>{email}</a>
        </span>
      </div>
      <div className='flex flex-col'>
        <span className='text-Snow text-xs font-bold'>Phone</span>
        <span className='text-xs text-gray-600'>{phone}</span>
      </div>
    </div>
  );
};

export default Contact;
