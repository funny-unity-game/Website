"use client";
import Link from "next/link";
import React from "react";

export default class Downloads extends React.Component {
	constructor() {
		super();

		this.state = {
			releases: [],
			latest: {}
		};

		fetch("https://api.github.com/repos/lemons-studios/mission-monkey/releases")
			.then((res) => res.json())
			.then((list) => {
				this.setState({
					releases: list
				});
				this.setState({
					latest: list[0]
				});
			});
	}
	render() {
		return (
			<>
				<main className="flex min-h-screen w-full flex-col gap-4 px-24 pt-16 items-center">
					<p className="text-4xl">Downloads</p>
					<p className="text-2xl">Download for Windows</p>

					{/* {this.state.latest == undefined ? (
						<button
							className="animated-glow flex justify-center items-center gap-2 px-5 py-3 shadow-lg bg-gradient-to-tr from-[#ff4d4d] to-[#f9cb28] hover:brightness-90 transition-all rounded-lg text-base sm:text-lg relative 
								after:bg-[#222] after:content-[''] after:w-[calc(100%+2px)] after:h-[calc(100%+2px)] after:absolute after:top-[-1px] after:left-[-1px] after:-z-10 after:rounded-lg after:bg-gradient-to-tr after:from-[#ff4d4d] after:to-[#f9cb28]"
						>
							<i class="bi bi-download"></i>
							<p>Loading...</p>
						</button>
					) : (
						<button
							className="animated-glow flex justify-center items-center gap-2 px-5 py-3 shadow-lg bg-gradient-to-tr from-[#ff4d4d] to-[#f9cb28] hover:brightness-90 transition-all rounded-lg text-base sm:text-lg relative 
						after:bg-[#222] after:content-[''] after:w-[calc(100%+2px)] after:h-[calc(100%+2px)] after:absolute after:top-[-1px] after:left-[-1px] after:-z-10 after:rounded-lg after:bg-gradient-to-tr after:from-[#ff4d4d] after:to-[#f9cb28]"
							onClick={() => {
								document.querySelector("button a.downloads-page").click();
							}}
						>
							<i class="bi bi-download"></i>
							<p>Download</p>
							<Link
								href={this.state.latest == undefined ? this.state.latest.assets.filter((asset) => asset.name.toLowerCase().includes("win"))[0].browser_download_url : ""}
								legacyBehavior={true}
							>
								<a className="downloads-page"></a>
							</Link>
						</button>
					)} */}
					<Link
						className="animated-glow flex justify-center items-center gap-2 px-5 py-3 shadow-lg bg-gradient-to-tr from-[#ff4d4d] to-[#f9cb28] hover:brightness-90 transition-all rounded-lg text-base sm:text-lg relative 
								after:bg-[#222] after:content-[''] after:w-[calc(100%+2px)] after:h-[calc(100%+2px)] after:absolute after:top-[-1px] after:left-[-1px] after:-z-10 after:rounded-lg after:bg-gradient-to-tr after:from-[#ff4d4d] after:to-[#f9cb28]"
						href={this.state.releases.length > 0 ? this.state.releases[0].assets.filter((asset) => asset.name.toLowerCase().includes("win"))[0].browser_download_url : ""}
					>
						{this.state.releases.length > 0 ? (
							<>
								<i class="bi bi-download"></i>
								<p>Download</p>
							</>
						) : (
							<p>Loading...</p>
						)}
					</Link>
					{this.state.releases.length > 0 ? (
						<table className="border-collapse [border-spacing:0.75rem]">
							<tr>
								<th className="text-left">Version</th>
								<th className="text-left">Release date</th>
								<th className="text-left">Download</th>
								<th className="text-left">Source code</th>
							</tr>
							{/* <tr>
								<td>0.1.0</td>
								<td>Mar. 21, 2023</td>
								<td>Link</td>
								<td>Source</td>
							</tr> */}
							{this.state.releases.map((release) => (
								<tr>
									<td className="text-left">{release.name}</td>
									<td>{new Date(release.created_at).toLocaleDateString()}</td>
									<td className="text-center">
										<Link href={release.assets.filter((asset) => asset.name.toLowerCase().includes("win"))[0].browser_download_url}>
											<i className="bi bi-download bg-orange-400 hover:bg-orange-500 px-6 pb-1.5 pt-1 rounded-full"></i>
										</Link>
									</td>
									<td className="text-center">
										<Link href={release.zipball_url}>
											<i className="bi bi-code-slash bg-orange-400 hover:bg-orange-500 px-6 pb-1.5 pt-1 rounded-full"></i>
										</Link>
									</td>
								</tr>
							))}
						</table>
					) : (
						<p className="text-xl">Loading...</p>
					)}
				</main>
			</>
		);
	}
}
