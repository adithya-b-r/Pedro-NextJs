export default function UsersLayout({children}:{children: React.ReactNode}) {
  return (
    <div>
      <h3 className="font-semibold text-2xl m-5">This layout will be displayed All over Users Route.</h3>
      {children}
    </div>
  )

}