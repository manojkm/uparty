$(function() {
  // whenever we hover over a menu item that has a submenu
  $('li.parent').on('mouseover', function() {
    var $menuItem = $(this),
        $submenuWrapper = $('> .wrapper', $menuItem);
    
    // grab the menu item's position relative to its positioned parent
    var menuItemPos = $menuItem.position();
    
    // place the submenu in the correct position relevant to the menu item
    $submenuWrapper.css({
      top: menuItemPos.top,
      left: menuItemPos.left + Math.round($menuItem.outerWidth() * 0.75)
    });
  });
});