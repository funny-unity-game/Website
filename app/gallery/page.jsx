"use client";
import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function Gallery() {
	return (
		<main>
			<div className="p-8">
				<SlideshowLightbox
					className="columns-sm gap-4 space-y-4"
					showControls={false}
					iconColor={"#fffa"}
					backgroundColor={"#000b"}
					showThumbnails={true}
				>
					<img
						className="rounded-xl"
						src="/screenshots/1.png"
						alt=""
					/>
					<img
						className="rounded-xl"
						src="/screenshots/2.png"
						alt=""
					/>
					<img
						className="rounded-xl"
						src="/screenshots/3.png"
						alt=""
					/>
				</SlideshowLightbox>
			</div>
		</main>
	);
}
