import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import MilanoText from '../public/milano-text.svg';
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SubjectIcon from '@mui/icons-material/Subject';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

function ContactScreen({ handleClose }: any) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceID || !templateID || !userID) {
      console.error('EmailJS environment variables are not set');
      alert('EmailJS environment variables are not set');
      return;
    }

    try {
      const result = await emailjs.send(
        serviceID,
        templateID,
        formData,
        userID
      );
      alert('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Error sending email');
    }
  };

  return (
    <div className="w-screen h-screen backdrop-blur-2xl bg-opacity-60 bg-black z-20 fixed">
      <button
        onClick={() => handleClose()}
        className="rounded-md border border-slate-100 hover:border-red-500 text-white hover:text-red-500 p-2 absolute right-2 top-2"
      >
        <CloseIcon fontSize="large" />
      </button>
      <div className="flex flex-col justify-center text-center h-screen">
        <MilanoText className="fill-slate-100 pt-5 mb-5 md:pt-5 w-2/3 md:w-1/4 mx-auto" />
        <div className="flex flex-row justify-around mx-auto">
          <a href="https://www.instagram.com/mattmilanoart/" target="_blank">
            <InstagramIcon className="text-white text-6xl m-2 " />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100063465401119" target="_blank">
            <FacebookIcon className="text-white text-6xl m-2 " />
          </a>
        </div>
        <div className="grid place-content-center space-y-3 m-5 md:m-10 mb-10">
          <p className="text-white text-xs">
            For inquiries regarding art purchases, collaborations, other requests use the form below.
          </p>
          <form onSubmit={handleSubmit} className='space-y-2'>
            <div className="flex flex-row ">
              <AccountCircleIcon className="fill-white text-4xl h-8" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="ml-3 px-2 rounded-sm w-full lg:w-5/6 mx-auto"
              />
            </div>
            <div className="flex flex-row">
              <EmailIcon className="fill-white h-8 text-4xl relative" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="ml-3 px-2 rounded-sm w-full lg:w-5/6 mx-auto"
              />
            </div>
            <div className="flex flex-row">
              <SubjectIcon className="text-white h-8 text-4xl" />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="ml-3 px-2 rounded-sm w-full lg:w-5/6 mx-auto"
              />
            </div>
            <div className='flex-row'>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="p-3 rounded-sm w-full"
                placeholder="Message"
                cols={50}
                rows={4}
              ></textarea>
              <button type="submit" className="h-12 w-[200px] bg-sky-200 hover:bg-sky-400 text-slate-900 font-bold mt-3 rounded-sm">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactScreen;
