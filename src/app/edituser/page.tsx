"use client";
import React, { useState } from "react";
import { fetchEdits } from "../../lib/fetchEdits";
import Link from "next/link";
export default function page() {
  const [firstName, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="p-10">
      <Link href="/">Back to home</Link>
    <form className="max-w-sm mx-auto h-screen flex justify-center flex-col">
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
        />{" "}
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
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 :text-white">
          Phone number
        </label>
        <input
          type="text"
          id="phone"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600  :focus:ring-blue-500 :focus:border-blue-500"
          onChange={(e) => setPhone(e.target.value)}
        />{" "}
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 :text-white">
          Adress:
        </label>
        <label className="block mb-2 text-sm font-medium text-gray-900 :text-white">
          City
        </label>
        <input
          type="text"
          id="city"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600  :focus:ring-blue-500 :focus:border-blue-500"
          onChange={(e) => setCity(e.target.value)}
        />{" "}
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 :text-white">
          blood group
        </label>
        <input
          type="text"
          id="bloodGroup"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 :bg-gray-700 :border-gray-600  :focus:ring-blue-500 :focus:border-blue-500"
          onChange={(e) => setBloodGroup(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800"
     onClick={(e) => {
      e.preventDefault()
      fetchEdits(firstName, age, bloodGroup, city, phone, email)
      console.log("Changes saved ")
     }}
     >
        Save
      </button>
    </form>
    </div>
  );
}
