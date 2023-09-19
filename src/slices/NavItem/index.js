import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";


/**
 * Component for "NavItem" Slices.
 */
const NavItem = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for nav_item (variation: {slice.variation}) Slices
    </section>
  );
};

export default NavItem;
