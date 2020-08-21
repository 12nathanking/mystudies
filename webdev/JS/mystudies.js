//BOX 2
var slides = document.getElementsByClassName('slide'),
    slider = document.getElementById('slider'),
    cursor = 0,
    slideWidth = 0,
    topHeight = 0,
    slideCount = slides.length;

if (slideCount > 0) {
    // Get the slide width
    slideWidth = slides[0].offsetWidth;

    // Set the proper left value for each slide
    for (var i = 0; i < slideCount; i++) {
        slides[i].style.left = slideWidth * i + "px";
    }

    // Calculate tallest slide
    calculateTallestSlide();

    // Add the animated class to each slide
    for (i = 0; i < slideCount; i++) {
        slides[i].classList.add('animated');
    }

    // Add an event listener for next button
    document.getElementById('next').addEventListener('click', function(event) {
        event.preventDefault();

        if (cursor < slideCount - 1) {
            moveSlides('forward');
            cursor++;
        }
    });

    // Add an event listener for previous button
    document.getElementById('prev').addEventListener('click', function(event) {
        event.preventDefault();

        if (cursor > 0) {
            moveSlides('backward');
            cursor--;
        }
    });

    // Add event listener for window resize
    window.addEventListener('resize', function() {
        // Get the new slide width
        slideWidth = slides[0].offsetWidth;

        // Recalculate the left position of the slides
        for (i = 0; i < slides.length; i++) {
            if (i <= cursor) {
                slides[i].style.left = "-" + slideWidth * (cursor - i) + "px";
            } else if (i > cursor) {
                slides[i].style.left = slideWidth * (i - cursor) + "px";
            }
        }

        // Recalculate the height of the tallest slide
        calculateTallestSlide();
    });
}

// Declare a function that calculates the tallest slide
function calculateTallestSlide() {
    for (var i = 0; i < slideCount; i++) {
        if (slides[i].offsetHeight > topHeight) {
            topHeight = slides[i].offsetHeight;
        }
    }

    slider.style.height = topHeight + "px";
}

// Declare a function that will change the slide position
function moveSlides(direction) {
    for (var j = 0; j < slides.length; j++) {
        if (direction == "backward") {
            slides[j].style.left = +slides[j].style.left.replace(/[^-\d\.]/g, '') + slideWidth + "px";
        } else if (direction == "forward") {
            slides[j].style.left = +slides[j].style.left.replace(/[^-\d\.]/g, '') - slideWidth + "px";
        }
    }
}

//BOX 3
// Get the button (image) that opens the popup
var btnimg1 = document.getElementById("btn1");
var btnimg2 = document.getElementById("btn2");
var btnimg3 = document.getElementById("btn3");
var btnimg4 = document.getElementById("btn4");
var btnimg5 = document.getElementById("btn5");
var btnimg6 = document.getElementById("btn6");
var btnimg7 = document.getElementById("btn7");
var btnimg8 = document.getElementById("btn8");

// Get the popups
var popup1 = document.getElementById("infopopup1");
var popup2 = document.getElementById("infopopup2");
var popup3 = document.getElementById("infopopup3");
var popup4 = document.getElementById("infopopup4");
var popup5 = document.getElementById("infopopup5");
var popup6 = document.getElementById("infopopup6");
var popup7 = document.getElementById("infopopup7");
var popup8 = document.getElementById("infopopup8");

// Get the <span> element that closes the popup
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];
var span6 = document.getElementsByClassName("close")[5];
var span7 = document.getElementsByClassName("close")[6];
var span8 = document.getElementsByClassName("close")[7];

// When the user clicks on the button, open the popup
btnimg1.onclick = function() {
    popup1.style.display = "block";
}
btnimg2.onclick = function() {
    popup2.style.display = "block";
}
btnimg3.onclick = function() {
    popup3.style.display = "block";
}
btnimg4.onclick = function() {
    popup4.style.display = "block";
}
btnimg5.onclick = function() {
    popup5.style.display = "block";
}
btnimg6.onclick = function() {
    popup6.style.display = "block";
}
btnimg7.onclick = function() {
    popup7.style.display = "block";
}
btnimg8.onclick = function() {
    popup8.style.display = "block";
}
// When the user clicks on <span> (x), close the popup
span1.onclick = function() {
    popup1.style.display = "none";
}
span2.onclick = function() {
    popup2.style.display = "none";
}
span3.onclick = function() {
    popup3.style.display = "none";
}
span4.onclick = function() {
    popup4.style.display = "none";
}
span5.onclick = function() {
    popup5.style.display = "none";
}
span6.onclick = function() {
    popup6.style.display = "none";
}
span7.onclick = function() {
    popup7.style.display = "none";
}
span8.onclick = function() {
    popup8.style.display = "none";
}

// When the user clicks anywhere outside of the popup, close it
window.onclick = function(event) {
    if (event.target == popup1) {
      popup1.style.display = "none";
    }
    else if (event.target == popup2) {
        popup2.style.display = "none";
    }
    else if (event.target == popup3) {
        popup3.style.display = "none";
    }
    else if (event.target == popup4) {
        popup4.style.display = "none";
    }
    else if (event.target == popup5) {
        popup5.style.display = "none";
    }
    else if (event.target == popup6) {
        popup6.style.display = "none";
    }
    else if (event.target == popup7) {
        popup7.style.display = "none";
    }
    else if (event.target == popup8) {
        popup8.style.display = "none";
    }
    
}



