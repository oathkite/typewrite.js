(function($) {
	$.fn.type = function(options) {
		options = $.extend({
			delay: 50
		}, options);
		return this.each(function() {
			var str = $(this).html();
			var self = $(this);
			
			self.html('');
			
			str = str.split('');
			
			$.each(str, function(i) {
				
				setTimeout($.proxy(function() {
					if (this == '\n') {
						self.append('<br>');
					} else {
						self.append(this);
					}
				}, this), options.delay * i);
				
			});
		});
	}
})(jQuery);