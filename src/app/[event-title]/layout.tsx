import './../../app/globals.css';

export default function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section className="min-h-screen">{children}</section>;
}
