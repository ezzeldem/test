if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
  .then((reg) => console.log("Work Man", reg))
  .catch((err) => console.log("no", err))
}