import Link from "next/link";
import Image from "next/image";
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-blue-600">
        <Link href='/' className="flex items-center justify-center gap-2">
          <Image src='/logo.png' alt='' width={32} height={32}/>
          <span className="hidden lg:block">Schoollama</span>
        </Link>
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-red-400"></div>
      </div>
    </html>
  );
}