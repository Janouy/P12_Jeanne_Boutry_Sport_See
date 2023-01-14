import { UserAverageSessions } from "../../models/userAverageSessions";
const { REACT_APP_API_URL } = process.env;
const user = 12;

/**
 * Download data from the specified URL.
 *
 * @async
 * @function getUserAverageSessions
 * @return {Promise<object>} The data from the URL.
 */

async function getUserAverageSessions() {
	try {
		const response = await fetch(`${REACT_APP_API_URL}/user/${user}/average-sessions`);
		console.log(`${REACT_APP_API_URL}/user/${user}/average-session`);
		const sessionsData = await response.json();
		const userAverageSessions = new UserAverageSessions(sessionsData.data.id, sessionsData.data.sessions);
		return userAverageSessions;
	} catch (err) {
		return (error) => console.error("error:" + error);
	}
}

export default getUserAverageSessions;
