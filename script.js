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

// console.log(personalDetails)








}


let error = "";


// let name_error = document.getElementById("name_error")
// let lastname_error = document.getElementById("lastname_error")
// let cardNumber_error = document.getElementById("cardNumber_error")
// let amount_error = document.getElementById("amount_error")
// let city_error = document.getElementById("city_error")
// let phoneNumber_error = document.getElementById("phoneNumber_error")
// let email_error = document.getElementById("email_error")
// let month_error = document.getElementById("month_error")
// let year_error = document.getElementById("year_error")
// let cvv_error = document.getElementById("cvv_error")
 


    // handleClick.addEventListener('click', (e) => {
    //     e.preventDefault();

    //     if(personalDetails.firstName === "" || personalDetails.lastName === "" || personalDetails.cardNumber === ""){
    //         error = "firstname is required";
    //         firstName.style.border = "1px solid red";
    //         name_error.style.display = "block"
    //         firstName.focus()
    //         return false;
    //     }
    //     if(personalDetails.lastName === ""){
    //         lastName.style.border = "1px solid red";
    //         lastname_error.style.display = "block"
    //         error = "lastname is required";
    //         lastName.focus()
    //         return false;
    //     }
    //     if(personalDetails.amount === ""){
    //         amount.style.border = "1px solid red";
    //         amount_error.style.display = "block"
    //         amount.focus()
    //         return false;
    //     }
    //     if(personalDetails.city === ""){
    //         city.style.border = "1px solid red";
    //         city_error.style.display = "block"
    //         city.focus()
    //         return false;
    //     }
    //     if(personalDetails.phoneNumber === ""){
    //         phoneNumber.style.border = "1px solid red";
    //         phoneNumber_error.style.display = "block"
    //         phoneNumber.focus()
    //         return false;
    //     }
    //     if(personalDetails.email === ""){
    //         email.style.border = "1px solid red";
    //         email_error.style.display = "block"
    //         email.focus()
    //         return false;
    //     }
    //     if(personalDetails.month === ""){
    //         month.style.border = "1px solid red";
    //         month_error.style.display = "block"
    //         month.focus()
    //         return false;
    //     }
    //     if(personalDetails.year === ""){
    //         year.style.border = "1px solid red";
    //         year_error.style.display = "block"
    //         year.focus()
    //         return false;
    //     }
    //     if(personalDetails.cvv === ""){
    //         cvv.style.border = "1px solid red";
    //         cvv_error.style.display = "block"
    //         cvv.focus()
    //         return false;
    //     }

        



    // })


    



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