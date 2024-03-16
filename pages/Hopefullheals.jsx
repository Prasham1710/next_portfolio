import React from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import hopes from "../public/assets/projects/hope.jpg";
import Link from "next/link";
const hope = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          fill
          alt="/"
          style={{ objectFit: "cover" }}
          src={hopes}
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">
            Hopefull Heal </h2>
          <h3>NextJs/ React JS / Tailwind / Typescript</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
         
          <h2>Overview</h2>
          Welcome to Hopefull Heal – your comprehensive one-stop destination for
          all things related to cancer. Our platform is designed to provide a
          holistic approach to cancer care, offering a range of services to
          support individuals on their journey.
          <h4>E-commerce Portal for Cancer Medicines </h4> Explore our
          specialized e-commerce portal, dedicated to offering a curated
          selection of cancer medicines. Rest assured, our platform serves as a
          trustworthy source for your medical needs.
          <h4>Verified Research Database</h4> Immerse yourself in a meticulously
          verified database, empowering users with a wealth of research content
          covering every aspect of cancer. Stay informed about the latest
          advancements in cancer research through reliable and up-to-date
          information.<h4> Doctor Appointment Booking</h4> Connect with renowned
          doctors specializing in cancer care through our unique appointment
          booking system. Ensure timely access to expert advice and personalized
          healthcare solutions.
          <br></br>
          <Link href="https://github.com/Prasham1710/hopefullheal">
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
          <Link href="https://hopeforheals.vercel.app/">
            <button className="px-8 py-2 mt-4">Demo</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Next js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwindcss
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Typescript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDb
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Nodejs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Prisma
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Html5
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NextAuth
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default hope;
