class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    if (this.intervalId === null) {
      this.intervalId = setInterval(() => {
        this.currentTime++;
        if (printTimeCallback) {
          printTimeCallback(
            this.computeTwoDigitNumber(this.getMinutes()),
            this.computeTwoDigitNumber(this.getSeconds())
          );
        }
      }, 1000); // Update the time every 1000 milliseconds (1 second)
    }
  }

  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    return Math.floor(this.currentTime);
  }

  computeTwoDigitNumber(value) {
    return value < 10 ? '0' + value : String(value);
  }

  stop() {
    clearInterval();
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  reset() {
    this.stop();
    this.currentTime = 0;
    this.splits = [];
  }

  split() {
    if (this.intervalId !== null) {
      // Calculate minutes and seconds
      const minutes = Math.floor(this.currentTime / 60);
      const seconds = this.currentTime % 60;

      // Format minutes and seconds as "mm:ss"
      const formattedTime = `${this.computeTwoDigitNumber(
        minutes
      )}:${this.computeTwoDigitNumber(seconds)}`;
      this.splits.push(formattedTime);
      return formattedTime;
    }
  }
}
