import * as React from 'react'

interface Props {
    children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
      <main>
        <header>AuthLayout Header</header>
        <section>{ children }</section>
      </main>
  )
}