var Swiper = new Swiper('.swiper-container',{
	// paginationClickable:true,
	pagination:".swiper-pagination",
	paginationType:"custom",
	autoplay: 2000,
	autoplayDisableOnInteraction : false,
	paginationCustomRender:function(swiper,current,total) {
		
		var lis = document.querySelectorAll(".jd_point  li");
		for(var i = 0; i < lis.length; i++){
			lis[i].className = '';
		}
		lis[current - 1].className = "current";
	},
	spaceBetween:0,
	loop : true
});
var time;
function getTimes() {
	var startTime = new Date();
	var endTime = new Date(2017,6,5,21,00,00);
	var t = endTime.getTime()-startTime.getTime();
	var d = Math.floor(t/1000/60/60/24);
	var h =Math.floor(t/1000/60/60%24)+d*24;
    var m =Math.floor(t/1000/60%60);
    var s =Math.floor(t/1000%60);
   
    $($(".jd_news_h")[0]).text(parseInt(h/10));
    $($(".jd_news_h")[1]).text(h%10);

    $($(".jd_news_m")[0]).text(parseInt(m/10));
    $($(".jd_news_m")[1]).text(m%10);
    
    $($(".jd_news_s")[0]).text(parseInt(s/10));
    $($(".jd_news_s")[1]).text(s%10);
   
    // $("jd_Point1").toggleClass("jd_Point1")
}; 
time = setInterval(getTimes,1000);
