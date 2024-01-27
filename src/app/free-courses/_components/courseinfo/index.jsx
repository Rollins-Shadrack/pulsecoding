import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Curriculum from '@/components/Curriculum';
import Container from '@/components/Container';
import FAQ from '@/components/FAQ';
import Reason from './Reason';

const index = () => {
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
        <Curriculum />
      </TabsContent>
      <TabsContent value="faqs">
        <FAQ Bodyclass="my-5 py-10 flex flex-col items-center " />
      </TabsContent>
      <TabsContent value="reason">
        <Reason />
      </TabsContent>
    </Tabs>
  );
}

export default index