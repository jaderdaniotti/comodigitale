type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdValue[]
  | { [key: string]: JsonLdValue };

type JsonLdObject = { [key: string]: JsonLdValue };

export function JsonLd({ data }: { data: JsonLdObject }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
