"use client";

import React from "react";
import { useForm } from "@formspree/react";

export default function ContactForm() {
  const [state] = useForm("mleqbzyv");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div>
      <form
        id="fs-frm"
        name="simple-contact-form"
        acceptCharset="utf-8"
        action="https://formspree.io/f/mleqbzyv"
        method="post"
      >
        <div className="max-w-lg m-auto border-2 border-blue-900 rounded-xl p-2 sm:p-5 w-2/3">
          <fieldset id="fs-frm-inputs">
            <div className="sm:mb-5 mb-1">
              <label
                htmlFor="full-name"
                className="block text-sm sm:text-lg text-gray-600 py-2"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="full-name"
                placeholder="First and Last Name"
                required
                className="w-full text-xs sm:text-lg p-1 sm:px-2 sm:py-1 border rounded-md focus:outline-none focus:border-blue-400 text-gray-800"
              />
            </div>
            <div className="sm:mb-5 mb-1">
              <label
                htmlFor="email-address"
                className="block text-sm sm:text-lg text-gray-600 py-2"
              >
                Email Address
              </label>
              <input
                type="email"
                name="_replyto"
                id="email-address"
                placeholder="Email"
                required
                className="w-full text-xs sm:text-lg p-1 sm:px-2 sm:py-1 border rounded-md focus:outline-none focus:border-blue-400 text-gray-800"
              />
            </div>
            <div className="sm:mb-4">
              <label
                htmlFor="message"
                className="block text-sm sm:text-lg text-gray-600 py-2"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                required
                className="w-full text-xs sm:text-lg p-1 sm:px-2 sm:py-1 border rounded-md focus:outline-none focus:border-blue-400 text-gray-800"
              />
            </div>
            <input
              type="hidden"
              name="_subject"
              id="email-subject"
              value="Contact Form Submission"
            />
          </fieldset>
        </div>
        <div className="flex justify-center mt-3">
          <input
            type="submit"
            value="Submit"
            className="text-white bg-blue-900  px-6 py-1 rounded-xl cursor-pointer text-sm sm:text-lg"
          />
        </div>
      </form>
    </div>
  );
}
