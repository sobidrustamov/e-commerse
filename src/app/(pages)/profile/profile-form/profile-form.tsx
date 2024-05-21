"use client";
import { FcGoogle } from "react-icons/fc";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const ProfileForm = () => {
  const { data } = useSession();
  console.log(data?.user);
  const Login = () => {
    signIn("google", { redirect: true, callbackUrl: "/" });
  };
  const Logout = () => {
    signOut();
  };
  return (
    <div>
      {data ? (
        <div className="flex flex-col items-center gap-2">
          <img
            className="rounded-full"
            src={data?.user?.image?data?.user?.image:""}
            alt="profile image"
          />
          <h2 className="text-4xl">{data?.user?.name}</h2>
          <Link href={`mailto:${data?.user?.email}`}>{data?.user?.email}</Link>
          <button className="bg-regal-blue py-2 px-5 rounded-xl text-white" onClick={Logout}>Log out</button>
        </div>
      ) : (
        <div className="border  p-4">
          <h2 className="text-[2rem] text-center font-medium">Login</h2>
          <form className="flex flex-col gap-3 items-center p-5">
            <input
              type="email"
              className="form-control py-2 px-4 rounded-lg border"
              placeholder="Your Email"
            />
            <input
              type="password"
              className="form-control py-2 px-4 rounded-lg border"
              placeholder="Your Password"
            />
            <button
              type="submit"
              className="bg-regal-blue text-white py-2 px-4 rounded-lg"
            >
              Login
            </button>
          </form>
          <button
            onClick={Login}
            className="w-full rounded-lg py-3 px-5 border flex items-center justify-center gap-3"
          >
            <FcGoogle size="32" /> <span>Login with Google</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileForm;
