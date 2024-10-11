const APIkey=`d56b5dcd6ee84ba5e12d19f33863b15f`;
// const api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
// https://api.openweathermap.org/data/2.5/weather?q=Delhi,IN&appid=your_api_key
let form=document.querySelector("form");
let input=document.querySelector("input");
let weather=document.querySelector("#weather");
form.addEventListener("submit",(evt)=>{
    getcity(input.value);
    
    evt.preventDefault();
})
const getcity=async (city)=>{
    weather.innerHTML=`<h1>Loading......</h1>`;
   
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
    let response=await fetch(url);
    let data= await response.json();
    return showwaether(data);
    
}
const showwaether=(data)=>{
    
    if(data.cod=="404"){
        
        return;
    }
    weather.innerHTML=` <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            </div>
            <div >
                <h1>${data.main.temp} ℃</h1>
                <h4>${data.weather[0].main}</h4>
            </div>`;
            console.log(data);

}


