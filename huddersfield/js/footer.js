console.log('Attempting to load footer scripts - /administrator/sites/3521/pages/82102/');

// Auth token thing?
var auth_token;

function requestToken() {
    console.debug("Request auth token")
    if (auth_token == undefined || auth_token == null) {
        auth_token = $.ajax({
            type: "GET",
            url: 'https://ta3design.com/HUDSU_API_TOKEN/',
            async: false
        }).responseText;
        return auth_token;
    }
    else {
        return auth_token;
    }
}

var sheet = window.document.styleSheets[0];


//Insert after element in DOM
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}


document.getElementsByClassName('nav-wrap')[0].setAttribute("uk-sticky", "");
document.getElementsByClassName('nav-wrap')[0].style.borderRadius = "5px";
document.getElementsByClassName('nav-wrap')[0].getElementsByTagName('ul')[0].style.marginLeft = "0px";
for (var i = 0; i < document.getElementsByClassName('nav-wrap')[0].getElementsByTagName('ul')[0].getElementsByTagName('li').length; i++) {
    document.getElementsByClassName('nav-wrap')[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[i].style.paddingLeft = "15px";
}

// Change the sign in to member sign in
msi = document.getElementsByClassName("uc-sign-link"); // Find the elements
for (var i = 0; i < msi.length; i++) {
    msi[i].innerHTML = "member sign in";
    msi[i].href = "#sign-on";
    msi[i].setAttribute("uk-toggle", "");

}

//Sign in

var signine = document.createElement('div');
signine.innerHTML = '<div id="sign-on" uk-modal> <div class="uk-modal-dialog uk-modal-body uk-light uk-background-secondary"> <h2 >Member sign on</h2><form action="https://halo.hud.ac.uk/susignin/login.aspx" id="sso-form" method="POST" name="suform"> <div class="uk-margin"> <div class="uk-inline"><i class="ion-ios-person"></i> Username <input class="uk-input uk-form-width-large"name="usr" maxlength="20" type="text"> </div></div><div class="uk-margin"> <div class="uk-inline"> <i class="ion-key"></i> Password <input class="uk-input uk-form-width-large"name="pw" type="password" maxlength="30" type="text"> </div></div>*Please use your university username and password to login.<p class="uk-text-left"><button class="uk-button uk-button-default uk-modal-close" type="button">Cancel</button><button class="uk-button uk-button-primary" type="submit">Sign in</button></p></form><p class="uk-text-left"><form action="https://www.huddersfield.su/users/sign_in?click=hyper"><a href="https://www.huddersfield.su/users/sign_in?click=hyper" uk-toggle class="uk-button uk-button-text">Not a student ?</a></form> </p></div></div>';
document.getElementsByTagName('body')[0].appendChild(signine);


//Full screen search

var searche = document.createElement('div');
searche.innerHTML = '<div id="searchScreen" class="uk-modal-full uk-modal"uk-modal><div class="uk-modal-dialog uk-flex uk-flex-center uk-flex-middle" style="height:100%; width:100%; position:fixed; background-image:url(./includes/hus-tri.png); background-repeat:repeat; background:#f2f2f2;" uk-height-viewport> <button style="font-size:25px; background:transparent; border:none;" onclick=\'document.getElementById("showSearchScreenBtn").removeAttribute("hidden");\' class="uk-modal-close-full" type="button"><i class="ion-close-round"></i></button> <input onchange="searchSite(this)" id="search-btn" class="uk-search-input uk-text-center" type="search" placeholder="Search..." autofocus=""><div id="searchLoading" uk-spinner></div><div id="search_results" class="animated slideInUp" style="overflow-y:scroll; padding-right:30px;"></div></div></div>';
document.getElementsByTagName('body')[0].appendChild(searche);



//Bubble widget
var bubbleWidget = document.createElement('div');

bubbleWidget.innerHTML = '<div id="bwid" style="position:fixed; right:1%; bottom:1%;"><button onclick="updatebwlogo();" style="color:#e72981; font-size:30px; background-color:rgba(0,0,0,0);" class="uk-button uk-button-large bw-icon" type="button"><i id="bwbtnicon" class="ion-chatbox"></i></button></div><div style="background-color:#fff; font-family: quicksandbook,Arial,sans-serif;" id="bw-widget" uk-dropdown="pos: top-right;mode: click; animation: uk-animation-slide-bottom-medium; duration: 500"><div style="background-color:rgba(242, 242, 242, 0); min-width:260px;"><div class="bubbleWidget"><h5 class="uk-text-bold">Social Media</h5><hr><ul style="padding-left:1px;" class="uk-list uk-list"><a target="_blank" style="text-decoration:none; color:#e72981;" href="https://www.facebook.com/huddersfieldSU"><li id="bw"><div uk-grid> <div class="uk-width-1-6 bubbleWidget-icon"><i class="ion-social-facebook uk-margin-small-left"></i></div><div class="uk-width-5-6 bubbleWidgettext">Facebook <br/> <span style="color:#506276; font-size:13px;">/huddersfieldSU</span></div></div></li></a><a style="text-decoration:none; color:#e72981;" target="_blank" href="https://twitter.com/huddersfieldsu"><li id="bw"><div uk-grid> <div class="uk-width-1-6 bubbleWidget-icon"><i class="ion-social-twitter uk-margin-small-left"></i></div><div class="uk-width-5-6">Twitter <br/> <span style="color:#506276; font-size:13px;">@huddersfieldsu</span></div></div></li></a><a style="text-decoration:none; color:#e72981;" target="_blank" href="https://www.instagram.com/huddersfieldsu/"><li id="bw"><div uk-grid> <div class="uk-width-1-6"><i class="ion-social-instagram uk-margin-small-left"></i></div><div class="uk-width-5-6">Instagram <br/> <span style="color:#506276; font-size:13px;">@huddersfieldsu</span></div></div></li></a><a style="text-decoration:none; color:#e72981;" target="_blank" href="https://www.youtube.com/huddersfieldsu/"><li id="bw"><div uk-grid> <div class="uk-width-1-6"><i class="ion-social-youtube uk-margin-small-left"></i></div><div class="uk-width-5-6">YouTube <br/> <span style="color:#506276; font-size:13px;">/huddersfieldsu</span></div></div></li></a></ul><h5 class="uk-text-bold">Contact us</h5><hr><ul style="padding-left:1px;" class="uk-list uk-list"><a style="text-decoration:none; color:#e72981;" href="tel:00441484 473555"><li id="bw"><div uk-grid><div class="uk-width-1-6 bubbleWidget-icon"><i class="ion-ios-telephone uk-margin-small-left"></i></div><div class="uk-width-5-6 bubbleWidgettext">Phone <br/> <span style="color:#506276; font-size:13px;">01484 473555</span></div></div></li></a><a style="text-decoration:none; color:#e72981;" href="mailto:students.union@hud.ac.uk"><li id="bw"><div uk-grid><div class="uk-width-1-6 bubbleWidget-icon"><i class="ion-paper-airplane uk-margin-small-left"></i></div><div class="uk-width-5-6">Email <br/> <span style="color:#506276;">students.union@hud.ac.uk</span></div></div></li></a></ul> </div></div></div>';
document.getElementsByTagName('body')[0].appendChild(bubbleWidget);
var $div = $("#bwid");
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.attributeName === "class") {
            var attributeValue = $(mutation.target).prop(mutation.attributeName);

            if (attributeValue == '' && document.getElementById('bwbtnicon').classList[0] == "ion-chatbox-working") {
                document.getElementById("bwbtnicon").className = "ion-chatbox";
                document.getElementById("bwbtnicon").style.color = "#e72981"
            }
        }
    });
});

