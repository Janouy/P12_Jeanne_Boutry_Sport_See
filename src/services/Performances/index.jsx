import { UserPerformances } from "../../models/userPerformances";
const { REACT_APP_PERFORMANCES_MOCK } = process.env;
const { REACT_APP_CONNECTED_USER } = process.env;
/**
 * Download data from the specified URL.
 *
 * @async
 * @function getActivitiesData
 * @return {Promise<object>} The data from the URL.
 */

async function getPerformancesData() {
	try {
		const response = await fetch(`${REACT_APP_PERFORMANCES_MOCK}/${REACT_APP_CONNECTED_USER}`);
		const performancesData = await response.json();
		const userPerformance = new UserPerformances(performancesData.id, performancesData.kind, performancesData.data);

		return userPerformance;
	} catch (err) {
		return (error) => console.error("error:" + error);
	}
}

export default getPerformancesData;
