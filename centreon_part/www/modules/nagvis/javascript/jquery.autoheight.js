var $j = jQuery.noConflict();

function updateIFrameSize()
{
    //Fix width
    var divs = $j("iframe#frmnagvis").contents().find('div#sidebar');
    if (divs.length > 0) {
    	var width1 = $j("iframe#frmnagvis").contents().find('img#backgroundImage').width();
    	var width2 = $j("iframe#frmnagvis").contents().find('table.infobox').width();
    	var width = Math.max(width1, width2);
    	if (width) {	
    		width = width - 200;
    		$j("iframe#frmnagvis").contents().find('div#map').width(width + 'px');
    	}
    }
    
    // Fix height
    var h1 = $j("iframe#frmnagvis").contents().find('img#backgroundImage').height();
    var h2 = $j("iframe#frmnagvis").contents().find('div#overview').height();
    var h3 = $j("iframe#frmnagvis").contents().find('div#login').height();
    new_height = Math.max(h1, h2, h3);
    $j("iframe#frmnagvis").contents().find('#map div.icon').each( function() {
    	var height = this.style.top;
    	if (height != '') {
    		height = parseInt(height.substring(0,height.length - 2));
    		if (height > new_height) {
    			new_height = height;
    		}
    	}
        $j("iframe#frmnagvis").attr('scrolling', 'auto');
    });
    
    new_height = new_height + 25 + 31 + 40;
    $j("iframe#frmnagvis").css('height', new_height + 'px');
    // Fix sidebar height
    new_height = new_height - 80;
    $j("iframe#frmnagvis").contents().find('div#sidebar').css('min-height', new_height + 'px');
    $j("iframe#frmnagvis").contents().find('div#sidebar').css('height', new_height + 'px');
}
setInterval(updateIFrameSize,500);


