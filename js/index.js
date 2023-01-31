import {Controls} from "./controls.js"
import {Timer} from "./timer.js"
import {elements} from "./elements.js"
import Sound from "./sounds.js"

const {
  setButton,
  playButton,
  soundOnButton,
  soundOffButton,
  secondsTimer,
  minutesTimer,
  minutes,
  stopButton,
  pauseButton
} = elements

const sound = Sound()

const controls = Controls({
  setButton,
  playButton,
  pauseButton,
  stopButton,
})

const timer = Timer({
  minutesTimer,
  secondsTimer,
  resetControls: controls.reset,
  minutes
})

playButton.onclick = () => {
  controls.play()
  timer.countdown()
  sound.pressButton()
}

pauseButton.onclick = () => {
  controls.pause()
  timer.hold()
  sound.pressButton()
}

stopButton.onclick = () => {
 controls.reset()
 timer.reset()
 sound.pressButton()
}

soundOnButton.onclick = () => {
  soundOnButton.classList.add('hide')
  soundOffButton.classList.remove('hide')
  sound.bgAudio.play()
}

soundOffButton.onclick = () => {
  soundOnButton.classList.remove('hide')
  soundOffButton.classList.add('hide')
  sound.bgAudio.pause()
}

setButton.onclick = () => {
  let newMinutes = controls.getMinutes()
  if(!newMinutes){
    timer.reset()
    return 
  }
  timer.updateDisplay(newMinutes,0)
  timer.updateMinutes(newMinutes)
  
}