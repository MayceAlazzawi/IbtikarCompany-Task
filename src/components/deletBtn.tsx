// import React from "react";
// import { deleteUser } from '@/lib/deleteUser';



// export default function deletBtn(slug: any) {
//   return (
//     <div className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 m-10 px-5 py-2.5 text-center :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800'>
//       <button
//         className=""
//         onClick={() => {
//           deleteUser(slug["slug"])
//           console.log("User deleted!")
//         }
//         }
//       >
//         Delete
//       </button>
//     </div>
//   );
// }

import React from "react";
import { deleteUser } from '@/lib/deleteUser';

export default function DeleteBtn(slug:any ) {
  const handleDelete = async () => {
    try {
      await deleteUser(slug["slug"]);
      window.location.href = '/'; 
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  return (
    <div className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-1/2 m-10 px-5 py-2.5 text-center :bg-blue-600 :hover:bg-blue-700 :focus:ring-blue-800'>
      <button onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
