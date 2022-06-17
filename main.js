const gnb = document.querySelector('#nav');

document.addEventListener('scroll', ()=> {
  if(scrollY > 500) {
    gnb.classList.add('show');
  } else {
    gnb.classList.remove('show');
  }
})