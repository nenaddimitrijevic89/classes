export default async function ClassPage({
    params,
    }: {
    params: { classId: string };
}) {
    console.log(params, 'params')
  return (
    <div>
      <h1 className="tex-white text-4xl font-bold">Class Page: ${params.classId}</h1>
    </div>
  );
}
