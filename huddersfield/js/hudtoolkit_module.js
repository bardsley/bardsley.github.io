// https://www.huddersfield.su/administrator/sites/3521/pages/28412/edit
// These functions are used throughout code to load other content dynamically
// It was originally used because UnionCloud wasn't allowing the level of complexity Huddersfield wanted


/* ----- start module: hudToolkit ----- */
var hudToolkit = (function() {
  var s = {};
  var v = {};
  var fn = {};
  var rtn = {};


  //usage: hudToolkit.page('example').ex(function(){code});
  fn.page = function(page) {
    var url = window.location.pathname.substring(1);
      
    this.ex = function(fArg) {
      if(page !== url) return;
      fArg();
    }
      
    return {
      ex : this.ex
    }
  }


  //this function calculates if the supplied argument is a parent page on the URL of the current calling page. 
  //it does not count itself as a parent, only pages above it on the URL chain.
  //this function works with either explicit .html /.php extentions or implied index.{html|php} urls
  //usage: hudToolkit.childPageOf('example').ex(function(){code});
  fn.childPageOf = function(p) {
    if( typeof(p) === 'undefined' ) p = '';
    if( typeof(p) !== 'string' ) p = '';

    var temp = {};
    var currentUrl = {};
    var parent = {};
    var fni = {};

    parent.string = p;

    temp.re = /(\.php|\.html)($|\#)/;
    currentUrl.read = window.location.pathname.substring(1);
    currentUrl.hasExtention = ( currentUrl.read.search(temp.re) > -1 ) ? true : false;
    currentUrl.asArray = currentUrl.read.split('/');

    fni.getParentString = function() {
      var array = currentUrl.asArray;
      var parentArray;

      if( currentUrl.hasExtention ) {
        array.pop(); array.pop();
      } else {
        array.pop();
      }
      parentArray = array;
      
      if( parentArray.indexOf( parent.string ) > -1 ) {
        return parentArray.join('/');
      } else {
        return '';
      }
    }    

    currentUrl.parentString = fni.getParentString();
    currentUrl.re = new RegExp( parent.string + "$", "i");

    this.ex = function(fArg) {
      // console.log('searching "%c%s" %cfor "%c%s%c"', "color:blue; font-weight:bold", currentUrl.parentString, "color:black; font-weight:normal", "color:blue; font-weight:bold", currentUrl.re, "color:black; font-weight:normal");
      if( currentUrl.parentString.search( currentUrl.re ) < 0 ) {
        return;
      };
      fArg();
    }
      
    return {
      ex : this.ex
    }
  }

/* --in progress--
  fn.resizeIframe = function() {
    var items = $('iframe.resize');

    if( items.size() < 1 ) return;
    
    items.each(function() {
      var $this = $(this);
      

    })

  }
*/


  //input an object to be exported as css string
  fn.objToCss = function(obj) {
    var css = [];
    if( typeof( obj ) !== 'object' ) return null;

    for( var key in obj ) {
      var val = obj[key];
      css.push(key);
      css.push(': ');
      css.push(val);
      css.push('; ');
    }

    return css.join('');
  }


  //this should be used for ajax lookup as jQuery.get etc dont tend to play nice with UnionCloud
  //possibly revisit when UC upgrade to jQuery 1.11
  //1st argument of callback should be supplied to handle data return
  //2nd argument should be request url eg 'http://www.huddersfield.su/advice'
  //usage eg: hudToolkit.ajaxLookup(function() { myFunc(); });
  fn.ajaxLookup = function(callback, url) {
    if( typeof( callback ) !== 'function' ) callback = function() {};

    var _fn = {};
    var _v = {};
    var xmlhttp;

    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttpObj = new XMLHttpRequest();
    } else {
      // code for IE6, IE5
      xmlhttpObj = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttpObj.onreadystatechange = function() {
      if (xmlhttpObj.readyState == 4 ) {
        if(xmlhttpObj.status == 200){
          callback(xmlhttpObj.responseText);
        }

        else if(xmlhttpObj.status == 400) {
          console.log('Error: 400 from xmlhttprequest')
        }

        else {
          console.log('Error: other error from xmlhttprequest')
        }

      }
    }

    xmlhttpObj.open("GET", url, true);
    xmlhttpObj.send();
   
  }


  fn.init = function() {
    // fn.resizeIframe();
  }
  fn.init();


  /* public functions */
  rtn.page = fn.page;
  rtn.childPageOf = fn.childPageOf;
  rtn.objToCss = fn.objToCss;
  rtn.resizeIframe = fn.resizeIframe;
  rtn.ajaxLookup = fn.ajaxLookup;

  return rtn;
})();
/* ------ end module: hudToolkit ------ */

