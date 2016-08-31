$(function(){
	$('#loading').hide();
});//加载完消失


//产生一个随机数
function getRandom(n){
        return Math.floor(Math.random()*n+1)
};

//转动的函数
function turn(n){
	$deg=743+(n*45);
	$('#tuntable_img').css({
		"webkitTransform":"rotateZ("+$deg+"deg)",
		"transform":"rotateZ("+$deg+"deg)"
	})
}

//设置turntable的高度
function turntable_height(){
	var $th=Math.floor($("#tuntable").width());
	$("#tuntable").css("width",$th);
	$("#tuntable").css("height",$th);
}turntable_height();


var $name=["恭喜您获得LANDBASE香橙福袋爱海盐味巧克力+香橙手机壳（6/6plus"
,"恭喜您获得Fresh馥蕾诗清酒微醺沐浴露200ml"
,"恭喜您获得欧舒丹经典蜡菊活颜组合洁面泡沫50ml + 保湿水30ml"
,"恭喜您获得12 Glamour Evil Eyewear设计师眼镜"
,"恭喜您获得LANCASTER兰嘉丝汀沁爽运动身体防晒喷雾 SPF30"
,"恭喜您获得价值98元ELLE数字版免费订阅一年"
,"恭喜您获得Bobbie Brown粉饼"
,"恭喜您获得Fitbit Flex 智能手环"
];//产生名字数组
var $img=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.png","8.jpg"];//产生图片数组

var bol=true;
$(".treaty label").click(function(){
	if(bol){
		$(".treaty label img").hide();
		bol=false;
	}else{
		$(".treaty label img").show();
		bol=true;
	}
});

var timer=null;
var num=120;
$("#send").click(function(){
	console.log(num)
	if(num==120){
	clearInterval(timer);
	timer=setInterval(function(){
		
		$("#send").text(num+"s");
		num--;
		if(num<=0){
			clearInterval(timer);
			$("#send").text("发送验证码");
			num=120
		}
	},1000)
	}
	
})



var click_num=0;//点击次数（全局变量）
var $num=null;//转到的数字（全局变量）
//点击开始按钮
//$('#p2_click').click(function(){
//	if(click_num<=0){
//		$num=getRandom(8);
//		turn($num);
//		click_num++;
//		$('.p3_inner').html("<p>"+$name[$num-1]+"</p><img id='p3_img' src='img/"+$img[$num-1]+"'/><div id='con'>请填写个人资料，待提交成功后，我们会尽快将产品寄出。</div><ul><li><span id='p3_font_1'>姓名</span><input type='text' name='name' id='name'></li><li><span id='p3_font_2'>电话</span><input type='text' name='phone' id='phone'></li><li><span id='p3_font_3'>地址</span><input type='text' name='address' id='address'></li></ul><a href='p5.php'><span id='button3'></span></a>");
//		setTimeout(function(){
//			$('.wrap2').hide();
//		},5000)//显示P3
//	}
//});






