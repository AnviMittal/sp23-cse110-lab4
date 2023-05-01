function displayTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }
  
  setInterval(displayTime, 1000);
  