import React from "react";
import ContactForm from "@/app/components/ui/contact-form";

export default function Contact() {
  return (
    <div>
      <div className="text-4xl p-5 font-bold sm:flex sm:justify-center">
        Let&apos;s connect!
      </div>
      <div>
        <ContactForm />
      </div>
    </div>
  );
}
