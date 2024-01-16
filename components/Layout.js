import { PrismicImage, PrismicLink } from '@prismicio/react'
import { linkResolver } from "../prismicio";
import Head from 'next/head';

export const Layout = ({
  navItems,
  children,
  item,
  settings
}) => {
  return (
    <>
       <Head>
        <meta name="description" content={settings.data.site_description} />
        <meta property="og:description" content={settings.data.site_description} />
      </Head>
      <div className='menu'>
        {navItems.map((item, i) => {
          return(
            <PrismicLink className={item.primary.link.uid} field={item.primary.link} key={`nav${i}`}>
              {item.primary.title}
            </PrismicLink>
          )
        })}
      </div>
      <main>
        {children}
        <div className='extra'>
          {item.alternate_languages.map((lang) => (
            <div key={lang.lang} className="lang">
              <PrismicLink href={linkResolver(lang)} locale={lang.lang}>
                <span>{lang.lang.slice(0,2)} / </span>
              </PrismicLink>
            </div>
          ))}
          <div key={item.lang.lang} className="lang">
            <span>&nbsp;&nbsp;&nbsp;<b>{item.lang.slice(0,2)}</b></span>
          </div>
        </div>
      </main>
      <footer>
        {settings.data.footerlinks.map((item,i) => {
          return(
            <>
              {item.label == 'newsletter' ?
                <PrismicLink data-eo-form-toggle-id="579d6956-b0c8-11ee-a43a-a320057deaf3" key={`footerlink${i}`} field={item.link}>{item.label}</PrismicLink>
                :
                <PrismicLink key={`footerlink${i}`} field={item.link}>{item.label}</PrismicLink>
              }
            </>
          )
        })}
      </footer>
    </>
  );
};
