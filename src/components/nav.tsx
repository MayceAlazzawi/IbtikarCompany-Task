import Link from "next/link";
import { getServerAuthSession } from "@/server/auth";
import UserInfo from "./UserInfo";

const Navbar = async function () {
  const authSession = await getServerAuthSession();

  return (
    <div className="navbar bg-gray-50 py-3 px-4 shadow-xl flex justify-between">
      <div className="">
        <Link href="/" className="font-bold text-3xl p-2 text-blue-500">Home</Link>
      </div>
      {authSession?.user && <UserInfo user={authSession?.user} />}
      {!authSession?.user && (
        <div className="flex justify-center">
          <Link
            className="font-medium mt-2 text-blue-600 hover:underline"
            href="/login"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

// function ProfileMenu() {
//   return (
//     <div id="userDropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
//       <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
//         <div>Bonnie Green</div>
//         <div className="font-medium truncate">name@flowbite.com</div>
//       </div>
//       <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
//         <li>
//           <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
//         </li>
//         <li>
//           <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
//         </li>
//         <li>
//           <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
//         </li>
//       </ul>
//       <div className="py-1">
//         <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
//       </div>
//     </div>
//   );
// }

export default Navbar;
