import { Raleway } from 'next/font/google'
import './globals.css'

const raleway = Raleway({
  subsets: ['latin'],
  fontDisplay: 'swap',
  fontWeights: [400, 700],
})

export const metadata = {
  title: 'Diego Moreno',
  description: 'Personal website of Diego Moreno',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
