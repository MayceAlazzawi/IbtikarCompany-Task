"use client";
import Link from "next/link";
import React, { useState } from "react";

type Props = {
    allUsers: {
        users: any;
        allUsers: {
            limit: number;
            skip: number;
            total: number;
            users: [];
        };
    };
};

export default function table(allUsers: Props) {
    const [ listAllUsers, setListAllUsers] = useState(allUsers.allUsers)
   
    const listAllUsersfunc = listAllUsers.users.map((user: any) => (
        <tr className="border odd:bg-white odd: even:bg-gray-50 even: :bg-gray-800 border-b  :border-gray-700">
            <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  :text-white"
            >
                <Link href={`/user/${user.id}`}>{user.firstName}</Link>
            </th>
            <td className="px-6 py-4">{user.age}</td>
            <td className="px-6 py-4">{user.gender}</td>
            <td className="px-6 py-4">{user.email}</td>
            <td className="px-3 py-4">
                <Link
            href={`/user/${user.id}`}
            className="font-medium text-blue-600  :text-blue-500 hover:underline"
          >
            View more
          </Link>
                {/* <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-3 text-center w-full"
                    onClick={() => {
                        deleteUser(user.id)
                        // let newList = listAllUsers.users.splice(0, 1)
                        // setListAllUsers(newList)
                    }}
                >
                    Delete
                </button> */}
            </td>
        </tr>
    ));

    return (
        <div className="flex justify-center items-center overflow-x-auto shadow-md sm:rounded-lg">
            <table className="border rounded-xl w-96 text-sm text-left rtl:text-right text-gray-500  :text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50  :bg-gray-700  :text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            User name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Age
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Gender
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Details
                        </th>
                    </tr>
                </thead>
                <tbody>{listAllUsersfunc}</tbody>
            </table>
        </div>
    );
}
