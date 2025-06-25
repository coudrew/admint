import { Card } from "@/components/ui/card";
import SignIn from "@/features/SignIn";

export default function Page() {
  return (
    <div className="flex flex-col h-full w-full items-center pt-12 lg:justify-center text-slate-800 bg-slate-100 col-span-5 lg:col-span-2 row-span-4 lg:row-span-2">
      <Card className="flex flex-col gap-y-2 p-8 text-slate-600 w-7/8 max-w-7/8 md:w-1/2 md:max-w-1/2 lg:w-5/8 lg:max-w-5/8">
        <h2 className="text-xl">Sign In!</h2>
        <SignIn />
      </Card>
    </div>
  );
}