observer.observe($div[0], {
    attributes: true
});

function updatebwlogo() {

    var bwstatus = document.getElementById("bwid").getAttribute("aria-expanded");
    if (bwstatus == 'true' || bwstatus == 'null') {
        document.getElementById("bwbtnicon").className = "ion-chatbox";
        document.getElementById("bwbtnicon").style.color = "#e72981"
    }
    else {
        document.getElementById("bwbtnicon").className = "ion-chatbox-working";
        document.getElementById("bwbtnicon").style.color = "#4dbcc5"
    }
}


//MENU EDITING
// document.getElementById("ge2017-menu-wrapper").remove();
var menulist = document.getElementsByClassName("nav-wrap")[0].children[0];
var menusearchitem = document.createElement("li");
menusearchitem.innerHTML = "<div class='top-menu-name-wrapper'><a id='showSearchScreenBtn' onclick='newSearch();' class='ion-search' href='#searchScreen'  uk-toggle></a></div>";
menulist.appendChild(menusearchitem);
// document.getElementById('top-social-links').remove();
document.getElementsByClassName('page-search')[0].remove();


// throw "Dont load the page";

var cssObj;
//Fullscreen Search
//document.getElementsByClassName('search-box')[0].innerHTML = '';


function newSearch() {
    $("#search_results").delay(500).fadeOut();
    $("#search-btn").delay(500).fadeIn();
    $('#searchLoading').delay(5).fadeOut();
    $("#search-btn").focus();
    cssObj = { 'max-width': '40%' }
    $("#searchImg").animate(cssObj, 'slow');
}

