import { PrismicImage, PrismicLink } from '@prismicio/react'
import Link from 'next/link';

export const Layout = ({
  navItems,
  children,
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
          <div>en / nl</div>
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
