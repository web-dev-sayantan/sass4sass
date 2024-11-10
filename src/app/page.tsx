import Heading from "@/components/heading";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="relative py-24 sm:py-32 bg-brand-25">
        <MaxWidthWrapper className="text-center">
          <div className="relative mx-auto text-center flex flex-col items-center gap-10">
            <Heading>
              <span>Real-Time SaaS Insights,</span>
              <br />
              <span className="relative bg-gradient-to-r from-brand-700 to-brand-800 text-transparent bg-clip-text">
                Delivered to your Discord.
              </span>
            </Heading>
            <p className="text-base/7 text-gray-600 max-w-prose text-center text-pretty">
              SaaS4SaaS is the best way to monitor your SaaS usage. Get instant
              notifcations for{" "}
              <span className="font-semibold">
                new users, sales or any other event
              </span>{" "}
              on your Discord server.
            </p>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <Link href="/sign-in">
          <Button>Sign In</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Sign Up</Button>
        </Link>
      </section>
      <section></section>
      <section></section>
    </>
  );
}
