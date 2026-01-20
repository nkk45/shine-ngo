import { Metadata } from 'next';
import CovidWidowWomen from '../../../components/ourService/CovidWidowWomen'

import React from 'react'

export const metadata: Metadata = {
  title: "Covid Widow Women Empowerment NGO in Hyderabad | Shine NGO",
  description:
    "Shine NGO supports COVID widow women through livelihood assistance, emotional support, and empowerment programs across India.",
};
const page = () => {
  return (
    <div>
      <CovidWidowWomen />
    </div>
  )
}

export default page