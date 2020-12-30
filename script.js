var seconds =0;
var minutes=0;
var hours=0;
var milisec=0;
var session=1;

var displayseconds;

var displayhours;
var displayminutes;
var displaymilisec;

function stopwatch(){

    milisec++;
    
    if(milisec /100 === 1){
        milisec = 0;
        seconds++;
    
        if(seconds / 60 ===1)
        {
            seconds=0;
            minutes++;
    

            if(minutes /60 ===1)
            {
                minutes = 0;
                hours++;
            }
        }
    }
    milisec<10?displaymilisec = '0'+milisec: displaymilisec=milisec;
    seconds<10?displayseconds = '0'+seconds: displayseconds=seconds;
    minutes<10?displayminutes = '0'+minutes: displayminutes=minutes;
    hours<10?displayhours = '0'+hours: displayhours=hours;
    

    document.querySelector('.timer').innerHTML=displayhours+ ":" + displayminutes + ":" + displayseconds + ":" + displaymilisec;
    
}
var interval;

document.querySelector('.start').addEventListener('click', function(){
    if(session === 1){
    
    interval=window.setInterval(stopwatch , 10);
    session = 0
    }
});


document.querySelector('.stop').addEventListener('click', function(){
   session = 1;
    window.clearInterval(interval);
});

document.querySelector('.reset').addEventListener('click', function(){
    
    window.clearInterval(interval);
    hours=0;
    seconds=0;
    milisec=0;
    minutes=0;
    document.querySelector('.timer').innerHTML="00:00:00:00";
    session=1;

 });
 


    

