"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation"
import { createUser } from "@/lib/actions/patient.actions"

export enum FormFieldType {
  INPUT = 'input',
  CHECKBOX = 'checkbox',
  TEXTAREA = 'textarea',
  PHONE_INPUT = "phoneInput",
  DATE_PICKER = "datePicker",
  SKELETON = "skeleton",
  SELECT = "SELECT",
}

const PatientForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })

  async function onSubmit({ name, email, phone }: z.infer<typeof UserFormValidation>) {
    setIsLoading(true);

    try {
      // console.log("Form data:", { name, email, phone }); //  debugging

      
      const userData = { name, email, phone };
      const user = await createUser(userData);

      if (user) {
        router.push(`/patients/${user.$id}/register`); // redirect to the next page
      } else {
        console.log("User creation failed or user already exists.");
      }
    } catch (error) {
      console.error("Error during user creation:", error); // added detailed error logging
    } finally {
      setIsLoading(false); //  loading state is reset
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1>Hi there!👋</h1>
          <p className="text-dark-700"> Schedule Your First Appointment.</p>
        </section>

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name" 
          label="Full Name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user" 
        />

        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email" 
          label="Email"
          placeholder="JohnDoe@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email" 
        />

        <CustomFormField
          fieldType={FormFieldType.PHONE_INPUT}
          control={form.control}
          name="phone"
          label="Phone Number"
          placeholder="(+91) 9098-301-754"
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default PatientForm;
