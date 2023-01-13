import { UserActivities } from "../../models/userActivities";
const { REACT_APP_ACTIVITY_MOCK } = process.env;
const { REACT_APP_ACTIVITY_API } = process.env;

/**
 * Download data from the specified URL.
 *
 * @async
 * @function getActivitiesData
 * @return {Promise<object>} The data from the URL.
 */

async function getActivitiesData() {
	try {
		const response = await fetch(REACT_APP_ACTIVITY_MOCK);
		//const response = await fetch(REACT_APP_ACTIVITY_API);
		const activityData = await response.json();

		const userActivity = new UserActivities(activityData.data.id, activityData.data.sessions);
		return userActivity;
	} catch (err) {
		return (error) => console.error("error:" + error);
	}
}

export default getActivitiesData;
