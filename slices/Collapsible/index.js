import React, {useState, useEffect, useRef} from "react"
import { PrismicRichText, PrismicImage, PrismicLink } from '@prismicio/react'
// import CollapsibleComp from 'react-collapsible';
import { useRouter } from 'next/router'

/**
 * @typedef {import("@prismicio/client").Content.CollapsibleSlice} CollapsibleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CollapsibleSlice>} CollapsibleProps
 * @param { CollapsibleProps }
 */


const Collapsible = ({slice}) => {
	const router = useRouter()
  const [openDiv, setOPenDiv] = useState(false);
	const contentRef = useRef();

  const trigger = slice.primary.title[0]?.text.replaceAll(' ', '-').toLowerCase();

	useEffect(() => {
		setTimeout(function() {
			if (document.getElementById(window.location.hash.replace('#', '') + "-content")){
				document.getElementById(window.location.hash.replace('#', '') + "-content").style.height = document.getElementById(window.location.hash.replace('#', '') + "-content").scrollHeight + 'px'
				window.scrollTo({
					top: document.getElementById(window.location.hash.replace('#', ''))?.offsetTop - 200,
					behavior: 'smooth'
				});
			}
		}, 100);
	})


	const toggle = (e) => {
  	setOPenDiv(!openDiv);
		if (openDiv == false){
			router.push(`#${e.target.parentElement.id}`);
		} else {
			router.push(`#${e.target.id}`);
		}
	};

  return (
		<>
			{trigger &&
			<div className="Collapsible" id={trigger}>
				<span onClick={toggle} id={`${trigger}-closed`}>{slice.primary.title[0].text}</span>
				<div className='content-parent' id={`${trigger}-content`} ref={contentRef} style={openDiv ? { height: contentRef.current?.scrollHeight +
		"px" } : { height: "0px" }}>
					<div className='collapsible-content'>
						<PrismicRichText field={slice.primary.description}/>
						{slice.primary.code &&<div className="code" dangerouslySetInnerHTML={{__html: slice.primary.code}}></div>}
						<div className='collapsible-slices'>
							{slice.items.map((item, i) => {
								return(
									<div className='collapsible-slice'>
										{item.image && <PrismicImage field={item.image}/>}
										{item.title &&<h3>{item.title}</h3>}
										<p>
											<PrismicRichText field={item.text}/>
										</p>
										<PrismicLink target="_blank" field={item.file}>{item.file_title}</PrismicLink>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
			}
		</>
  );
};

export default Collapsible