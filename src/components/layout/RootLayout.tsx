import { Toaster } from '@/components/ui/sonner'
import { SkipToContent } from './SkipToContent'
import { Header } from './Header'
import { Footer } from './Footer'

interface RootLayoutProps {
  children: React.ReactNode
}

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <SkipToContent />
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main id="content" tabIndex={-1} className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
      <Toaster />
    </>
  )
}
