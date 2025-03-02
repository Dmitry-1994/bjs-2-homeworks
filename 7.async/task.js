class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(startAlarm, callback) {
        if (startAlarm === null || callback === undefined) {
            throw new Error("Отсутствуют обязательные аргументы")
        }

        

        if(this.alarmCollection.find(alarm => alarm.time === startAlarm)) {
            console.warn("Уже присутствует звонок на это же время");
        }

        this.alarmCollection.push({
            callback : callback,
            time : startAlarm,
            canCall : true
        });
    }
}