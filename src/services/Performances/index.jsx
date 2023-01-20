import { UserPerformances } from "../../models/userPerformances";
const { REACT_APP_API_URL } = process.env;

/**
 *  Download user's performance according to different types of activity data from the specified URL.
 *
 * @async
 * @function getPerformancesData
 * @return {Promise<object>} The user's performance according to different types of activity data from the URL.
 */

async function getPerformancesData(connectedUserId) {
	try {
		const response = await fetch(`${REACT_APP_API_URL}/user/${connectedUserId}/performance`);
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
