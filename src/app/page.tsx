import UserInfo from "@/components/UserInfo";
import { getServerAuthSession } from "@/server/auth";
import Link from "next/link"
export default async function HomePage() {
  const authSession = await getServerAuthSession();

  return (  
  <div className="flex justify-center items-center h-96">
    {authSession?.user &&
    <div className="flex justify-center items-center flex-col">
      <div className=" flex flex-row">
      <p className="p-2 ">You are signed in</p>
      <UserInfo user={authSession?.user} />
      </div>
       <Link href="/users" className="p-5 text-blue-700"> Click here to go to users page</Link>
      </div>
      }
    
      {!authSession?.user && (
        <div className="flex justify-center">
        <p className="p-2">You need to</p>
        <Link className="font-medium mt-2 text-blue-600 hover:underline" href="/login">
          Login
        </Link>
        </div>
      )}
    
 </div>
  );
}