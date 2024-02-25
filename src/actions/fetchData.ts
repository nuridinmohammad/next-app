export async function getData(pathname: string) {
  const res = await fetch(`https://fakestoreapi.com/${pathname}`, {
    // cache: 'force-cache',
    next: { tags: ["datas"] },
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}
