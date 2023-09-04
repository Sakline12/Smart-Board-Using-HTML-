function showDropdown() {
    document.getElementById("navbarDropdown").setAttribute("aria-expanded", "true");
    document.getElementById("dropdownMenu").classList.add("show");
  }

  function hideDropdown() {
    document.getElementById("navbarDropdown").setAttribute("aria-expanded", "false");
    document.getElementById("dropdownMenu").classList.remove("show");
  }
  function showDropdown2() {
    document.getElementById("navbarDropdown2").setAttribute("aria-expanded", "true");
    document.getElementById("dropdownMenu2").classList.add("show");
  }

  function hideDropdown2() {
    document.getElementById("navbarDropdown2").setAttribute("aria-expanded", "false");
    document.getElementById("dropdownMenu2").classList.remove("show");
  }
  function showDropdown3() {
    document.getElementById("navbarDropdown3").setAttribute("aria-expanded", "true");
    document.getElementById("dropdownMenu3").classList.add("show");
  }

  function hideDropdown3() {
    document.getElementById("navbarDropdown3").setAttribute("aria-expanded", "false");
    document.getElementById("dropdownMenu3").classList.remove("show");
  }
  function showDropdown4() {
    document.getElementById("navbarDropdown4").setAttribute("aria-expanded", "true");
    document.getElementById("dropdownMenu4").classList.add("show");
  }

  function hideDropdown4() {
    document.getElementById("navbarDropdown4").setAttribute("aria-expanded", "false");
    document.getElementById("dropdownMenu4").classList.remove("show");
  }

  let items = document.querySelectorAll('.carousel .carousel-item')

// Activate the carousel when the page loads
// window.addEventListener('load', function () {
//   new bootstrap.Carousel(document.getElementById('myCarousel'));
// });
// document.querySelectorAll('#myCarousel .carousel-indicators li').forEach((indicator, index) => {
//   indicator.addEventListener('click', function () {
//     const carousel = new bootstrap.Carousel(document.getElementById('myCarousel'));
//     carousel.to(index); // Go to the specified slide index
//   });
// });

// JavaScript
function sendInfo() {
  const form = document.getElementById('myForm');
  const formData = new FormData(form);

  // Check if form data is empty
  if (formData && formData.get('email') && formData.get('subject') && formData.get('message')) {
    console.log('Data sent successfully');
    toastr.success('Submit successfully', 'Send', { timeOut: 1000 });

    axios.post('https://formsubmit.co/info@bacbonltd.com', formData)
      .then(response => {
        console.log(response);
        toastr.success('Submit successfully', 'Send', { timeOut: 1000 });
      })
      .catch(error => {
        console.error(error);
      });
  } else {
    console.log('Fill up this form');
    toastr.error('Please fill up this form', 'Failed', { timeOut: 1000 });
  }
}

