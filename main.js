//動きや機能（クリックしたら動く、アニメーションするなど）
$(function(){
    let timer;
    let hour=0,minute=0,second=0,millisecond=0;

    function updateDisplay(){
        $("#hours").text(hour);
        $("#minutes").text(minute);
        $("#seconds").text(second);
        $("#milliseconds").text(millisecond);
    }

    function start(){
        timer=setInterval(()=>{
            millisecond++;
            if(millisecond==100){
                millisecond=0;
                second++;
            }
            if(second>=60){
                second=0;
                minute++;
            }
            if(minute>=60){
                minute=0;
                hour++;
            }
            updateDisplay();
        },100);
    }
//スタートする時
    $("#start").on("click",function(){
        start();
        $("#start").prop("disabled",true);
        $("#stop").prop("disabled",false);
        $("#reset").prop("disabled",false);
    });
//ストップする時
    $("#stop").on("click",function(){
        clearInterval(timer);
        $("#start").prop("disabled",false);
        $("#stop").prop("disabled",true);
    });

//リセットする時
    $("#reset").on("click",function(){
        clearInterval(timer);
        hour=0,minute=0,second=0,millisecond=0;
        updateDisplay();
        $("#start").prop("disabled",false);
        $("#stop").prop("disabled",true);
        $("#reset").prop("disabled",false);

    });
});



