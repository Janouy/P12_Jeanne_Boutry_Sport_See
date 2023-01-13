import { UserInformations } from "../../models/userInformations";
const { REACT_APP_USERS_MOCK } = process.env;
const { REACT_APP_CONNECTED_USER } = process.env;

/**
 * Download data from the specified URL.
 *
 * @async
 * @function getUsersData
 * @return {Promise<object>} The data from the URL.
 */

async function getUsersData() {
	try {
		const response = await fetch(`${REACT_APP_USERS_MOCK}/${REACT_APP_CONNECTED_USER}`);
		const userData = await response.json();
		const userInfos = new UserInformations(
			userData.id,
			userData.userInfos,
			userData.todayScore || userData.score,
			userData.keyData,
		);
		return userInfos;
	} catch (err) {
		return (error) => console.error("error:" + error);
	}
}

export default getUsersData;
