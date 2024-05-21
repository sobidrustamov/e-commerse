import React from "react";
import BreadcrumbMenu from "../cart/components/breadcrumb";
import ProfileForm from "./profile-form/profile-form";

const Profile = () => {
  return (
    <div>
      <div className="profile-box min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-[4rem] text-white font-medium">My Profile</h2>
        <BreadcrumbMenu children="Profile" />
      </div>
      <div className='flex items-center justify-center p-4'>

      <ProfileForm/>
      </div>
    </div>
  );
};

export default Profile;
