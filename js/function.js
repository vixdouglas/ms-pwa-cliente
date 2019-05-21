$(document).ready(function() {
  $(".animsition").animsition({
    inClass               :   'fade-in',
    outClass              :   'fade-out-down',
    inDuration            :    800,
    outDuration           :    800,
    linkElement           :   '.animsition-link',
    // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
    loading               :    true,
    loadingParentElement  :   'body',
    loadingClass          :   'animsition-loading',
    unSupportCss          : [ 'animation-duration',
                              '-webkit-animation-duration',
                              '-o-animation-duration'
                            ],
    
    overlay               :   false,    
    overlayClass          :   'animsition-overlay-slide',
    overlayParentElement  :   'body'
  });
});

