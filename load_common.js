$(function(){

	
	$(".Foot_Bottom").prepend('<span class="pc_banquan"> 地址 : 深圳市光明区新湖街道新羌社区瑞丰苑A座大诚地产105室&nbsp;&nbsp版权所有&nbsp;&nbsp;2020&nbsp;&nbsp;深圳市大诚投资发展有限公司 </span><span class="m_banquan">&nbsp;&nbsp;</span><span>&nbsp;&nbsp;<a href="http://www.beian.miit.gov.cn">粤ICP备15021121</a>&nbsp;&nbsp;技术支持：中物联通&nbsp;&nbsp;</span>&nbsp;&nbsp;')
	$("footer").prepend('<div class="m_Foot_bottom"><div class="m_FootBottom_WX"><div class="m_FootBottom_ClickItem"><i class="iconfont icon-weixin"></i><span>微信</span></div><div class="m_FootBottom_WX_Meng"><i class="iconfont icon-guanbi"></i><div><span>微信人工咨询</span><img src="./images/QRCode.jpg" alt=""></div></div></div><div><div class="m_FootBottom_ClickItem"><a href="WarehousingService.html"><i class="iconfont icon-chanpin"></i><span>产品</span></a></div></div><div><div class="m_FootBottom_ClickItem m_FootBottom_tel"><i class="iconfont icon-dianhua1"></i><span>电话</span></div></div></div>')
	$("img").attr("alt","商超配送 城市配送 超市物流配送 食品物流配送 啤酒饮料配送 门店连锁店配送 快消品配送 快消品商超配送 快消品城市配送 仓配一体化 电商交仓 日用品配送 仓储物流公司 超市百货配送 便利店配送 专业食品仓库 专业物流仓库")
	
	$(".Scroll_To_TOP").click(function(){

		var scrollTop = $(this).scrollTop();
		$('body,html').animate({ scrollTop: 0 }, 20);
	})

	$('.m_FootBottom_WX .m_FootBottom_ClickItem').click(function(){
		$('.m_FootBottom_WX_Meng').css('display','block');
	})

	$('.m_FootBottom_WX i.icon-guanbi').click(function(){
		$('.m_FootBottom_WX_Meng').css('display','none');

	})

	$('.m_FootBottom_tel').click(function(){

		window.location.href = 'tel://400-884-5500';
	})
})

function addHtml(bigImg,first,second,third,listData,titleText,titleEnglish,contentData,menuImg,currLocText){
	$(".container").append('' +
		'<div class="contain_top">' +
		    '<img src="' + bigImg + '" alt="">' +
		'</div>'+
		'<div class="contain_bottom">' +

		    '<div class="bottom_left">' +
		        '<div class="botLeft_position">' +
	                '<div class="curr_position">' +
	                    '<img src="images/about/home.png">' +
	                    '<span class="curr_text">' + currLocText + '</span>' +
	                '</div>' +
	                '<div class="about_kdy">' +
	                    '<div class="about_top">' +
	                        '<img src="' + menuImg +'">' +
	                    '</div>' +
	                '</div>' +
		            '<ul>' + listData + '</ul>' +

			        '<div class="botLeft_position_contact">' +
			            '<img src="images/about/tel.jpg">' +
			        '</div>' +
		        '</div>' +
		    '</div>' +

		    '<div class="bottom_right">' +
		        '<div class="content_head">' +
		            '<span class="curr_top_title">' + titleText + '</span><h4>' + titleEnglish + '</h4>' +
		        '</div>' +
		        '<div class="content"  id="content">' + contentData + '</div>' +
		    '</div>' +

		'</div>')
	var arr=window.location.href.split('/');

	$('.botLeft_position ul li').each(function(i){

		if($('.botLeft_position ul li').eq(i)[0].className==arr[arr.length-1].slice(0,-5)){
	
			$('.botLeft_position ul li').eq(i).css({"background-color":"#B88C4D","border-left":"0px solid #ec662c"})
			$('.botLeft_position ul li a').eq(i).css({"color":"white"})
		}
	})

	$(".container").append(`<div class="SubpageNavBtn"></div>`);


	var arrNameSub = arr[arr.length-1].slice(0,-5);
}