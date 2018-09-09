$(function(){
	$('tr').each(function(){
		var td = $(this).find('td');
		/* 判断广告状态 */
		var state = td.eq(1);
		if(state.text()=='紧急'){
			state.css('color','#FF5722');
		}
		var text= td.eq(10);
		var text1= td.eq(9);
		var option = td.eq(11);
		if(text.text()=='运行')
		{
			text.css('color','#009688');
			var a1 = option.find('a[value="启动"]');
			//console.log(a2.length);
			var a = option.find('a').css('display','block');
			a1.css('display','none');
		}
		else{
			text.css('color','#FF5722');
			var a1 = option.find('a[value="停止"]');
			var a = option.find('a').css('display','block');
			a1.css('display','none');
		}
		if(text1.text()=='通过'){
			text1.css('color','#009688');
		}else{
			text1.css('color','#FF5722');
		}
	});
});