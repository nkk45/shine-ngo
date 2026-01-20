import { Metadata } from 'next';
import IdliHub from '../../../components/ourService/IdliHub'
import React from 'react'


export const metadata: Metadata = {
  title: "Feeding the Needy NGO in Hyderabad | Donate Meals",
  description:
    "Help feed the hungry through Shine NGO’s community feeding programs supporting homeless families, children, and the needy.",
};

const page = () => {
  return (
    <div>
      <IdliHub />
    </div>
  )
}

export default page