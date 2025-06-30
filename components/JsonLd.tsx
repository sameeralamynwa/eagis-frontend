export default function JsonLd({ schema }: { schema: object }) {
  return (
    <section>
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {/* ... */}
    </section>
  );
}
