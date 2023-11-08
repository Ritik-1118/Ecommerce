import React from "react";
import { useAuth } from "../context/auth";

const Homepage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <div>
      Homepage
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </div>
  );
};

export default Homepage;
