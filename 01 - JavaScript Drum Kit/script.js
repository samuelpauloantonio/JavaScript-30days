

function playSound(e){
 const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    

    //keyCode é o  codigo de um teclado
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if(!audio) return

    key.classList.add('playing')
    
    audio.currentTime = 0
    audio.play()

}


function removeTransition(e){
   if(e.propertyName !== "transform"){
      e.target.classList.remove('playing')
   }
}


const keys = document.querySelectorAll('.key')
keys.forEach(key  => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)

