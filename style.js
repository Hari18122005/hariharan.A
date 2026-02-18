// Animated Counter
function counter(id, start, end, speed){
    let obj = document.getElementById(id);
    let current = start;
    let increment = end / speed;

    let timer = setInterval(() => {
        current += increment;
        obj.textContent = Math.floor(current);

        if(current >= end){
            obj.textContent = end;
            clearInterval(timer);
        }
    }, 20);
}

window.onload = function(){
    counter("exp", 0, 15, 100);
    counter("projects", 0, 350, 200);
    counter("clients", 0, 200, 150);
};

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Message Sent Successfully!");
});
