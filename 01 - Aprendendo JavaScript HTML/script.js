
//  Date and TIME

    function dateTIME()
    {
        document.getElementById('TEXT_dateTime').innerHTML = Date()
    }

//  Change Text Information

    function changeText() 
    {
        document.getElementById("text").style.fontSize = "25px"; 
        document.getElementById("text").style.color = "red";
        document.getElementById("text").style.backgroundColor = "black";
        document.getElementById("text").textContent = "Strider";
    }

//  Video Controller

    var myVideo = document.getElementById("video1"); 
            
    function playPause() 
    { 
        if (myVideo.paused) 
            myVideo.play(); 
        else 
            myVideo.pause(); 
    } 

    function makeBig() 
    { 
        myVideo.width = 560; 
    } 

    function makeSmall() 
    { 
        myVideo.width = 320; 
    } 

    function makeNormal() 
    { 
        myVideo.width = 420; 
    }

// 

    function Light()
    {
        var imageElement = document.getElementById('myImage');
        var currentSrc = imageElement.src;

        if (currentSrc.endsWith('pic_bulboff.gif'))
            document.getElementById('myImage').src='../img/pic_bulbon.gif'
        else
            document.getElementById('myImage').src='../img/pic_bulboff.gif'
    }