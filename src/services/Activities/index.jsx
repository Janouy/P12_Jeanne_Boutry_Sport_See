import { UserActivities } from "../../models/userActivities";
const { REACT_APP_ACTIVITY_MOCK } = process.env;
const { REACT_APP_CONNECTED_USER } = process.env;

/**
 * Download data from the specified URL.
 *
 * @async
 * @function getActivitiesData
 * @return {Promise<object>} The data from the URL.
 */

async function getActivitiesData() {
	try {
		const response = await fetch(`${REACT_APP_ACTIVITY_MOCK}/${REACT_APP_CONNECTED_USER}`);
		const activityData = await response.json();

		const userActivity = new UserActivities(activityData.id, activityData.sessions);

		return userActivity;
	} catch (err) {
		return (error) => console.error("error:" + error);
	}
}

export default getActivitiesData;
