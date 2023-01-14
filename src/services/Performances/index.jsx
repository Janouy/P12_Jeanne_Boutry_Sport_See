import { UserPerformances } from "../../models/userPerformances";
const { REACT_APP_API_URL } = process.env;
const user = 12;

/**
 * Download data from the specified URL.
 *
 * @async
 * @function getActivitiesData
 * @return {Promise<object>} The data from the URL.
 */

async function getPerformancesData() {
	try {
		const response = await fetch(`${REACT_APP_API_URL}/user/${user}/performance`);
		//const response = await fetch(REACT_APP_PERFORMANCES_API);
		const performancesData = await response.json();
		const userPerformance = new UserPerformances(
			performancesData.data.id,
			performancesData.data.kind,
			performancesData.data.data,
		);
		return userPerformance;
	} catch (err) {
		return (error) => console.error("error:" + error);
	}
}

export default getPerformancesData;
