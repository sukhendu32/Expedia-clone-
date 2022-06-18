


document.getElementById("removecovid").addEventListener("click", function (event) {
    event.path[3].remove();
})

let hotelPrice = localStorage.getItem("totalExpense");
let hotelTax = localStorage.getItem("totalTax");



document.getElementById("priceSummary_nightCount").innerText = localStorage.getItem("noOfDays");
document.getElementById("priceSummary_roomCount").innerText = localStorage.getItem("noOfroom");

let checkIn=localStorage.getItem("checkInDate");
let checkOut=localStorage.getItem("checkInDate");

document.getElementById("duration_checkIn").innerText=checkIn.slice(0,15);
document.getElementById("duration_checkOut").innerText=checkOut.slice(0,15);
document.getElementById("duration_nightCount").innerText=localStorage.getItem("noOfDays");

let roomPrice = document.getElementById("roomPrice_withoutTax");

roomPrice.innerText = Number(hotelPrice)-Number(hotelTax);

let tax = document.getElementById("gstTax");
tax.innerText=Number(hotelTax);

let totalPrice = document.getElementById("totalAmount");
totalPrice.innerText =Number(hotelPrice);


document.getElementById("applypromoButton").addEventListener("click", function () {
    let promo = document.getElementById("PromoInput").value;
    if (promo === "SUMMER30") {
        let final=Number(hotelPrice)* 0.7
        let decimal=final.toFixed(2)
        totalPrice.innerText = decimal;
    } else {
        alert("Invalid promo code")
    }
})

let checkSignin = JSON.parse(localStorage.getItem("signInObj"));


if (checkSignin == null) {
    document.getElementById("personName").innerHTML = "Signin";
    let iconDiv = document.createElement("div");
    iconDiv.setAttribute("id", "lockIcon");
    let icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-lock");
    iconDiv.append(icon);

    let signedOut = document.createElement("div");
    signedOut.setAttribute("id", "signedOut");
    let labelDiv = document.createElement("div");
    labelDiv.innerText = "Sign in to earn 294 Expedia Reward points.";
    signedOut.append(labelDiv);

    document.getElementById("loginvalidation").append(iconDiv, signedOut);

    alert("Please signIn to book room");

} else {
    let navName = document.getElementById("personName");
    let signin = JSON.parse(localStorage.getItem("signInObj"));
    navName.innerHTML = "Hello, " + signin.signUpFirstName;

    let name = document.getElementById("firstNameInput");
    name.value = signin.signUpFirstName;

    let surname = document.getElementById("lastNameInput");
    surname.value = signin.signUpSurname;

    let iconDiv = document.createElement("div");
    iconDiv.setAttribute("id", "lockIcon");
    let icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-lock");
    iconDiv.append(icon);

    let signedIn = document.createElement("div");
    signedIn.setAttribute("id", "signedIn");
    let labelDiv = document.createElement("div");
    labelDiv.innerText = "Signed in as";

    let checkSignin = JSON.parse(localStorage.getItem("signIn"));
    let mailDiv = document.createElement("div");
    mailDiv.innerText = signin.signUpEmail;

    let expDiv = document.createElement("div");
    expDiv.innerText = "You will earn 87 expedia Reward points";

    signedIn.append(labelDiv, mailDiv, expDiv);

    document.getElementById("loginvalidation").append(iconDiv, signedIn);


    document.getElementById("completeBooking").addEventListener("click", function () {
        let cardName = document.getElementById("cardName").value;
        let cardNum = document.getElementById("cardNum").value;
        let cvv = document.getElementById("cvv").value;
        let panNum = document.getElementById("panNum").value;
        if (cardNum != "" && cvv != "" && panNum != "" && cardName != "") {

            let popup = document.getElementById("popup");
            popup.classList.add("open-popup");
            
            document.getElementById("closePopup").addEventListener("click", function(){
                popup.classList.remove("open-popup");
            }) 
        }
        else {
            alert("plese fill the requried feilds")
        }
    })
}




