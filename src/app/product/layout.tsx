export default function Layout({ carts, recipes }: { carts: React.ReactNode; recipes: React.ReactNode }) {
  const isAdmin = true
  // return <>{!isAdmin  ? recipes : carts } </>
  return (
    <>
      {recipes}
      {carts}
    </>
  )
}
