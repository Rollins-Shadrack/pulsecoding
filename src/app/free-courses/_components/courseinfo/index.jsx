import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Curriculum from '@/components/Curriculum';
import Container from '@/components/Container';
import FAQ from '@/components/FAQ';
import Reason from './Reason';
import data from '@/constants/data.json'

const index = () => {
  const { curricullumSection, faqsSection, reasonToTakeCourseSection } = data.freecoursespage;
  return (
    <Tabs defaultValue="curriculum" className="w-full my-14">
      <Container>
        <TabsList className="grid w-full lg:w-2/3 grid-cols-3  mx-auto ">
          <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
          <TabsTrigger value="faqs">FAQS</TabsTrigger>
          <TabsTrigger value="reason">Why Take this Course?</TabsTrigger>
        </TabsList>
      </Container>
      <TabsContent value="curriculum">
        <Curriculum data={curricullumSection} />
      </TabsContent>
      <TabsContent value="faqs">
        <FAQ data={faqsSection} Bodyclass="my-5 py-10 flex flex-col items-center " />
      </TabsContent>
      <TabsContent value="reason">
        <Reason data={reasonToTakeCourseSection} />
      </TabsContent>
    </Tabs>
  );
}

export default index