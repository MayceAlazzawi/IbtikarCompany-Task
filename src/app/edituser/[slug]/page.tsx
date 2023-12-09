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



// const users = [
//   {id: 1, name: 'Ali'}, // 0
//   {id: 2, name: 'Saif'}, // 1
//   {id: 3, name: 'Mays'}, // 2
// ];

// const findUser = users.find(u => u.id == 2);
// findUser.name = 'Hasan';
// users[1] = {
//   ...findUser,
//   age: newAge,
// }

// const newUsers = [...users];

// setUsers()


// {"users":
// [{
//   "id":50,"firstName":"Johnathon","lastName":"Predovic","maidenName":"Will",
// "age":18,"gender":"male","email":"xlinster1d@bravesites.com","phone":"+351 572 534 5789",
// "username":"xlinster1d","password":"WHAE1AtmDh","birthDate":"1965-03-22",
// "image":"https://robohash.org/nisietqui.png","bloodGroup":"B−",
// "height":160,"weight":75.7,"eyeColor":"Amber",
// "hair":{"color":"Blond","type":"Straight"},
// "domain":"booking.com","ip":"203.203.88.16",
// "address":
// {"address":"416 McIver Street",
// "city":"Nashville",
// "coordinates":{"lat":36.10436,"lng":-86.74411599999999},
// "postalCode":"37211","state":"TN"},
// "macAddress":"42:A3:F3:72:BA:9A",
// "university":"Instituto Politécnico de Coimbra","bank":{"cardExpire":"11/22","cardNumber":"3566999107446018","cardType":"jcb","currency":"Euro","iban":"GE83 VQ05 7695 5638 2069 95"},"company":{"address":{"address":"172 Alburg Springs Road","city":"Alburgh","coordinates":{"lat":44.995827,"lng":-73.2201539},"postalCode":"05440","state":"VT"},"department":"Engineering","name":"Borer and Sons","title":"Assistant Professor"},"ein":"60-0161254","ssn":"336-16-4564","userAgent":"Mozilla/5.0 (Windows NT 5.2; WOW64) AppleWebKit/535.1 (KHTML, like Gecko) Chrome/13.0.782.41 Safari/535.1"}],"total":1,"skip":0,"limit":1}