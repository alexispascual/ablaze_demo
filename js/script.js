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
  const img = document.getElementById("img-bottom")
  const modal = document.getElementById("myModal");
  const captionText = document.getElementById("caption");
  const span = document.getElementsByClassName("close")[0];
  
  var toggled = false;
  
  
  img.onclick = (e) => {
    var offset = img.getBoundingClientRect();
    const x = e.pageX - offset.left;
    const y = e.pageY - offset.top;
    
    if((x > 307 && x < 579) && (y > 238 && y < 375)) {
      console.log("Bench selected");

      modal.style.display = "block";
      modal.style.left = e.pageX + "px";
      modal.style.top = e.pageY + "px";
      captionText.innerHTML = "This is a bench"; 
      
      if (!toggled) {
        $("#object-highlight img.top").toggleClass("transparent");
        toggled = true;
      }
      
      // When the user clicks on <span> (x), close the modal
      span.onclick = function() { 
        modal.style.display = "none";
        if (toggled) {
          $("#object-highlight img.top").toggleClass("transparent");
          toggled = false;
        }
      }
    }
    
    else {
      modal.style.display = "none";
      if (toggled) {
        $("#object-highlight img.top").toggleClass("transparent");
        toggled = false;
      }
    }
  }
}

img_popup();