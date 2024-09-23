"use client";

import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { type } from "os";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";

type SignInType = {
  email: string;
  password: string;
};

const SignIn = () => {
  const [isShowpassword, setIsShowpassword] = useState<boolean>(false);
  const form = useForm<SignInType>({
    defaultValues: { email: "", password: "" },
  });

  const { register, handleSubmit } = form;

  const onSubmit = (values: SignInType) => {};

  const toggleShowPassword = () => {
    setIsShowpassword((prev) => !prev);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"> */}
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl className="relative">
                    <div>
                      <Input
                        placeholder="Password"
                        {...field}
                        type={isShowpassword ? "text" : "password"}
                      />
                      {isShowpassword ? (
                        <FiEye
                          className="cursor-pointer absolute top-[50%] translate-y-[-50%] right-5"
                          onClick={toggleShowPassword}
                        />
                      ) : (
                        <FiEyeOff
                          className="cursor-pointer absolute top-[50%] translate-y-[-50%] right-5"
                          onClick={toggleShowPassword}
                        />
                      )}
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
