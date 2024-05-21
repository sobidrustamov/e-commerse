'use client';
import React from 'react';
import { FaRegUser } from "react-icons/fa";
import { useSession } from "next-auth/react";


const UserIcon = () => {
    const { data } = useSession();    

  return (
    <div>
      {data ? (
        <div className="flex flex-col items-center">
          <img
            className="rounded-full w-[32px] mx-auto"
            src={data?.user?.image?data?.user?.image:""}
            alt="user image"
          />
          <p className='text-sm'>Profile</p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <FaRegUser size={32}/>
          <p className='text-sm'>Profile</p>
        </div>
      )}
    </div>
  );
}

export default UserIcon
