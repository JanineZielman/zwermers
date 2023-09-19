import { PrismicImage, PrismicLink } from '@prismicio/react'

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
      </main>
    </>
  );
};
