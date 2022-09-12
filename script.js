// Gallery

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
const changePhotoNext = () => {
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

const updatePhotoNumber = () => {
  photoNumber.innerHTML = `${activePhotoNum+1}/${listOfPhotos.length}`
}

activePhoto.addEventListener('animationend', () => {
  activePhoto.classList.remove('animationphoto');
  animationEnd = true;
})

prevButton.addEventListener('click', changePhotoPrev);
nextButton.addEventListener('click', changePhotoNext);

// AutoPlay

const autoPlayButton = document.querySelector('.gallery__auto')

let autoPlayID;

let autoPlayActive = false;

const autoPlay = () => {
  
  changePhotoNext();
 

}
const autoPlayTurnOn = () => {

  autoPlayActive = !autoPlayActive;
  
  if(autoPlayActive) {
    autoPlayID = setInterval(autoPlay, 5000)
  } else {
    clearInterval(autoPlayID)
  }

}
autoPlayButton.addEventListener('click', autoPlayTurnOn)
// Menu

const menuList = document.querySelector('.menu__list');