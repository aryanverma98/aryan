const swiper = new Swiper('.slider-wrapper', {
   
    loop: true,
    spaceBetween:25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickablr: true,
      dynamicBullets:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  
  breakpoints:{
    0:{
      slidesperview:1
  
    },
    768:{
      slidesperview:2
    },
    1024:{
      slidesperview:3
    }
  }
})