(function($){
	$.fn.extend({
	/* 实现元素高度自适应浏览器和【屏幕大小 */
		heigh:function(){
            var H = $(window).height();
            var height=H-212;
            $(this).height(height+"px");
		},
		heighChange:function(){
            var obj = $(this);
            $(window).resize(function(){
            	obj.heigh();
            });
		},
		iheigh:function(){
			$(this).heigh();
			$(this).heighChange();
		},
		/* 不同状态显示不同颜色
		stateColor：function(){
			var value = $(this).val();
			if(value=='启用'||value=='通过'||value=='运行'){
				$(this).css('')
			}
		}, */
	});
})(jQuery);
$(function(){
	/*******    header    *******/
	var input=$('.search-area').find('input');
	input.focus(function(){
		var value=input.val();
		if(value=='搜索点什么...'){
			input.val("");
			//input.css('border_bottom','2px solid #7d8a96');
		}
	});
	input.blur(function(){
		var value=input.val();
		if(value==""){
			input.val("搜索点什么...");
		}
	});

	/********   导航   ********/
		/*   页面加载二级菜单渲染    */
		var chil =$('.nav-item').find('.nav-child');
		var a=chil.find('.active');
		if(a.length==1){
			var para =a.parent();
			var dl=para.parent();
			var sib =dl.siblings();
			//console.log(sib.html());
			var i=sib.find('i');
			dl.css('display','block');
			i.css({"background":"url(./images/top.png)center no-repeat","right":"-146px"});
		}else{
			var para =a.parent();
			var dl=para.parent();
			var sib =dl.siblings();
			var i=sib.find('i');
			dl.css('display','none');
			i.css({"background":"url(./images/left.png)center no-repeat","right":"-149px"});
		}
		/* 鼠标移入 */
	$('.nav-item').mouseover(function(){
		$(this).find('.nav-child').css('display','block');
		var i=$(this).find('i');
		i.css({"background":"url(./images/top.png)center no-repeat","right":"-146px"});
	});
	$('.nav-item').mouseout(function(){
		var childs =$(this).find('.nav-child');
		var a=childs.find('.active');
		/* 判断二级菜单是否点击 */
		if(a.length==1){
			childs.css('display','block');
		}else{
			childs.css('display','none');
		}
	});
	$('.nav-item').mouseout(function(){
		var i=$(this).find('i');
		i.css({"background":"url(./images/left.png)center no-repeat","right":"-149px"});
	});
		/* 鼠标移出 */
	$('.nav-child').mouseout(function(){
		var a=$(this).find('.active');
		/* 判断二级菜单是否点击 */
		if(a.length==1){
			$(this).css('display','block');
		}else{
			$(this).css('display','none');
		}
	});
		/*  a点击动态增加.active   */
	var a=$('.nav').find('a');
	a.click(function(){
		a.removeClass('active');
		$(this).addClass('active');
		var para=$(this).parents('.nav-child');
		/*  判断二级菜单是否点击
			如果点击显示.nav-child元素
			如果没点击不显示.nav-child元素
		*/
		if(para.length==1){
			para.css('display','block');
		}
		else{
			$('.nav-child').css('display','none');
		}
	});
	  /*********  头像  ********/
		/* 鼠标移入事件 */
	var i=$('.header-nav').find('i');
	i.mouseover(function(){
		var index=$(this).index();
		//i.css({'color':'#7d8a96','font-size':'20px'});
		$(this).css({'color':'#28a3e7','font-size':'22px'});

	});
	i.mouseout(function(){
		i.css({'color':'#7d8a96','font-size':'20px'});
		
	});
	var li=$('.header-nav').children();
	/*  ul宽度自适应  */
	var child=li.eq(4).find('ul');
	//console.log(li.eq(4).css('width'));
	child.css('width',li.eq(4).css('width')+"px");
	li.eq(4).mouseover(function(){
		$(this).css({'border-top':'3px solid #fff','border-bottom':'3px solid #28a3e7','height':'54px','line-height':'54px'});
		child.css('display','block');
	});
	li.eq(4).mouseout(function(){
		$(this).css({'border':'none','height':'60px','line-height':'60px'});
		child.mouseover(function(){
			$(this).css('display','block');
		});
		child.mouseout(function(){
			$(this).css('display','none');
		});
		//child.css('display','none');
	});
	li.eq(5).mouseover(function(){
		$(this).css({'border-top':'3px solid #fff','border-bottom':'3px solid #28a3e7','height':'54px','line-height':'54px'});
	});
	li.eq(5).mouseout(function(){
		$(this).css({'border':'none','height':'60px','line-height':'60px'});
	});

	/****   content高度自适应   ***/
	$('.content').iheigh();

	/*  分页固定  */
});