import { createClient } from "../prismicio";
import * as prismicH from "@prismicio/helpers";
import Type from "../components/type"

const Logo = ({ page }) => {
  const letters = page.data.title?.[0]?.text.split('');
  return (
    <div className="logo-center">
      <Type letters={letters}/>
    </div>
  );
};

export default Logo;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("page", "zwermers");

  return {
    props: {
      page,
    },
  };
}
