const seconds = new Date().getSeconds();

setTimeout(function() {
  console.log(`Ran after ${new Date().getSeconds() - seconds} seconds`);
}, 500)

while (true) {
  if (new Date().getSeconds() - seconds >= 2) {
    console.log("Good, looped for 2 seconds")
    break;
  }
}
