// Gallery
const container = document.querySelector('.container');
const prevButton = document.querySelector('.gallery__prev');
const nextButton = document.querySelector('.gallery__next');
const activePhoto = document.querySelector('.gallery__activephoto');
const photoNumber = document.querySelector('.gallery__photonumber');



const listOfPhotos = [
{src: 'img_1'},
{src: 'img_2'},
{src: 'img_3'},
{src: 'img_4'},
{src: 'img_5'}

]
let activePhotoNum = 0;
let animationEnd = true;
let imageWidth;

let photoWidth;
photoNumber.innerHTML = `${activePhotoNum+1}/${listOfPhotos.length}`



const changePhotoPrev = () => {
  
  if (activePhotoNum == 0) {
    activePhotoNum = listOfPhotos.length - 1; 
    photoAnimation();
    updateAttributes();
  }
  else {
  if (animationEnd) {
  photoAnimation()
 
  
  activePhotoNum--


  updateAttributes()
}

}

}
const changePhotoNext = (e) => {
  
  if(activePhotoNum == listOfPhotos.length - 1) {
    activePhotoNum = 0; 
    photoAnimation();
    updateAttributes();
  }
  else {
  if (animationEnd) {
  photoAnimation()
  
  activePhotoNum++
   
  updateAttributes()
}}

}
const updateAttributes = () => {
  updatePhotoNumber()
  activePhoto.setAttribute('src', `/assets/imgs/${listOfPhotos[activePhotoNum].src}.jpg`)
  
}

const photoAnimation = () => {
  animationEnd = false;
  activePhoto.classList.add('animationphoto');
  
}



activePhoto.addEventListener('animationend', () => {
  activePhoto.classList.remove('animationphoto');
  animationEnd = true;
  
})
const updatePhotoNumber = () => {
  photoNumber.innerHTML = `${activePhotoNum+1}/${listOfPhotos.length}`
  
}
const changeButtonsPosition = (e) => {
  imageWidth = activePhoto.clientWidth;
  containerWidth = container.clientWidth;
  console.log(((containerWidth - imageWidth) / 2) - ((containerWidth - imageWidth) / 2))
  prevButton.style.left = (containerWidth - imageWidth) / 2 - 150  + "px"
  nextButton.style.right = (containerWidth - imageWidth) / 2 - 150 + "px"


}

updateAttributes();
prevButton.addEventListener('click', changePhotoPrev);
nextButton.addEventListener('click', changePhotoNext);
activePhoto.addEventListener('load', changeButtonsPosition)
// AutoPlay

const autoPlayButton = document.querySelector('.gallery__auto')

let autoPlayDelay;

let autoPlayID;

let autoPlayActive = false;

const autoPlay = () => {
  
  changePhotoNext();
 

}
const autoPlayTurnOn = () => {

  autoPlayActive = !autoPlayActive;
  
  if(autoPlayActive) {
    autoPlayID = setInterval(autoPlay, autoPlayDelay)
  } else {
    clearInterval(autoPlayID)
  }
  autoPlayButton.classList.toggle('gallery__autoOn')
  
}
autoPlayButton.addEventListener('click', autoPlayTurnOn)



//AutoPlay Time

const range = document.querySelector('.autoplay__time')
const timeValue = document.querySelector('.autoplay__timevalue')


const changeRange = (e) => {
  autoPlayDelay = e.target.value * 1000;
  
  if(autoPlayActive) {
    clearInterval(autoPlayID);
    autoPlayID = setInterval(autoPlay, autoPlayDelay);
  }
  
  timeValue.innerText = e.target.value + "s";
}



range.addEventListener('mouseup', changeRange)














// Menu

const menuList = document.querySelector('.menu__list');