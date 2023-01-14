import { UserInformations } from "../../models/userInformations";
const { REACT_APP_API_URL } = process.env;
const user = 12;
/**
 * Download data from the specified URL.
 *
 * @async
 * @function getUsersData
 * @return {Promise<object>} The data from the URL.
 */

async function getUsersData() {
	try {
		const response = await fetch(`${REACT_APP_API_URL}/user/${user}`);
		const userData = await response.json();
		const userInfos = new UserInformations(
			userData.data.id,
			userData.data.userInfos,
			userData.data.todayScore || userData.score,
			userData.data.keyData,
		);
		return userInfos;
	} catch (err) {
		console.error("error:" + err);
		throw err;
	}
}

export default getUsersData;
