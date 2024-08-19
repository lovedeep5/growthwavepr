"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { contactForm } from "@/gateways/contact";
import { ContactForm as ContactFormType } from "@/app/types/contactForm";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isSubmitted, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormType) => {
    try {
      const request = await contactForm(data);
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8 ">
          <div className=" relative ">
            <Input
              type="text"
              {...register("name", { required: "Required" })}
              placeholder="Name*"
            />
            {errors.name && (
              <p className="font-light text-sm text-red-500 absolute p-1">
                {errors.name.message}
              </p>
            )}
          </div>
          <div className=" relative ">
            <Input
              type="email"
              {...register("email", { required: "Required" })}
              placeholder="Email*"
            />
            {errors.email && (
              <p className="font-light text-sm text-red-500 absolute p-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className=" relative ">
            <Input
              type="text"
              {...register("phone", {
                required: "Required",
                minLength: {
                  value: 10,
                  message: "Should have 10 numbers",
                },
                pattern: /[0-9]/i,
              })}
              placeholder="Phone*"
            />
            {errors.phone && (
              <p className="font-light text-sm text-red-500 absolute p-1">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className=" relative ">
            <Textarea
              {...register("message", { required: "Required" })}
              placeholder="Message*"
            />
            {errors.message && (
              <p className="font-light text-sm text-red-500 absolute p-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <div>
            <Button
              type="submit"
              variant="default"
              className="uppercase ml-auto mb-1"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </div>

          <div>
            {isSubmitSuccessful && isSubmitted && (
              <p className=" text-green-600 font-light text-sm ">
                Thank you, We will get back to you!!
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
