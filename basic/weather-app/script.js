let weather={
    apiKey:"4e92f38e5da9aa934017303d908c0573",
    fetchWeather:function(city){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+this.apiKey
        ).then((response)=> {if(!response.ok){alert("not valid");
        alert('please refresh to use again')
        throw new Error('no weather found');}
            return response.json();}).then((data)=>this.displayWeather(data));
    },
     displayWeather:function(data){
        //.log(data);
        const {name}=data;
        const {icon,description}=data.weather[0];
        const {temp,humidity}=data.main;
        const {speed}=data.wind;
        console.log(description,humidity);
        document.querySelector('.city').innerText="Weather in "+name;
       document.querySelector('.description').innerText=description;
        document.querySelector('.temp').innerText=temp+"*C";
        document.querySelector('.humidity').innerText="Humidity "+humidity+"%";
        document.querySelector('.wind').innerText="WindSpeed "+speed+"KM/H";
        document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
        search:function(){
            this.fetchWeather(document.querySelector(".search-bar").value);
        }

};
//document.querySelector(".search button").addEventListener("click",function(){
    //weather.search();});
   
  