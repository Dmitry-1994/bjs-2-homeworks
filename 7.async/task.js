"use strict"

class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(startAlarm, callback) {
		if (startAlarm === null || callback === undefined) {
			throw new Error("Отсутствуют обязательные аргументы")
		}

		if (this.alarmCollection.find(alarm => alarm.time === startAlarm)) {
			console.warn("Уже присутствует звонок на это же время");
		}

		this.alarmCollection.push({
			callback: callback,
			time: startAlarm,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	}

	getCurrentFormattedTime() {
		const date = new Date();
		const hours = date.getHours().toString().padStart(2, "0");
		const minutes = date.getMinutes().toString().padStart(2, "0");
		return `${hours}:${minutes}`;
	}

	start() {
		if (this.intervalId !== null) {
			return;
		}

		this.intervalId = setInterval(() => {
			for (const alarm of this.alarmCollection) {
				if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true) {
					alarm.canCall = false;
					alarm.callback();
				}
			}
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		for (const alarm of this.alarmCollection) {
			alarm.canCall = true;
		}
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}