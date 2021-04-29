var box = document.querySelector('.showfront');
var switchviewbuttons = document.querySelector('.switchviewbuttons');
var currentClass = 'showfront';

switchviewbuttons.addEventListener( 'change', changeview );

function changeview() {
    var currentview = switchviewbuttons.querySelector(':checked');
    var showClass = 'show' + currentview.value;
    if ( currentClass ) {
      box.classList.remove( currentClass );
    }
    box.classList.add( showClass );
    currentClass = showClass;
  }