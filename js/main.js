
/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollHeader(){
    const nav = document.querySelector('.bg-header');
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) nav.classList.add('active-header'); else nav.classList.remove('active-header')
  }
  
  window.addEventListener('scroll', scrollHeader)


  window.addEventListener('scroll', ()=> {
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    let cScroll = document.querySelector('.c-scroll');
    if (scrollPosition >= 300) {
        cScroll.style.opacity = '0'
    } else {
        cScroll.style.opacity = '1'
    }
});










