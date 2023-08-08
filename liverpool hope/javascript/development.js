/* Enables using css overides for local dev - Start LocalDevSwitch */
function localDevSwitch() {
    Array.from(document.head.querySelectorAll('link[href*="nusdigital.s3-eu-west-1"]')).forEach(function(elm) { elm.href = elm.href.split('?')[0] });
}
document.addEventListener("DOMContentLoaded",localDevSwitch);
/* End LocalDevSwitch */