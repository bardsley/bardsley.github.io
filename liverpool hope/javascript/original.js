if ($('.auto-tabs').length) {
    $('.auto-tabs').tabs({fx:{opacity: "toggle"},
    select: function(event, ui) {
            jQuery(this).css('height', jQuery(this).height());
            jQuery(this).css('overflow', 'hidden');
    },
    show: function(event, ui) {
            jQuery(this).css('height', 'auto');
            jQuery(this).css('overflow', 'visible');
    }}).tabs("rotate", 10000, true);

    $(".auto-tabs").on("mouseover",function() {
        $(this).tabs("rotate", 0);
    }).on("mouseout",function() {
        $(this).tabs({fx:{opacity: "toggle"}}).tabs("rotate", 10000, true);
    });
  }