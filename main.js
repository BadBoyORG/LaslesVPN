/* Swiper of Testimonials */
const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 50,
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev'
  },
  mousewheel: true,
  keyboard: true
})

/* Select the plan */
const plans = document.querySelectorAll('div.plan')
const buttons = document.querySelectorAll('a.button-3')

buttons.forEach((button, index) => {
  const apply = () => {
    plans[index].classList.add('border-red')
  }

  const remove = () => {
    plans[index].classList.remove('border-red')
  }

  button.addEventListener('mouseenter', apply)

  button.addEventListener('mouseout', remove)
})

/* Menu active when the page is visible */
const sections = document.querySelectorAll('body section[id]')

function activeteMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

const footers = document.querySelectorAll('footer')

function activeteMenuAtCurrentFooter() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of footers) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
/* Functions */
window.addEventListener('scroll', function () {
  activeteMenuAtCurrentSection()
  activeteMenuAtCurrentFooter()
})
