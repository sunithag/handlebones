/*
 * Author: Sunitha Gourishetty
 * Date: 8/10/2012
 * Description: slides the items horizontally
 *
*/

(function ($) {
    $.fn.wmCarousel  = function (options) {
        var defaults = {
            duration: 200
        };
        var options = $.extend(defaults, options);
        return this.each(function () {
            var divobj = $(this), vptItms = 0,loadImgs = 1, totalItms, curpos = 0, liwidth, divwidth, prevobj, nextobj, imgs;
            totalItms = $('> .vpt > ul > li', this).length;
            liwidth = $('> .vpt > ul > li:first', divobj).outerWidth(true);
            divwidth = $(divobj).width();
            vptItms = Math.floor((divwidth / liwidth));
    	    prevobj = $('> .previous', divobj);
    	    nextobj = $('> .next', divobj);   
            if (totalItms <= vptItms) {
            	nextobj.css('display', 'none');
            } 
 
            nextobj.click(function () {
            	//Lazy load the images on next arrow click
            	//divobj.loadDeferredImages();
            	
            	if ((curpos + (vptItms * 2)) < totalItms) { 
                    	curpos += vptItms;
                    	prevobj.css('display', 'block');	
                    	$('> .vpt > ul > li:nth-child(' + (curpos+vptItms) +')', divobj).css('border', 'none');
                } else if ((curpos + (vptItms * 2)) > totalItms - 1) {
                    if ((curpos + (vptItms * 2)) == totalItms) {
                    	prevobj.css('display', 'block');	
                    }
                    curpos = totalItms - vptItms;
                    nextobj.css('display', 'none');	
                	$('> .vpt > ul > li:nth-child(' + (totalItms) +')', divobj).css('border', 'none');
                }
                $('> .vpt > ul', divobj).stop();
                $('> .vpt > ul', divobj).animate({
                    'marginLeft': -(curpos * liwidth)
                }, options.duration)
            });
            
            prevobj.click(function () {
                if ((curpos - vptItms) > 0) {
                    curpos -= vptItms;
                    nextobj.css('display', 'block');	    
                } else if ((curpos - (vptItms * 2)) <= 0) {
                	if ((curpos - (vptItms * 2)) < 0 && totalItms > vptItms) {
                		 nextobj.css('display', 'block');
                	}
                    curpos = 0;
                    prevobj.css('display', 'none');	    
                }
                $('> .vpt > ul', divobj).stop();
                $('> .vpt > ul', divobj).animate({
                    'marginLeft': -(curpos * liwidth)
                }, options.duration)
            });

        })
    }
})(jQuery);