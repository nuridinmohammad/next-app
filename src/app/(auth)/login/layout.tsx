import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App - Login',
}

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>{children}</div>
  )
}
