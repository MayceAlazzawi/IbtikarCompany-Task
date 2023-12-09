import React from 'react'
import Table from "../../components/table"
import Link from "next/link"
import { getServerAuthSession } from "@/server/auth";
import { redirect } from 'next/navigation';

export default async function page() {
  const authSession = await getServerAuthSession()
  if (!authSession) {
    return redirect('/');
  }

  return (
    <div>
      <div className="div flex items-center justify-center flex-col ">
        <h1 className='font-semibold text-3xl mt-10'>Users List</h1>
          <Link href="/adduser" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-96 m-10 px-5 py-2.5 text-center :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800'>Add user</Link>
        <Table />
      </div>
    </div>
  )
}
