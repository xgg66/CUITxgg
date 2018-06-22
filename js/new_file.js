//$(document().ready(){});等文档完成后再执行JS代码和下面功能一样
$(function() {
	//	获取屏幕的宽高
	var nowpage = 0;
	var width = window.innerWidth;
	var height = window.innerHeight;
	$(".content").width(width);
	$(".content").height(4 * height);
	$(".page").width(width);
	$(".page").height(height);
	//不是JQuery原生自带的，而是引入的插件
	//手指触屏滑动的事件
	$(".content").swipe({
		swipe: function(event, direction, distance, duration, fingerCount) {
//			滑动分页功能
			if(direction == "up") {
				nowpage++;
				if(nowpage > 3) {
					nowpage = 3;
				}
			}
			if(direction == "down") {
				nowpage--;
				if(nowpage < 0) {
					nowpage = 0;
				}
			}
			$(".content").animate({
				top: -nowpage * 100 + "%"
			}, {
				duration: 400,complete:function(){
					if (nowpage == 1){
						$(".page2-farm").fadeIn(1200,function(){
							$(".page2-it").fadeIn(1000)
						})
					}
					if (nowpage == 2){
						$(".page3-earlyTitle").fadeIn(500);
						$(".page3-lastBusTitle").fadeIn(800);
						$(".page3-bus").animate({left:"-100%"},{duration:2000})
						$(".page3-lastBusAvatar").animate({left:"20%"},{duration:3500,complete:function(){
							$(".page3-earlyTitle").fadeOut("slow");
							$(".page3-lastBusTitle").fadeOut("slow");
							$(".page3-bus").fadeOut("slow");
							$(".page3-lastBusAvatar").fadeOut("slow");
							$(".page3-lastBusStation").fadeOut(950,function(){
								$(".page3-myTeamWall").fadeIn("slow");
								$(".page3-myTeamAvatar").fadeIn("slow",function(){
									$(".page3-myTeamSpace").animate({width:"40%"},{duration:400,complete:function(){
										$(".page3-myTeamWhere").animate({width:"40%"},{duration:400})
									}})
								});
							});
						}})
					}
				}
			})
		}
	});
	$(".page1-building").fadeIn(1200, function() {
		$(".page1-flight").animate({
			width: "80%"
		}, {
			duration: 1200
		})
	});
	$(".page4-lightOff").click(function(){
		$(".page4-lightOff").fadeOut();
		$(".page4-lightOnBg").fadeIn();
		$(".page4-lightOn").fadeIn();
		$(".page4-weKnowYou").fadeIn();
	})
$(".musicBtn").click(function(){
	var music=$("#music")[0];
	if(music.paused){
		music.paly();
		$("this").attr("src","img/musicBtn.png")

	}
	else{
		music.pause();
		$("this").attr("src","img/musicBtnOff.png")
	}
})
	
})
