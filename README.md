# Precourse Week 4 📝

## JS Project: Pomodoro Timer ⏲

### My process
- Write out html first: make two separate timers in html.
- Set up basic code with function for timer and add event listeners.
- Googled to see if there is something like `Date()` for time only, which would allow the timer to automatically calculate the countdown without too much code (no!). I then referred to [this](https://www.codewars.com/kata/52685f7382004e774f0001f7) Codewars kata dealing with the same topic. 
Wrote out algorithm in the startTimer function and looked up a tutorial to make sure. 
- Decided I wanted to have two separate timers for work and break, and toggle between the two.

### Stretch Goals
- Customized timer length: I implemented an input tag and saved the value to a variable. ✔️
- Sound when timer ends: Audio from [soundjay.com](www.soundjay.com). ✔️

### Learnings
- Inbuilt `confirm()` function - similar to `alert()`, but has a 'cancel' as well as an 'ok' option. 
- Reinforced the `setInterval` method and how to use with functions.
- Assignment and comparison operators - very important to know difference!
- Practice with form/input tags - had never used these before.
- Applied learnings from CSS week by using center and stack classes.

This exercise was very challenging 🤯 and forced me to think through the logic step by step. It happened that when I fixed one issue, another one that was fine before would break. I managed to fix most of these by taking my time to tackle each one as they happened. However there is still one issue with the start pause on the break timer that I could not fix (update: managed to fix this eventually by adding an extra if else statement to the main function that triggers the timer 🥳)

### Improvements to make: 
- ~~Code is not dry - need to find a way to combine the two timers into the same functions.~~
- ~~Configure the setInterval method to first execute immediately and then execute with the timer.~~
- ~~Add a dial animation.~~
- Animation is able to start and pause but not restart from where it paused.


