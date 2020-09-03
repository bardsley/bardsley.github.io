console.log('Loading custom JS');

$("<div class='melink'><h3><a href='/events' class='moreEvents'>More Events</a></h3></div>").insertAfter("#events");			
	
/*
 Magic EVoting SuperfastLink Code
 */

setup_evoting = function() {

  var evoting_key = 'referrer';  // Mustn't contain anythingexcept characters i.e. no space _ or -
  var evoting_value = 'evoting'; // Mustn't contain anythingexcept characters i.e. no space _ or -

  if(window.location.pathname.startsWith('/users/sign_in') && document.referrer.split('.')[document.referrer.split('.').length - 1].split('/')[0] == 'vote') {
    var referrer_string = '?'+evoting_key+'=' + evoting_value;
    history.pushState({},'',window.location + referrer_string);
    document.cookie = "referrer=evoting;path=/;samesite"
    document.querySelector('.signin-button-brinjal a').click(); 
  }

  if( document.getElementById("registration-form-container")) {
    regex= new RegExp("^(?:.*;)?\\s*" + evoting_key + "\\s*=\\s*([^;]+)(?:.*)?$");
    referrer_value = (document.cookie.match(regex)||[,false])[1];
    if(referrer_value && referrer_value == evoting_value) {
      document.cookie = evoting_key+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;samesite";
      alert_node = document.createElement("div");
      alert_node.id = "alert-node";
      alert_node.classList.add("alert");
      link_node = document.createElement("a");
      link_node.href="https://totum.vote/sunderlandsu";
      link_node.textContent = "Skip Registration";
      alert_node.prepend(link_node);
      document.getElementById("registration-form-container").prepend(alert_node); 

      /* Add a close handler */
      document.getElementById("alert-node").addEventListener("click",function(event){ 
        event.target.remove();
      });
    }
  }   
}

/* Replaces the group load scroll so it works with display content */

amendGroupScroll = function() {
  $("#uc-more-group-search").on("click", function() { 
    $("#group_count").val(-100);
    $("html, body").animate({
        scrollTop: $(".categoryBox.all-groups").last().offset().top + $(".categoryBox.all-groups").last().height()
    }, 2e3)
  })
}

/* Removes wrapper node to deal with IE and Edge not supporting display: contents */

removeUnwantedNodes = function() {
  var parentNode = $('.uc-group-list-page-wrapper'); 
  var childNodes = parentNode.children().clone();
  childNodes.each(function(idx,node) { 
      parentNode.before(node);
  });
  parentNode.remove();
}


/* Prepare the usinbg load functions */

$(document).ready(function () { 
    setup_evoting();
    amendGroupScroll();
    removeUnwantedNodes();
    /*( Also remove when new content is loaded, check for script as you get one per load */
    $('.category-box-wrapper').on("DOMSubtreeModified",'script',function(evt){ 
        removeUnwantedNodes();  
    });
});

