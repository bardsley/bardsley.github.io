function getPageTitle() {
    var page_title = document.getElementsByTagName('title')[0].innerHTML;
    var i = page_title.indexOf("@");
    var raw_title = ""
    if (i > 0) { raw_title = page_title.slice(0, i).trim(); }
    return raw_title;
}
window.onload = function () {
    console.debug(" Like/Dislike Homepage Buttons Loading")
    var blank_after_trim = getPageTitle() == "";
    var title_just_hudderfield_su = document.getElementsByTagName('title')[0].innerText.trim() == "Huddersfield Students' Union";
    var voice_widget = document.getElementsByClassName('uc-student-voice-widget-wrapper')[0].getElementsByClassName('jcarousel-item ')
    var voice_widget_present = voice_widget.length > 0;
    if ( blank_after_trim && title_just_hudderfield_su && voice_widget_present ) {
        var voice_carousel = voice_widget[0];
        var link = voice_carousel.getElementsByTagName('a')[0].getAttribute('href');
        var like = voice_carousel.getElementsByClassName('uc-sv-widget-like')[0];
        var dislike = voice_carousel.getElementsByClassName('uc-sv-widget-dislike')[0];
        like.outerHTML = '<a href="' + link + '/vote_for_student_voice">' + like.outerHTML;
        dislike.outerHTML = '<a href="' + link + '/vote_against_student_voice">' + dislike.outerHTML;
    }
}