class pubSub {
	constructor() {
		this.events = {}
	}

	sub(eventName, fn) {
		this.events[eventName] = this.events[eventName] || [];
		this.events[eventName].push(fn);
	}

	unSub(eventName, fn) {
		if (this.events[eventName]) {
			for (i = 0; i < this.events[eventName].length; i++) {
				if (this.events[eventName][i] === fn) {
					this.events[eventName].splice(i, 1);
					break;
				}
			}
		}
	}

	pub(eventName, data) {
		if (this.events[eventName]) {
			this.events[eventName].forEach(fn => {
				fn(data);
			})
		}
	}
}

module.exports = pubSub;
