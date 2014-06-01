/*!
 * =====================================================
 * Foxui v0.1.0 (https://github.com/foxui/fox-icons)
 * Copyright 2014 fex-team
 * Licensed under BSD (https://github.com/foxui/fox-icons/blob/master/LICENSE)
 *
 * v0.1.0 designed by @fex-team.
 * =====================================================
 */
(function(env){
    var fox = env.fox;
    var icons = ['icon-back', 'icon-bars', 'icon-caret', 'icon-check', 'icon-close', 'icon-code', 'icon-compose', 'icon-download', 'icon-edit', 'icon-forward', 'icon-gear', 'icon-home', 'icon-info', 'icon-list', 'icon-more-vertical', 'icon-more', 'icon-pages', 'icon-pause', 'icon-person', 'icon-play', 'icon-plus', 'icon-refresh', 'icon-search', 'icon-share', 'icon-sound', 'icon-sound2', 'icon-sound3', 'icon-sound4', 'icon-star-filled', 'icon-star', 'icon-stop', 'icon-trash', 'icon-up-nav', 'icon-up', 'icon-right-nav', 'icon-right', 'icon-down-nav', 'icon-down', 'icon-left-nav', 'icon-left'];

    icons.forEach(function(icon) {
        fox('w-' + icon, {
            lifecycle: {
                created: function() {
                    this.className = 'icon ' + icon;
                }
            }
        });
    });
})(this);