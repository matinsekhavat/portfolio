import React from "react";
import { Phone } from "lucide-react";
import { e2p } from "../_utils/replaceNumber";

interface ContactUsProps {
  description: string;
  title: string;
  Icon: JSX.Element;
}

const ContactUs: React.FC<ContactUsProps> = ({ Icon, description, title }) => {
  return (
    <div className="flex items-center gap-4 ">
      <span className="size-14 p-2 bg-accent-800 rounded-full flex items-center justify-center">
        {Icon}
      </span>
      <div className="space-y-4">
        <p className="text-gray-50 font-bold text-lg">{title}</p>
        <p>{e2p(description)}</p>
      </div>
    </div>
  );
};

export default ContactUs;
