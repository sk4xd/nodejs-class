console.log('Client side javascript is running.')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#message-1')
const msgTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (ev) => {
    ev.preventDefault()
    const location = search.value

    fetch('/weather?address='+ location).then((res) => {
        msgOne.textContent = ''
        msgTwo.textContent = ''  
    res.json().then((data) => {
        if(data.error) {
            msgOne.textContent = data.error
        } else {
            msgTwo.textContent = data.location +'. '+ data.forecast
        }
    })
})

})