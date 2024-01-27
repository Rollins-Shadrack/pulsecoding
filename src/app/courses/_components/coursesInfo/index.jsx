import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from '@/components/Container';
import AboutCourse from './AboutCourse';
import ClassSchedule from './ClassSchedule';
import Team from '@/components/Team';
import Curriculum from './Curriculum';
import Finance from './Finance';
import Dates from './Dates';

const index = () => {
  return (
    <Tabs defaultValue="schedule" className="w-full">
      <Container>
        <TabsList className="grid w-full grid-cols-6  mx-auto ">
          <TabsTrigger value="about">About this course</TabsTrigger>
          <TabsTrigger value="schedule">Class Schedule</TabsTrigger>
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="team">Our Team</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
          <TabsTrigger value="dates">Dates</TabsTrigger>
        </TabsList>
      </Container>
      <TabsContent value="about">
        <AboutCourse />
      </TabsContent>
      <TabsContent value="schedule">
        <ClassSchedule />
      </TabsContent>
      <TabsContent value="curriculum">
        <Curriculum />
      </TabsContent>
      <TabsContent value="team">
        <Team heading={"Our Team"} headingClass={"font-bold text-center mt-10 text-2xl"} />
      </TabsContent>
      <TabsContent value="finance">
        <Finance />
      </TabsContent>
      <TabsContent value="dates">
        <Dates />
      </TabsContent>
    </Tabs>
  );
}

export default index