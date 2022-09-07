import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .required("This field is required")
      .matches(
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        "Format example: name@example.com"
      ),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "This field needs atleast eight characters")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password needs atleast one letter, one number and one special character"
      ),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    window.location.replace('home')
  };
  return (
    <div className="px-5 py-12 flex flex-col h-full">
      <div className="mb-12 pt-10 flex flex-col justify-center pl-5">
        <h2 className="font-bold text-5xl text-yellow-400 pb-3">
          Believe Yourself
        </h2>
        <div className="flex items-center gap-6">
          <hr className="border-2 border-black w-12 absolute -left-6" />
          <p className="font-bold text-lg">Train like a pro</p>
        </div>
      </div>
      <div>
        <p className="font-bold pb-4">Log in with your credentials</p>
        <div className="h-full">
          <form action="" onSubmit={handleSubmit(handleData)} className="flex flex-col gap-4">
          {errors.email && (
            <div className="bg-yellow-400 p-2 rounded-lg -mr-[50%] max-w-[196px] -mb-10 pb-8">
              <p className="-mt-1">{errors.email?.message}</p>
            </div>
          )}
            <div className="h-12 bg-white flex items-center px-6 border border-[#9e9e9e] rounded-full">
              <input
                {...register("email")}
                type="text"
                placeholder="Enter your email..."
                className="outline-none"
              />
            </div>
            {errors.password && (
              <div className="bg-yellow-400 p-2 rounded-lg -mr-[50%] max-w-[196px] -mb-10 pb-8">
                <p className="-mt-1">{errors.password?.message}</p>
              </div>
            )}
            <div className="w-full h-12 bg-white flex items-center px-6 border border-[#9e9e9e] rounded-full">
              <input
                {...register("password")}
                type="password"
                placeholder="Enter your password..."
                className="outline-none"
              />
            </div>
            <div className="w-full h-12 bg-yellow-400 flex items-center rounded-full">
              <input type="submit" value="LOG IN" className="h-full w-full" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
