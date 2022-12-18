/**
 * @class representing one user's activity
 */

export class AverageSessions {
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
	getSessions() {
		return this.sessions;
	}
}
