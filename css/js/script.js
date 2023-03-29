// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// Hamburger Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

// Form Send
const sendForm = document.querySelector('send-form')
const form = document.forms['contact-form']
const scriptURL =
    'https://script.google.com/macros/s/AKfycbwJdqJx0RoSjCVg5YnUePKwewvn1WovtTWIladYBgNZflPYziwy6UmCx2JD5nj1oEMg/exec'
form.addEventListener('submit', e => {
    e.preventDefault()
    // ketika tombol submit di klik
    // menampilkan loading, dan menghilangkan tombol kirim
    // btnLoading.classList.toggle('d-none');
    // btnKirim.classList.toggle('d-none');
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
        .then(response => {
            // menampilkan kirim, dan menghilangkan tombol loading
            // btnLoading.classList.toggle('d-none');
            // btnKirim.classList.toggle('d-none');
            // Tampilkan Alert
            // myAlert.classList.toggle('d-none')
            // Reset Form nya
            form.reset()
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})