var navMenu = document.querySelectorAll('#navigation_bar a');

for(var i=0; i<navMenu.length; i++){
    navMenu[i].addEventListener('click', function(event) {
        event.preventDefault();
        var target = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(target);
        var interval = setInterval(function(){
        var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
           
        }, 20);
    });
}
