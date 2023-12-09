import Link from "next/link";
import React from "react";
import Image from "next/image";
import { fetchSingleUser } from '@/lib/getSingleUser';
import Modal from "../../../components/modal";

export default async function page({ params }: { params: { slug: string } }) {
  const user = await fetchSingleUser(params.slug);
  
  return (
    <div className="py-10 relative">
      <div className="profile-page flex items-center justify-center flex-col my-8 w-full">
        <div className=" flex flex-col bg-white break-words w-5/6 sm:w-3/4 shadow-xl rounded-lg xl:h-[630px] bg-[#f3f7f7]">
          <div className="px-1 md:px-6 ">
            <div className="flex flex-wrap justify-center">
              <div className="flex flex-row justify-between items-center w-full mt-5">
                <div className="w-1/2 lg:w-4/12 px-1 order-2 text-center lg:self-center">
                  <Modal slug={params.slug} />
                </div>
                <div className="w-1/2 lg:w-4/12 order-1 text-center lg:self-center">
                  <Link href={`/edituser/${params.slug}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ">Edit</Link>
                </div>
              </div>
            </div>
            <div className="text-center mt-12 mb-12">
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
          </div>
        </div>
      </div>
    </div>
  )
}