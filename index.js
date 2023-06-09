/*Buttons*/
var DivWrapper=document.getElementById("wrapper");
var btnOne=document.getElementById("btn1");
var btnCancel=document.querySelector(".close-icon");


btnOne.onclick=function(){
    DivWrapper.classList.add("active");


}

btnCancel.addEventListener("click",()=>{    
    DivWrapper.classList.remove("active");
})


/*Weather API*/ 

let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");
let getWeather=()=>{
    let cityValue = cityRef.value;

    if(cityValue.length == 0){
        result.innerHTML=`<h3 class="msg">Please enter a city name</h3>`;
    }
    else{
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    cityRef.value= "";
    fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        result.innerHTML=`
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp} &#176;</h1>
        <div class="temp-container">
        <div>
        <h4 class="title">min</h4>
        <h4 class="temp">${data.main.temp_min}</h4>
        </div>
        <div>
        <h4 class="title">max</h4>
        <h4 class="temp">${data.main.temp_max}</h4>
        </div>
        </div>
`;
   
    })


       .catch(() => {
        result.innerHTML=`<h3 class="msg">City not found</h3>`;
       }) ;
    }
        
    };
searchBtn.addEventListener("click",getWeather);
window.addEventListener("load", getWeather);


/* Map API in javaScript*/ 

x=navigator.geolocation;

x.getCurrentPosition(success,failure);

function success(position) {
    var MyLat=position.coords.latitude;
    var MyLong=position.coords.longitude;

    var coords = new google.maps.LatLng(MyLat,MyLong);

    var mapOptions={
        zoom:11,
        center:coords,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker =new google.maps.Marker({map:map,position:coords});
    console.log(position);
}

function failure() {
    console.log("Cannot Access Your Location Please Try Again!");
}


var DivWrapper2=document.getElementById("wrapper2");
var btnTwo=document.getElementById("btn2");
var btnCancel2=document.querySelector(".close-icon2");


btnTwo.onclick=function(){
    DivWrapper2.classList.add("active");


}

btnCancel2.addEventListener("click",()=>{    
    DivWrapper2.classList.remove("active");
})


/* covid-19 API */

fetch('https://corona.lmao.ninja/v2/countries/India')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
   document.getElementById("flag").src = data.countryInfo.flag;
   document.getElementById("country").innerHTML = data.country.toLocaleString();
   document.getElementById("active").innerHTML = data.active.toLocaleString();
   document.getElementById("critical").innerHTML = data.critical.toLocaleString();
   document.getElementById("recovered").innerHTML = data.recovered.toLocaleString();
   document.getElementById("cases").innerHTML = data.cases.toLocaleString();
   document.getElementById("deaths").innerHTML = data.deaths.toLocaleString();
   document.getElementById("tests").innerHTML = data.tests.toLocaleString();

})




var DivWrapper3=document.getElementById("wrapper3");
var btnThree=document.getElementById("btn3");
var btnCancel3=document.querySelector(".close-icon3");


btnThree.onclick=function(){
    DivWrapper3.classList.add("active");


}

btnCancel3.addEventListener("click",()=>{    
    DivWrapper3.classList.remove("active");
})

/*Currency ConverterApi*/

const currencyEl_one = document.getElementById('currency-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEl_one = document.getElementById('amount-one');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the dome
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;

  fetch(` https://v6.exchangerate-api.com/v6/82cc9f1b0dc16a94f9bf8ab8/latest/${currency_one}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
      const rate = data.conversion_rates[currency_two];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

// Event Listeners
currencyEl_one.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_two.addEventListener('input', calculate);
swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  calculate();
});

calculate();


var DivWrapper4=document.getElementById("wrapper4");
var btnFour=document.getElementById("btn4");
var btnCancel4=document.querySelector(".close-icon4");


btnFour.onclick=function(){
    DivWrapper4.classList.add("active");


}

btnCancel4.addEventListener("click",()=>{    
    DivWrapper4.classList.remove("active");
})



/*Crypto API*/




var btc = document.getElementById("bitcoin");
var ltc = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=inr",

    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    console.log(response);
    btc.innerHTML = response.bitcoin.inr;
    ltc.innerHTML = response.litecoin.inr;
    eth.innerHTML = response.ethereum.inr;
    doge.innerHTML = response.dogecoin.inr;

});



var DivWrapper5=document.getElementById("wrapper5");
var btnFive=document.getElementById("btn5");
var btnCancel5=document.querySelector(".close-icon5");


btnFive.onclick=function(){
    DivWrapper5.classList.add("active");


}

btnCancel5.addEventListener("click",()=>{    
    DivWrapper5.classList.remove("active");
})

