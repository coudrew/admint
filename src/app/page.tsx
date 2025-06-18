import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full items-center justify-center text-slate-800 bg-slate-100 col-span-5 lg:col-span-2 row-span-3 lg:row-span-1">
      <Link href={"/signin"}>Get Started!</Link>
    </div>
  );
}
