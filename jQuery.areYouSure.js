/**
 * areYouSure v1.2.2
 * https://demo.idered.pl/jQuery.areYouSure
 *
 * Copyright 2012, Kasper Mikiewicz
 * Released under MIT license.
 * Date 2012-09-08
 */
(function($) {

    $.fn.areYouSure = function(settings) {

        var defaultSettings = {
            message : 'Are you sure?', // message displayed as confirmation
            active  : '' // class added for active button
        };

        settings = $.extend({}, defaultSettings, settings || {});

        return this.each(function() {

            var $this  = $(this),
                method = $this.is('input, button') ? 'val' : 'text',
                custom = {
                    message : $this.data('message') || settings.message,
                    active  : $this.data('active')  || settings.active,
                    value   : $this[method]()
                };

            $this.one('click', function(event) {
                event.preventDefault();
                $this[method](custom.message).addClass(custom.active).one('click', function() {
                    $this[method](custom.value).removeClass(custom.active);
                });
            });

        });

    };

})(jQuery);