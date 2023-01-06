/**
 * @class representing one user's activity
 */

export class UserAverageSessions {
	/**
	 * @param {number} user's id
	 * @param {array} user's daily sessions
	 */
	constructor(userId, sessions) {
		this.userId = userId;
		this.sessions = sessions;
	}

	/**
	 * Get sessions values.
	 * @return {array} user's daily sessions values
	 */
	getFormatedAverageSessions() {
		const sessionsAddDays = [];
		const weekDays = ["L", "M", "M", "J", "V", "S", "D"];
		for (let i = 0; i < this.sessions.length; i++) {
			sessionsAddDays.push({
				day: weekDays[i],
				sessionLength: this.sessions[i].sessionLength,
			});
		}
		return sessionsAddDays;
	}
}
