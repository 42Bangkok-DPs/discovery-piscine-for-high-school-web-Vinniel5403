

$(document).ready(()=>{
    let myrotaterow = 0
    let chickenforms = [""]
    $('.btn').click(()=>{
        
        myrotaterow += 360
        $(".my-content div img").css("transform", `rotate(${myrotaterow}deg)`);
    })
})