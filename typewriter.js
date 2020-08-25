// pair programming of Yasu@github.com/yasu71, Jason@github.com/zeipar

const sentence = "hello there from lighthouse labs";

const superTimer = () => {
  let delay = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay) // <= 1s delay to make it noticeable. Can dial it down later.
  }
  delay += 50;
  
  setTimeout(() => {
    process.stdout.write('\n');
  }, delay)
}

superTimer();
