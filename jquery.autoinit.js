/**
 * jQuery Automatic Plugin Initialization
 * @author  Dominic Barnes
 * @version 0.1
 */
(function ($) {
	// used in the replace method to convert autoPlugin -> plugin
	function replaceAuto() {
		return arguments[1].toLowerCase();
	}

	// wrapper for console.log that includes the plugin name
	function log() {
		if ($.autoInit.debug && window.console) {
			console.log(["autoInit"].concat(Array.prototype.slice.call(arguments)));
		}
	}

	/**
	 * Take a jQuery collection, and initialize it!
	 */
	$.fn.autoInit = function () {
		// make chainable
		return this.each(function () {
			var plugin, data = $(this).data();

			// check each property of the data object
			for (var key in data) {
				// if it matches this format, then we know to get to work
				if (key.match(/^auto[A-Z]/)) {
					// extract the plugin name (autoPlugin -> plugin)
					plugin = key.replace(/^auto([A-Z])/, replaceAuto);

					// check for this plugin's existence
					if (plugin in $.fn) {
						// cache the associated options
						var options = data[key];

						// if it's a string, then it could not be parsed as JSON (invalid syntax most likely)
						if (typeof options === "string") {
							log("options cannot be a string (check your JSON syntax)", { plugin: plugin, options: options, element: this });
							continue;
						}

						// if you want to pass no options, just use data-auto-plugin="true"
						$(this)[plugin](options === true ? null : options);
					}
				}
			}
		});
	};

	// for when you want to run on the entire DOM (or a specific element/selector)
	$.autoInit = function (elm) {
		return $(elm || "*").autoInit();
	};

	// there's no configuration yet, only debug mode as of now
	$.autoInit.debug = true;
})(jQuery);
