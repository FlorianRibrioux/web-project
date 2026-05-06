var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typing-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        disableScroll();
        
    } else {
        setTimeout(function() {
            var typingText = document.getElementById("typing-text");
            var opacity = 1;
            setInterval(function() {
            opacity -= 0.01;
            if (opacity <= 0) {
                opacity = 0;
                typingText.style.display = "none";
                clearInterval(fadeOut);
            }
            enableScroll();
            typingText.style.opacity = opacity;
            }, 5);
        }, 500);
    }   
}

function disableScroll() {
    scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop;
    scrollLeft =
        window.pageXOffset ||
        document.documentElement.scrollLeft,

    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    window.onscroll = function () { };
}


window.onload = typeWriter;