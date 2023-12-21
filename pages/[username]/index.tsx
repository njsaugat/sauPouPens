import { useRouter } from "next/dist/client/router";
import React from "react";

const User = () => {
  const { query } = useRouter();
  console.log(query);
  return <div>Hello {query.username}</div>;
};

export default User;
