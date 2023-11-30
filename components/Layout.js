import { PrismicImage, PrismicLink } from '@prismicio/react'
import Link from 'next/link';
import { linkResolver } from "../prismicio";

export const Layout = ({
  navItems,
  children,
  item
}) => {
  return (
    <>
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
                <span>{lang.lang.slice(0,2)}</span>
              </PrismicLink>
            </div>
          ))}
          <div key={item.lang.lang} className="lang">
            <span>/ <b>{item.lang.slice(0,2)}</b></span>
          </div>
        </div>
      </main>
      <footer>
        <Link href="#">contact</Link>
        <Link href="#">newsletter</Link>
        <Link href="#">privacy statement</Link>
      </footer>
    </>
  );
};
