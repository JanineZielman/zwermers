import { createClient } from "../prismicio";
import * as prismicH from "@prismicio/helpers";
import Type from "../components/type"

const Logo = ({ settings }) => {
  const letters = settings.data.logo_text.split('');
  return (
    <div className="logo-center" style={{'backgroundColor': settings.data.logo_background, 'color': settings.data.logo_color}}>
      <Type letters={letters}/>
    </div>
  );
};

export default Logo;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const settings = await client.getSingle("settings");

  return {
    props: {
      settings: settings
    },
  };
}
