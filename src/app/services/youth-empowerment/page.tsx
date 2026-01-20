import { Metadata } from 'next';
import YouthEmpowerment from '../../../components/ourService/YouthsEmpowerment'
import React from 'react'


export const metadata: Metadata = {
  title: "Youth Empowerment NGO in Hyderabad | Shine NGO",
  description:
    "Shine NGO empowers youth through skill development, training, leadership programs, and employment guidance initiatives.",
};

const page = () => {
  return (
    <div>
      <YouthEmpowerment />
    </div>
  )
}

export default page