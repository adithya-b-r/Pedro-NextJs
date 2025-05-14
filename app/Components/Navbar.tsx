import Link from "next/link";

export default function Navbar(){
  return(
    <nav className="w-full h-[10vh] bg-slate-800  flex justify-between items-center px-8">
      <h1 className="text-3xl font-bold">Next JS</h1>

      <div className="flex gap-8 font-semibold text-lg">
        <Link href={'/'}>Home</Link>
        <Link href={'/Posts'}>Posts</Link>
        <Link href={'/Users'}>Users</Link>
        <Link className="peer" href={'/About'}>About</Link>
        <Link className="peer-hover:text-blue-500" href={'/Contact'}>Contact</Link>
      </div>
    </nav>
  )
}