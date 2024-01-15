import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { Providers } from "./providers";

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chat App',
  description: 'A Discord-based site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={openSans.className}>
          <Providers>
            { children }
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
