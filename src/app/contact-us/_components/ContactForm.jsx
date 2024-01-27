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

const ContactForm = () => {
  const recaptchaSiteKey = "6LcONF4pAAAAAAmKQVu-K54kpH5ZWX6ZcQ01g52s"

  const form = useForm({
    resolver: yupResolver(contactUsSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      details: "",
      capVal :"",
    },
    mode: "onSubmit",
  });

  async function onSubmit(values) {
    console.log(values);
  }
  return (
    <div className="py-16">
      <Container>
        <div className="lg:w-2/3 w-full mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="inline-flex items-center justify-center">
                Reach Out to Us <MailCheck className="w-8 h-8 ml-2" />
              </CardTitle>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter Full name" {...field} />
                          </FormControl>
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
                      name="mobileNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile Number</FormLabel>
                          <PhoneInput
                            {...field}
                            placeholder="Enter Mobile Number"
                            // containerStyle={{ width: "100%" }}
                            inputStyle={{ padding: "16px 40px", width: "100%" }}
                          />
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="details"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Details</FormLabel>
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