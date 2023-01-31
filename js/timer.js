import Sound from "./sounds.js"

export function Timer({
  minutesTimer,
  secondsTimer,
  resetControls,
  minutes
}){

  let timerTimeOut

  function updateDisplay(newMinutes, seconds){
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesTimer.textContent = String(newMinutes).padStart(2,'0')
    secondsTimer.textContent = String(seconds).padStart(2,'0')
    
  }

  function reset(){
    updateDisplay(minutes,0)
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    timerTimeOut = setTimeout(function(){
      let seconds = Number(secondsTimer.textContent)
      let minutes = Number(minutesTimer.textContent)

      updateDisplay(minutes,0)

      if(minutes <= 0 && seconds <= 0) {
        resetControls()
        updateDisplay()
        Sound().timeEnd()
        return
      }

      if(seconds <= 0) {
        seconds = 60
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))
      countdown()
    }, 1000)
  }

  function hold(){
    clearTimeout(timerTimeOut)
  }

  function updateMinutes(newMinutes){
    minutes = newMinutes
  }

  return {
    countdown,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
  }
}


