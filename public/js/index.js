//转化成rem 数据；
function remDate(n) {
	var clientWidth=document.documentElement.clientWidth;
	return n*20 * (clientWidth / 320);	
}
//首页
function Index(){
	comImg ();
	indexSlide();
	tab();
	picLoop();
	comment ();
	cardSlide();
}
function arcticle(){
	updateImg();
}

//查看大图；

//上传图片大小的限制，一张图片和多张图片
function comImg (){
	var n=remDate(8.8);
	var m=remDate(8);
	var m2=remDate(4.4);
	$('.article_con .img').each(function(i){
		if($(this).find('a').size()==1){
			$(this).find('a').css({'width':n,'height':m})
			
			ImgShort($(this).find('a img'),m);
			
		}
		else{
			ImgShort($(this).find('a img'),m2);
		}
	})
}
//设置img 大小；
function updateImg(){
	var m2=remDate(6.8);
	ImgShort($('.add_pic').find('img'),m2);
}
//判断图片较短边
function ImgShort(oImg,n){
	var w=oImg.width();
	var h=oImg.height();
 
}
//标签切换功能
function fnTab()
{
	var oDiv=$("#pic_list");
	var  oUl=$("#pic_list ul");
	var aLi=$("#pic_list li");
	var aBtn=$(".btn a");
	var iNow=0;
	var oTimer=null;
	oTimer=setInterval(auto,3000);
	function auto (){
		iNow++;
		iNow%=aLi.size();
		oUl.animate({"left":-iNow*aLi.eq(0).width()},function(){
			aBtn.removeClass("active").eq(iNow).addClass("active");
		});
	}
	
}
//标签切换功能调用
function tab(){
		fnTab('click',$('.nav li'),$('.main_con'));
		function fnTab(sEvent,aNavBtn,aCon){
			aCon.hide().eq(0).show();
			aNavBtn.each(function(i){
				$(this).on(sEvent,function(){
					var iNow=$(this).index();
					aNavBtn.removeClass('active').eq(iNow).addClass('active');
					aCon.hide().eq(iNow).show().css('zIndex','3');
					$(document).scrollTop(0);
				})
			})
		}
		linkDetails($('.dis_list li'),$('#discount'));
		linkDetails($('#cards .discount'),$('#cards'));
}
//评论功能
function comment (){
	var name='七天大圣';
	var n=0;
	$('.comment').each(function(i){
		$(this).on('click',function(){
			n=i;
			var form=$(this).parent().next().find('.form');
			var oTxt=form.find('.txt');
			var oBtn=form.find('.btn');
			$(document).scrollTop($(this).offset().top);
			$('.tab_cap').hide();
			form.show();
			oTxt.focus();
			oBtn.on('click',function(){
				if(oTxt.val()){
					$('.comment_con ul').eq(n).prepend('<li><span>'+name+'：</span>'+oTxt.val()+'</li>');
					if($('.comment_con ul').eq(n).find('li').eq(0).height()>remDate(0.8)){
						$('.comment_con ul').eq(n).find('li').eq(0).html('<span>'+name+'：</span>'+'<br />'+oTxt.val()+'</li>');	
					}
					oTxt.val('');
					$(this).parent().hide();
					$('.tab_cap').show();
				}
				else{
					$('.form').hide();
					$('.tab_cap').show();
				}
			});

		})
	})
	
}
//下拉效果
function indexSlide(){
	var i=99;
	var j=3000;
	$('.article_info').hide();
	$('.na_info').on('click',function(){
		if($('.article_info').is(':visible')){
			$('.article_info').slideUp();
			$('.na_info .rank').html('排名:'+i+' 集了'+j+'个赞');
		}
		else{
			$('.article_info').slideDown();
			$('.na_info .rank').html('排名:'+i+'');
		}
	})
}
function cardSlide(){
	$('.info_con .txt').hide();
	$('.info_con h3').on('click',function(){
		if($(this).next().is(':visible')){
			$(this).html('详细说明<span class="more">></span>').next().slideUp('fast');
		}
		else{
			$(this).html('详细说明<span class="more">∨</span>').next().slideDown('fast');
		}
	})
}
// 链接到优惠券详情
/*function cardsDetails (){
	
	
}*/
function linkDetails(obj1,obj2){
	obj1.each(function(i){
		$(this).on('click',function(){
			obj2.hide().siblings('#card_details').show();
		})
	})
}
//轮播图功能
function picLoop () {
	 var swiper = new Swiper('.swiper-container', {
	       pagination: '.swiper-pagination',
	        paginationClickable: true,
	        spaceBetween: 0,
	       autoplay : 5000,
	       autoplayDisableOnInteraction : false,
	    });
	
}