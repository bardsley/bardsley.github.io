amendGroupScroll = function () {
    $(document).on("click", "#uc-more-group-search", function () {
        $("#group_count").val(-100);
        $("html, body").animate({
            scrollTop: $(".categoryBox.all-groups").last().offset().top + $(".categoryBox.all-groups").last().height()
        }, 2e3)
    })
}

removeUnwantedNodes = function () {
    var parentNode = $('.uc-group-list-page-wrapper');
    var childNodes = parentNode.children().clone();
    childNodes.each(function (idx, node) {
        parentNode.before(node);
    });
    parentNode.remove();
}

setupGroupsMenu = function () {
    /*var e = $("<div>Change Category</div>");
    e.click(function() { toggleGroupsMenu(); })
    $('#uc-group-homepage .types-list').prepend(e);*/
    $('#uc-group-homepage .types-list li.active').click(function () { 
        console.log('clicked'); 
        toggleGroupsMenu(this); 
    })

}
toggleGroupsMenu = function (clicked) {
    $('#uc-group-homepage .types-list li').each(function(index,e){
        if(e!=clicked) {
            console.log('hiding ',e.innerHtml)
            $(e).hide(200)
        }
    })
}


showGroupsMenu = true

setupGroupsMenu = function () {
    /*var e = $("<div>Change Category</div>");
    e.click(function() { toggleGroupsMenu(); })
    $('#uc-group-homepage .types-list').prepend(e);*/
  	
    $('#uc-group-homepage').click(function () { 
        console.log('clicked'); 
      	showGroupsMenu = !showGroupsMenu;
        toggleGroupsMenu(this); 
    })

}

toggleGroupsMenu = function () {
	$('#uc-group-homepage .types-list li').not('.active').toggle();
}

$('#uc-group-homepage #your-societies .twelvecol .uc-middle-panel-for-group-cat').on('DOMNodeInserted', function(evt){
  console.log('changed',evt.target);
  console.log($(evt.target).find('li.active'));
  setupGroupsMenu();
  
});