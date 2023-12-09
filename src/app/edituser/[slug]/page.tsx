"use client";
import React, { useContext, useState } from "react";
import { fetchEdits } from "../../../lib/fetchEdits";
import Link from "next/link";
import { UsersContext } from "@/providers";
import { useRouter } from "next/navigation";

export default function page({ params }: { params: { slug: string } }) {
  const [firstName, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [users, setUsers] = useContext(UsersContext);
  const router = useRouter();

  return (
    <div className="p-10">
      <form className="max-w-sm mx-auto flex justify-center flex-col">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 :text-white">
            User name
          </label>
          <input
            type="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600  :focus:ring-blue-500 :focus:border-blue-500"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 :text-white">
            User email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600  :focus:ring-blue-500 :focus:border-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 :text-white">
            User age
          </label>
          <input
            type="age"
            id="age"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600  :focus:ring-blue-500 :focus:border-blue-500"
            required
            onChange={(e) => setAge(e.target.value)}
          />{" "}
        </div>
   
        {/* <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 :text-white">
            university
          </label>
          <input
            type="text"
            id="university"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600  :focus:ring-blue-500 :focus:border-blue-500"
            onChange={(e) => setUniversity(e.target.value)}
          />{" "}
        </div> */}
     
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"
         
          onClick={(e) => {
            e.preventDefault();
            if (!firstName || !age || !email) {
              setError(true);
              return;
            }
            fetchEdits(params.slug, firstName, age, email)
            const index = users.findIndex((u:any) => u.id == params.slug);
            const newUsers = [...users];
            newUsers[index] = {
              ...users[index],
              firstName: firstName,
              email: email, 
              age: age,
            }
            setUsers(newUsers)
            router.push('/users');
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}

