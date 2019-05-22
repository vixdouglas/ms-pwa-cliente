$(document).ready(function() {
    let direcao = window.location.pathname.replace("/ms-pwa-cliente", "") == '/' ? 'left' : 'right';
    console.log('Direção: '+direcao+' pat: '+window.location.pathname);
    $(".animsition").animsition({
        inClass               :   'fade-in-'+direcao,
        outClass              :   'fade-out-'+direcao,
        inDuration            :   800,
        outDuration           :   800,
        linkElement           :   'a:not([target="_blank"]):not([href^=#])',
        loading               :    true,
        loadingParentElement  :   'body',
        loadingClass          :   'animsition-loading',
        unSupportCss          :   ['animation-duration', '-webkit-animation-duration', '-o-animation-duration'],
        overlay               :   false,    
        overlayClass          :   'animsition-overlay-slide',
        overlayParentElement  :   'body'
    });
});