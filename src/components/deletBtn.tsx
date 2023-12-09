import React, { useContext } from "react";
import { deleteUser } from '@/lib/deleteUser';
import { UsersContext } from "@/providers";
import { useRouter } from "next/navigation";

export default function DeleteBtn(slug:any ) {
  const [users, setUsers] = useContext(UsersContext);
  const router = useRouter()

  const handleDelete = async () => {
    try {
      await deleteUser(slug["slug"]);
      const newUsers = [...users];
      let index = newUsers.findIndex((u:any) => u.id == slug["slug"]);
      newUsers.splice(index, 1);
      setUsers(newUsers)
      router.push('/users');

    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  return (
    <div className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 m-10 px-5 py-2.5 text-center :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800'>
      <button onClick={ handleDelete} 
      >
        Delete
      </button>
    </div>
  );
}
