const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const stopButton = document.querySelector('.stop')
const setButton = document.querySelector('.set')
const soundOnButton = document.querySelector('.sound-on')
const soundOffButton = document.querySelector('.sound-off')
const minutesTimer = document.querySelector('.minutes')
const secondsTimer = document.querySelector('.seconds')
let minutes = Number(minutesTimer.textContent)

export const elements = {
  playButton,
  pauseButton,
  stopButton,
  setButton,
  soundOnButton,
  soundOffButton,
  minutesTimer,
  secondsTimer,
  minutes,
}