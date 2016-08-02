//Animate SVG graphic

var current_frame, total_frames, path, length, handle, hexBCH, hexRenoTracks;


var initBCH = function() 
{
    current_frame = 0;
    total_frames = 160;
    path = new Array();
    length = new Array();
    
    for(var i=0; i<5; i++)
    {
        path[i] = document.getElementById('bch'+i);
        l = path[i].getTotalLength();
        length[i] = l;
        path[i].style.strokeDasharray = l + ' ' + l;
        path[i].style.strokeDashoffset = l;
    }
    handle = 0;
}

var transitionBCH = function()
{
    $('#bch0').css('fill','#d2d6de');
    $('#bch1,#bch2,#bch3,#bch4').css('fill','#395876');
    $('#svgBCHHex').css('stroke-width','0px');
}

var drawBCH = function() 
{
    var progress = current_frame/total_frames;
    
    if (progress > 1)
    {
        window.cancelAnimationFrame(handle);
        transitionBCH();
    }
    else
    {
        current_frame++;
        for(var j=0; j<path.length; j++)
        {
            path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
        }
        handle = window.requestAnimationFrame(drawBCH);
    }
}
window.onload = function()
{
    $('#svgBCHHex').css('stroke-width','5px');
    initBCH();
    drawBCH();
}

//-------------Reno Tracks Animation-----------------//

//hexRenoTracks = document.getElementById('renoTrackHex').cloneNode(true);

//var initRT = function() 
//{
//    current_frame = 0;
//    total_frames = 130;
//    path = new Array();
//    length = new Array();
//    
//    for(var i=0; i<2; i++)
//    {
//        path[i] = document.getElementById('RT'+i);
//        l = path[i].getTotalLength();
//        length[i] = l;
//        path[i].style.strokeDasharray = l + ' ' + l;
//        path[i].style.strokeDashoffset = l;
//    }
//    handle = 0;
//}
//
//var transitionRT = function()
//{
//    $('#RT0').css('fill','#3b8b38');
//    $('#RT1').css('fill','#fff');
//    $('#renoTracks').css('stroke-width','0px');
//}
//
//var drawRT = function() 
//{
//    var progress = current_frame/total_frames;
//    
//    if (progress > 1)
//    {
//        window.cancelAnimationFrame(handle);
//        transitionRT();
//    }
//    else
//    {
//        
//        current_frame++;
//        for(var j=0; j<path.length; j++)
//        {
//            path[j].style.strokeDashoffset = Math.floor(length[j] * (1 - progress));
//        }
//        handle = window.requestAnimationFrame(drawRT);
//    }
//}
//function RTscroll(ev)
//{
//    if(window.pageYOffset > 300)
//    {
//        initRT();
//        drawRT();
//    }
//}
//window.onscroll=RTscroll;
