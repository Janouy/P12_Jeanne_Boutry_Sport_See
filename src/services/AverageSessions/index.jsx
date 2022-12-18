import { UserAverageSessions } from "../../models/userAverageSessions";
const { REACT_APP_AVERAGE_SESSIONS_MOCK } = process.env;
/**
 * Download data from the specified URL.
 *
 * @async
 * @function getUserAverageSessions
 * @return {Promise<object>} The data from the URL.
 */

async function getUserAverageSessions() {
	const response = await fetch(REACT_APP_AVERAGE_SESSIONS_MOCK);
	const json = await response.json();
	const averageSessionsData = json.data.map((session) => {
		return new UserAverageSessions(session.userId, session.sessions);
	});
	return averageSessionsData;
}

export default getUserAverageSessions;
