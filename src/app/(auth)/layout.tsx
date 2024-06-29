export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h2>auth layout</h2>
      {children}
    </div>
  );
}
