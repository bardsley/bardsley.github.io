// Edited from page at https://hudsu.unionclouduat.org/administrator/sites/104726/pages/99466/edit?locale=en

var normalMenu;
$(document).ready(function () {

    normalMenu = document.getElementById('main-menu-wrap').getElementsByTagName('ul')[0];
    if ($(window).width() > 1024) {
        //   document.getElementById('main-menu').style.paddingLeft ='7%';
    }
    else { document.getElementById('main-menu').style.paddingLeft = '0px'; document.getElementById('main-menu').style.fontSize = '14px' }
    if ($(window).width() >= 958) {
        document.getElementById('main-menu').style.fontSize = '100%'
    }
    else {
        document.getElementById('main-menu').style.fontSize = ($(window).width() / 54) + 'px'
    }
    // document.getElementById('main-menu').style.marginLeft ='7%';
    //setTimeout(function(){document.getElementById('main-menu').style.marginLeft = ($(window).width() - ($('#main-menu').offset().left + $('#main-menu').width()))/2 + 'px';},1000);

});
var topofDiv = $(".nav-wrap").offset().top; //gets offset of header
var divheight = $(".nav-wrap").outerHeight(); //gets height of header
$(window).scroll(function () {

    if ($(window).scrollTop() < (topofDiv + divheight) && document.getElementsByClassName('nav-wrap')[0].style.position == "fixed") {

        document.getElementsByClassName('nav-wrap')[0].style.position = "";
        document.getElementsByClassName('nav-wrap')[0].style.top = "";
        try {
            document.getElementById('home-icon').remove();
            document.getElementById('main-menu').getElementsByTagName('ul')[0].style.marginBottom = '0px';
        } catch (err) { }
    }
    else if ($(window).scrollTop() > (topofDiv + divheight) && document.getElementsByClassName('nav-wrap')[0].style.position != "fixed") {
        document.getElementsByClassName('nav-wrap')[0].style.position = "fixed";
        document.getElementsByClassName('nav-wrap')[0].style.top = "0";
        document.getElementById('main-menu').getElementsByTagName('ul')[0].style.marginBottom = '35px';
        

        $("#main-menu-wrap ul").first().prepend($('<li id="home-icon" class="no-child inactive"><div class="top-menu-name-wrapper"><a href="/" id="top-nav-level-one" class="top-nav-level-one-nomobilemenu ion-home"></a></div></li>'));
        //document.getElementById('main-menu-wrap').getElementsByTagName('ul')[0].innerHTML = '<li id="home-icon" class="no-child inactive"><div class="top-menu-name-wrapper"><a href="/" id="top-nav-level-one" class="top-nav-level-one-nomobilemenu ion-home"></a></div></li>' + normalMenu;
    }
});


//MOBILE STICKY MENU
window.onload = function () {
    try {
        var mtopofDiv = $("#mobileHeader").offset().top; //gets offset of header
        var mdivheight = $("#mobileHeader").outerHeight(); //gets height of header
    }
    catch (err) { }
    $(window).scroll(function () {

        if ($(window).scrollTop() < (mtopofDiv + mdivheight) && document.getElementById('mobileHeader').style.position == "fixed") {

            document.getElementById('mobileHeader').style.position = "";
            document.getElementById('mobileHeader').style.top = "";
            document.getElementById('mobileHeader').style.width = "";
            document.getElementById('mobileHeader').style.height = "";
            document.getElementById('mobileHeader').style.marginTop = "-20px";
            document.getElementById('union-logo').getElementsByTagName('a')[0].style.height = "80px";
            document.getElementsByClassName('mmdropbtn')[0].getElementsByTagName('i')[0].style.fontSize = "3rem";
            document.getElementsByClassName('mmdropbtn')[0].style.padding = "16px";
            document.getElementById('union-logo').getElementsByTagName('a')[0].style.marginTop = "5px";
            document.getElementById('mobileHeader').className = "uk-grid";
            document.getElementById('mobileHeader').style.backgroundColor = "transparent";
            document.getElementById('mobileHeaderRight').style.position = "";
            document.getElementById('mobileHeaderRight').style.right = "";

        }
        else if ($(window).scrollTop() > (mtopofDiv + mdivheight) && document.getElementById('mobileHeader').style.position != "fixed") {
            document.getElementById('mobileHeader').style.position = "fixed";
            document.getElementById('mobileHeader').style.top = "0";
            document.getElementById('mobileHeader').style.width = "108%";
            document.getElementById('mobileHeader').style.height = "60px";
            document.getElementById('mobileHeader').style.marginTop = "0px";
            document.getElementById('union-logo').getElementsByTagName('a')[0].style.height = "60px";
            document.getElementById('union-logo').getElementsByTagName('a')[0].style.marginTop = "0px";
            document.getElementsByClassName('mmdropbtn')[0].getElementsByTagName('i')[0].style.fontSize = "2rem";
            document.getElementsByClassName('mmdropbtn')[0].style.padding = "10px";
            document.getElementById('mobileHeader').style.background = "url('https://s3-eu-west-1.amazonaws.com/nusdigital/document/documents/35811/fb0f9582e6f25eeb3fd813503744e586/Scroll-bannerArtboard_53.png')";
            document.getElementById('mobileHeaderRight').style.position = "inherit";
            document.getElementById('mobileHeaderRight').style.right = "0";
            document.getElementById('mobileHeader').className = "uk-grid animated slideInDown";


        }
    });
}