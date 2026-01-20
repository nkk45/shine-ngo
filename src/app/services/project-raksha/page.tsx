import { Metadata } from 'next';
import ProjectRaksha from '../../../components/ourService/ProjectRaksha'
import React from 'react'

export const metadata: Metadata = {
  title: "Project Raksha NGO in Hyderabad | Shine NGO",
  description:
    "Support women empowerment in Hyderabad through skill training, livelihood programs, and self-employment opportunities with Shine NGO.",
};

const page = () => {
  return (
    <div>
      <ProjectRaksha />
    </div>
  )
}

export default page