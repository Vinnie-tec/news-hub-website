export default async function NewsDetailPage({ params }) {
  const { id } = await params;

  return (
    <>
      <h1>{id}</h1>
    </>
  );
}
