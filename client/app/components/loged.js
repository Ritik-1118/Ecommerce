"use client";
import Link from "next/link";
import React from "react";

const Loged = () => {
  // Define status as a variable
  const status = "unauthenticated";

  return (
    <>
      {" "}
      {status === "unauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <div>
            <Link href="/">Logout</Link>
          </div>
        </>
      )}
    </>
  );
};

export default Loged;
