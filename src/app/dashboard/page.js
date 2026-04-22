import URLInput from "@shared/components/url-input/URLInput";

export default async function Page({ searchParams }) {
  const { url } = await searchParams;
  console.log(url);

  return (
    <main className="p-3">
      <div className="flex justify-center">
        <URLInput initialURL={url} />
      </div>
    </main>
  );
}
