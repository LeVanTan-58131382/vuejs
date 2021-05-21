<template>
    <div id="app">
        <main>
            <div class="search-box">
                <input 
                    type="text" 
                    class="search-bar" 
                    placeholder="Search..."
                    v-model="query"
                    @keypress="fetchWeather"
                    />
            </div>

            <div class="weather-wrap" v-if="typeof weather.main != 'undefined'" >
                <div class="location-box">
                    <div class="location"> 
                        {{ weather.name }}, {{ weather.sys.country }}
                    </div>
                    <div class="date">
                        {{ dateBuilder() }}
                    </div>
                </div>

                <div class="weather-box"> 
                    <div class="temp">
                         <p>{{ Math.round(weather.main.temp) }}<i class="c">Celsius</i></p>
                    </div>
                    <div class="weather">
                        {{ weather.weather[0].main }}
                    </div>                    
                </div>

            </div>

        </main>
    </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
    name: "AppWeather",
    data() {
        return {
            api_key: "202923caf3b7fd34799b36a2236e3997",
            url_base: "https://api.openweathermap.org/data/2.5/",
            query: "",
            weather: {}
        }
    },
    methods: {
        fetchWeather(e) {
            if(e.key == "Enter") {
                fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
                .then(res=>{
                    return res.json();
                }).then(this.setResults);
            }
        },

        setResults(results){
            this.weather = results;
        }, 

        dateBuilder() {
            let d = new Date();
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();

            return `${day} ${date} ${month} ${year}`;
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
}

body{
    font-family: "montserrat", sans-serif;
}

#app{
    background-color: cadetblue;
}

main {
    min-height: 100vh;
    padding: 25px;
}

.search-box{
    width: 100%;
    margin-bottom: 30px;
}

.search-box .search-bar{
    display: block;
    width: 100%;
    padding:15px;

    color: #313131;
    font-size: 20px;

    appearance: none;
    border: none;
    outline: none;
    /* background: none; */

    box-shadow: 0px 0px 8px rbga(0, 0, 0, 0.25);
    background-color: rbga(255, 255, 255 0.5);
    border-radius: 16px;
    transition: 0.4s;

}

.search-box .search-bar:focus{
    box-shadow: 0px 0px 16px rbga(0, 0, 0, 0.25);
    background-color: rbga(255, 255, 255 0.75);
    border-radius: 10px;
}

.location-box .location{
    color: #FFF;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 3px rbga(0, 0, 0, 0.25);
}

.location-box .date{
    color: #FFF;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
    text-align: center;
}

.weather-box{
    text-align: center;
}

.weather-box .temp{
    display: inline-block;
    padding: 10px 25px;
    color: #FFF;
    font-size: 100px;
    font-weight: 900;

    text-shadow: 3px 6px rbga(0, 0, 0, 0, 0.25);
    background-color: rbga(255, 255, 255, 0.25);
    border-radius: 16px;
    margin: 30px 0px;

    box-shadow: 3px 6px rbga(0, 0, 0, 0.25);
}

.weather-box .temp .c{
    font-size: 50px;
}

.weather-box .weather{
    color: #FFF;
    font-size: 48px;
    font-weight: 700;
    font-style: italic;
    text-shadow: 3px 6px rbga(0, 0, 0, 0.25);
}
</style>