var htmlObject = document.createElement('div');
function searchSite(search_value) {
    $("#search-btn").delay(100).fadeOut();
    $("#searchLoading").delay(50).fadeIn();
    $.getJSON('http://anyorigin.com/go?url=hudsu.unioncloud.org/pages/search?site_search=' + search_value.value + '&callback=?', function (data) {
        htmlObject.innerHTML = data.contents;
        if (htmlObject.getElementsByClassName('uc-search-list-wrapper').length > 0) {
            document.getElementById('search_results').innerHTML = '<i onclick="newSearch()" style="font-size:3rem;" class="ion-search" title="New Search" uk-tooltip="pos: right"></i>' + htmlObject.getElementsByClassName('uc-search-list-wrapper')[0].innerHTML;
            $("#searchLoading").delay(300).fadeOut();
            $("#search_results").delay(500).fadeIn();
            cssObj = { 'max-width': '20%' }
            $("#searchImg").animate(cssObj, 'slow');

        }
        else {
            UIkit.notification("No results");
            newSearch();
        }
    });
}

//Events Page Editing
// if (getPageTitle() == "What's On &amp; Events") {
//     var e = document.getElementsByClassName('club-navigation')[0].getElementsByTagName('ul')[0];
//     e.className = "uk-subnav uk-subnav-pill";
//     e.style.marginLeft = "0px";
//     for (var i = 0; i < document.getElementsByClassName('free-event').length + 1; i++) {
//         document.getElementsByClassName('free-event')[0].remove();
//     }
//     for (var i = 0; i < document.getElementsByClassName('uc-event-page-wrapper')[0].getElementsByTagName('li').length; i++) {
//         document.getElementsByClassName('uc-event-page-wrapper')[0].getElementsByTagName('li')[i].className = 'group-box';
//     }
//     var eventHead = document.createElement('div');
//     eventHead.innerHTML = '<div class="uk-child-width-1-2@s uk-margin-bottom" uk-grid> <div> <div style="background:url(./includes/sports-dark.png);"class="uk-light uk-background-secondary uk-padding hvr-underline-reveal"> <h3 >EVENTS</h3> <p>University life is all about the experiences. This page is the home of all Huddersfield Students Union events, from student-led society fundraisers to trips to European cities, there really is something for everyone to enjoy.</p></div></div><div> <div class="uk-dark uk-background-muted uk-padding hvr-underline-reveal" style="background:url(./includes/give_it_a_go.png) #f2f2f2; background-size:20%; background-position:right bottom; background-repeat:no-repeat;"> <button style="border-radius:5px; font-size:2rem; font-family: festivo1,sans-serif !important; background: #fdee61;" class="uk-button uk-button-large uk-width-1-1 uk-margin-small-bottom hvr-shutter-out-vertical">GIVE IT A GO</button> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></div></div></div>';
//     $("#event-homepage").prepend(eventHead);
//     document.getElementsByClassName('eventsearch')[0].innerHTML = '<nav class="uk-navbar-container" uk-navbar><div class="uk-navbar-left"><div style="height:50px;" class="uk-navbar-item"><form action="" method="GET" class="uk-search uk-search-navbar"><span uk-search-icon></span><input class="uk-search-input" type="search" name="search" placeholder="Search..."></form></div></div></nav>';
//     document.getElementsByClassName('club-navigation')[0].getElementsByTagName('h3')[0].remove();
// }

//The student voice pages
if (document.getElementsByClassName('uc-sv-post-idea-petition').length > 0) {
    document.getElementsByClassName('uc-sv-post-idea-petition')[0].innerHTML = '<form action="https://www.huddersfield.su/thestudentvoice/new"><button style="border-radius:3px;" class="uk-button uk-button-primary no-hover hvr-hang" title="Suggest a new idea" uk-tooltip="pos: top"><i class="ion-compose"></i> Suggest</button></form>';
    document.getElementsByClassName('uc-sv-post-idea-petition')[0].style.zIndex = "10";
    document.getElementsByClassName('uc-sv-post-idea-petition')[0].style.marginTop = "40px";
    document.getElementsByClassName('uc-sv-post-idea-petition')[0].style.marginRight = "10px";
    document.getElementById('uc-sv-right-panel').remove();
    document.getElementById('uc-sv-left-panel').style.width = "100%";
    document.getElementsByClassName('page-separator')[0].style.display = 'none';
    document.getElementsByClassName('uc-sv-category-wrapper')[0].style.display = 'none';
    document.getElementsByClassName('uc-sv-search-field-container')[0].innerHTML = '<nav class="uk-navbar-container" uk-navbar> <div class="uk-navbar-left"> <div class="uk-navbar-item"> <form class="uk-search uk-search-large"> <span uk-search-icon></span> <input class="uk-search-input uk-form-width-large sv-search-input" type="search" placeholder="Search..."></form> </div></div></nav>';
    for (var i = 0; i < document.getElementsByClassName('uc-sv-author-name').length; i++) {
        document.getElementsByClassName('uc-sv-author-name')[i].style.color = '#e72981';
    }
    //document.getElementById('sv-tags').innerHTML = '<select class="uk-select" id="form-stacked-select"><option>Option 01</option><option>Option 02</option></select>';
}


