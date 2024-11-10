import { emailOTPClient, passkeyClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react"; // make sure to import from better-auth/react

export const { signIn, signUp, signOut, useSession } = createAuthClient({
  plugins: [passkeyClient(), emailOTPClient()],
  //you can pass client configuration here
});
