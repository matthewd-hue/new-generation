var ajaxRevslider;

jQuery(document).ready(function () {
    // CUSTOM AJAX CONTENT LOADING FUNCTION
    ajaxRevslider = function (obj) {


        var content = "";

        data = {};

        data.action = 'revslider_ajax_call_front';
        data.client_action = 'get_slider_html';
        data.token = 'bd501bd4c5';
        data.type = obj.type;
        data.id = obj.id;
        data.aspectratio = obj.aspectratio;



        // FIRST RETURN THE CONTENT WHEN IT IS LOADED !!
        return content;
    };

    // CUSTOM AJAX FUNCTION TO REMOVE THE SLIDER
    var ajaxRemoveRevslider = function (obj) {
        return jQuery(obj.selector + " .rev_slider").revkill();
    };

    // EXTEND THE AJAX CONTENT LOADING TYPES WITH TYPE AND FUNCTION
    var extendessential = setInterval(function () {
        if (jQuery.fn.tpessential != undefined) {
            clearInterval(extendessential);
            if (typeof (jQuery.fn.tpessential.defaults) !== 'undefined') {
                jQuery.fn.tpessential.defaults.ajaxTypes.push({
                    type: "revslider",
                    func: ajaxRevslider,
                    killfunc: ajaxRemoveRevslider,
                    openAnimationSpeed: 0.3
                });

            }
        }
    }, 30);
});

function setREVStartSize(e) {
    try {
        e.c = jQuery(e.c);
        var i = jQuery(window).width(),
            t = 9999,
            r = 0,
            n = 0,
            l = 0,
            f = 0,
            s = 0,
            h = 0;
        if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function (e, f) {
                f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
            }), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e
            .gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e
            .sliderLayout) {
            var u = (e.c.width(), jQuery(window).height());
            if (void 0 != e.fullScreenOffsetContainer) {
                var c = e.fullScreenOffsetContainer.split(",");
                if (c) jQuery.each(c, function (e, i) {
                        u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
                    }), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset
                    .length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e
                    .fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
            }
            f = u
        } else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
        e.c.closest(".rev_slider_wrapper").css({
            height: f
        })
    } catch (d) {
        console.log("Failure at Presize of Slider:" + d)
    }
};