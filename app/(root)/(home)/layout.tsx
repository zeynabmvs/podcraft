export default function Layout({
  latest,
  popular,
  children,
}: {
  latest: React.ReactNode;
  popular: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-9 flex flex-col gap-9 md:overflow-hidden">
      {children}
      {popular}
      {latest}
    </div>
  );
}
