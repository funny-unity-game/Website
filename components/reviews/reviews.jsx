import React from "react";
const data = require("./data.json");
import "./reviews.css";

export default class Reviews extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="mb-32 reviews flex flex-col items-center justify-center">
				<p className="text-center text-4xl mb-8">Reviews</p>
				<div className="reviews-viewport fade-side">
					<div className="reviews-container">
						{data.map((item, index) => (
							<div
								key={index}
								className="review-card bg-[#8881] hover:bg-[#8882] transition-all border-[1px] border-[#fff2] rounded-xl py-4 px-6 h-[8rem] w-[16rem] ml-16 select-none"
							>
								<p className="text-left text-xl mb-2 text-ellipsis overflow-hidden break-words">{item.name}</p>
								<p className="text-left text-sm">{item.review.length > 65 ? item.review.slice(0, 65) + "..." : item.review}</p>
							</div>
						))}
						{data.map((item, index) => (
							<div
								key={index}
								className="review-card bg-[#8881] hover:bg-[#8882] transition-all border-[1px] border-[#fff2] rounded-xl py-4 px-6 h-[8rem] w-[16rem] ml-16 select-none"
							>
								<p className="text-left text-xl mb-2 text-ellipsis overflow-hidden break-words">{item.name}</p>
								<p className="text-left text-sm">{item.review.length > 65 ? item.review.slice(0, 65) + "..." : item.review}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}
}
