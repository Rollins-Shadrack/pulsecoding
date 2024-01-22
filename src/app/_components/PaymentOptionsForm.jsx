"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { paymentOptionsSchema } from "@/lib/validations/formSchema";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

const PaymentOptionsForm = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://restcountries.com/v3.1/region/europe');
        const data = await response.json();
        if (data) {
          const countryList = data.map(country => ({
            callingCode: country.idd ? `${country.idd.root}${country.idd.suffixes[0]}` : "N/A",
            name: country.name.common || "N/A",
            flag: country.flags.png || "N/A"
          }));
          setLoading(false)
          setCountries(countryList)
        }
      } catch (error) {
        console.log(error.message)
        setLoading(false);
    }
    }
    fetchCountries();
  }, [])
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
        <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1  lg:grid-cols-4 gap-5 ">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Enter Full Name" {...field} />
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
                <div className="flex space-x-2">
                  <Select>
                    <SelectTrigger className="w-[50px]">
                      <SelectValue
                        placeholder={
                          <img
                            alt={`Flag`}
                            className="inline-block mr-2"
                            height={20}
                            src={"https://flagcdn.com/w320/gg.png"}
                            style={{
                              aspectRatio: "20/20",
                              objectFit: "cover",
                            }}
                            width={20}
                          />
                        }
                      />
                    </SelectTrigger>
                    <SelectContent className="w-5">
                      <SelectGroup>
                        <SelectLabel>code</SelectLabel>
                        {countries.map((country) => (
                          <SelectItem value={country.callingCode}>
                            <img
                              alt={`${country.name} Flag`}
                              className="inline-block mr-2"
                              height={20}
                              src={country.flag}
                              style={{
                                aspectRatio: "20/20",
                                objectFit: "cover",
                              }}
                              width={20}
                            />
                            {country.callingCode}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Input
                    className="border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 flex-1"
                    placeholder="Enter phone number"
                    {...field}
                    id="phoneNumber"
                  />
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* <FormField
            control={form.control}
            name="mobileNumber"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PhoneInput
                    className="py-2 sm:py-3 md:py-4 lg:py-5 px-4 w-full"
                    country="de"
                    regions={"europe"}
                    placeholder="Enter phone number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          <Button type="submit">Continue</Button>
        </form>
      </Form>
    </div>
  );
};

export default PaymentOptionsForm;
