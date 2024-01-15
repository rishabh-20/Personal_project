// document.getElementById('btn')
let input = document.getElementById('inp')
let city = document.getElementById('city')
let tempreature = document.getElementById('temp')
// let datee=document.getElementById('date')
// let tempImage=document.getElementsByClassName('tempImage')
let data_time=document.getElementById('date')
let logo=document.getElementById('change')

let x=new Date()

let fetchDetails = async() => {
    if (input.value.length == 0) {
        alert("Please Enter The City Name Before Searching")
    }
    else{
        //api fetch

        let url=`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=1cb6532aea3c298a830a71380eace21e`

        let response= await fetch(url)
        let data=await response.json()
        city.innerText=`${data.name},${data.sys.country}`
        tempreature.innerText=`${data.main.temp}℃`
        // datee.innerText=date.toDateString()

        data_time.innerText=`${x.toDateString()}`

        if(data.main.temp>30){
            logo.src="spring_sun_light_sunlight_weather_summer_cloud_icon_133312.png"
        }else if(data.main.temp>20 && data.main.temp<30 ){
            logo.src="timeintervalsunny_sunny_sunshine_cloud_tiempo_2792.png"

        }else if(data.main.temp<20 && data.main.temp>15){
            logo.src="WhatsApp Image 2024-01-03 at 11.39.56_8678f15e.jpg"
        }else if(data.main.temp<15){
            logo.src="foggy_cloud_weather_icon_131723.png"
        }

    }
}