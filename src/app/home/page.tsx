import React from 'react'
import Table from "../../components/table"
import { fetchAllUsers } from "../../lib/allUsers";



const allUsers = await fetchAllUsers()


export default function page() {
  return (
    <div className="div">
      <Table allUsers={allUsers}/>
    </div>
  )
}
