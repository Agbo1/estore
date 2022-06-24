const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')
const handleClick = document.getElementById('handleClick')



let personalDetails = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "cardNumber": "",
    "amount": "",
    "phoneNumber": "",
    "city": "",
    "month": "",
    "year": "",
    "month": "",
    "cvv": "",
};

function validateMyForm(){

personalDetails.firstName = document.getElementById('firstName').value;
personalDetails.lastName = document.getElementById('lastName').value;
personalDetails.cardNumber = document.getElementById('cardNumber').value;
personalDetails.amount = document.getElementById('amount').value;
personalDetails.city = document.getElementById('city').value;
personalDetails.phoneNumber = document.getElementById('phoneNumber').value;
personalDetails.email = document.getElementById('email').value;
personalDetails.month = document.getElementById('month').value;
personalDetails.year = document.getElementById('year').value;
personalDetails.cvv = document.getElementById('cvv').value;

console.log(personalDetails)

if(firstName === ""){
    console.log('empty name')
}else{
    alert("success")
}



}







    handleClick.addEventListener('click', (e) => {
        e.preventDefault();

         
        // console.log(firstName.value, lastName.value)
    })


    



if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })

}

if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })

}