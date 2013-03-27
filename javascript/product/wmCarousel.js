/*
 * Author: Sunitha Gourishetty
 * Date: 8/10/2012
 * Description: slides the items horizontally
 *
*/

(function ($) {
    $.fn.wmCarousel  = function (options) {
        var defaults = {
            duration: 200,
            position:false
        };
        var options = $.extend(defaults, options);
        return this.each(function () {
            var divobj = $(this), vptItms = 0,loadImgs = 1, totalItms, curpos = 0, liwidth, divwidth, prevobj, nextobj, imgs, position,navigation,posWidth;
            totalItms = $('> .vpt > ul > li', this).length;
            liwidth = $('> .vpt > ul > li:first', divobj).outerWidth(true);
            divwidth = $(divobj).width();
           // vptItms = Math.floor((divwidth / liwidth));
            vptItms = 1;
    	    prevobj = $('> .previous', divobj);
    	    nextobj = $('> .next', divobj);
            navigation = $('.navigation', divobj);
            position = $('.position', divobj);
            if (totalItms <= vptItms) {
            	//nextobj.css('display', 'none');
                nextobj.addClass('nextdisable');
            }
           //change this to a better way later
            if(position != null){
                posWidth = Math.floor(21 * totalItms - 1) - 7;
                $('.position > i', divobj).css('width' , posWidth);
                $('.position > i > i', divobj).css("margin-right", (21 * curpos) + posWidth);
            }
            if(navigation != null){
                $('.total', navigation).text(totalItms);
            }

 
            nextobj.click(function () {
            	//Lazy load the images on next arrow click
            	//divobj.loadDeferredImages();
            	
            	if ((curpos + (vptItms * 2)) < totalItms) { 
                    	curpos += vptItms;
                    	//prevobj.css('display', 'block');
                        prevobj.removeClass('prevdisable');

                    	$('> .vpt > ul > li:nth-child(' + (curpos+vptItms) +')', divobj).css('border', 'none');
                } else if ((curpos + (vptItms * 2)) > totalItms - 1) {
                    if ((curpos + (vptItms * 2)) == totalItms) {
                    	//prevobj.css('display', 'block');
                        prevobj.removeClass('prevdisable');

                    }
                    curpos = totalItms - vptItms;

                    //nextobj.css('display', 'none');
                    nextobj.addClass('nextdisable');
                	$('> .vpt > ul > li:nth-child(' + (totalItms) +')', divobj).css('border', 'none');
                }
                //$('.position > i > i').width(Math.floor(  ( 100/(totalItms)) * (curpos +1) ) + '%');

                $('.position > i > i', divobj).css("margin-left", 21 * curpos);
                if(navigation != null){
                    $('.current', navigation).text(curpos+1);
                }

                $('> .vpt > ul', divobj).stop();
                $('> .vpt > ul', divobj).animate({
                    'marginLeft': -(curpos * liwidth)
                }, options.duration)
            });
            
            prevobj.click(function () {
                if ((curpos - vptItms) > 0) {
                    curpos -= vptItms;
                    //nextobj.css('display', 'block');
                    nextobj.removeClass('nextdisable');
                } else if ((curpos - (vptItms * 2)) <= 0) {
                	if ((curpos - (vptItms * 2)) < 0 && totalItms > vptItms) {
                		 //nextobj.css('display', 'block');
                        nextobj.removeClass('nextdisable');
                	}
                    curpos = 0;
                    //prevobj.css('display', 'none');
                    prevobj.addClass('prevdisable');
                }
                //$('.position > i > i').width(Math.floor(  ( 100/(totalItms)) * (curpos +1) ) + '%');
                $('.position > i > i', divobj).css("margin-left", 21 * curpos);
                if(navigation != null){
                    $('.current', navigation).text(curpos+1);
                }
                $('> .vpt > ul', divobj).stop();
                $('> .vpt > ul', divobj).animate({
                    'marginLeft': -(curpos * liwidth)
                }, options.duration)
            });

        })
    }
})(jQuery);