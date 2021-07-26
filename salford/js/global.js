function EnableTabRotation(e) {
    tabID = e,
        $(tabID).on('mouseenter', TabClearInterval);
    $(tabID).on('mouseleave', TabSetInterval),
        TabSetInterval(), $(tabID + " .ui-tabs-nav > li > a").on("click", TabClick)
}

function RotateTab() {
    var e = $(tabID + " .ui-tabs-nav > li").length,
        t = $(tabID + " .ui-tabs-nav > li.ui-tabs-active").index();
    t + 1 >= e ? $(tabID + " .ui-tabs-nav > li").eq(0).find("> a").trigger("click") : $(tabID + " .ui-tabs-nav > li").eq(t + 1).find("> a").trigger("click")
}

function TabSetInterval() { tabIntervalRunning = !0, tabInterval = setInterval(RotateTab, 5500) }

function TabClearInterval() { tabIntervalRunning = !1, clearInterval(tabInterval) }

function TabClick() { tabIntervalRunning ? (TabClearInterval(), TabSetInterval()) : TabClearInterval() }

function CycleImage(e) {
    var t = $(e).children(".active-image"),
        n = t.next().length > 0 ? t.next() : $(e).children("img:first");
    t.addClass("previous-image"), t.removeClass("active-image"), n.addClass("active-image")
}

function UpdateHomeImages() {
    $(".event-widget").length > 0 && !$("#upcoming-events").hasClass("high-quality") && ($("#upcoming-events").addClass("high-quality"), $(".event-thumbnail img").each(function (e) {
        var t = $(this).attr("src");
        t.includes("/small/") && (t = t.replace("/small/", "/medium/"), $(this).attr("src", t))
    }))
}

function UpdateEventDates() {
    $(".event-details").not(".new-date").each(function (e) {
        var t; if ($(this).children().length < 4) var t = $(this).find("p:nth-child(2)").html();
        else var t = $(this).find("p:nth-child(3)").html();
        t = t.substring(t.indexOf(" ") + 1); var n = moment(t, "DD-MM-YYYY - HH:mm");
        $(this).empty(), $(this).append('<p class="day">' + n.format("ddd") + "</p>"), $(this).append('<p class="date">' + n.format("D") + "</p>"), $(this).append('<p class="month">' + n.format("MMM") + "</p>"), $(this).addClass("new-date")
    })
}

function EnableAutoLoadMore(e, t) {
    $(window).on("scroll", function () {
        ("undefined" == typeof $(e).first().attr("data-loadmore") || 0 == $(e).first().attr("data-loadmore")) && $(e).first().attr("data-loadmore", 0),
            $(e + ":visible").length > 0 && $(window).height() + $(document).scrollTop() > $(e).first().offset().top - 80 && $(t).first().children().length > $(e).first().attr("data-loadmore") && ($(e).first().attr("data-loadmore",
                $(t).first().children().length), $(e).trigger("click"))
    })
}

function LoadEventsListing() { console.warn('API from fatsoma no longer exists, this code is still being called'); }

var navFixed = !1,
    tabID, tabInterval, tabIntervalRunning = !1,
    allowSingleCandidate = !1,
    canvasContext, snowParticles = [],
    snowAngle = 0;

const triggerMenuShrinkAt = '1200' //px

const shrinkMenuItem = function (menuItemId, keepWordIndex) {
    var menuItem = document.getElementById(menuItemId);
    var prevMenuText = menuItem.innerText;
    menuItem.dataset.fullname = prevMenuText;
    menuItem.innerText = prevMenuText.split(' ')[keepWordIndex];
    return menuItem.innerText;
}

const growMenuItem = function (menuItemId) {
    var menuItem = document.getElementById(menuItemId);
    menuItem.innerText = menuItem.dataset.fullname
    menuItem.removeAttribute('data-fullname')
    return menuItem.innerText;
}

const shrinkMenu = function () {
    document.getElementById('top-navigation').dataset.size = 'shrunk';
    shrinkMenuItem('top-nav-level-one-student-voice', 1);
    shrinkMenuItem('top-nav-level-one-advice-support', 0);
    shrinkMenuItem('top-nav-level-one-bar-cafe-offers', 0);
}

const growMenu = function () {
    document.getElementById('top-navigation').dataset.size = 'grown';
    growMenuItem('top-nav-level-one-student-voice');
    growMenuItem('top-nav-level-one-advice-support');
    growMenuItem('top-nav-level-one-bar-cafe-offers');
}

