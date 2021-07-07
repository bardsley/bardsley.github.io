// Used to set colours in ie which doesnt support var()
if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
    console.log("---- IE fixes ---- ");

    $(document).ready(function(){ 
        // --backing-grey: #ddd;
        const greyElements = document.querySelectorAll(".row.content");
        for (var i = 0; i < greyElements .length; i++) {
            greyElements[i].style.background = '#ddd'; 
        }
        // --brand-text: #ffffff;
        const textElements = document.querySelectorAll("#main-menu-wrap .nav-wrap ul li a");
        for (var i = 0; i < textElements .length; i++) {
            textElements[i].style.color = '#ffffff'; 
        }
        // --dark-pink: #af105a;
        const darkPinkElements = document.querySelectorAll("#main-menu-wrap .nav-wrap, #main-menu-wrap .nav-wrap .top-submenu-wrapper ul li a, #main-menu-wrap .nav-wrap .top-submenu-wrapper ul li a:hover");
        for (var i = 0; i < darkPinkElements.length; i++) {
            darkPinkElements[i].style.background = '#af105a'; 
        }

        const darkPinkBorders = document.querySelectorAll("#main-menu-wrap .nav-wrap ul li .top-submenu-wrapper ul");
        for (var i = 0; i < darkPinkBorders.length; i++) {
            darkPinkBorders[i].style.border = 'solid 2px #af105a'; 
            darkPinkBorders[i].style.borderLeft = 'solid 20px #af105a'; 
        }

        // --brand-pink: #e72981;
        const pinkElements = document.querySelectorAll("#main-menu-wrap .nav-wrap, #main-menu-wrap .nav-wrap .top-submenu-wrapper ul li a, #mobileHeader");
        for (var i = 0; i < pinkElements.length; i++) {
            pinkElements[i].style.background = '#e72981'; 
        }

        const pinkText = document.querySelectorAll("#keep-up-to-date-with-us h2, #say-hello-to-this-years-officers h2, #say-hello-to-this-years-officers-wrap .column-content div.edit-mode-page p:nth-child(n+1) a");
        for (var i = 0; i < pinkText.length; i++) {
            pinkText[i].style.color = '#e72981'; 
        }
    });

    /* Deal with lack fo sticky positioning in IE */
    $(document).ready(function(){ 
        console.log("- Re-position the menu and headers");

        const headerElm = document.querySelectorAll('.row.top-union, .row.top, #main-menu');
        if(headerElm) {
            headerElm[0].style.top = '0px';
            headerElm[0].style.position = 'relative';
        
            const advertElm = document.getElementById('top-advertisement-wrap');
            // advertElm.style.top = '70px';
            const navElm = document.querySelectorAll('.section.menu');
            if(navElm) {
                navElm[0].style.position = 'relative';
                navElm[0].style.top = '-15px';
            }

            // Move the main content a little to accomodate

            
        }
    });

}
