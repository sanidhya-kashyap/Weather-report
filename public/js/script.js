const cityname = document.getElementById('cityname');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById("city_name");
const temp_real_val = document.getElementById("temp_real_val");
const temp_status = document.getElementById("temp_status");
const dataHide = document.querySelector(".middle_layer");




const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityname.value;
    if(cityVal==""){
        city_name.innerText = "Enter the city name first";
        dataHide.classList.add("data_hide");
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=66bf81c6e6aa5c3175c3246e301dc448`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = ((arrData[0].main.temp)-273).toFixed(2);
            
            temp_status.innerText = arrData[0].weather[0].main;

            const tempMood = arrData[0].weather[0].main;


            
            //condition to check sunny or cloudy
      if (tempMood == "Sunny") {
        temp_status.innerHTML =
          "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
      } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
      } else if (tempMood == "Rainy") {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
      }
        dataHide.classList.remove("data_hide")

        }catch{
            city_name.innerText = "Enter the city name first";
            dataHide.classList.add("data_hide");

        }
    }
}


submitBtn.addEventListener('click',getInfo);