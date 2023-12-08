import React from 'react'
import Table from "../components/table"
import { fetchAllUsers } from "../lib/allUsers";
import Link from "next/link"

const allUsers = await fetchAllUsers()

export default function page() {
  return (
    <div className="div flex items-center justify-center flex-col ">
      <h1 className='font-semibold text-3xl mt-10'>Users List</h1> 
      <div className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-96 m-10 px-5 py-2.5 text-center :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800'>
        <Link href="/adduser">Add user</Link>
      </div>
      <Table allUsers={allUsers}/>
    </div>
  )
}
