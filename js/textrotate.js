$(document).ready(function(){

    /* hero slide-1 */
    $textcd2 = $('.span-rotate:first');
    function movenext1() {
        if($textcd2.next().length != 0) {
        $textcd2.removeClass('span-class');
        $textcd2 = $textcd2.next();
        $textcd2.addClass('span-class');
    }
    else{
        $textcd2.removeClass('span-class');
        $textcd2 = $('.span-rotate:first');
        $textcd2.addClass('span-class');
    }
    }

    setInterval(function(){
        movenext1();
    },4000);

    /* hero slide-2 */
    $text1cd2 = $('.span-rotate-1:first');
    function move1next1() {
        if($text1cd2.next().length != 0) {
        $text1cd2.removeClass('span-class-1');
        $text1cd2 = $text1cd2.next();
        $text1cd2.addClass('span-class-1');
    }
    else{
    $text1cd2.removeClass('span-class-1');
    $text1cd2 = $('.span-rotate-1:first');
    $text1cd2.addClass('span-class-1');
    }
    }   

    setInterval(function(){
        move1next1();
    },4000);

    /* hero slide-3 */
    $text2cd2 = $('.span-rotate-2:first');
    function move2next1() {
        if($text2cd2.next().length != 0) {
        $text2cd2.removeClass('span-class-2');
        $text2cd2 = $text2cd2.next();
        $text2cd2.addClass('span-class-2');
    }
    else{
    $text2cd2.removeClass('span-class-2');
    $text2cd2 = $('.span-rotate-2:first');
    $text2cd2.addClass('span-class-2');
    }
    }   

    setInterval(function(){
        move2next1();
    },4000);                
});