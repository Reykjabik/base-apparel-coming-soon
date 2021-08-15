const input = document.getElementById('email');
const btn = document.getElementById('submit');
const msg = document.querySelector('.message');

console.log(btn);

btn.addEventListener('click', () => {
    console.log(input.value);

    // Check that value has a valid email format
    if (!validateEmail(input.value)){
    // If not, modify input
        input.classList.add('invalid');
        msg.style.opacity = '0.7';
    }
})

function validateEmail(address) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return address.match(re);
}