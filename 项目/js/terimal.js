$(function(){
	$('tr').each(function(){
		var td = $(this).find('td');
		var text= td.eq(7);
		var text1= td.eq(8);
		var option = td.eq(10);
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
		if(text1.text()=='在线'){
			text1.css('color','#009688');
		}else{
			text1.css('color','#FF5722');
		}
	});
});