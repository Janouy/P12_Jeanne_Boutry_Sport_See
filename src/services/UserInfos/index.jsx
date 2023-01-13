import { UserInformations } from "../../models/userInformations";
const { REACT_APP_USERS_MOCK } = process.env;
const { REACT_APP_USERS_API } = process.env;

/**
 * Download data from the specified URL.
 *
 * @async
 * @function getUsersData
 * @return {Promise<object>} The data from the URL.
 */

async function getUsersData() {
	try {
		const response = await fetch(REACT_APP_USERS_MOCK);
		//const response = await fetch(REACT_APP_USERS_API);
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
