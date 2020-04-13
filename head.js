$(function(){

	$("header").append('<div class="header_top"><div class="header_top_content"><div class="_top_content_left"></div></div><div class="header_bottom"><div class="logo"><a href="index.html"><img src="images/header/logo.png"></a></div><div class="m_head_nav"><span></span><span></span></div><div class="m_head_navMeng"><div><span><a href="index.html">网站首页</a></span></div><div><span><a href="about.html">关于大诚</a></span></div><div><span><a href="WarehousingService.html">产品服务</a></span></div><div><span><a href="companyNews.html">新闻资讯</a></span></div><div><span><a href="successful_case.html">成功案例</a></span></div><div><span><a href="contactUs.html">联系我们</a></span></div></div><ul><li><a class="header_high" href="index.html">网站首页</a></li><li><a  class="header_high_introduction" href="about.html">关于大诚</a></li><li><a class="header_high_TPL" href="companyNews.html">新闻中心</a><ul><li><a href="WarehousingService.html">仓储服务</a></li><li><a href="DistributionService.html">配送服务</a></li><li><a href="WarehouseIntegration.html">仓配一体</a></li><li><a href="Value-added_logistics_service.html">增值服务</a></li><li><a href="CirculationService.html">流通服务</a></li><li><a href="VendingMachine.html">自动售货机</a></li></ul></li><li><a  class="header_high_companyNews" href="introduction_hotel.html">大诚产业</a><ul><li><a href="companyNews.html">公司新闻</a></li><li><a href="industryNews.html">行业新闻</a></li></ul></li><li><a  class="header_high" href="culture.html">大诚文化</a></li><li><a  class="header_high" href="hr.html">人力资源</a></li><li><a  class="header_high_contactUs" href="contactUs.html">联系我们</a><ul><li><a href="contactUs.html">公司总部</a></li><li><a href="BranchOffice.html">子公司及办事处</a></li><li><a href="WarehouseAddress.html">仓库地址</a></li></ul></li></ul></div>');
	$('head').append('<meta http-equiv="Content-Type" content="text/html;charset=gb2312"/><meta name="sogou_site_verification" content="ikkivvcKYS"/><meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">')
	var arr=window.location.href.split('/');

	$('header .header_bottom .m_head_nav').click(function(){

		if($('header .header_bottom .m_head_navMeng').css('display') == 'none'){
			$('header .header_bottom .m_head_nav span').eq(0).css({'transform':'translate(-50%,0) rotate(-45deg)','-ms-transform':'translate(-50%,0) rotate(-45deg)','-moz-transform':'translate(-50%,0) rotate(-45deg)','-webkit-transform':'translate(-50%,0) rotate(-45deg)','-o-transform':'translate(-50%,0) rotate(-45deg)'});
		
			$('header .header_bottom .m_head_nav span').eq(1).css({'transform':'translate(-50%,0) rotate(45deg)','-ms-transform':'translate(-50%,0) rotate(45deg)','-moz-transform':'translate(-50%,0) rotate(45deg)','-webkit-transform':'translate(-50%,0) rotate(45deg)','-o-transform':'translate(-50%,0) rotate(45deg)'});
		
			$('header .header_bottom .m_head_navMeng').stop().show(1000);
		}else{
			$('header .header_bottom .m_head_nav span').eq(0).css({'transform':'translate(-50%,-1vw) rotate(0)','-ms-transform':'translate(-50%,-1vw) rotate(0)','-moz-transform':'translate(-50%,-1vw) rotate(0)','-webkit-transform':'translate(-50%,-1vw) rotate(0)','-o-transform':'translate(-50%,-1vw) rotate(0)'});
		
			$('header .header_bottom .m_head_nav span').eq(1).css({'transform':'translate(-50%,1vw) rotate(0)','-ms-transform':'translate(-50%,1vw) rotate(0)','-moz-transform':'translate(-50%,1vw) rotate(0)','-webkit-transform':'translate(-50%,1vw) rotate(0)','-o-transform':'translate(-50%,1vw) rotate(0)'});
		
			$('header .header_bottom .m_head_navMeng').stop().hide(1000);
		}
		
	})

})
