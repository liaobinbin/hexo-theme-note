/**
 * Created by bob on 26/05/2017.
 */
$(document).ready(function(){
    

var windowW = ($(window).width());
var windowH = ($(window).height());
var page_loading_mainTop = (windowH - 80) / 2;
var page_loading_mainLeft = (windowW - 80) / 2;
$(".page-loading-main").css({
    "top":page_loading_mainTop,
    "left":page_loading_mainLeft
})
$(".page-loading-one").css("background-color","#5998e6");
$(".page-loading-two").css("background-color","#b3f788");

//淡出效果
window.onload = function(){
    $('.page-loading').fadeOut();
};

hljs.initHighlightingOnLoad();
hljs.initLineNumbersOnLoad();
Waves.displayEffect();
otherFunction();
$(document).pjax('a', '#pjax-container', {fragment:'#pjax-container', timeout:8000});
$(document).on('pjax:send', function() {
    $('.page-loading').fadeIn()
});
$(document).on('pjax:complete', function() {
    $('.page-loading').fadeOut();
    Waves.displayEffect();
    $('pre code').each(function(i, block){
        hljs.highlightBlock(block);
    });
    otherFunction();
    $('code.hljs').each(function(i, block){
        hljs.lineNumbersBlock(block);
    });
});
})
