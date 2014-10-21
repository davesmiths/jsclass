$(function() {
    'use strict';
	$('[data-class]').each(function() {
		var $this = $(this);
		$this.addClass($this.data('class'));
	});
});
