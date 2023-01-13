import { UserAverageSessions } from "../../models/userAverageSessions";
const { REACT_APP_AVERAGE_SESSIONS_MOCK } = process.env;
const { REACT_APP_AVERAGE_SESSIONS_API } = process.env;

/**
 * Download data from the specified URL.
 *
 * @async
 * @function getUserAverageSessions
 * @return {Promise<object>} The data from the URL.
 */

async function getUserAverageSessions() {
	try {
		const response = await fetch(REACT_APP_AVERAGE_SESSIONS_MOCK);
		//const response = await fetch(REACT_APP_AVERAGE_SESSIONS_API);
		const sessionsData = await response.json();
		const userAverageSessions = new UserAverageSessions(sessionsData.data.id, sessionsData.data.sessions);
		return userAverageSessions;
	} catch (err) {
		return (error) => console.error("error:" + error);
	}
}

export default getUserAverageSessions;
