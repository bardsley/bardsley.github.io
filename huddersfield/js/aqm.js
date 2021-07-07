// Activities Quality Mark
// Adding functionality to the awards MediaKeySystemAccess, mainly appears to be stylistic and would load data from an unused source http://dev.huddersfield.su/hudpress/aqm/index.php

/* ----- start module: aqm ----- */
var aqm = (function() {
  var s = {};
  var v = {};
  var fn = {};
  var rtn = {};

  v.grades = ['ratified', 'bronze', 'silver', 'gold'];
  v.imgPaths = {
    bronze: {
      small: "http://s3-eu-west-1.amazonaws.com/nusdigital/image/images/20600/original/30x30px_bronze.png",
      large: "http://s3-eu-west-1.amazonaws.com/nusdigital/image/images/20956/original/130x130px_Bronze_Square.png"
    },

    silver: {
      small: "http://s3-eu-west-1.amazonaws.com/nusdigital/image/images/20595/original/30x30px_silver.png",
      large: "http://s3-eu-west-1.amazonaws.com/nusdigital/image/images/20957/original/130x130px_Silver_Square.png"
    },

    gold: {
      small: "http://s3-eu-west-1.amazonaws.com/nusdigital/image/images/20596/original/30x30px_gold.png",
      large: "http://s3-eu-west-1.amazonaws.com/nusdigital/image/images/20958/original/130x130px_Gold_Square.png"
    },    
  };

  v.styles = {
    small: {
      position : 'absolute',
      width : '30px',
      top: '10px',
      left: '145px'
    },
    large: {
      position : 'absolute',
      width : '130px',
      top: '-70px',
      right: '0px'
    }
  }
  v.styles.small = hudToolkit.objToCss(v.styles.small);
  v.styles.large = hudToolkit.objToCss(v.styles.large);

  v.groupsPageTriggers = [
    '.tree-navigation li a',
    '#uc-more-group-search'
  ];

  fn.makeSelectors = function() {
    s.groupBox = $('.group-box');
    s.singlePageIcon = $('.galleryIcon');
    s.singlePageHeader = $('.top-container');
  }


  fn.getAqmData = function(callback) {
    $.getJSON( 'http://dev.huddersfield.su/hudpress/aqm/index.php', function(data) {
      callback(data);
    });
  }


  fn.grpPageWriteImages = function(data) {
    if( s.groupBox.length < 1 ) return;

    s.groupBox.each(function() {
      var $this = $(this);
      var splitHref = $this.attr('href').split("/");
      var href = splitHref[ splitHref.length -1 ];
      
      for (var key in data){
        if( data.hasOwnProperty(key) ) {
          var value = data[key];

          if( href == key && value != 1 ) {
            var grade = v.grades[value-1];

            $this.css('position', 'relative');
            
            //this stops multiple imgs being appended
            if( $this.find('.aqm-grade-image').length === 0 ) {
              //appends the hidden mark
              $this.append('<img class="aqm-grade-image ' + grade + '" style="opacity:0; ' + v.styles.small + '" src="' + v.imgPaths[grade].small + '" />');
              //fadeIn the mark
              $this.find('.aqm-grade-image').animate({
                'opacity' : '1',
                'left' : '10px'
              }, 'slow');
            }
          };
        };
      };

    });
  }

  //sel is an array of selectors
  //when any are fired, callback is called
  fn.setTriggers = function( sel, callback, data ) {
    if( typeof(sel) !== 'object' ) return;
    if( typeof(sel.length) === 'undefined' ) return;
    if( sel.length < 1 ) return;
    if( typeof(callback) !== 'function' ) return;

    var str = sel.join(',');
    var $sel = $(str);
    
    $sel.each(function() {
      $(this).click(function() {
        setTimeout(function(){
          callback(data);
        }, 2000);
      });
    });

  }


  fn.setTriggersCallback = function(data) {
    fn.makeSelectors();
    fn.grpPageWriteImages(data);
  }


  fn.isSinglePage = function() {
    var url = window.location.pathname.substring(1);
    var regex = /\/groups\/.+/;

    if( url.search(regex) > -1 ) {
      return true;
    } else {
      return false;
    }
  }
  

  fn.singlePageWriteImages = function(data) {
    if( s.singlePageIcon.length < 1 || s.singlePageHeader.length < 1 ) return;

    var url = window.location.pathname.substring(1);
    var grpName = url.split('/').pop();

    for( var key in data ) {
      if( data.hasOwnProperty(key) ) {
        var value = data[key];

        if( grpName == key && value != 1 ) {
          var grade = v.grades[value-1];

          s.singlePageIcon.css({'position' : 'relative', 'padding' : '0', 'margin' : '10px 0'}).append('<img class="aqm-grade-image ' + grade + '" style="' + v.styles.small + '" src="' + v.imgPaths[grade].small + '" />');
          s.singlePageHeader.css('position', 'relative').append('<a href="/student-activities-toolkit/activities-quality-mark" target="_blank"><img class="aqm-grade-image header ' + grade + '" style="' + v.styles.large + '" src="' + v.imgPaths[grade].large + '" /></a>');
          s.singlePageIcon.find('.aqm-grade-image').animate({
            'opacity' : '1',
            'left' : '10px'
          }, 'slow');
        }
      }
    }
  }
  

  fn.init = function() {
    $('document').ready(function() {
      fn.makeSelectors();

      hudToolkit.page('groups').ex(function() {
        fn.getAqmData(function(data) {
          fn.grpPageWriteImages(data);
          //re-fires write images after click on ajax elements (defined in arg-1)
          fn.setTriggers( v.groupsPageTriggers, fn.setTriggersCallback, data );
        });
      });

      hudToolkit.childPageOf('groups').ex(function() {
        fn.getAqmData(function(data) {
          fn.singlePageWriteImages(data);
        });
      });

    });
  };
  fn.init();

  return rtn;
})();
/* ------ end module: aqm ------ */

