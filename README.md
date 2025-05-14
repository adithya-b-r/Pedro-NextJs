Folder Name should consists of all 'Lowercase Letters'.

npx create-next-app .

√ Would you like to use TypeScript? ... No / Yes✅
√ Would you like to use ESLint? ... No / Yes✅
√ Would you like to use Tailwind CSS? ... No / Yes✅
√ Would you like your code inside a `src/` directory? ... No✅ / Yes
√ Would you like to use App Router? (recommended) ... No / Yes✅
√ Would you like to use Turbopack for `next dev`? ... No / Yes✅
√ Would you like to customize the import alias (`@/*` by default)? ... No✅ / Yes

Creating Routes & Navigation:

To create a Router, just create a folder within 'app' folder. 
Eg: About folder, within it create a page.tsx folder.
When user Access localhost:3000/About. The content of page.tsx will be displayed.

This is being rendered by {children} in 'layout.tsx'

<Link> tag is used for Navigating.
-Its similar as <a> Tags.

Working with Images:
- <Image> tag is being used for using Images in NextJS
- It optimize the images based of Resolution of Device and Lazy Loading.
- For usage of external images, we need to config hostname in 'next.config.ts'

Server and Client Components:
- All the components in NextJS are server components
- To specify a component as Client component we add "use client"; tag
- This will turn the component into client component.

- Server components are rendered in Server and HTML file is sent to Browser.
- Event an onClick events are also not executed in Server side, and throw an error.
- To use Client Components in Server Component, We need to created seperate component,
- Eg: To add button onClick event, I create a Button.tsx and add "use client"; at top
- Then import it in server component. By this way we can combine both Server & Client Component.

Dynamic Routes and Loading States:
- We can use [userId] as folder name to make it dynamic route.
- When user access page with Users/1, It will trigger Dynamic Page within Users.

- One can create a Loading page, just by adding a file 'loading.tsx' in specified folder [API requests].
- For error handling, we can use 'error.tsx' file and within it, we can add the messsage that need to be displayed.