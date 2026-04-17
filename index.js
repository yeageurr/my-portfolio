const tech_icon = document.getElementById('tech');
const tech_wrapper = document.querySelector('.techstack');

let flag = true;

tech_icon.addEventListener('click', ()=> {
  if(flag) {
    tech_wrapper.style.display = 'flex';
    flag = !flag;
    return 0;
  } else {
    tech_wrapper.style.display = 'none';
    flag = !flag;
    return 0;
  }
})