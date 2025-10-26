window.onload = function () {

    function startTime() {
        var today = new Date();
        var hr = today.getHours();
        var min = today.getMinutes();
        var sec = today.getSeconds();
        ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
        hr = (hr == 0) ? 12 : hr;
        hr = (hr > 12) ? hr - 12 : hr;
        //Add a zero in front of numbers<10
        hr = checkTime(hr);
        min = checkTime(min);
        sec = checkTime(sec);
        document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;

        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var curWeekDay = days[today.getDay()];
        var curDay = today.getDate();
        var curMonth = months[today.getMonth()];
        var curYear = today.getFullYear();
        var date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
        document.getElementById("date").innerHTML = date;

        var time = setTimeout(function () { startTime() }, 500);
    }
    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    const divs = document.querySelectorAll('div#content div');
    var divContent = document.querySelector('div#content');
    divContent.innerHTML = '';

    const divContainer = document.createElement('div');
    divContainer.classList.add('clockdate-wrapper');
    const divClock = document.createElement('div');
    divClock.id = 'clock';
    const divDate = document.createElement('div');
    divDate.id = 'date';
    divContainer.appendChild(divClock);
    divContainer.appendChild(divDate);

    divContent.appendChild(divContainer);
    divs.forEach((d) => {
        divContent.appendChild(d);
    });

    //Styles
    divContainer.style.backgroundColor = '#333';
    divContainer.style.padding = '25px';
    divContainer.style.maxWidth = '350px';
    divContainer.style.width = '100%';
    divContainer.style.textAlign = 'center';
    divContainer.style.borderRadius = '5px';
    divContainer.style.margin = '0 auto';
    divContainer.style.marginTop = '15%';

    divClock.style.backgroundColor = '#333';
    divClock.style.fontFamily = 'sans-serif';
    divClock.style.fontSize = '60px';
    divClock.style.color = '#fff';

    divDate.style.letterSpacing = '10px';
    divDate.style.fontSize = '14px';
    divDate.style.fontFamily = 'arial, sans-serif';
    divDate.style.color = '#fff';

    //Cridar a la funció
    startTime();
}