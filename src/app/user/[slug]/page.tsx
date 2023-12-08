"use client"
import Link from "next/link"
import React, { useState } from "react";
import Image from "next/image"
import { fetchSingleUser } from '@/lib/getSingleUser';
import Modal from "../../../components/modal"
export default async function page({ params }: { params: { slug: string } }) {
  const [open, setOpen] = useState(false);
  const user = await fetchSingleUser(params.slug);

  return (
    <div className="py-10 relative">
      <Link className="absolute my-10 p-10" href="/"> Back to home</Link>
    <div className="profile-page flex items-center justify-center flex-col my-8 w-full h-screen">
      <div className=" flex flex-col bg-white break-words w-5/6 sm:w-3/4 shadow-xl rounded-lg xl:h-[630px] bg-[#f3f7f7]">
        <div className="px-1 md:px-6 ">
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-row justify-between items-center w-full mt-5">
              <div className="w-1/2 lg:w-4/12 px-1 order-2 text-center lg:self-center">
                <Modal slug={params.slug} />
              </div>
              <div className="w-1/2 lg:w-4/12 order-1 text-center lg:self-center">
                <Link href="/edituser" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ">Edit</Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Image
              className="mr-2 inline h-20 w-20 rounded-full object-cover p-2 ring-2 ring-gray-300"
              src={`${user.image}`}
              alt="Profile image"
              width={50}
              height={50}
            />
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-black mb-2 tracking-[0.1rem]">
              {user.firstName} {user.lastName}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-semibold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text- text-gray-500 tracking-[0.1rem]">
                Gender: {user.gender}
              </i>
            </div>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-semibold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text- text-gray-500 tracking-[0.1rem]">
                Age:  {user.age}
              </i>
            </div> 
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-semibold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text- text-gray-500 tracking-[0.1rem]">
                Birth date:  {user.birthDate}
              </i>
            </div>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-semibold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text- text-gray-500 tracking-[0.1rem]">
                Email: {user.email}
              </i>
            </div>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-semibold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text- text-gray-500 tracking-[0.1rem]">
                University: {user.university}
              </i>
            </div>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-semibold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text- text-gray-500 tracking-[0.1rem]">
                City: {user.address.city}
              </i>
            </div>

          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div id="fullWidthTabContent">
                <div
                  className="w-full gap-8 bg-white rounded-lg md:p-8 flex justify-between items-center"
                  id="stats"
                  role="tabpanel"
                  aria-labelledby="stats-tab"
                >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}





// { "id": 1,
//  "firstName": "Terry",
//   "lastName": "Medhurst", 
//   "maidenName": "Smitham", 
//   "age": 50, "gender": "male", 
//   "email": "atuny0@sohu.com", 
//   "phone": "+63 791 675 8914", 
//   "username": "atuny0", 
//   "password": "9uQFF1Lh",
//    "birthDate": "2000-12-25", 
//    "image": "https://robohash.org/hicveldicta.png",
//     "bloodGroup": "A−", "height": 189, 
//     "weight": 75.4,
//      "eyeColor": "Green",
//       "hair": { "color": "Black", "type": "Strands" }, 
//       "domain": "slashdot.org",
//        "ip": "117.29.86.254",
//         "address": { 
//           "address": "1745 T Street Southeast",
//            "city": "Washington", 
//            "coordinates": { "lat": 38.867033, 
//            "lng": -76.979235 },
//             "postalCode": "20020",
//              "state": "DC" 
//           },
//            "macAddress": "13:69:BA:56:A3:74", 
//            "university": "Capitol University", 
//            "bank": { "cardExpire": "06/22", "cardNumber": "50380955204220685", "cardType": "maestro", "currency": "Peso", "iban": "NO17 0695 2754 967" }, "company": { "address": { "address": "629 Debbie Drive", "city": "Nashville", "coordinates": { "lat": 36.208114, "lng": -86.58621199999999 }, "postalCode": "37076", "state": "TN" }, "department": "Marketing", "name": "Blanda-O'Keefe", "title": "Help Desk Operator" }, "ein": "20-9487066", "ssn": "661-64-2976", "userAgent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24" }