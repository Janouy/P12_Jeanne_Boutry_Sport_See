import { UserActivities } from "../../models/userActivities";
const { REACT_APP_API_URL } = process.env;
const user = 12;
/**
 * Download data from the specified URL.
 *
 * @async
 * @function getActivitiesData
 * @return {Promise<object>} The data from the URL.
 */

async function getActivitiesData() {
	try {
		const response = await fetch(`${REACT_APP_API_URL}/user/${user}/activity`);
		//const response = await fetch(REACT_APP_ACTIVITY_API);
		const activityData = await response.json();

		const userActivity = new UserActivities(activityData.data.id, activityData.data.sessions);
		return userActivity;
	} catch (err) {
		return (error) => console.error("error:" + error);
	}
}

export default getActivitiesData;