//The student voice Detais pages
if (document.getElementsByClassName('uc-sv-details-container').length > 0) {
    document.getElementsByClassName('uc-sv-legends')[0].innerHTML = "";
    document.getElementById('uc-sv-left-panel').style.width = '100%';
    var svauthordetails = document.getElementsByClassName('uc-sv-module-text-wrapper')[0].innerHTML;
    var svdetailscontainer = document.getElementsByClassName('uc-sv-details-container')[0];
    var svdetailstitle = svdetailscontainer.getElementsByTagName('h1')[0].innerHTML;
    svdetailscontainer.innerHTML = "<h1><span>" + svdetailstitle + "</span></h1>" + svauthordetails;
    document.getElementsByClassName('uc-sv-author-name')[0].style.color = "#e72981";
}

//-------------Content Pages Editing ---------------------//
//-------------------e.g Officers, Activities Pages ------//
//-----------------------Pages to include left Nav bar----//

// Commented as break pages when loads
// var leftNav = document.getElementById("uc-left-navigation"); //to check if exists and to use later to put the context of the menu to custom made one
// if (leftNav != null && leftNav != undefined) {
//     var navPlaceHolder = document.getElementsByClassName('inside-border-padding');
//     //navPlaceHolder
//     var leftNavMenu = document.createElement("div");
//     leftNavMenu.class = "uk-placeholder uk-panel";
//     leftNavMenu.innerHTML = "test";
//     //insertAfter(leftNavMenu, document.getElementsByClassName('content-wrap home-content-wrap subsites ninecol last')[0].getElementsByTagName('h1')[0]);
//     document.getElementsByClassName('threecol left-nav-content')[0].remove();
//     document.getElementsByClassName('content-wrap home-content-wrap subsites ninecol last')[0].style.width = "100%";
//     if (document.getElementsByClassName('inside-border-padding')[0].getElementsByTagName('h1').length > 0) {
//         document.getElementsByClassName('inside-border-padding')[0].getElementsByTagName('h1')[0].remove();
//     }
//     document.getElementsByClassName('inside-border-padding')[0].innerHTML = '<nav class="uk-navbar-container uk-margin-bottom" id="navbar-content" style="" uk-navbar><div class="uk-navbar-left"><div style="display:inline-block;height:70px; width:78px;left:-23px; top:10px;background-repeat:no-repeat; position:absolute; background-image:url(' + "./includes/hsu_nav_ribbon.png" + ');background-size: 70px 60px;"><ul class="uk-navbar-nav"><a id="navbar-content-menu-btn"class="uk-icon-button uk-margin-small-right uk-float-left" uk-icon="icon: menu"></a><div style="border-top:5px solid #ec6ea5;" uk-dropdown="animation: uk-animation-slide-top-small; duration: 500;pos: bottom-justify; boundary: .uk-navbar-container; boundary-align: true" id="ulcont"></div></ul></div></div><div class="uk-navbar-center"><h2 style="position:relative; " class="uk-heading-line uk-text-center uk-margin-top"><span style="font-size:40px; line-height:30px;">' + getPageTitle() + '</span></h2></div><div class="uk-navbar-right"><ul class="uk-navbar-nav share-btns" hidden=""><li><a href="#" class="uk-icon-link uk-margin-small-right facebook-icon" uk-icon="icon: facebook"></a></li><li><a href="#" class="uk-icon-link uk-margin-small-right twitter-icon" uk-icon="icon: twitter"></a></li><li><a href="#" class="uk-icon-link instagram-icon" uk-icon="icon: instagram"></a></li></ul><ul class="uk-navbar-nav"><li class="uk-margin-remove-right"><a uk-toggle="target: .share-btns; animation: uk-animation-slide-right, uk-animation-slide-right"><span class="uk-icon-link share-btns" uk-icon="icon: chevron-left"></span>Share</a></li></ul></div></nav>' + document.getElementsByClassName('inside-border-padding')[0].innerHTML;
//     var leftNavUl = document.getElementById('ulcont');
//     leftNavUl.innerHTML = '<ul class="uk-nav-primary uk-nav-parent-icon" uk-nav>' + leftNav.innerHTML + "</ul>";
//     leftNavLi = leftNavUl.getElementsByTagName('li');
//     for (var i = 0; i < document.getElementsByClassName('disable-toolbar tool-bar tree-tool-bar').length; i++) {
//         document.getElementsByClassName('disable-toolbar tool-bar tree-tool-bar')[i].remove();
//     }
//     for (var i = 0; i < document.getElementsByClassName(' tool-bar tree-tool-bar').length; i++) {
//         document.getElementsByClassName(' tool-bar tree-tool-bar')[i].remove();
//     }
//     for (var i = 0; i < leftNavLi.length; i++) {
//         if (leftNavLi[i].getElementsByTagName('ul')[0] != null && leftNavLi[i].getElementsByTagName('ul')[0] != undefined) {
//             leftNavLi[i].className = "uk-parent";
//         }
//         if (leftNavLi[i].getElementsByTagName('a')[0].className == "selected page") {
//             leftNavLi[i].className += " uk-active";
//         }
//     }
//     document.getElementById('crumbs').className = "uk-breadcrumb";

