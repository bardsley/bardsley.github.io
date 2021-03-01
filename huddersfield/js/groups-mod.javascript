function shuffleArray(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}
if (getPageTitle() == "Groups") {

    window.onload = function (e) {


        //ADS HERE
        var groupsAds = ['<a href="http://www.huddersfield.su/varsity"><img src="https://s3-eu-west-1.amazonaws.com/nusdigital/image/images/199583/original/Winners_WebBanner_1.png"/></a>',
            '<a href="http://www.huddersfield.su/toolkit"><img src="https://s3-eu-west-1.amazonaws.com/nusdigital/image/images/121306/optimized/HSU_Groups_100.png"/></a>'];
        //END OF AD

        shuffleArray(groupsAds);
        document.getElementsByClassName('club-navigation')[0].getElementsByTagName('h3')[0].outerHTML = '<section style="float:left; width:100%;" class="slideshow-group"> <div class="slideshow-group-container slide-group"> ' + groupsAds[0] + groupsAds[1] + groupsAds[2] + ' </div></section>';

        //---SOCI# DROP DOWN

        document.getElementsByClassName("club-navigation")[0].getElementsByTagName('ul')[0].getElementsByTagName('li')[1].innerHTML = '<div class="dropdown-group"><a href="javascript:void(0)"><span class="display-none group-type-hidden-id">1</span>Societies</a><div class="dropdown-group-content"><a href="https://www.huddersfield.su/groups?group_type=societies-881&group_cat=&search="><span class="display-none group-cat-hidden-id">All</span>All</a></li><li><a href="https://www.huddersfield.su/groups?group_type=academic-973e4c8b-7042-45de-b604-52b8813e9717"><span class="display-none group-cat-hidden-id">9</span>Academic</a></li><li><a href="https://www.huddersfield.su/groups?group_type=societies-881&group_cat=arts "><span class="display-none group-cat-hidden-id">19</span>Creative</a></li><li><a href="http://www.huddersfield.su/groups?group_type=societies-881&amp;group_cat=liberation"><span class="display-none group-cat-hidden-id">8</span>Liberation</a></li><li><a href="http://www.huddersfield.su/groups?group_type=societies-881&amp;group_cat=media"><span class="display-none group-cat-hidden-id">12</span>Media</a></li><li><a href="http://www.huddersfield.su/groups?group_type=societies-881&amp;group_cat=politics"><span class="display-none group-cat-hidden-id">3</span>Political</a></li><li><a href="http://www.huddersfield.su/groups?group_type=societies-881&amp;group_cat=recreational"><span class="display-none group-cat-hidden-id">10</span>Recreational</a></li><li><a href="http://www.huddersfield.su/groups?group_type=societies-881&amp;group_cat=religion"><span class="display-none group-cat-hidden-id">1</span>Religion</a></li>' + '</div></div>';

        var dropdown_content = document.getElementsByClassName("dropdown-group-content");
        if (dropdown_content.length > 0) {
            dropdown_content[0].id = "groupssoclist";
            for (var i = 0; i < document.getElementById('societies').getElementsByTagName('ul')[0].getElementsByTagName('li').length; i++) {
                if (i == 0) { document.getElementById('groupssoclist').getElementsByTagName('li')[i].getElementsByTagName('a')[0].href = 'http://www.huddersfield.su/groups?group_type=societies-881&group_cat=all' }
                else { }
            }
        }



        if (dropdown_content.length > 1) {
            dropdown_content[1].id = "groupssoclist";
            for (var i = 0; i < document.getElementById('societies').getElementsByTagName('ul')[0].getElementsByTagName('li').length; i++) {
                if (i == 0) {
                    document.getElementById('groupssoclist').getElementsByTagName('li')[i].getElementsByTagName('a')[0].href = 'http://www.huddersfield.su/groups?group_type=societies-881&group_cat=all'
                }
                else { }
            }
        }
    }
}