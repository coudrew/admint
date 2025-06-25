import { Card } from "@/components/ui/card";
import SignUp from "@/features/SignUp";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center text-slate-800 bg-slate-100 col-span-5 lg:col-span-2 row-span-4 lg:row-span-2">
      <Card className="flex flex-col gap-y-10 p-8 text-slate-600">
        <h2 className="text-xl">Sign Up!</h2>
        <SignUp />
        <div>
          <p>Already have an account?</p>
          <Link className="text-slate-500" href={"/signin"}>
            Sign in instead
          </Link>
        </div>
      </Card>
    </div>
  );
}
