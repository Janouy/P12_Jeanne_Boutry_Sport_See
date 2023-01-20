import { UserAverageSessions } from "../../models/userAverageSessions";
const { REACT_APP_API_URL } = process.env;

/**
 * Download user's average sessions duration data from the specified URL.
 *
 * @async
 * @function getUserAverageSessions
 * @return {Promise<object>} The user's average sessions duration data from the URL.
 */

async function getUserAverageSessions(connectedUserId) {
	try {
		const response = await fetch(`${REACT_APP_API_URL}/user/${connectedUserId}/average-sessions`);
		const sessionsData = await response.json();
		const userAverageSessions = new UserAverageSessions(sessionsData.data.id, sessionsData.data.sessions);
		return userAverageSessions;
	} catch (err) {
		return (error) => console.error("error:" + error);
	}
}

export default getUserAverageSessions;
