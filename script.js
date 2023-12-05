fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=420a4f9a9b4ab8710055b77e438d7cd1')
    .then(function (resp) { return resp.json() }) // Convert data to JSON
    .then(function (data) {
        console.log(data);

        function get() {
            let i1Country = document.querySelector('.i1Country').value;

            if(i1Country) {
                document.querySelector('.name').textContent = data.name;
                document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
                document.querySelector('.cloud').textContent = data.weather[0]['description'];
                document.querySelector('.item1').textContent = 'Max: ' + data.main.temp_max;
                document.querySelector('.item2').textContent = 'Min: ' + data.main.temp_min;
                document.querySelector('.item3').textContent = 'Speed: ' + data.wind.speed;
                document.querySelector('.item4').textContent = 'Gust: ' + data.wind.gust;
                document.querySelector('.item5').textContent = 'Country: ' + data.sys.country;
            }
        }

        document.querySelector('.bGo').onclick = get;
    })
    .catch(function () {
        //catch any errors
    })

    // function get() {
    //     let apiKey = '420a4f9a9b4ab8710055b77e438d7cd1';
    //     let i1Country = document.querySelector('.i1Country').value;
    
    //     if (i1Country) {
    //         let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${i1Country}&appid=${apiKey}`;
    
    //         fetch(apiUrl)
    //             .then(resp => resp.json())
    //             .then(data => {
    //                 document.querySelector('.name').textContent = data.name;
    //                 document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    //                 document.querySelector('.cloud').textContent = data.weather[0]['description'];
    //                 document.querySelector('.item1').textContent = 'Max: ' + data.main.temp_max;
    //                 document.querySelector('.item2').textContent = 'Min: ' + data.main.temp_min;
    //                 document.querySelector('.item3').textContent = 'Speed: ' + data.wind.speed;
    //                 document.querySelector('.item4').textContent = 'Gust: ' + data.wind.gust;
    //                 document.querySelector('.item5').textContent = 'Country: ' + data.sys.country;
    //             })
    //             .catch(error => {
    //                 console.error('Помилка fetch:', error);
    //             });
    //     }
    // }
    
    // document.querySelector('.bGo').onclick = get;