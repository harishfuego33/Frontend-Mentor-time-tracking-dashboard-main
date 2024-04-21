import { useState } from "react";
import data from "./data.json";
import "./index.css";
export default function App() {
	return <Main />;
}
function Main() {
	const [query, setQuery] = useState("weekly");

	return (
		<main className="dashboard__main">
			<Profile onQuery={setQuery} />
			{data.map((item) => {
				return Object.keys(item.timeframes).map((timeframes) => {
					const { current, previous } = item.timeframes[timeframes];
					if (query === timeframes) {
						return (
							<Comps
								key={item.title}
								title={item.title}
								current={current}
								previous={previous}
							/>
						);
					}
					return null;
				});
			})}
		</main>
	);
}

function Profile({ onQuery }) {
	const [active, setActive] = useState("weekly");
	function update(btnno) {
		setActive(btnno);
		onQuery(btnno);
	}
	return (
		<section className="profile item">
			<div className="profile__first-box">
				<div className="profile__img-box">
					<img
						src="/images/image-jeremy.png"
						alt="img"
						className="profile__img"
					></img>
				</div>
				<p className="profile__img-text">Report for</p>
				<h1 className="profile__name">Jeremy Rabson</h1>
			</div>
			<div className="profile__second-box">
				<button
					className={`profile__second-btn ${
						"daily" === active ? "active" : ""
					}`}
					onClick={() => update("daily")}
				>
					Daily
				</button>
				<button
					className={`profile__second-btn ${
						"weekly" === active ? "active" : ""
					}`}
					onClick={() => update("weekly")}
				>
					Weekly
				</button>
				<button
					className={`profile__second-btn ${
						"monthly" === active ? "active" : ""
					}`}
					onClick={() => update("monthly")}
				>
					Monthly
				</button>
			</div>
		</section>
	);
}
function Comps({ key, title, current, previous }) {
	console.log(title, current, previous);
	return (
		<div className={`dashboard__comps backgound__${title} item`}>
			<div className="dashboard__comps-first-box "></div>
			<img
				src={`/images/icon-${title.toLowerCase()}.svg`}
				alt="icon-work"
				// className={`dashboard__icon ${title.toLowerCase()}-icon `}
				className={`dashboard__icon work-icon `}
			></img>
			<div className="dashboard__comps-second-box">
				<div className="task">
					<p className="task__text">{title}</p>
					<img
						src="/images/icon-ellipsis.svg"
						alt="icon-ellipis"
						className="task__icon"
					></img>
				</div>
				<h1 className="dashboard__comps-heading">{current}hrs</h1>
				<p className="dashboard__comps-paraphase">
					Last Week - {previous}hrs
				</p>
			</div>
		</div>
	);
}
/*{
		"title": "Exercise",
		"timeframes": {
			"daily": {
				"current": 1,
				"previous": 1
			},
			"weekly": {
				"current": 4,
				"previous": 5
			},
			"monthly": {
				"current": 11,
				"previous": 18
			}
		}
	},
	{
		"title": "Social",
		"timeframes": {
			"daily": {
				"current": 1,
				"previous": 3
			},
			"weekly": {
				"current": 5,
				"previous": 10
			},
			"monthly": {
				"current": 21,
				"previous": 23
			}
		}
	},
	{
		"title": "Self-Care",
		"timeframes": {
			"daily": {
				"current": 0,
				"previous": 1
			},
			"weekly": {
				"current": 2,
				"previous": 2
			},
			"monthly": {
				"current": 7,
				"previous": 11
			}
		}
	} */
