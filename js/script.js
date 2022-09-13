/*eslint-env es6*/

jQuery(document).ready(function($){
	
	// Popover
 
    $('[data-toggle="popover"]').popover({
    container: 'img'
    });
  
	$("#showPop").popover('show');
 
    $('body').on('click', function (e) {
        $('[data-toggle="popover"]').each(function () {
            //the 'is' for buttons that trigger popups
            //the 'has' for icons within a button that triggers a popup
            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
                $(this).popover('hide');
            }
        });
    });

});

function img_popup() {
  const img = document.querySelector("img")

  img.onclick = (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;
    //console.log(x, y);
    if((0.51 < y/img.clientHeight > 0.78) && (0.52 < x/img.clientWidth > 0.84)) {
       console.log("Bench selected");
       }
  }

}

img_popup();