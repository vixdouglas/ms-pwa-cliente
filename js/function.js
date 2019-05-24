let pathname = window.location.pathname.replace("/ms-pwa-cliente", "");
$(document).ready(function() {
    let direcao = (pathname == '/' ? 'left' : 'right');
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

    //VOltar
    if(pathname != '/'){
        let ts_x;
        let ts_y;
        document.addEventListener('touchstart', function(e) {
            e.preventDefault();
            let touch = e.changedTouches[0];
            ts_x = touch.pageX;
            ts_y = touch.pageY;
        }, false);

        document.addEventListener('touchmove', function(e){
            e.preventDefault();
            let touch = e.changedTouches[0];
            td_x = touch.pageX - ts_x; // deslocamento na horizontal
            td_y = touch.pageY - ts_y; // deslocamento na vertical
            // O movimento principal foi vertical ou horizontal?
            if( Math.abs( td_x ) > Math.abs( td_y ) ) {
                // é horizontal
                if( td_x < 0 ) {
                    // é para esquerda
                } else {
                    //DIreita
                    let deslocamento = td_x+td_y;//Distancia de deslocamento
                    if(deslocamento > 100){
                        $('a[href="./"]').click();
                    }
                }
            } else {
                // é vertical
                if( td_y < 0 ) {
                    // cima
                } else {
                    // baixo
                }
            }
        }, false);
    }
});