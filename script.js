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
function validateForm(event) {
        event.preventDefault()

        let isValid = true

        const firstName = document.getElementById('firstName').value.trim()
        const lastName = document.getElementById('lastName').value.trim()
        const gender = document.querySelector('input[name="gender"]:checked')
        const day = document.getElementById('day').value
        const month = document.getElementById('month').value
        const year = document.getElementById('year').value
        const email = document.getElementById('email').value.trim()
        const newsletter = document.querySelector('input[name="newsletter"]:checked')

        // First Name validation
        if (firstName === "") {
            document.getElementById('firstNameError').style.display = 'block'
            isValid = false;
        } else {
            document.getElementById('firstNameError').style.display = 'none'
        }
        if (lastName === "") {
            document.getElementById('lastNameError').style.display = 'block'
            isValid = false;
        } else {
            document.getElementById('lastNameError').style.display = 'none'
        }

        if (!gender) {
            document.getElementById('genderError').style.display = 'block'
            isValid = false;
        } else {
            document.getElementById('genderError').style.display = 'none'
        }

        if (day === "" || month === "" || year === "") {
            document.getElementById('dobError').style.display = 'block'
            isValid = false;
        } else {
            document.getElementById('dobError').style.display = 'none'
        }

        if (email === "") {
            document.getElementById('emailError').style.display = 'block'
            isValid = false;
        } else {
            document.getElementById('emailError').style.display = 'none'
        }

        if (!newsletter) {
            document.getElementById('newsletterError').style.display = 'block'
            isValid = false;
        } else {
            document.getElementById('newsletterError').style.display = 'none'
        }

        if (isValid) {
            alert("Form submitted successfully!")
        }
    }

    try{

        document.querySelector('button[type="button"]').addEventListener('click', validateForm)
    }catch(error){
        console.log('.')
    }
    
    const elementsToAnimate = document.querySelectorAll(".animate-on-observe")

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active")
            } else {
                entry.target.classList.remove("active")
            }
        })
    })

    elementsToAnimate.forEach((element) => observer.observe(element))
})