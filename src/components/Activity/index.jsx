import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loader from "../Loader";

/**
 * Display the connected user's activities
 * @param { array } connected user's activities
 * @return { HTMLElement }
 */
function Activity({ sessions }) {
	const [userSessions, setUserSessions] = useState();
	useEffect(() => {
		if (sessions !== undefined) {
			setUserSessions(sessions);
		}
	}, [sessions]);
	return (
		<div>
			{!userSessions ? (
				<Loader />
			) : (
				userSessions.map((session, index) => (
					<div key={index}>
						{session.day}/{session.kilogram}/{session.calories}
					</div>
				))
			)}
		</div>
	);
}
Activity.propTypes = {
	sessions: PropTypes.array.isRequired,
};
export default Activity;
