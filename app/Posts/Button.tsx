"use client";

export default function Button() {
  return (
    <>
      <button onClick={() => alert("Hello")} className="my-10 mx-5 bg-blue-500 px-5 py-2">Click Me</button>
    </>
  )
}