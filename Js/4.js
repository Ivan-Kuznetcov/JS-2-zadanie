document.querySelector("#btn").onclick = function(){
    document.querySelector(".msg").innerHTML="";
    let start = +document.getElementById("start").value;
    let end = +document.getElementById("end").value;
    if(isNaN(start) || isNaN(end)){
        document.querySelector(".msg").innerHTML="Введите числа";

    }
    else
    {
        if(start>end){
            document.getElementById("start").value=end;
            document.getElementById("end").value=start;
            start = +document.getElementById("start").value;
            end = +document.getElementById("end").value;
        }
        if (start%2!=0) start++;
        for (let i=start;i<=end;i+=2)
        {
            document.querySelector(".msg").innerHTML+=`${i}<br>`;
        }
    }
}