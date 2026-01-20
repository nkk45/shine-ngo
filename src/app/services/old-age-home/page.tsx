import { Metadata } from 'next';
import OldAge from '../../../components/ourService/OldAge'
import React from 'react'

export const metadata: Metadata = {
  title: "Old Age Home Support Services in Hyderabad | Shine NGO",
  description:
    "Shine NGO provides care, food, shelter, and emotional support for elderly and mentally challenged individuals in Hyderabad.",
};

const page = () => {
  return (
    <div>
      <OldAge />
    </div>
  )
}

export default page