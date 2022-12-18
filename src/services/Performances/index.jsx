import { UserPerformances } from "../../models/userPerformances";
const { REACT_APP_PERFORMANCES_MOCK } = process.env;

/**
 * Download data from the specified URL.
 *
 * @async
 * @function getActivitiesData
 * @return {Promise<object>} The data from the URL.
 */

async function getPerformancesData() {
	const response = await fetch(REACT_APP_PERFORMANCES_MOCK);
	const json = await response.json();
	const performancesData = json.data.map((performance) => {
		return new UserPerformances(performance.userId, performance.kind, performance.data);
	});
	return performancesData;
}

export default getPerformancesData;
