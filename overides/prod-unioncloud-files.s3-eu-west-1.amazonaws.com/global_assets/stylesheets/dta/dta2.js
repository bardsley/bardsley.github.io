/* add Massage URLs for /dta prefix */
function replaceHrefs() {
  $('a').each(function(index,item) { 
      item.href = item.href.replace(/https:\/\/www\.unialliance\.ac\.uk\/(?!dta2|administrator|terms-and-conditions|about\/privacy-notice|accessibility|moderation-policy)(?<path>.*)/,'/dta2/$<path>'); /* Add DTA to most links */
      item.href = item.href.replace(/(?<url>https:\/\/www\.unialliance\.ac\.uk)(?<path>\/administrator.*)/,'https://dta.unioncloud.org/$<path>');
  })
  $('#union-logo a').each(function(index,item) {
      item.href = 'https://www.unialliance.ac.uk/dta2/';
  })
}
document.addEventListener("DOMContentLoaded",replaceHrefs);
/* End replaceHrefs */

/* Enables using css overides for local dev - Start LocalDevSwitch */
function localDevSwitch() {
    Array.from(document.head.querySelectorAll('link[href*="nusdigital.s3-eu-west-1"]')).forEach(function(elm) { elm.href = elm.href.split('?')[0] });
    Array.from(document.head.querySelectorAll('link[href*="prod-unioncloud-files.s3-eu-west-1"]')).forEach(function(elm) { elm.href = elm.href.split('?')[0] });
}
document.addEventListener("DOMContentLoaded",localDevSwitch);
/* End LocalDevSwitch */

/* Enables Hero image replacement */
function replaceHeroImages() {
    var heroes = Array.from(document.querySelectorAll('.hero a.uc-link-block'));
    heroes.forEach(function(hero){
        var imageUrl = hero.querySelector('a.uc-link-block img').src
        hero.style = "background-image: url('" + imageUrl + "')";
    })
}
document.addEventListener("DOMContentLoaded",replaceHeroImages);



if (document.domain == 'www.unialliance.ac.uk') {

  /* const uc_url = 'https://dta.unialliance.ac.uk'; */
  const uc_url = 'https://dta.unioncloud.org';
  
  function rewrite_url_for_js(url) {
    if (!url.startsWith('/dta2')) {
      url = '/dta2' + url;
    }
    if (I18n.locale != I18n.default_locale) {
      return (url.startsWith("/") ? ("/" + I18n.locale + url) : ("/" + I18n.locale + "/" + url));
    } else {
      return url
    }
  };

  $('form').each(function(index,item) { 
    if (!$(item).attr('action').startsWith('/dta2') && !$(item).attr('action').startsWith('https://www.unialliance.ac.uk/dta2')) {
      if ($(item).attr('action').startsWith('https://www.unialliance.ac.uk/')) {
        $(item).attr('action', $(item).attr('action').replace('https://www.unialliance.ac.uk/', 'https://www.unialliance.ac.uk/dta2'));
      } else {
        $(item).attr('action', $(item).attr('action').replace(uc_url, ''));
        $(item).attr('action', '/dta2' +  $(item).attr('action'));
      }
    }
  })
      
    if ($('#polymorphic_url_id').length) {
      $('#polymorphic_url_id').val($('#polymorphic_url_id').val().replace(uc_url,''));
    }
    $.ajaxSetup({
        beforeSend: function(jqXHR, settings) {
            console.log(settings)
            if (!settings.url.startsWith('https://assets')) {
              if (!settings.url.startsWith('/dta2') && !settings.url.startsWith('https://www.unialliance.ac.uk/dta2')) {
                if (settings.url.startsWith('https://www.unialliance.ac.uk/')) {
                  settings.url = settings.url.replace('https://www.unialliance.ac.uk/', 'https://www.unialliance.ac.uk/dta2');
                } else {
                  settings.url = settings.url.replace(uc_url, '');
                  settings.url = '/dta2' + settings.url;
                  console.log(settings.url)
                }
              }
            }
        }
    }); 
  
  $(document).ajaxComplete(function() {
    replaceHrefs();
  });

  /* On Book Now, redirect to buy_ticket page */
  $(document).on('click', '.event-restrictions-button', function(e) {
    e.preventDefault();
    var fwd_url = $('#uc-subsite-event').length ? window.location.href : $(this).attr('rel');
    window.location.href = fwd_url + '/buy_ticket';
  });  

  
}