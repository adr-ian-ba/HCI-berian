document.addEventListener("DOMContentLoaded", function(){
    const burger = document.querySelector('.burger')
    const middle = document.querySelector('.middle')
    const inner = document.querySelector('.inner')

    burger.addEventListener('click', () => {
        middle.style.display = 'block'
        inner.style.right = '0'
    })

    middle.addEventListener('click', () => {
        middle.style.display = 'none'
        inner.style.right = '-100%'
    })

    try{
        const carousels = document.querySelectorAll('.carousel-container')

  carousels.forEach((carousel) => {
    const carouselContainer = carousel.querySelector('.carousel-item-container')
    const items = carousel.querySelectorAll('.carousel-item')
    const leftArrow = carousel.querySelector('.left')
    const rightArrow = carousel.querySelector('.right')

    let currentIndex = 0
    const totalItems = items.length

    const updateCarousel = () => {
      const gap = parseInt(getComputedStyle(carouselContainer).gap) || 0;
      const itemWidth = items[0].offsetWidth;
      carouselContainer.style.transform = `translateX(-${currentIndex * (itemWidth + gap)}px)`
      
      items.forEach((item, index) => {
        item.classList.toggle('center', index === currentIndex)
      })
    }

    leftArrow.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--
      } else {
        currentIndex = totalItems - 1
      }
      updateCarousel()
    });

    rightArrow.addEventListener('click', () => {
      if (currentIndex < totalItems - 1) {
        currentIndex++
      } else {
        currentIndex = 0
      }
      updateCarousel()
    })

    setInterval(() => {
      rightArrow.click()
    }, 3000)

    updateCarousel()
  });

    }catch(err){
        throw new err
    }
})