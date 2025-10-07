import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
}

export function SectionHeading({
  title,
  subtitle,
  className,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn('mb-12 space-y-4', centered && 'text-center', className)}
    >
      <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {subtitle && <p className="text-lead">{subtitle}</p>}
    </div>
  )
}
