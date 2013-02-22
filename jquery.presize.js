/* ==========================================================
 * jquery.presize.js v1
 * http://pingmedia.github.com/presize/
 * ==========================================================
 * Copyright Csóka Péter Endre | P!ng Media.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

jQuery.presize_percent = 1;
(function ($) {
    $.fn.extend({
        //plugin name - presize
        presize: function (options) {
            var defaults = {
                percent: $.presize_percent,
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