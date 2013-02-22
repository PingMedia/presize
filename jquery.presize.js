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
jQuery.presize_base = false;
jQuery.presize_options = "";

(function ($) {
    $.fn.extend({
        //plugin name - presize
        presize: function (options) {
        	if($.presize_base){
        		var width = $(window).width();
				var height = $(window).height();
				var item_width = $($.presize_base).width();
				var item_height = $($.presize_base).height();
				var item_max_width = parseInt($($.presize_base).css("max-width"));
				var item_max_height = parseInt($($.presize_base).css("max-height"));
				
				if(width>item_max_width){
					var percent = 1;
				} else if(item_width<item_max_width){
					var percent = item_width / item_max_width;
				} else {
					var percent = item_height / item_max_height;
				}
	        } else {
	        	var percent = 1;
	        }
        	
            var defaults = {
                percent: percent,
                check: "width,height,top,left,bottom,right,margin-left,margin-top",
                add: "",
                exc: ""
            };

            var options = $.extend(defaults, options);
            options = $.extend($.presize_options, options);
            
            options.check = options.check + "," + options.add;
            var selector = $(this).selector;

            if (typeof $.presize_items == "undefined") {
                $.presize_items = [];
            }

            if (typeof $.presize_items[selector] == "undefined") {
                $.presize_items[selector] = new Array;
            }

            return this.each(function (index, value) {
                var o = options;
                var obj = $(this);
                var exception = o.exc.split(",");
                var checks = o.check.split(",");
                
                if (typeof $.presize_items[selector][index] == "undefined") {
                    $.presize_items[selector][index] = new Array;
                    for (c in checks) {
                        var css = checks[c];
                        var prop = parseInt(obj.css(css));
                        if($.inArray(css,exception)){
                            if (prop) {
                                $.presize_items[selector][index][css] = prop;
                            }
                        }
                    }
                } else {
                    var element = $.presize_items[selector][index];  
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