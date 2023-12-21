import React, { useRef } from "react";
import Link from "next/link";
const EnterPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <main className="flex flex-col">
      <input type="text" ref={inputRef} />
      <Link
        href={{
          pathname: "/[username]",
          query: { username: inputRef?.current?.value ?? "John Doe" },
        }}
      >
        <button className="cursor-pointer self-end w-fit border-2 ">
          Find Person
        </button>
      </Link>
      <br />
      Signup
    </main>
  );
};

export default EnterPage;
