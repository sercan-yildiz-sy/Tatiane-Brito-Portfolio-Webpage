
const swiper = new Swiper('.swiper', {
  centeredSlides: true,
  loop: true,
  centeredSlidesBounds: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  breakpoints:{
    0:{
      slidesPerView: 1.25,
      
    },
    768 :{
      slidesPerView: 1.35,
        
    }
  },
   mousewheel: {
        forceToAxis: true,
      },
});




  const form = document.querySelector('form');
  const messageEl = document.getElementById('form-message');
  const emailInput = form.querySelector("input[name='email']");
  const emailError = form.querySelector(".email-error");
  const messageSent = form.querySelector(".form-message");
  
  emailInput.addEventListener("blur", function () {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
  if (!emailPattern.test(emailInput.value) && emailInput.value.trim() !== "") {
    emailError.style.display = "block";
  } 
  else {
    emailError.style.display = "none";
  }
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    
   

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        messageSent.style.display = "flex"; 
        form.reset();
        
      } else {
        messageEl.textContent = 'Oops! Something went wrong. Please try again.';
        messageEl.classList.add('error');
      }
    } catch (error) {
      messageEl.textContent = 'Network error. Please try again later.';
      messageEl.classList.add('error');
    }
  });
