'use client'
import { newsLetterSchema } from '@/lib/validations/formSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
    const form = useForm({
        resolver: yupResolver(newsLetterSchema),
        defaultValues: {
            email:""
        },
        mode:"onSubmit"
    })

    async function onSubmit(values) {
        console.log(values)
    }
  return (
    <div className="py-20 bg-brandDark overflow-hidden text-white">
      <div className="lg:w-3/5 w-full px-4 mx-auto text-center flex flex-col items-center justify-center">
        <h1 className="lg:text-5xl text-3xl font-bold ">
          Enter your Email to get the <br /> Latest News{" "}
        </h1>
        <p className="my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, aperiam adipisicing elit. Eos, aperiam.</p>
        <div className="lg:w-3/5 bg-white py-2 px-5 rounded-2xl my-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex justify-between space-x-2 w-full">
              <FormField
                control={form.control}
                name="email"
                className="w-full"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Enter your email address" className="border-0 w-2/3" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="bg-brandPrimary px-5 rounded-2xl" type="submit">
                Get Started
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Newsletter