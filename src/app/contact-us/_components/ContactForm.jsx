'use client'
import Container from '@/components/Container'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { contactUsSchema } from '@/lib/validations/formSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { MailCheck, Send } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Textarea } from '@/components/ui/textarea';
import Button from '@/components/Button';
import ReCAPTCHA from 'react-google-recaptcha';
import { Resend } from 'resend';

const ContactForm = ({data}) => {
  const recaptchaSiteKey = "6LcONF4pAAAAAAmKQVu-K54kpH5ZWX6ZcQ01g52s"

  // const resend = new Resend(process.env.RESEND_API_KEY);

  const form = useForm({
    resolver: yupResolver(contactUsSchema),
    defaultValues: {
      firstName: "",
      surname: "",
      email: "",
      mobileNumber: "",
      city: "",
      country: "",
      message: "",
      capVal: "",
    },
    mode: "onSubmit",
  });

  async function onSubmit(values) {
    console.log(values);
    // await resend.emails.send({
    //   from: values.email,
    //   to: "rshadrackochieng@gmail.com",
    //   subject: "Contact Us",
    //   text: values.message
    // });
  }
  return (
    <div className="py-16">
      <Container>
        <div className="lg:w-2/3 w-full mx-auto">
          <h1 className="font-bold text-3xl lg:text-5xl leading-tight uppercase text-center">{data.header}</h1>
          <p className="my-5 lg:text-lg text-base text-center tracking-wider">{data.desc}</p>
          <Card>
            <CardHeader>
              <CardTitle className="inline-flex items-center justify-center mb-5">
                {data.subtitle} <MailCheck className="w-8 h-8 ml-2" />
              </CardTitle>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter First name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="surname"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Surname</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter Surname" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="mobileNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number</FormLabel>
                          <PhoneInput {...field} placeholder="Enter Mobile Number" inputStyle={{ padding: "16px 40px", width: "100%" }} />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>City</FormLabel>
                          <Input placeholder="Enter City" {...field} />
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Country</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Country" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Please share with us the reason for contacting us" className="resize-none" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="capVal"
                      render={({ field }) => (
                        <FormItem>
                          <ReCAPTCHA {...field} sitekey={recaptchaSiteKey} />
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button text="Send" icon={<Send />} className="bg-black text-white " />
                  </form>
                </Form>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default ContactForm