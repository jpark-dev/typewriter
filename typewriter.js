// pair programming of Yasu@github.com/yasu71, Jason@github.com/zeipar

const sentence = "hello there from lighthouse labs";

const superTimer = () => {
  let time = 0;
  for (const char of sentence) {
    time += 50;
    setTimeout(() => {
      process.stdout.write(char);
    }, time) // <= 1s delay to make it noticeable. Can dial it down later.
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, time)
}

superTimer();
