'use client'
import { newsLetterSchema } from '@/lib/validations/formSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import data from '@/constants/data.json'

const Newsletter = () => {
  const { header, desc } = data.aboutpage.newsLetterSection;
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
        <h1 className="lg:text-5xl text-3xl font-bold ">{header}</h1>
        <p className="my-4">{desc}</p>
        <div className="lg:w-3/5  bg-white p-1  rounded-lg my-5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-3 gap-3 ">
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="email"
                  className=""
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Enter your email address" className="border-none" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button className="bg-brandPrimary px-5 rounded-lg " type="submit">
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