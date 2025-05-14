import Link from "next/link";

export default function Users(){
  return(
    <div>
      <h1 className="text-2xl font-semibold m-4">Welcome to Users Section</h1>

      <Link href={"/Users/1"} className="text-lg text-blue-500 m-4">Try Fetching Users based on Parameter.</Link>
    </div>
  )
}