"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "@/lib/client";

const signupSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
});

export default function SignUp() {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  async function signUpWithSocial(provider: "github" | "google") {
    const { data, error } = await signIn.social({ provider });
    console.log(data);
  }
  return (
    <Card className="min-w-[400px]">
      <CardHeader className="flex items-center justify-between">
        <Image
          src="/saas4saas.svg"
          alt="logo"
          width={60}
          height={60}
          className="rounded-full"
        />
        <h1 className="text-2xl text-center font-bold">
          Welcome to SaaS-4-SaaS
        </h1>
      </CardHeader>
      <CardDescription>
        <p className="text-base/70 text-center text-pretty px-4">
          By signing up, you agree to our{" "}
          <a
            href="#"
            className="text-brand-800 underline-offset-4 hover:underline"
          >
            Terms of Service
          </a>{" "}
          &{" "}
          <a
            href="#"
            className="text-brand-800 underline-offset-4 hover:underline"
          >
            Privacy Policy
          </a>
        </p>
      </CardDescription>
      <CardContent className="pb-0">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(console.log)}
            className="space-y-6 py-6"
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor={field.name}>First Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Enter your first name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor={field.name}>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Enter your last name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor={field.name}>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Enter your email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col items-center justify-center gap-1">
              <Button type="submit" className="w-full">
                Get Started
              </Button>
              <h1 className="text-muted-foreground">OR</h1>
              <div className="flex items-center gap-4 w-full">
                <Button
                  type="button"
                  size={"withIcon"}
                  className="w-full flex-1"
                  onClick={() => signUpWithSocial("github")}
                >
                  <div className="bg-white ml-2.5 rounded-md p-[2px]">
                    <Image
                      src="/github-icon.svg"
                      alt="github"
                      width={20}
                      height={20}
                      className=" bg-brand-25 text-brand-800 rounded-full"
                    />
                  </div>
                  <div className="flex-1 text-center">
                    <span>Signup with Github</span>
                  </div>
                </Button>
                <Button
                  type="button"
                  size={"withIcon"}
                  className="w-full flex-1"
                  onClick={() => signUpWithSocial("google")}
                >
                  <div className="flex bg-white ml-2.5 rounded-md p-[2px]">
                    <Image
                      src="/google-icon.svg"
                      alt="github"
                      width={18}
                      height={18}
                      className=" bg-brand-25 text-brand-800 rounded-full"
                    />
                  </div>
                  <div className="flex-1 text-center">
                    <span>Signup with Google</span>
                  </div>
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex items-center justify-center">
        <p className="text-muted-foreground text-sm">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-brand-800 underline-offset-4 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
