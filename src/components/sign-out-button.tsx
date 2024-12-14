'use client'

import onSignOutAction from '@/actions/on-sign-out.action'
import { Button } from '@/components/ui/button'
import { signOut } from '@/lib/client'

export default function SignOutButton() {
  function handleSignOut() {
    signOut({
      fetchOptions: {
        onSuccess: () => {
          onSignOutAction()
        },
      },
    })
  }
  return (
    <Button
      variant='ghost'
      size='md'
      className='font-semibold'
      onClick={handleSignOut}>
      Logout
    </Button>
  )
}
