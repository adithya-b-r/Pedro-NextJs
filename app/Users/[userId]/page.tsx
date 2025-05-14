import { notFound } from "next/navigation";

export default async function User({ params }: { params: Promise<{ userId: string }> }) {
  const { userId } = await params;

  const user = await (await fetch("https://jsonplaceholder.typicode.com/users/" + userId)).json()

  if(!user.name){
    // This is how we can trigger NextJs 'Not Found' Page.
    // We can also create a custom Not Found Page by creating a file 'not-found.tsx' in root directory.
    notFound();
  }

  return (
    <div className="my-4 mx-8">
      <h1 className="text-3xl font-semibold">Details of User {userId}: </h1>

      {user.name && (
        <div className="text-lg font-semibold my-4 tracking-wide">
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone Number: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>
      )}

      {!user.name && (
        <div className="text-lg font-semibold my-4 tracking-wide">
          <p className="text-red-500">No Records Found!</p>
        </div>
          
      )}
        </div>
      )
      }