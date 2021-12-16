import React, { useState } from "react";
import Store from "../stores/Store";
import filterActions from "../actions/FilterActions";

function Filter() {
	const [open, setOpen] = useState(false);
	const filterType = Store.getFilterBy();

	const handleFilter = () => {
		setOpen(!open);
	};

	const handleFilterBy = (filter: string) => {
		filterActions(filter);
		setOpen(false);
	};

	return (
		<div className="filter">
			<div className="filter__button" onClick={handleFilter}>
				<svg
					className="filter__icon"
					viewBox="0 0 24 24"
					preserveAspectRatio="xMidYMid meet"
					focusable="false"
				>
					<g>
						<path d="M15,17h6v1h-6V17z M11,17H3v1h8v2h1v-2v-1v-2h-1V17z M14,8h1V6V5V3h-1v2H3v1h11V8z M18,5v1h3V5H18z M6,14h1v-2v-1V9H6v2H3v1 h3V14z M10,12h11v-1H10V12z"></path>
					</g>
				</svg>
				<span className="filter__title">Filter</span>
			</div>

			{open && (
				<ul className="filter__list">
					<li
						className={
							filterType == "all"
								? "filter__item filter__item--selected"
								: "filter__item"
						}
						onClick={() => handleFilterBy("all")}
					>
						All
					</li>
					<li
						className={
							filterType == "youtube#channel"
								? "filter__item filter__item--selected"
								: "filter__item"
						}
						onClick={() => handleFilterBy("youtube#channel")}
					>
						Channels
					</li>
					<li
						className={
							filterType == "youtube#video"
								? "filter__item filter__item--selected"
								: "filter__item"
						}
						onClick={() => handleFilterBy("youtube#video")}
					>
						Videos
					</li>
				</ul>
			)}
		</div>
	);
}

export default Filter;