// /* This is used to create respectful version, it will only be called timeout ms after LAST enaction, greate for resize or other events that fire a lot */
const debounce = function (func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const checkMenu = debounce(function () {
    var menu = document.getElementById('top-navigation');
    if (menu.dataset.size != 'shrunk' && menu.offsetWidth < triggerMenuShrinkAt) { shrinkMenu(); }
    if (menu.dataset.size == 'shrunk' && menu.offsetWidth >= triggerMenuShrinkAt) { growMenu(); }
}, 250)

$(function () {

    checkMenu();
    window.addEventListener('resize', checkMenu);

    if (
        $("#union-logo a").attr("href", "https://www.salfordstudents.com/"),
        $("#union-logo, .system-menu a.uc-sign-link, .profile-setting a.profile-name").addClass("transition-enabled"),
        "/" == window.location.pathname && (
            LoadEventsListing(),
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || $(document).ajaxComplete(UpdateHomeImages)),
        $("#uc-left-navigation a.selected").parent().children("ul").css("display", "block"), $(".nav-level-one a").on("click", function (e) {
            e.preventDefault(), $("#uc-left-navigation").toggleClass("visible")
        }),
        window.location.pathname.startsWith("/users/sign_in") && ($("form :input").each(function (e, t) {
            var n = $(t).attr("id"),
                a = $(t).parents("form").find("label[for=" + n + "]");
            n && 1 == a.length && $(t).attr("placeholder", $(a).html().trim())
        }),
            $(".uc-back-button-hyper .back-link-button").html("Back to login options")),
        window.location.pathname.startsWith("/users/authenticate_email") && $(".existing-user .click-here-text").length
    ) {
        var t = $(".existing-user .click-here-text").attr("href");
        $(".existing-user .inuse-message").html("Welcome"), $(".existing-user .user-message").html('As a registered student at the University of Salford, we have already pre-registered you on this website. To access your account, you need to login using the "Salford Student" option on the login page, which will let you login using your Blackboard username and password. Alternatively, if you click the link below we will send you an activation email which will allow you to use a guest login.'); var n = $("<div>");
        $("<a>", { text: "Resend activation email", href: t, "class": "more" }).appendTo(n), n.appendTo(".existing-user .user-message")
    }

    // Helpful information about groups and events registrations
    if (window.location.pathname.startsWith("/events") && window.location.pathname.length <= 8,
        window.location.pathname.startsWith("/events") && window.location.pathname.length > 8 && $(".galleryIcon img").attr("src", $(".galleryIcon img").attr("src").replace("/medium/", "/original/")),
        window.location.pathname.startsWith("/groups") && window.location.pathname.includes("/events/") && $(".threecol .title h1").html($("#uc-events-details-page .contentBoxes").first().find("h2").html()),
        window.location.pathname.startsWith("/groups") && window.location.pathname.length <= 8 && (
            EnableAutoLoadMore("#uc-more-group-search", ".category-box-wrapper"),
            $(".club-navigation ul li").on("click", function () { $("#uc-more-group-search").first().attr("data-loadmore", 0) }),
            $(".group-types-wrapper ul li").on("click", function () { $("#uc-more-group-search").first().attr("data-loadmore", 0) })
        ),
        window.location.pathname.endsWith("/join") || window.location.pathname.endsWith("join/")
    ) {
        1 == $(".memberShipType").length && $(".memberShipType").trigger("click"); var a = new Date,
            i = a.getFullYear();
        a.getMonth() > 5 && i++; var o = $("<div/>", { id: "expiry-info" }),
            s = $("<p/>");
        s.html("All memberships are valid until 31<sup>st</sup> July " + i + ", unless otherwise stated"), o = o.append(s), $("#memberShipDisplay").append(o); var r = $("<div/>", { id: "membership-options-info" }),
            l = $("<h4/>", { text: "Not seeing the membership options you expected?" }),
            c = $("<p/>", { text: "Some memberships are restricted to current students, or existing members of the group. If you are a current student make sure that you are logged in using your student account to see the full range of memberships available to you." });
        r = r.append(l), r = r.append(c), $("#memberShipDisplay").append(r)
    }

    // Loads Disqus Code for comments
    if (window.location.pathname.startsWith("/users/customer_registration") && ($(".uc-signed_inuser_msg").html("<h3>Have a University login / already registered? Sign in below:</h3>"),
        $(".uc-unsigned_inuser_msg").html("<h3>Checkout as a guest:</h3>")),
        (window.location.pathname.endsWith("/articles") || window.location.pathname.endsWith("/articles/")) && (
            $(".uc-articles-heading h1").html("Blog"),
            document.title = "Blog @ University of Salford Students' Union", $(".uc-articles-right-panel-banner").remove(),
            $(".articles-full-banner-advert").remove(), $(".uc-search-articles-filters h3").html("Filter by Category"),
            $(".uc-filter-block h3").die("click"),
            EnableAutoLoadMore("#load_more_article", ".uc-articles-listing")
        ),
        window.location.pathname.includes("/articles/") && !window.location.pathname.endsWith("/articles") && !window.location.pathname.endsWith("/articles/")
    ) {
        $("#news-first-advert").html($(".more-article-block").first().html()), $(".more-article-block").remove(); var d = document.createElement("script");
        d.src = "//salfordsu.disqus.com/embed.js", d.setAttribute("data-timestamp", +new Date), (document.head || document.body).appendChild(d)
    }


    // Adds helpful text to the elections module
    if ("/evoting_election_votings" == window.location.pathname || "/evoting_election_votings/" == window.location.pathname) {
        var h = $("<div>", { id: "election-info-notice" }),
            u = $("<h4>", { text: "Expecting to see an election?" }),
            p = $("<p>");
        p.html("You must be a current student at the University of Salford, and logged in with a student account, to see any elections that are taking place. If you are logged in with a guest account, you need to login using your University student account to continue."); var m = $("<p>", { text: 'If you are logged in with a student account, and are a current student, please e-mail <a href="mailto:elections-ussu@salford.ac.uk">elections-ussu@salford.ac.uk</a> with your student ID number so that we can check your eligibility to vote.' }),
            h = h.append(u),
            h = h.append(p),
            h = h.append(m);
        $("#uc-election-listing:contains('There are no open or pending elections')").append(h)
    }


    if (window.location.pathname.startsWith("/evoting_election_votings/select_choices")) {
        var h = $("<div/>", { id: "election-info-notice" }),
            u = $("<h4/>");
        u.html("Remember - each vote is <i>your</i> vote"); var g = $("<p/>");
        g.html('You are free to vote for anyone you want, and you can change your vote at any time. If someone is pressuring or harassing you to vote for them, or is voting on your behalf, please let us know by filling in <a href="/elections/2019/rulesandguidance">our complaints form</a>.'); var h = h.append(u),
            h = h.append(g);
        $(".uc-election-name-time").first().after(h), $(".edit_evoting_standing").on("submit", function (e) {
            var t = 0; if ($(".uc-candidates-preferences select").each(function (e) { $(this).val() >= 0 && t++ }), 1 == t && !allowSingleCandidate) {
                e.preventDefault(); var n = $("<div/>", { id: "election-overlay" }),
                    a = $("<div/>", { id: "election-overlay-window" }),
                    i = $("<h2/>", { text: "Are you sure you want to vote for just one preference?" }),
                    o = $("<p/>", { text: "All votes are transferable, which means if you choose more than one preference, you increase the chances of someone you like being elected." }),
                    s = $("<p/>"),
                    r = $("<a/>", { text: "Choose more candidates", "class": "more", href: "#" }),
                    r = r.on("click", function (e) { $(".vote-now-button").prop("disabled", !1), $(".vote-now-button").val("Vote now"), $("#election-overlay").remove() }),
                    l = $("<p/>"),
                    c = $("<a/>", { href: "#" });
                c.html('<i class="fa fa-arrow-circle-right">&nbsp;</i>Vote for just one candidate'); var c = c.on("click", function (e) { allowSingleCandidate = !0, $(".edit_evoting_standing").trigger("submit") }),
                    a = a.append(i),
                    a = a.append(o),
                    s = s.append(r),
                    a = a.append(s),
                    l = l.append(c),
                    a = a.append(l),
                    n = n.append(a);
                $("body").append(n)
            }
        })
    }

    window.location.pathname.startsWith("/thestudentvoice") && window.location.pathname.length <= 17 && ($(".uc-heading-title span").html("Big Ideas"),
        document.title = "Big Ideas @ University of Salford Student's Union", $(".uc-sv-post-idea-petition a").html("Post An Idea"),
        EnableAutoLoadMore("#load_more_sv", ".uc-sv-left-panel-wrapper"),
        $("#uc-sv-navigation li a").on("click", function () { $("#load_more_sv").first().attr("data-loadmore", 0) })),
        $(".image-slideshow").each(function (e) {
            var t = this,
                n = $(t).attr("data-speed");
            n = "undefined" == typeof n || 0 == n ? 5 : parseInt(n), $(t).children("img:first").addClass("active-image"),
                setInterval(function () { CycleImage(t) }, 1000 * n)
        })
}), $("html, body").on("scroll mousedown DOMMouseScroll mousewheel keyup touchstart", function () { $("html, body").stop() }), $(window).on("scroll", function () { !navFixed && $(window).scrollTop() >= $(".header").eq(0).offset().top + $(".header").eq(0).height() ? (navFixed = !0, $("body").addClass("fixed-nav")) : navFixed && $(window).scrollTop() < $(".header").eq(0).offset().top + $(".header").eq(0).height() && (navFixed = !1, $("body").removeClass("fixed-nav")) }), $(".image-slideshow").on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () { $(this).children(".previous-image").removeClass("previous-image") });