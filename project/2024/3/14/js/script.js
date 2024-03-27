document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault()

    document.getElementById('nameError').textContent = ''
    document.getElementById('emailError').textContent = ''
    document.getElementById('phoneError').textContent = ''
    document.getElementById('messageError').textContent = ''
    document.getElementById('categoryError').textContent = ''
    document.getElementById('companyNameError').textContent = ''

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const message = document.getElementById('message').value
    const category = document.querySelector(
      'input[name="category"]:checked'
    ).value
    const companyName = document.getElementById('companyName').value

    let hasError = false

    if (!name) {
      document.getElementById('nameError').textContent =
        'Name is required. Please enter your name.'
      hasError = true
    }

    if (!email) {
      document.getElementById('emailError').textContent =
        'Email is required. Please enter your email.'
      hasError = true
    }

    if ((email && !email.includes('@')) || !email.includes('.com')) {
      document.getElementById('emailError').textContent =
        'Email is invalid. Please enter a valid email.'
      hasError = true
    }

    if (!phone) {
      document.getElementById('phoneError').textContent =
        'Phone is required. Please enter your phone number.'
      hasError = true
    }

    if (phone && (phone.length !== 10 || isNaN(phone))) {
      document.getElementById('phoneError').textContent =
        'Phone is invalid. Please enter a valid phone number.'
      hasError = true
    }

    if (!message) {
      document.getElementById('messageError').textContent =
        'Message is required. Please enter your message.'
      hasError = true
    }

    if (!category) {
      document.getElementById('categoryError').textContent =
        'category is required. Please enter your category.'
      hasError = true
    }

    if (category === 'business' && !companyName) {
      document.getElementById('companyNameError').textContent =
        'Company Name is required. Please enter your company name.'
      hasError = true
    }

    if (!hasError) {
      console.log('Submitting form...')
      console.log({
        name,
        email,
        phone,
        message,
        category,
        companyName,
      })
    }
  })

document
  .querySelectorAll('input[type="radio"][name="category"]')
  .forEach(function (radio) {
    radio.addEventListener('change', function () {
      if (this.value === 'business') {
        document.getElementById('companyNameInput').style.display = 'block'
      } else {
        document.getElementById('companyNameInput').style.display = 'none'
      }
    })
  })
