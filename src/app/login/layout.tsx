import "./../globals.css";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex-grow flex flex-col h-screen w-screen">
      {children}
    </main>
  );
}
