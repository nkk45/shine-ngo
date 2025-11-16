import Image from "next/image";
import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918099990221"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6  mb-10 rounded-full flex items-center justify-center z-50"
    >
      <Image
        src="/wa-me.png" 
        alt="WhatsApp"
        width={56}
        height={56}
      />
    </a>
  );
};

export default WhatsAppButton;
