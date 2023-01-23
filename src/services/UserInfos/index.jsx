import { UserInformations } from "../../models/userInformations";
const { REACT_APP_API_URL } = process.env;

/**
 * Download user's informations data from the specified URL.
 *
 * @async
 * @function getUsersData
 * @return {Promise<object>} The user's informations data from the URL.
 */

async function getUsersData(connectedUserId) {
	try {
		const response = await fetch(`${REACT_APP_API_URL}/user/${connectedUserId}`);
		const userData = await response.json();
		const userInfos = new UserInformations(
			userData.data.id,
			userData.data.userInfos,
			userData.data.todayScore || userData.data.score,
			userData.data.keyData,
		);
		return userInfos;
	} catch (err) {
		console.error("error:" + err);
		throw err;
	}
}

export default getUsersData;
