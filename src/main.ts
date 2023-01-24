import './app.scss'

const block = document.querySelector<HTMLElement>('.content')
const title = document.querySelector<HTMLElement>('#container_title')
const dim = document.querySelector<HTMLElement>('#container_size')

const text = {
  max: "Ma largeur ne peut depasser 1440px et je reste centré",
  middle: "Pour moins de 1440px sur l'ecran je m'etands en laissant des marges de 20px",
  min: "pour moins de 480px (sur mobiles), je laisse des marges de 10px"
}

const setDim = (): number => {
  if(!dim) return 0
  const d = block?.offsetWidth || 0
  dim.innerHTML = `${d}px`
  return d
}
const setTite = ()  => {
  if(!(block && title && dim)) return
  const d = setDim()
  if(d >= 1440){
    title.innerHTML = `${text.max}`
  }else if(d < 1440 && d > 480){
    title.innerHTML = `${text.middle}`
  }else{
    title.innerHTML = `${text.min}`
  }
}
setTite()

window.addEventListener('resize', function(){
  setTite()
})