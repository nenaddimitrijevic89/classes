export default async function ClassPage({
  params,
}: {
  params: Promise<{ classId: string }>;
}) {
  const { classId } = await params;
  return (
    <div>
      <h1 className="tex-white text-4xl font-bold">Class Page: ${classId}</h1>
    </div>
  );
}
