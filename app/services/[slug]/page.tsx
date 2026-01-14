export default function ServiceDetail({ params }: any) {
  return (
    <section className="pt-32 px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-serif capitalize">
        {params.slug.replace('-', ' ')}
      </h1>
      <p className="mt-4">
        Detailed service description will be loaded from CMS.
      </p>
    </section>
  );
}
