import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

type CtaButtonPropsType = {
  children?: React.ReactNode
  className?: string
} & React.AnchorHTMLAttributes<HTMLAnchorElement>
export default function CtaButton({
  className,
  children,
  href,
  ...props
}: CtaButtonPropsType) {
  return (
    <Link
      href={href ?? '#'}
      className={cn(
        className,
        'group relative flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-foreground bg-brand-700 text-base/7 font-bold text-primary-foreground transition-all duration-300 hover:ring-2 hover:ring-brand-700 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2',
      )}
      {...props}>
      <span className='relative z-10 flex items-center gap-2'>
        {children}
        <ArrowRight className='size-4 shrink-0 text-primary-foreground transition-transform duration-300 ease-in-out group-hover:translate-x-[2px]' />
      </span>
      <div className='ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-brand-25 opacity-20 transition-all duration-1000 group-hover:left-[120%]' />
    </Link>
  )
}
