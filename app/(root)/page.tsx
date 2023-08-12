import { Button } from "@/components/ui/button";
import { auth, currentUser, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/shadow_log.png";
export default async function Home() {

  const user = await currentUser();
  return (
    <main className="hidden h-full flex-col md:flex w-full">
      <div className="flex items-center justify-between h-4 mt-4">
        <Link href="/" className="">
          <Image src={logo} alt="shadow portfolio" height={70} width={100} />
        </Link>
        <div className="flex items-center gap-x-8 mr-5">
          <Link href="/features">Features</Link>
          <Link href="/docs">Documentation</Link>
        </div>
        <div className="flex items-center gap-x-8 mr-5">
          {user ? (
            <Link href="/dashboard" className="">
              <Button variant="primary">Open Dashboard</Button>
            </Link>
           
          ) : (
            <Link href="/sign-in"> Sign In</Link>
          )}
        </div>
      </div>

      <div className="h-full"></div>
    </main>
  );
}
