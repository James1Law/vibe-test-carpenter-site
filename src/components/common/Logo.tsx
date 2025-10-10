import { siteData } from '@/data/site'
import { cn } from '@/lib/utils'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showText?: boolean
}

export function Logo({ size = 'md', className, showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8', // 32px - Mobile header, footer
    md: 'h-10', // 40px - Desktop header
    lg: 'h-12', // 48px - Larger displays (if needed)
  }

  return (
    <a
      href="#"
      className="flex items-center gap-1 transition-opacity hover:opacity-80"
      aria-label={`${siteData.name} - Return to top`}
    >
      <img
        src="/WA Logo.png"
        alt="Wright Angle Carpentry Logo"
        className={cn('logo w-auto', sizeClasses[size], className)}
        loading="eager"
        style={{
          imageRendering: '-webkit-optimize-contrast',
        }}
      />
      {showText && (
        <span className="text-lg font-bold tracking-tight hover:text-primary">
          {siteData.name}
        </span>
      )}
    </a>
  )
}
