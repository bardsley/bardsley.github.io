/* Located in Have your say page, creates table of contents from all A tags with a name */
$(function(){
    var toc = $('#table-of-contents');
    toc.prepend('<h2>Table of Contents</h2>');
    $("a").each(function(){ 
        if($(this).attr("name")) { 
            toc.append('<p><a href="#'+$(this).attr("name")+'">'+$(this).text()+'</a></p>');
        }
    });
});