"use client";

import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
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
import { Button } from "@/components/ui/button";

const signinSchema = z.object({
  email: z.string().email(),
});
export default function SignIn() {
  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: "",
    },
  });
  return (
    <div>
      <Card className="min-w-[400px]">
        <CardHeader className="flex items-center justify-between">
          <Image
            src="/saas4saas.svg"
            alt="logo"
            width={60}
            height={60}
            className="rounded-full"
          />
          <h1 className="text-2xl text-center font-bold">Signin</h1>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(console.log)}
              className="space-y-6"
            >
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
                  Sign In
                </Button>
                <h1 className="text-muted-foreground">OR</h1>
                <div className="flex items-center gap-4 w-full">
                  <Button size={"withIcon"} className="w-full flex-1">
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
                      <span>Signin with Github</span>
                    </div>
                  </Button>
                  <Button size={"withIcon"} className="w-full flex-1">
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
                      <span>Signin with Google</span>
                    </div>
                  </Button>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex items-center justify-center">
          <p className="text-muted-foreground text-sm">
            Do not have an account yet?{" "}
            <Link
              href="/sign-up"
              className="text-brand-800 underline-offset-4 hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
