export default async function Loading() {
  await Promise.resolve((resolve: () => void) => setTimeout(resolve, 3000))
  return <p>Loading BLOG...</p>
}
