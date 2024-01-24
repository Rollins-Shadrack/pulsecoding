"use client";
import  Button  from "@/components/Button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { paymentOptionsSchema } from "@/lib/validations/formSchema";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Input } from "@/components/ui/input";


const PaymentOptionsForm = () => {

  const form = useForm({
    resolver: yupResolver(paymentOptionsSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
    },
    mode: "onSubmit",
  });

  async function onSubmit(values) {
    console.log(values);
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="lg:flex lg:space-x-5 lg:space-y-0 space-y-4  ">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Full name" {...field} />
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
                <FormControl>
                  <Input placeholder="Email" {...field} />
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
                <PhoneInput  {...field} placeholder="Enter Mobile Number" className="border-0" />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button text="Continue" className="bg-black text-white uppercase font-semibold " >Continue</Button>
        </form>
      </Form>
    </div>
  );
};

export default PaymentOptionsForm;
