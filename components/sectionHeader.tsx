export default function SectionHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h1 className="text-white text-4xl py-10 text-center">{children}</h1>;
}
