import { Container } from '@/components/common/Container'

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <Container className="py-8">
        <div className="text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
