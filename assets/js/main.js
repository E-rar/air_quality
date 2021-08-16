function checkAirQuality(){
    let aQ = document.getElementById("air_quality").value; //alle Variablen
    let hC=document.getElementById('health_concern');
    let hR=document.getElementById('health_risk');
    let aQL=document.getElementById("air_qualityLabel");
    let body = document.getElementById("body").style;
    aQL.innerHTML=aQ;//Das soll immer onChange passieren 
    console.log(aQ);
    if(aQ<=50){
        
        hC.innerHTML =" Good";
        hR.innerHTML ="Little or no risk";
        body.background="green";
    }
    else if(aQ>50 && aQ<=100){
        hC.innerHTML =" Moderate";
        hR.innerHTML ="Acceptable quality";
        body.background="orange";
    }
    else{
        hC.innerHTML =" Unhealthy for sensitive groups ";
        hR.innerHTML ="Generable publics not likely affected";
        body.background="red";
    }
}
