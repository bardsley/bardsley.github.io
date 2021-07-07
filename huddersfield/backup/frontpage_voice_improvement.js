// Student Voice Widget Imrpvoements
// This enables the buttons on the front page to register the vote as ooposed to just taking to the page

function getPageTitle() {
 var i = document.getElementsByTagName('title')[0].innerHTML.indexOf("@");

 if(i > 0)
  return  document.getElementsByTagName('title')[0].innerHTML.slice(0, i).trim();
 else
  return "";
}
window.onload = function () { 
if (getPageTitle() == "" && document.getElementsByTagName('title')[0].innerText.trim() == "Huddersfield Students' Union" && document.getElementsByClassName('uc-student-voice-widget-wrapper')[0].getElementsByClassName('jcarousel-item ').length > 0) {
  var link = document.getElementsByClassName('uc-student-voice-widget-wrapper')[0].getElementsByClassName('jcarousel-item ')[0].getElementsByTagName('a')[0].getAttribute('href');
  	var like = document.getElementsByClassName('uc-student-voice-widget-wrapper')[0].getElementsByClassName('jcarousel-item ')[0].getElementsByClassName('uc-sv-widget-like')[0];
  	var dislike = document.getElementsByClassName('uc-student-voice-widget-wrapper')[0].getElementsByClassName('jcarousel-item ')[0].getElementsByClassName('uc-sv-widget-dislike')[0];
  	like.outerHTML = '<a href="'+link+'/vote_for_student_voice">' + like.outerHTML;
    dislike.outerHTML = '<a href="'+link+'/vote_against_student_voice">' + dislike.outerHTML;
 }
}