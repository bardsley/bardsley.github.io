// Global Java backup //



// Fix for changing 'halls' to 'schools'
$(function () {
    if ($(".uc-election-dashboard").length > 0) {
        $(".hall a").text("Schools");

        if ($(".hall.active").length > 0) {
            $(".uc-top-turnouts-headings").text("Schools");
        }
    }
})

//Xmas Logo Replacement
//var logoEl = $("#union-logo a"); 
//var logoPath = "http://s3-eu-west-1.amazonaws.com/nusdigital/image/images/21160/original/Christmas-Logo.png";
//logoEl.css("background", "url(" + logoPath + ") no-repeat scroll center center transparent");
//End Xmas Logo Replacement


//Hotjar Tracking Code
if (typeof (console.log) != 'undefined') console.log('init hotjar');
(function (h, o, t, j, a, r) {
    h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
    h._hjSettings = { hjid: 131255, hjsv: 5 };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script'); r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
})(window, document, '//static.hotjar.com/c/hotjar-', '.js?sv=');
