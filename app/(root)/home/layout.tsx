import Searchbar from "@/components/partials/Searchbar";

export default function Layout({
  trending,
  latest,
  popular,
  children,
}: {
  trending: React.ReactNode;
  latest: React.ReactNode;
  popular: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5 flex flex-col gap-9 md:overflow-hidden">
      <Searchbar />

      {children}
      {trending}
      {popular}
      {latest}
    </div>
  );
}
