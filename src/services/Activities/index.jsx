import { UserActivities } from "../../models/userActivities";
const { REACT_APP_API_URL } = process.env;

/**
 *  Download user's daily activity data from the specified URL.
 *
 * @async
 * @function getActivitiesData
 * @return {Promise<object>} The user's daily activity data from the URL.
 */

async function getActivitiesData(connectedUserId) {
	try {
		const response = await fetch(`${REACT_APP_API_URL}/user/${connectedUserId}/activity`);
		const activityData = await response.json();
		const userActivity = new UserActivities(activityData.data.id, activityData.data.sessions);
		return userActivity;
	} catch (err) {
		return (error) => console.error("error:" + error);
	}
}

export default getActivitiesData;
