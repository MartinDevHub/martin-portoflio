import React from "react";
import ContactForm from "@/app/components/ui/contact-form";

export default function Contact() {
  return (
    <div>
      <div className="text-2xl sm:text-4xl sm:pt-5 sm:py-5 p-2 font-bold sm:flex sm:justify-center mb-3 text-white">
        Let&apos;s connect!
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}
