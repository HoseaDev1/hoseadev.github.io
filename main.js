// Script Google Sheets
const scriptURL =
    'https://script.google.com/macros/s/AKfycbwJdqJx0RoSjCVg5YnUePKwewvn1WovtTWIladYBgNZflPYziwy6UmCx2JD5nj1oEMg/exec'
const form = document.forms['hosea-contact-form']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');
// End

// Form
form.addEventListener('submit', e => {
    e.preventDefault()
    // ketika tombol submit di klik
    // menampilkan loading, dan menghilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
        .then(response => {
            // menampilkan kirim, dan menghilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // Tampilkan Alert
            myAlert.classList.toggle('d-none')
            // Reset Form nya
            form.reset()
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})
// End

// Notifikasi Toasts
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', () => {
        const toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}
// End