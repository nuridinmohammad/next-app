export default function Layout({ modal, children, carts, recipes }: { modal: React.ReactNode; children: React.ReactNode; carts: React.ReactNode; recipes: React.ReactNode }) {
  const isAdmin = true
  // return <>{!isAdmin  ? recipes : carts } </>
  return (
    <>
      {recipes}
      {carts}
      {children}
      {modal}
    </>
  )
}
