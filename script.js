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
  if (activePhotoNum == 0) return
  else {
  if (animationEnd) {
  photoAnimation()
 
  
  activePhotoNum--


  updateAttributes()
}
}

}
const changePhotoNext = () => {
  if(activePhotoNum == listOfPhotos.length - 1) {return}
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
  console.log("dziala")
  photoNumber.innerHTML = `${activePhotoNum+1}/${listOfPhotos.length}`
}

activePhoto.addEventListener('animationend', () => {
  activePhoto.classList.remove('animationphoto');
  animationEnd = true;
})
prevButton.addEventListener('click', changePhotoPrev);
nextButton.addEventListener('click', changePhotoNext);
