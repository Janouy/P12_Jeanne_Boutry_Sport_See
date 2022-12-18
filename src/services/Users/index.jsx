import { User } from "../../models/user";
const { REACT_APP_USERS_MOCK } = process.env;
/**
 * Download data from the specified URL.
 *
 * @async
 * @function getUsersData
 * @return {Promise<object>} The data from the URL.
 */

async function getUsersData() {
	const response = await fetch(REACT_APP_USERS_MOCK);
	const json = await response.json();
	const userData = json.data.map((user) => {
		return new User(user.id, user.userInfos, user.todayScore || user.score, user.keyData);
	});
	return userData;
}

export default getUsersData;
