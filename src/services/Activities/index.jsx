import { UserActivity } from "../../models/userActivity";
const { REACT_APP_ACTIVITY_MOCK } = process.env;
/**
 * Download data from the specified URL.
 *
 * @async
 * @function getActivitiesData
 * @return {Promise<object>} The data from the URL.
 */

async function getActivitiesData() {
	const response = await fetch(REACT_APP_ACTIVITY_MOCK);
	const json = await response.json();
	const activityData = json.data.map((activity) => {
		return new UserActivity(activity.userId, activity.sessions);
	});
	return activityData;
}

export default getActivitiesData;
