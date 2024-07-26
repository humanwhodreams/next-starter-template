import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignIn() {
  return (
    <div className="flex flex-col items-start gap-8">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-base font-semibold md:text-xl">
          Welcome to Next Starter Template
        </h1>
        <div className="font-medium text-muted-foreground">
          Please sign in or sign up below
        </div>
      </div>

      <form action="" className="space-y-4 w-[300px]">
        <div className="space-y-2">
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="you@email.com"
            className="placeholder:font-medium placeholder:text-lg placeholder:opacity-50"
          />
        </div>

        <Button type="submit" className="w-full">
          Continue with Email
        </Button>
      </form>
    </div>
  );
}
