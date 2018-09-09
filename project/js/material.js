$(function(){
	$('tr').each(function(){
		var td = $(this).find('td');
		var text= td.eq(4);
		var option = td.eq(5);
		if(text.text()=='通过')
		{
			text.css('color','#009688');
			var a1 = option.find('a[value="审核通过"]');
			//console.log(a2.length);
			var a = option.find('a').css('display','block');
			a1.css('display','none');
		}else if(text.text()=='未审核'){
			text.css('color','#FFB800');
			var a = option.find('a').css('display','block');
		}
		else{
			text.css('color','#FF5722');
			var a1 = option.find('a[value="拒绝"]');
			var a = option.find('a').css('display','block');
			a1.css('display','none');
		}
	});
});