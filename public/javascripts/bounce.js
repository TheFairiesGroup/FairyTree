/**
 * Created by user on 4/5/2014.
 */
$(document).ready(function(){
    console.log($('circle').attr('cx'))
    var delta = 1;
    setInterval(function() {

        $("circle").attr("cx", parseInt($("circle").attr("cx")) + delta * 5);

        if(parseInt($("circle").attr("cx")) >= 560)
            delta = -1;
        if(parseInt($("circle").attr("cx")) <= 40)
            delta = 1;

        //if ($('circle').attr('cx') < 560 && !inc)
        //    $("circle").attr("cx", parseInt($("circle").attr("cx")) + 5);

    }, 10);
})