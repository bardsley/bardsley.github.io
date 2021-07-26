/* Configuration block */
const triggerMenuShrinkAt = '1200' //px that the menu will remove words at e.g. Advice & Volunteering become Advice

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

const shrinkMenu = function() {
    document.getElementById('top-navigation').dataset.size = 'shrunk';
    shrinkMenuItem('top-nav-level-one-student-voice',1);
    shrinkMenuItem('top-nav-level-one-advice-support',0);
    shrinkMenuItem('top-nav-level-one-bar-cafe-offers',0);
}

const growMenu = function() {
    document.getElementById('top-navigation').dataset.size = 'grown';
    growMenuItem('top-nav-level-one-student-voice');
    growMenuItem('top-nav-level-one-advice-support');
    growMenuItem('top-nav-level-one-bar-cafe-offers');
}

// /* This is used to create respectful version, it will only be called timeout ms after LAST enaction, greate for resize or other events that fire a lot */
const debounce = function(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const checkMenu = debounce(function() {
    var menu = document.getElementById('top-navigation');
    if(menu.dataset.size != 'shrunk' && menu.offsetWidth < triggerMenuShrinkAt) { shrinkMenu(); }
    if(menu.dataset.size == 'shrunk' && menu.offsetWidth >= triggerMenuShrinkAt) { growMenu(); }
},250)

/* Place in  pager loaded area*/
checkMenu();
window.addEventListener('resize', checkMenu);
