$(function(){
	$('tr').each(function(){
		var td = $(this).find('td');
		var text= td.eq(3);
		var option = td.eq(7);
		if(text.text()=='启用')
		{
			text.css('color','#009688');
			var a1 = option.find('a[value="启用"]');
			//console.log(a2.length);
			var a = option.find('a').css('display','block');
			a1.css('display','none');
		}else{
			text.css('color','#FF5722');
			var a1 = option.find('a[value="停用"]');
			var a = option.find('a').css('display','block');
			a1.css('display','none');
		}
	});
});