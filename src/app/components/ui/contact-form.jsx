"use client";

import React from "react";
import { useForm } from "@formspree/react";

export default function ContactForm() {
  const [state] = useForm("mleqbzyv");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form
      id="fs-frm"
      name="simple-contact-form"
      acceptCharset="utf-8"
      action="https://formspree.io/f/mleqbzyv"
      method="post"
      className="max-w-md mx-auto"
    >
      <fieldset id="fs-frm-inputs">
        <div className="mb-4">
          <label htmlFor="full-name" className="block text-gray-600 py-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="full-name"
            placeholder="First and Last Name"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400 text-gray-800"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email-address" className="block text-gray-600 py-2">
            Email Address
          </label>
          <input
            type="email"
            name="_replyto"
            id="email-address"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400 text-gray-800"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-600 py-2">
            Message
          </label>
          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Message"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-400 text-gray-800"
          />
        </div>
        <input
          type="hidden"
          name="_subject"
          id="email-subject"
          value="Contact Form Submission"
        />
      </fieldset>
      <input
        type="submit"
        value="Submit"
        className="w-full px-4 py-2  text-white rounded-md cursor-pointer"
      />
    </form>
  );
}
