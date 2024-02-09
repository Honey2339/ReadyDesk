"use client";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import { Inter, Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";

const spacegrok = Space_Grotesk({ weight: "400", subsets: ["latin"] });

export default function Register() {
  const registerDiv = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };
  return (
    <main className="flex flex-col justify-center items-center">
      <div
        className={cn(
          spacegrok.className,
          "absolute top-72 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        )}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={registerDiv}
          className="bg-transparent border-white border text-white flex flex-col xl:mt-80 p-10 rounded-xl"
        >
          <h1 className="text-3xl mb-5 text-center font-bold underline">
            Register
          </h1>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-white"
              >
                Username
              </label>
              <Input name="username" placeholder="Enter Unique Username" />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-white"
              >
                Email Address
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-white"
              >
                Password
              </label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-white"
              >
                Confirm Password
              </label>
              <Input
                type="password"
                name="confirmpassword"
                placeholder="Re-type password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-slate-50 text-black py-2 px-4 font-bold rounded-md hover:bg-lime-100 transition duration-300"
            >
              Register
            </button>
          </form>
          <div className="mt-4 text-sm text-white text-center">
            <p>
              Don't have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Sign Up
              </a>
            </p>
            <p>
              Forgot your password?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Reset Password
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
