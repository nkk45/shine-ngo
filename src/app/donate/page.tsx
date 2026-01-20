import DonateNow from '@/src/components/donateNow/DonateNow'
import { Metadata } from 'next';
import React from 'react'


export const metadata: Metadata = {
  title: "Donate to Trusted NGO in Hyderabad | Shine NGO",
  description:
    "Support Shine NGO’s women empowerment, elderly care, and feeding programs through secure donations and fundraising initiatives.",
};
const page = () => {
  return (
    <div>
        <DonateNow />
    </div>
  )
}

export default page