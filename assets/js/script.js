const mobileMenyu = document.querySelector(".mobile-menyu");
const openIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-circle-xmark");

openIcon.addEventListener("click", function () {
  mobileMenyu.classList.add("aktiv");
});

closeIcon.addEventListener("click", function () {
  mobileMenyu.classList.remove("aktiv");
});


const swiperr = new Swiper(".mycarousel", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// accordion
new Accordion(".accordion-left");
new Accordion(".accordion-right");
// accordion

// pricing start

const plansDivi = document.getElementById("plans-card");
const billingToggle = document.getElementById("pricing-input");

// Məlumatları yükləyən və qiymətləri göstərən funksiyanı yükləyirik
window.addEventListener("load", melumatlarGelir);

async function melumatlarGelir() {
  const unvan = "assets/pricing.json";  // JSON faylının yolu

  try {
    const gelenCvb = await fetch(unvan); // Məlumatları götürmək
    const pricing = await gelenCvb.json(); // JSON formatında oxumaq
    renderPricingPlans(pricing);  // Qiymətləri göstərmək
    
    // Dəyişdirici düymə click ednde qiymətləri yeniləyir
    billingToggle.addEventListener("change", () => renderPricingPlans(pricing));

  }
  
  catch (err) {
    console.log(err);  
  }
}

// Qiymətləri göstərən funksiya
function renderPricingPlans(pricing) {
  const isQuarterly = billingToggle.checked; // Rüblük qiymət seçimi
  plansDivi.innerHTML = "";  // Mövcud planları silirik

  pricing.forEach(function (onePricing) {
    plansDivi.innerHTML += `
      <div class="card col-md-4 w-full col-lg-4">
        <div class="card-body">
          <h5 class="card-title">${onePricing.name}</h5>
          <p class="card-text">${isQuarterly ? onePricing.quarterlyPrice : onePricing.monthlyPrice}</p>
        </div>
        <ul class="list-group list-group-flush w-100">
          ${onePricing.features.map(featureItem => `
            <li class="list-group-item ${featureItem.availability === 'yes' ? 'yes-availability' : 'no-availability'}">
              <div class="d-flex items-center gap-2">
                <div>
                  <img src="assets/image/pricing/pricing-icon.svg" alt="">
                </div>
                <p class="text-availability">${featureItem.feature}</p>
              </div>
              <span>${featureItem.availability}</span>
            </li>
          `).join('')}
        </ul>
        <div class="card-body">
          <button>${onePricing.btn}</button>
        </div>
      </div>
    `;
  });
}

// sweet alert 
document.getElementById("btn-send").addEventListener("click", function(e) {
  e.preventDefault()
  Swal.fire({
      title: 'Success!',
      text: 'Your email has been submitted successfully.',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#FF5252'
  });
});

// sweet alert 

// modal box
var modal = document.getElementById("myModal");
var btn = document.getElementById("learn-more-btn");
var closeBtn = document.getElementsByClassName("close")[0];


btn.addEventListener("click",function(){
  modal.style.display = "block";
})

closeBtn.addEventListener("click",function(){
  modal.style.display = "none";
})

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// swiperrimg

const swiper = new Swiper(".imgSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// ?chart.js 
const ctx = document.getElementById('barChart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
      label: 'Sales (in USD)',
      data: [150, 200, 100, 250, 300],
      backgroundColor: ['#f76f6f', '#36a2eb', '#fbcc4e', '#60e6ba', '#ef5be0'],
      borderColor: ['#f76f6f', '#36a2eb', '#fbcc4e', '#60e6ba', '#ef5be0'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Revenue (in USD)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Months'
        }
      }
    }
  }
});

// aos js 

  AOS.init();

  

