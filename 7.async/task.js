class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(time, callback) {
    if (((time == null || callback == null))) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    for (let alarm of this.alarmCollection) {
      if (alarm.time === time) {
        console.warn('Уже присутствует звонок на это же время')
      }
    }
    const alarm = {
      time: time,
      callback: callback,
      canCall: true
    }
    this.alarmCollection.push(alarm);
  }
  removeClock(time) {
    const result = this.alarmCollection.filter((alarm) => {
      return alarm.time !== time;
    });
    this.alarmCollection = result
  }
  getCurrentFormattedTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    return `${hours}:${minutes}`
  }
  start() {
    if (this.intervalId) {
      return;
    }
    this.intervalId = setInterval(() => {
      const currentTime = this.getCurrentFormattedTime();
      this.alarmCollection.forEach((alarm) => {
        if (alarm.time === currentTime && alarm.canCall === true) {
          alarm.canCall = false;
          alarm.callback();
        }
      })
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => {
      alarm.canCall = true;
    });
  }
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
