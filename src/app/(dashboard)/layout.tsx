import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Menu from "@/components/Menu";
import Link from 'next/link';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link href="/" className='flex items-center justify-center lg:justify-start gap-2'>
        <Image src="/logo tlp.png" alt="logo" width={110} height={130}></Image>
        </Link>
        <Menu/>
      </div>

      <div className="w-[86%] md:w-[92%] lg:w-84%] xl:w-[86%] bg-[#f9f9f9] overflow-scroll">
        <Navbar/>
        {children}
      </div>
    </div>
  );
}
