import Image from "next/image";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative h-screen w-full">
      <div className="absolute size-full">
        <Image
          src="/assets/images/bg-img.png"
          width={1440}
          height={1024}
          alt="login-screen"
        />
      </div>
      {children}
    </main>
  );
}
