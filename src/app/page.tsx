import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center text-slate-800 bg-slate-100 row-span-3 col-span-5 lg:col-span-2 lg:row-span-1">
      <Link href={"/signup"}>Get Started!</Link>
    </div>
  );
}
