function clickLoadMore(e,t) {
    (
        void 0 === $(e).first().attr("data-loadmore") || 
            0 == $(e).first().attr("data-loadmore")
    ) && 
    $(e).first().attr("data-loadmore", 0),
    $(e + ":visible").length > 0 && 
    $(window).height() + $(document).scrollTop() > $(e).first().offset().top + 100 && $(t).first().children().length > $(e).first().attr("data-loadmore") && 
    ($(e).first().attr("data-loadmore", $(t).first().children().length),
    $(e).trigger("click"))
}

function EnableAutoLoadMore(e, t) {
    $(window).on("scroll", function(evt) {
        if(window.loadFunctionWait) { clearTimeout(window.loadFunctionWait);}
        window.loadFunctionWait = setTimeout(function(e,t) {
            clickLoadMore(e,t);
        },100,e,t);
    });
}
$(function() {

    $(document).off("click", '#uc-more-group-search');
    $(document).on("click", '#uc-more-group-search', function() {
        group_type = $(".tree-navigation li.active a").find(".group-type-hidden-id").text();
        group_cat = $(".group-types li.active a").find(".group-cat-hidden-id").text();
        search_text_to_search = encodeURIComponent($("#search_keyword").val());
        
        if (group_type == 'null') {
            group_type = '';
        }
        if (group_cat == 'null') {
            group_cat = '';
        }
        if (search_text_to_search == 'null') {
            search_text_to_search = '';
        }
        offset = offset + 8;

        more_groups_path = rewrite_url_for_js("/groups/more_groups?offset=" + offset + "&group_type=" + group_type + "&group_cat=" + group_cat + "&search=" + search_text_to_search);

        $.ajax({
            type : "GET",
            style : "inherit",
            dataType : 'script',
            url : more_groups_path,
        }).done(function(data) {

            $('#uc-more-group-search').show();
            if ($("#uc-load_search_button").val() == "false") {
                $('#uc-more-group-search').hide();
            }
        });
    });

    EnableAutoLoadMore("#uc-more-group-search", ".category-box-wrapper");
});