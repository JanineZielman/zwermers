import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from "@prismicio/react";

const components = {
  label: ({ node, children }) => {
    if (node.data.label === "codespan") {
      return <code>{children}</code>;
    }
  },
};


export default function RichText({ slice }) {
  return (
    <section>
      <PrismicRichText field={slice.primary.content} components={components} />
    </section>
  );
}
