import NextAuth from "next-auth/next";
import { Authoptions } from "@/config/auth-options";

const handleAuth = NextAuth(Authoptions);

export { handleAuth as GET, handleAuth as POST };
