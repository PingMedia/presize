(function ($) {
    $.fn.extend({
        //plugin name - presize
        presize: function (options) {
            var defaults = {
                percent: 1,
                check: "width,height,top,left,bottom,right,margin-left,margin-top",
                add: ""
            };

            var options = $.extend(defaults, options);
            options.check = options.check + "," + options.add;
            var selector = $(this).selector;

            if (typeof window.items == "undefined") {
                window.items = [];
            }

            if (typeof window.items[selector] == "undefined") {
                window.items[selector] = new Array;
            }

            return this.each(function (index, value) {
                var o = options;
                var obj = $(this);

                if (typeof window.items[selector][index] == "undefined") {
                    window.items[selector][index] = new Array;
                    var checks = o.check.split(",");
                    for (c in checks) {
                        var css = checks[c];
                        var prop = parseInt(obj.css(css));

                        if (prop) {
                            window.items[selector][index][css] = prop;
                        }

                    }
                } else {
                    var element = window.items[selector][index];  
                    for (i in element) {
                        var original = element[i];
                        var percent = original * o.percent;
                        obj.css(i, percent);
                    }
                }
            });
        }
    });
})(jQuery);