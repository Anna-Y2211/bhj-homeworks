//const rotator = Array.from(document.querySelectorAll('.rotator__case'));
//const rotatorActive = document.querySelector('.rotator__case_active');
//const rotatorAll = document.querySelector('.rotator');
//const intervalRotate = setInterval(() => {
    //rotator.forEach((el) => {
        //el.classList.add('rotator__case_active');
    //})
    //if(!rotator) {
        //clearInterval(intervalRotate);
    //}
//}, 1000)
//let rotatorIndex = 0;
//rotatorAll.forEach((el) => {
    
    //let rotatorIndex = 0;
    //setInterval(() => {
        //for(let i = 0; i < rotator.length; i++) {

    ///})
//})
const rotatorsAll = Array.from(document.getElementsByClassName('rotator'));
//const arrayRotators = Array.from(rotators);
const rotatorCase = Array.from(document.querySelectorAll('rotator__case'));

rotatorsAll.forEach((el) => {
  //const rotatorCase = Array.from(document.querySelectorAll('rotator__case'));
  let index = 0;
  setInterval(() => {
    index = index++;
    el.classList.remove('rotator__case_active');
    el.classList.add('rotator__case_active')
    if(index == rotatorCase.length) {
        index =0;
    }
    
  }, 1000);
});

