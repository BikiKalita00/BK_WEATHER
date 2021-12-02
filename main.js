var city = prompt("Please enter You Show Weather City Name {Please Enter Correct City Name }");




setInterval(() => {


  d = new Date();
  var dayName = d.toString().split(' ')[0];
  let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  let month = monthNames[d.getMonth()]
  var dd = String(d.getDate()).padStart(2, '0');


  function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();

    am_pm = "AM";
    if (hour > 12) {
      hour -= 12;
      am_pm = "PM";
    }
    if (hour == 0) {
      hr = 12;
      am_pm = "AM";
    }
    hour = hour < 10 ? "0" + hour: hour;
    min = min < 10 ? "0" + min: min;

    let currentTime = hour + "/"
    + min  + am_pm;

    let auhu = dayName + " | " + month +" "
    + dd + " | " + currentTime
    document.getElementById("date").innerHTML = auhu;
  }
  showTime();



},
  1000);



function getdata() {
  url = 'https://api.weatherapi.com/v1/current.json?key=dd6ab44913bb4e4095525736210212&q='+city+'&aqi=yes';
  fetch(url).then((response)=> {
    return response.json()
  }) .then((data)=> {
    let h = JSON.stringify(data);
    let loca = data.location.name;
    let tempc = data.current.temp_c;
    let tempf = data.current.temp_f;
    console.log(data)
    //current:Objectlast_u
    document.getElementById('k').innerHTML = loca
    document.getElementById('c').innerHTML = tempc+"&deg;C / "+tempf+"&deg;F"




  })
}
getdata()