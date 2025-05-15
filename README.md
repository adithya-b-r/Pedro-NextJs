# Next.js Beginner Guide: Setup, Routing, and Components

---

### Folder Naming Convention

* Folder names should consist of **all lowercase letters**.

---

### Creating a New Project

```bash
npx create-next-app .
```

You will be prompted with the following options:

* √ Would you like to use TypeScript? ... No / Yes ✅
* √ Would you like to use ESLint? ... No / Yes ✅
* √ Would you like to use Tailwind CSS? ... No / Yes ✅
* √ Would you like your code inside a `src/` directory? ... No ✅ / Yes
* √ Would you like to use the App Router? (recommended) ... No / Yes ✅
* √ Would you like to use Turbopack for `next dev`? ... No / Yes ✅
* √ Would you like to customize the import alias (`@/*` by default)? ... No ✅ / Yes

---

### Creating Routes & Navigation

* To create a route, simply create a folder inside the `app` directory.
  **Example:** Create a folder named `about`, and inside it, create a `page.tsx` file.
  When a user accesses `localhost:3000/about`, the content of `page.tsx` will be displayed.

* This content is rendered through the `{children}` prop in `layout.tsx`.

* Use the `<Link>` tag for navigation (similar to the standard `<a>` tag).

---

### Working with Images

* Use the `<Image>` component to add images in Next.js.
* It optimizes images based on the device resolution and supports lazy loading by default.
* To use external images, configure the allowed hostnames in `next.config.ts`.

---

### Server and Client Components

* By default, all components in Next.js are **server components**.
* To declare a component as a **client component**, add `"use client";` at the top of the file.

**How it works:**

* Server components are rendered on the server, and the resulting HTML is sent to the browser.
* Browser-only features like `onClick` events are not supported in server components and will throw errors.

**Combining server and client components:**

* To use browser interactions (e.g., button clicks), create a separate component (e.g., `Button.tsx`) and add `"use client";` at the top.
* Then import this client component into your server component to combine both.

---

### Dynamic Routes & Loading States

* To create dynamic routes, use square brackets in folder names.
  **Example:** `[userId]` for a dynamic user route.

* When a user accesses `/users/1`, the dynamic page under `/users/[userId]/page.tsx` will be rendered.

**Loading States:**

* Add a `loading.tsx` file inside a specific route folder to show a loading indicator during API calls or suspense.

**Error Handling:**

* Add an `error.tsx` file in the desired route folder to display custom error messages.

### Example: Layout for a Specific Route

* You can define a layout that applies only to a specific route by adding a `layout.tsx` file inside that route’s folder (e.g., `users`).
* This layout will wrap all pages under that route and can include common UI elements like headers, sidebars, or footers specific to that section.
* For example, the `users/layout.tsx` file will render a consistent layout across all `/users` sub-routes.

### API Routes in Next.js (App Router)

* In the **App Router**, API routes are created using server functions like `GET`, `POST`, etc., inside a `route.ts` file.
* These files should be placed under the `app/api/` directory.
  For example: `app/api/hello/route.ts` will be available at `localhost:3000/api/hello`.

**How it works:**

* The `GET` function handles GET requests and returns a JSON response.
* The `POST` function handles POST requests. It reads data from the request body and returns a customized JSON response.
* Use `NextResponse.json()` to return JSON-formatted responses.