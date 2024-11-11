import { Check } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import Heading from '@/components/heading'
import MaxWidthWrapper from '@/components/max-width-wrapper'
import CtaButton from '@/components/cta-button'

export default function Home() {
  return (
    <>
      <section className='relative bg-brand-25 py-24 sm:py-32'>
        <MaxWidthWrapper className='text-center'>
          <div className='relative mx-auto flex flex-col items-center gap-10 text-center'>
            <Heading>
              <span>Real-Time SaaS Insights,</span>
              <br />
              <span className='relative bg-gradient-to-r from-brand-700 to-brand-900 bg-clip-text text-transparent'>
                Delivered to your Discord.
              </span>
            </Heading>
            <p className='max-w-prose text-pretty text-center text-base/7'>
              SaaS4SaaS is the best way to monitor your SaaS usage. Get instant
              notifcations for{' '}
              <span className='font-semibold text-brand-900'>
                new users, sales or any other event
              </span>{' '}
              on your Discord server.
            </p>
            <ul className='flex flex-col items-start space-y-2 text-base/7'>
              {[
                'Real-time Discord alerts for critical events',
                'Buy once, use forever',
                'Track new users, sales or any other event',
              ].map((text, index) => (
                <li key={index} className='flex items-center gap-1.5 text-left'>
                  <Check className='h-5 w-5 shrink-0' />
                  {text}
                </li>
              ))}
            </ul>
            <div className='w-full max-w-80'>
              <CtaButton
                href='/sign-up'
                className='z-10 h-14 text-base font-bold shadow-lg transition-shadow duration-500 hover:shadow-xl'>
                Start for free today
              </CtaButton>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <Link href='/sign-in'>
          <Button>Sign In</Button>
        </Link>
        <Link href='/sign-up'>
          <Button>Sign Up</Button>
        </Link>
      </section>
      <section></section>
      <section></section>
    </>
  )
}
