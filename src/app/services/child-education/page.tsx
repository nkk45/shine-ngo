import { Metadata } from 'next';
import ChildEducation from '../../../components/ourService/ChildEducation'
import React from 'react'

export const metadata: Metadata = {
  title: "ChildEducation NGO in Hyderabad | Shine NGO",
  description:
    "Shine NGO supports child education by providing learning resources, school support, and education opportunities for underprivileged children.",
};

const page = () => {
  return (
    <div>
        <ChildEducation />
    </div>
  )
}

export default page