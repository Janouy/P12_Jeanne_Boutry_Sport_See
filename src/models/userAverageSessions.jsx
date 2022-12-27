/**
 * @class representing one user's activity
 */

export class UserAverageSessions {
	/**
	 * @param {number} id
	 * @param {object} daily sessions
	 */
	constructor(userId, sessions) {
		this.userId = userId;
		this.sessions = sessions;
	}

	/**
	 * Get sessions values.
	 * @return {array} sessions values
	 */
	getAverageSessions() {
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
