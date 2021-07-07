// new Sidebar Nav 2017 - https://www.huddersfield.su/administrator/sites/3521/pages/83554/edit
// Replaces the menu with the page wrap pink icon for hidden menu - reccomend removing

$(document).ready(function() {
 
    if(document.getElementsByClassName('left-nav-content').length >= 1){
        console.log("Adding info to sidebar nav");
        document.getElementsByClassName('left-nav-content')[0].innerHTML = '<div class="topSideNav"><div class="topSideNavRibbon"><div style="display:inline;" class="dropdownd"><i style="font-size:2rem; color:#f2f2f2;" class="ion-navicon-round"></i><div class="dropdown-contentd" id="sideNavMenu">' + document.getElementsByClassName('left-nav-content')[0].innerHTML + '</div></div></div><div class="pagetitle"><h3 id="pagetitle" style="text-align:center;width: 100%;display: inline; color:#e72981; float: left; position: absolute; right: 0%; margin-top:20px;"></h3></div><div style="float:right; text-align:right; display:inline;" class="tooltip"><i style="font-size:2rem;" class="ion-android-share-alt"></i><p class="tooltiptext animated fadeInRight"><a target="popup" style="color:#4867AA;" href="https://www.facebook.com/sharer/sharer.php?u='+window.location.href +'&title=Huddersfield%20Students%20Union" class="ion-social-facebook"></a>  <a style="color:#1DA1F2; padding-left:20px;" class="ion-social-twitter" target="popup" href="http://twitter.com/intent/tweet?status=Via%20@HuddersfieldSU+'+window.location.href+'"></a></p></div></div>';
      
   
        for (var i = 0; i < document.getElementsByClassName('dropdown-contentd')[0].getElementsByTagName('li').length; i++) {
            if (document.getElementsByClassName('dropdown-contentd')[0].getElementsByTagName('li')[i].getElementsByTagName('a')[0].classList.contains('selected')) {
                document.getElementById('pagetitle').innerHTML = document.getElementsByClassName('dropdown-contentd')[0].getElementsByTagName('li')[i].getElementsByTagName('a')[0].innerHTML;
                break;
            }
            else{document.getElementById('pagetitle').innerHTML = getPageTitle();}
        }
    }
  });

