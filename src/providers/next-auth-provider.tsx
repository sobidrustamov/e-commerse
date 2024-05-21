'use client';
import React,{ReactNode} from 'react';
import {SessionProvider} from 'next-auth/react';

const NextAuthProvider:React.FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default NextAuthProvider
