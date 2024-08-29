"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

const Services = () => {
  const workingHours = [
    { day: "Monday", open: "07:30", close: "17:00" },
    { day: "Tuesday", open: "07:30", close: "17:00" },
    { day: "Wednesday", open: "07:30", close: "17:00" },
    { day: "Thursday", open: "07:30", close: "17:00" },
    { day: "Friday", open: "07:30", close: "17:00" },
    { day: "Saturday", open: "10:00", close: "15:00" },
    { day: "Sunday", open: "Closed", close: "Closed" },
  ];

  // Get the current day as a string (e.g., 'Monday')
  const currentDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  const isOpenNow = (open, close) => {
    if (open === "Closed" || close === "Closed") return false;

    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    const [openHour, openMinute] = open.split(":").map(Number);
    const [closeHour, closeMinute] = close.split(":").map(Number);

    const openTime = openHour * 60 + openMinute;
    const closeTime = closeHour * 60 + closeMinute;

    return currentTime >= openTime && currentTime <= closeTime;
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7gxkntr",
        "template_h5w1fqd",
        form.current,
        "t7oLEec_OqGbhxe1z"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("Message sent successfully!"); // Show a success message

          form.current.reset();
        },
        (error) => {
          console.log("Failed to send email.", error.text);
          alert("Failed to send message. Please try again."); // Show an error message
          
        }
      );
  };

  return (
    <div>
      <div
        className="flex min-h-[100px] p-6 border-b-2 justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/nuts.jpg')" }}
      >
        <h1 className="text-2xl text-white italic font-semibold">
          The Art of Perfection in Seed Multiplication
        </h1>
      </div>
      <div className="flex flex-col bg-lime-600 h-28">
        <h1 className="font-extrabold text-4xl justify-center items-center flex  mt-3">Contact Us</h1>
        <h2 className="flex justify-center items-center text-white font-medium">
          Give us a call or fill in the Contact form
        </h2>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-row w-full justify-between p-8">
          {/* Contact Form */}
          <div className="w-1/2 p-4">
            <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
            <p className="mb-4">
              Feel free to ask any questions over the phone, or get in touch via our contact form below.
              Your message will be dispatched directly to our staff who will answer as soon as they can.
            </p>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-inherit flex flex-col"
            >
              <div className="flex flex-col gap-4 w-full">
                <div className="w-full mb-4">
                  <label className="font-semibold" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                    className="block w-full border-2 rounded-sm px-4 pl-2 mt-1 h-12"
                    required
                  />
                </div>

                <div className="w-full mb-4">
                  <label className="font-semibold" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email-Address"
                    className="block w-full border-2 rounded-sm px-4 pl-2 mt-1 h-12"
                    required
                  />
                </div>

                <div className="w-full mb-4">
                  <label className="font-semibold" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    pattern="[0-9]*"
                    name="phone"
                    placeholder="Phone Number"
                    className="block w-full border-2 rounded-sm px-4 pl-2 mt-1 h-12"
                    required
                  />
                </div>

                <div className="w-full mb-4">
                  <label className="font-semibold" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    className="block w-full border-2 rounded-sm px-4 pl-2 mt-1 h-12"
                  />
                </div>

                <div className="w-full mb-4">
                  <label className="font-semibold" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    className="block w-full border-2 rounded-sm px-4 pl-2 mt-1"
                    rows="4"
                    required
                  />
                </div>

                <div className="mt-4">
                  <button
                    className="bg-green-700 border-4 rounded-lg px-6 text-white"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="flex flex-col w-1/3">
            {/* Contact Information Table */}
            <div className="p-4 border-4 mb-4">
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <table className="w-full text-left">
                <tbody>
                  <tr>
                    <td className="py-2 font-semibold">Phone:</td>
                    <td className="py-2">(+265) 999330061 / (+265) 999886644</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Email:</td>
                    <td className="py-2"> <Link href="creativity.mw@outlook.com">creativity.mw@outlook.com</Link></td>
                  </tr>
                  <tr>
                    <td className=" font-semibold ">Address:</td>
                    <td className="">TPIN: 30954285<br></br>
                                         P.O. Box 1493, Lilongwe, Malawi<br></br>
                                         P.O. Box 59, Lumbadzi, Malawi
                                        
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Working Hours Table */}
            <div className="p-4 border-4">
              <h2 className="text-2xl font-bold mb-4">Working Hours</h2>
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="py-2">Day</th>
                    <th className="py-2">Open</th>
                    <th className="py-2">Close</th>
                    <th className="py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {workingHours.map(({ day, open, close }) => {
                    const isCurrentDay = day === currentDay;
                    return (
                      <tr
                        key={day}
                        className={isCurrentDay ? "bg-yellow-200" : ""}
                      >
                        <td className="py-2">{day}</td>
                        <td className="py-2">{open}</td>
                        <td className="py-2">{close}</td>
                        <td className="py-2">
                          {isOpenNow(open, close) ? (
                            <span className="text-green-500 font-bold">Open</span>
                          ) : (
                            <span className="text-red-500 font-bold">Closed</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
