import Button from "./Button"

export default async function Posts() {
  const posts = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json()
  // console.log(posts[0].title)
  // console.log(posts[0].body)

  return (
    <>
      <h1 className="w-full text-3xl font-semibold my-4 mx-5">Posts Section</h1>

      {/* This is how we can use Client Based component in Server Component */}
      <Button />

      {posts.map((post: any) => (
        <div className="mx-10 my-4">
          <h3 className="text-lg font-bold">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))
      }
    </>
  )
}