//     //Add new navigation
//     // var contentbody = document.getElementsByClassName('inside-border-padding')[0];
//     // contentbody.innerHTML = '' + contentbody.innerHTML;
// }


//-------------------------__FOOOTER -------------//

// if (document.getElementsByClassName('bottom-wrap').length > 0) {
//     var footerContainer = document.getElementsByClassName('bottom-wrap')[0];
// }
// else if (document.getElementsByClassName('bottom-union-wrap').length > 0) {
//     var footerContainer = document.getElementsByClassName('bottom-union-wrap')[0];
// }
//footerContainer.innerHTML = '<ul style="width:100%;" class="uk-breadcrumb"><li><a href="/advertise"><i title="ADVERTISE" uk-tooltip="pos: left; animation: uk-animation-slide-right-medium;" style="font-size: 4.5rem;" class="ion-easel uk-text-lead hvr-float"></i></a></li><li><a href="/awards"><i title="AWARDS" uk-tooltip="pos: top; animation: uk-animation-slide-bottom-medium;" style="font-size: 4.5rem;" class="ion-ribbon-a uk-text-lead hvr-float"></i></a></li><li><a href="/jobs"><i title="WORK WITH US" uk-tooltip="pos: top; animation: uk-animation-slide-bottom-medium;" style="font-size: 4.5rem;" class="ion-briefcase uk-text-lead hvr-float"></i></a></li><li><a href="/contact"><i title="GET IN TOUCH" uk-tooltip="pos: top; animation: uk-animation-slide-bottom-medium;" style="font-size: 4.5rem;" class="ion-ios-telephone uk-text-lead hvr-float"></i></a></li><li><a href="/environment"><i title="ENVIRONMEMT" uk-tooltip="pos: top; animation: uk-animation-slide-bottom-medium;" style="font-size: 4.5rem;" class="ion-earth uk-text-lead hvr-float"></i></a></li><li><a href="privact-policy"><i title="PRIVACY" uk-tooltip="pos: right; animation: uk-animation-slide-left-medium;" style="font-size: 4.5rem;" class="ion-lock-combination uk-text-lead hvr-float"></i></a></li></ul><div class="footer-gif"></div><p class="uk-text-center footer-cp-text uk-margin-large-top">Registered charity number: 1137401 &nbsp; &nbsp; &nbsp; . &nbsp; &nbsp; &nbsp; Copyright &copy; Huddersfield SU 2017</p>';

//TEST NEW viewport detector
function vis() {
    if (document.getElementById('main-scroller').visible(true)) {
        console.log('visible');
    } else {
        console.log('not visible');
    }

}

//-------------------------Groups Search Page---------------------/
if (getPageTitle() == "Groups") {
    document.getElementById('left-content').remove();
    document.getElementsByClassName('uc-middle-panel-for-group-cat')[0].remove();
    document.getElementsByClassName('group-list')[0].style.width = "100%";
    document.getElementById('item_search_button').remove();
    //  document.getElementById('search_keyword').
    //document.getElementsByClassName('search-box-wrapper')[1].;
}

console.log('Sucessfully loaded all scripts');
