const prevButton = document.querySelector('.gallery__prev');
const nextButton = document.querySelector('.gallery__next');
const prevPhoto = document.querySelector('.gallery__prevphoto');
const activePhoto = document.querySelector('.gallery__activephoto');
const nextPhoto = document.querySelector('.gallery__nextphoto');
const photoNumber = document.querySelector('.gallery__photonumber');

const listOfPhotos = [
{src: 'img_1'},
{src: 'img_2'},
{src: 'img_3'},
{src: 'img_4'}

]
let activePhotoNum = 0;
let animationEnd = true;



const changePhotoPrev = () => {
  if (animationEnd) {
  photoAnimation()
 if (activePhotoNum == 0) return;
 else {
  
  activePhotoNum--

 }
  updateAttributes()
}

}
const changePhotoNext = () => {
  console.log("Działa")
  if (animationEnd) {
  photoAnimation()
  if (activePhotoNum == listOfPhotos.length - 1) {return}
  else {

   activePhotoNum++
  
  }
  updateAttributes()
}
}
const updateAttributes = () => {

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
prevButton.addEventListener('click', changePhotoPrev);
nextButton.addEventListener('click', changePhotoNext);
