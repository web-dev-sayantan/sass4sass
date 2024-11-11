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
  CardTitle,
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
import Link from "next/link";
import { signIn } from "@/lib/client";
import GoogleButton from "@/components/google-button";
import { Github } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const signupSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
});

export default function SignUp() {
  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  async function signUpWithSocial(provider: "github" | "google") {
    const { data, error } = await signIn.social({ provider });
    console.log(data);
  }
  return (
    <Card className="min-w-[400px]">
      <CardHeader className="space-y-1 flex items-center justify-center">
        <Image
          src="/saas4saas.svg"
          alt="logo"
          width={60}
          height={60}
          className="rounded-full"
        />
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription className="text-center">
          Enter your information to get started
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="flex items-center gap-4 w-full pb-4">
          <Button
            type="button"
            variant="outline"
            className="w-full flex-1"
            onClick={() => signUpWithSocial("github")}
          >
            <Github className="mr-2 h-4 w-4" />
            <span className="font-semibold">Github</span>
          </Button>
          <GoogleButton
            className="w-full flex-1"
            onClick={() => signUpWithSocial("google")}
          />
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(console.log)}
            className="space-y-4 py-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor={field.name}>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      placeholder="Enter your full name"
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
            <div className="flex flex-col items-center justify-center">
              <Button type="submit" className="w-full font-bold">
                Get Started
              </Button>
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
