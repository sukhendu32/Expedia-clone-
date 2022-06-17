let paymentData = {
    img: "https://images.trvl-media.com/hotels/70000000/69560000/69551900/69551801/c8b7c58e.jpg?impolicy=resizecrop&rw=297&ra=fit",
    hotelName: "ITC Grand Goa, a Luxury Collection Resort & Spa, Goa",
    roomType: "deluxe room 2 single beds",
    numNights: 2,
    priceForOneNight: 7000,
}
localStorage.setItem("hotelData", JSON.stringify(paymentData));

let signIn = {
    email: "btcpatil@gamil.com",
}
localStorage.setItem("signIn", JSON.stringify(signIn));


let signUp = {
    firstName: "ramesh",
    lastName: "Patil"
}
localStorage.setItem("signUp", JSON.stringify(signUp));





let priceInput = JSON.parse(localStorage.getItem("hotelData"));

document.getElementById("removecovid").addEventListener("click", function (event) {
    event.path[3].remove();
})

document.getElementById("hotelImage_hotelName").innerText = priceInput.hotelName;

document.getElementById("priceSummary_nightCount").innerText = priceInput.numNights;

let roomPrice = document.getElementById("roomPrice_withoutTax");
let priceCal = priceInput.numNights * priceInput.priceForOneNight;
roomPrice.innerText = priceCal;

let tax = document.getElementById("gstTax").innerText;

let totalPrice = document.getElementById("totalAmount");
totalPrice.innerText = Number(priceCal) + Number(tax);


document.getElementById("applypromoButton").addEventListener("click", function () {
    let promo = document.getElementById("PromoInput").value;
    if (promo === "SUMMER") {
        totalPrice.innerText = (Number(priceCal) + Number(tax) * 0.7);
    } else {
        alert("Invalid promo code")
    }
})

let checkSignin = JSON.parse(localStorage.getItem("signIn"));

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
    let signupData = JSON.parse(localStorage.getItem("signUp"));
    navName.innerHTML = "Hello, " + signupData.firstName;

    let name = document.getElementById("firstNameInput");
    name.value = signupData.firstName;

    let surname = document.getElementById("lastNameInput");
    surname.value = signupData.lastName;

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
    mailDiv.innerText = checkSignin.email;

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




