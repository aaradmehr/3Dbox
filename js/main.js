var box = document.querySelector('.showfront');
// var arrowRight = document.getElementById("arrow-right");
document.getElementById("arrow-right").addEventListener( 'click', goSide );
document.getElementById("arrow-left").addEventListener( 'click', goSide );



function goSide() {
    var  currentClass = box.className;
    switch (currentClass) {
        case 'showfront':
            box.classList.remove( currentClass );
            box.classList.add( 'showright' );
            break;
        case 'showright':
            box.classList.remove( currentClass );
            box.classList.add( 'showback' );
            break;   
        case 'showback':
            box.classList.remove( currentClass );
            box.classList.add( 'showleft' );
            break;
        case 'showleft':
            box.classList.remove( currentClass );
            box.classList.add( 'showfront' );
            break;                            
    }

  }