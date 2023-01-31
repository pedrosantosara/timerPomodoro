export function Controls({
  pauseButton,
  playButton,
  setButton,
  stopButton,
}){

  function play(){
    playButton.classList.toggle('hide')
    pauseButton.classList.toggle('hide')
    setButton.classList.add('hide')
    stopButton.classList.remove('hide')
  }

  function pause(){
    playButton.classList.toggle('hide')
    pauseButton.classList.toggle('hide')
  }

  function getMinutes(){
    let newMinutes = prompt ("Quantos minutos?")
    if(!newMinutes){
      return false
    }
    return newMinutes
  }

  function reset(){
    playButton.classList.remove('hide')
    pauseButton.classList.add('hide')
    setButton.classList.remove('hide')
    stopButton.classList.add('hide')
  }


  return {
  reset,
  play,
  pause,
  getMinutes,
  }
}