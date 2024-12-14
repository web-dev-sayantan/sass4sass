import { cn } from '@/lib/utils'

type HeadingPropsType = {
  children?: React.ReactNode
  className?: string
} & React.HTMLAttributes<HTMLHeadingElement>

export default function Heading({
  children,
  className,
  ...props
}: HeadingPropsType) {
  return (
    <h1
      className={cn(
        'text-pretty font-heading text-4xl font-semibold tracking-tight sm:text-5xl',
        className,
      )}
      {...props}>
      {children}
    </h1>
  )
}
