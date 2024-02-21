if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
} else {
  console.log("no hay serviceWorker");
}
