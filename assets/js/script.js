
const mobileMenyu=document.querySelector(".mobile-menyu")
const openIcon=document.querySelector(".fa-bars")
const closeIcon=document.querySelector(".fa-circle-xmark")

openIcon.addEventListener("click",function(){
mobileMenyu.classList.add("aktiv")
})

closeIcon.addEventListener("click",function(){
    mobileMenyu.classList.remove("aktiv")
})


const swiperr = new Swiper(".mycarousel", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  
  });