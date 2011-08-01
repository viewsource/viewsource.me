
window.onload = function() {
	var $read = $('#read'),
	$readHeader = $('#read-header'),
	$readFooter = $('#read-footer'),
	$editor = $('#editor');
	
	$editor.height( $read.height() - $readHeader.height() - $readFooter.height() );
	
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/twilight");
    
    var JavaScriptMode = require("ace/mode/javascript").Mode;
    editor.getSession().setMode(new JavaScriptMode());

	// editor.setHighlightActiveLine(false);
	// editor.setShowPrintMargin(false);
	// editor.renderer.setHScrollBarAlwaysVisible(true);
	// editor.setReadOnly(true);
};

$(function() {
	log( $().jquery ); 
});
