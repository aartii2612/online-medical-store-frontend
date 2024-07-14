//search-icon
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = ()=>
{
    searchForm.classList.toggle('active');
}
//Product slider 
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    
    autoplay: {
        delay:8000,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
       
      },
      768: {
        slidesPerView: 2,
       
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });