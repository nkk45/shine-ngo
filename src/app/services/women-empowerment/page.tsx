import type { Metadata } from "next";
import React from "react";
import WomenEmpowerment from "../../../components/ourService/WomenEmpowerment";

export const metadata: Metadata = {
  title: "Women Empowerment NGO in Hyderabad | Shine NGO",
  description:
    "Support women empowerment in Hyderabad through skill training, livelihood programs, and self-employment opportunities with Shine NGO.",
};

const Page = () => {
  return (
    <div>
      <WomenEmpowerment />
    </div>
  );
};

export default Page;
