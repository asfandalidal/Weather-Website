// $(document).ready(function() {
//     var apiKey = 'f8a7cf4e052a8672bb9cbc617057dff7';
//     var cities = ['Shanghai', 'Boston', 'Paris', 'Karachi', 'Delhi'];
  
//     // Make API requests to fetch weather data for each city
//     cities.forEach(function(city) {
//       var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Lahore&appid=' + apiKey + '&q=' + city;
  
//       $.get(apiUrl, function(data) {
//         var cityName = data.location.name;
//         var temperature = data.current.temp_c + '°C';
//         var feelsLike = data.current.feelslike_c + '°C';
//         var humidity = data.current.humidity + '%';
//         var windSpeed = data.current.wind_kph + ' km/h';
//         var condition = data.current.condition.text;
  
//         // Update the table with the weather data
//         var row = $('<tr></tr>');
//         row.append('<td>' + cityName + '</td>');
//         row.append('<td>' + temperature + '</td>');
//         row.append('<td>' + feelsLike + '</td>');
//         row.append('<td>' + humidity + '</td>');
//         row.append('<td>' + windSpeed + '</td>');
//         row.append('<td>' + condition + '</td>');
  
//         $('tbody').append(row);
//       });
//     });
//   });
  