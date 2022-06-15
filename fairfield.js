
amenities=[
    {icon:"fa-solid fa-person-swimming", text:"Pool"},
    {icon:"fa-regular fa-snowflake" , text:"Air conditioning"},
    {icon:"fa-solid fa-wifi" , text:"Free Wifi"},
    {icon:"fa-solid fa-utensils", text:"Restaurant"},
    {icon:"fa-solid fa-p", text:"Parking Included"},
    {icon:"fa-solid fa-dumbbell", text:"Gym"}
]

amenities.forEach(ele=>{

    let div =document.createElement("div");
    let i= document.createElement("i");
    i.setAttribute("class", ele.icon);
    let p=document.createElement("p");
    p.innerText=ele.text;
    div.append(i,p);
    document.querySelector("#amenities").append(div);
});

cleaningSafety=[
    {icon:"fa-solid fa-pump-medical", text:"Cleaned with disinfectant"},
    {icon:"fa-solid fa-clock", text:"24-hour vacancy between guest room stays"},
    {icon:"fa-solid fa-bell-concierge", text:"Contactless check-in"},
    {icon:"fa-solid fa-pump-soap", text:"Hand sanitiser provided"},
]

cleaningSafety.forEach(ele=>{

    let div =document.createElement("div");
    let i= document.createElement("i");
    i.setAttribute("class", ele.icon);
    let p=document.createElement("p");
    p.innerText=ele.text;
    div.append(i,p);
    document.querySelector("#cleaningSafety").append(div);
});

mapp=[
    {icon:"fa-solid fa-location-dot", text:"Saturday Night Market" ,time: "9 min walk"},
    {icon:"fa-solid fa-location-dot", text:"Baga Night Market" ,time: "13 min walk"},
    {icon:"fa-solid fa-car", text:"Miraculous Cross" ,time: "3 min drive"},
    {icon:"fa-solid fa-car", text:"Goa (GOI-Dabolim)" ,time: "44 min drive"}
]

mapp.forEach(ele=>{

    let div1 =document.createElement("div");
    let i= document.createElement("i");
    i.setAttribute("class", ele.icon);
    let p=document.createElement("p");
    p.innerText=ele.text;
    div1.append(i,p);
    div2=document.createElement("div");
    div2.innerText=ele.time
    document.querySelector("#explore").append(div1,div2);
});

// counting no of days.....

let noOfDays=0;
let btn = document.querySelector("#check");
  btn.addEventListener("click", function () {
    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let checkInDate = new Date(document.querySelector("#checkIn").value);
    let checkOutDate = new Date(document.querySelector("#checkOut").value);
    noOfdays = Math.abs(checkOutDate.getTime() / day - checkInDate.getTime() / day);
    localStorage.setItem("noOfDays", noOfdays)
    localStorage.setItem("checkInDate",checkInDate);
    localStorage.setItem("checkOutDate",checkOutDate);
  });
 
// overlay of travellers details.....

let roomCount=1;


let cross=document.createElement("button");
cross.innerText="X";
let head=document.createElement("h3");
head.innerText="Travellers";
let hr2=document.createElement("hr");
document.querySelector("#travellers").append(cross,head,hr2);
 room();

function room(){
    let adultCount=1;
    let childCount=0;
    let div=document.createElement("div");

    let p1=document.createElement("p");
    p1.innerText="Room "+roomCount;

    let table=document.createElement("table");

    let tr1=document.createElement("tr");

    let td1=document.createElement("td");
    td1.innerText="Adults";

    let td2=document.createElement("td");
    let btn1=document.createElement("button");
    btn1.innerText="-";
    
    btn1.addEventListener("click", function(){
        decrease1(adultCount, count1);
    });
    let count1=document.createElement("p");
    count1.innerText= adultCount;

    let btn2=document.createElement("button");
    btn2.innerText="+";
    btn2.addEventListener("click", function(){
        increase1(adultCount, count1, btn1);
    });
    td2.append(btn1,count1,btn2);

    tr1.append(td1,td2);

    let tr2=document.createElement("tr");

    let td3=document.createElement("td");
    td3.innerText="Children";

    let td4=document.createElement("td");
    let btn3=document.createElement("button");
    btn3.innerText="-";
    btn3.disabled=true;
    btn3.addEventListener("click", function(){
        decrease2(adultCount, count2);
    });
    let count2=document.createElement("p");
    count2.innerText=childCount;
    let btn4=document.createElement("button");
    btn4.innerText="+";
    btn4.addEventListener("click", function(){
        increase(adultCount, childCount, btn3, btn1);
    });
     
    td4.append(btn3,count2,btn4);

    tr2.append(td3,td4);
    let hr1=document.createElement("hr");

    table.append(tr1,tr2);
    div.append(p1,table,hr1);
    
    let addBtn=document.querySelector("button");
    addBtn.innerText="Add another room";
    addBtn.addEventListener("click",function(){
        addRoom(div);
    })

    document.querySelector("#travellersOverlay").append(div, addBtn);
    

}

// function for decreasing count;

 function decrease1(adultCount, count1){
    if(count1.innerText==1){
        event.target.disabled=true;
    }else{
        adultCount--;
        count1.innerText=adultCount; 
    }           
 }
 function decrease2(childCount, count2){
    if(count2.innerText==0){
        event.target.disabled=true;
    }else{
        adultCount--;
        count2.innerText=childCount;
    }
 }

//  function for increasing count;

 function increase1(adultCount, count1, btn1){
    btn1.disabled=false;
    if(count1.innerText==2){
        event.target.disabled=true;
    }else{
        adultCount++;
        count1.innerText=adultCount;
    }
 }

 function addRoom(div){
    event.target.remove();
    roomCount++;
    room();
    let remove=document.createElement("button");
    remove.innerText="Remove Room";
    remove.addEventListener("click", function(){
        event.target.parentNode.remove();
        roomCount--;
    })
    div.append(remove);
   

 }









