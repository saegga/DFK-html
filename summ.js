
				
					$(document).ready(function(){
						var day = 10;
						var money = 10000;
						var percent = 2;
					 $('.money_return').html(12000.00+"<span class='ru'>руб.</span>");
						var sliderWidth1 = null;
						$("#summ").slider({
							animate:false,
							range:"min",
							value:10000,
							min: 2000, 
							max: 30000, 
							step: 1000,					
							slide: function(event, ui){

								 $("#res-summ").html(ui.value+"р.");
							    money =	ui.value;					
								sliderWidth1 = $(".summ .ui-widget-header").width();
								$("#posx-summ").css("left",(sliderWidth1)+"px");
								var res = (money * percent/100)*day + money;
							 	$(".money_return").html(res+"<span class='ru'>руб.</span>");					
							},
							change: function(event, ui){
								sliderWidth1 = $(".summ .ui-widget-header").width();
								$("#posx-summ").css("left",(sliderWidth1)+"px");						
								// (money * percent/100) * day + money
							}

							
						});
						sliderWidth1 = $(".summ .ui-widget-header").width();
						$("#posx-summ").css("left",(sliderWidth1)+"px");	

			
						var sliderWidth2 = null;
						$("#days").slider({
							animate:false,
							range:"min",
							value:10,
							min: 5, 
							max: 15, 
							step: 1,
							slide: function(event, ui){
								$("#res-days").html(ui.value+" дней.");
								day = ui.value;
								sliderWidth2 = $(".loan .ui-widget-header").width();
								$("#posx-days").css("left",(sliderWidth2)+"px");
								var res = (money * percent/100)*day + money;
							 	$(".money_return").html(res+"<span class='ru'>руб.</span>");	

							},
							change: function(event, ui){
								sliderWidth2 = $('.loan .ui-widget-header').width();
								$("#posx-days").css("left",(sliderWidth2)+"px");	
							}
						});
						sliderWidth2 = $(".loan .ui-widget-header").width();
						$("#posx-days").css("left",(sliderWidth2)+"px");	


					});		
			