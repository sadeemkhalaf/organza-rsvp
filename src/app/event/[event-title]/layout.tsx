import './../../../app/globals.css';
import './../../../app/styles/Home.module.css';

export default function EventLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>
    {children}
    </section>;
}
