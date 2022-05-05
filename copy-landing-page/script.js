const form = document.getElementById("form");
const formInputs = document.querySelectorAll(".form__input");
const missionSection = document.getElementById("mission")
const missionDescription = document.getElementById("mission-description");
const missionIphone = document.getElementById("mission-iphone");
const cookiesBar = document.getElementById("cookies-bar");

function hideCoockies() {
  cookiesBar.style.display = 'none';
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  formInputs.forEach( item => {
    if(item.value){
      item.classList.remove("form__input_error");
    } else {
      item.classList.add('form__input_error')
    }
  })
});

window.addEventListener('scroll', function (event) {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const rect = missionSection.getBoundingClientRect();
  console.log(rect);
  const missionSectionOffset = rect.top + scrollTop;
  const missionSectionHeight = missionSection.offsetHeight;
  const blockPart = 0.5; // coefficient to start an animation on a half of block
  const animPoint = window.innerHeight - missionSectionHeight * blockPart;
  if((window.pageYOffset > missionSectionOffset - animPoint)){
    missionIphone.classList.add("mission__iphone_rotate");
    missionDescription.classList.add("mission__text_slide-out")
  }
});
