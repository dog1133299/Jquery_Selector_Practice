$(document).ready(function () { 
	var matrixHeight=15;
	var matrixWidth=15;
	const MODE=["CROSS","DOT","RECT1","RECT2","RECT3","RECT4","STAR"];
	var mode="CROSS";


	for (var i = 0; i < matrixHeight; i++) 
		$("#matrix").append('<tr>');
	for (var i = 0; i < matrixWidth; i++) 
		$("#matrix tr").append('<td>');

  	$('#clear').click(function(){ 
  		$('td').css('background-color', 'transparent');
  	});

  	$("#cross").click(function() {mode="CROSS";});
  	$("#rect1").click(function() {mode="RECT1";});
  	$("#rect2").click(function() {mode="RECT2";});
  	$("#rect3").click(function() {mode="RECT3";});
  	$("#rect4").click(function() {mode="RECT4";});
  	$("#dot").click(function() {mode="DOT";});
  	$("#star").click(function() {mode="STAR";});



	$("td").click(function() { 
		$this=$(this);
		var n=$('td').index($this);
		var col=n%matrixWidth+1; 

		if (mode==MODE[0] ){
			//console.log(n%matrixWidth+1); 
			$('td:nth-child('+col+')').css('background-color', 'violet'); 
			$this.parent().children().css('background-color', 'red'); 
			$this.css('background-color', 'yellow');

		}else if(mode==MODE[1]){
			$this.css('background-color', 'black'); 
		}else if(mode==MODE[2]){
			$this.parent().prevAll().andSelf().find('td:nth-child('+col+')').prevAll().andSelf().css('background-color', 'pink'); 
		}else if(mode==MODE[3]){
			$this.parent().prevAll().andSelf().find('td:nth-child('+col+')').nextAll().andSelf().css('background-color', 'lightblue'); 
		} else if(mode==MODE[4]){
			$this.parent().nextAll().andSelf().find('td:nth-child('+col+')').prevAll().andSelf().css('background-color', 'lightgreen'); 
		} else if(mode==MODE[5]){
			$this.parent().nextAll().andSelf().find('td:nth-child('+col+')').nextAll().andSelf().css('background-color', 'orange'); 
		}  else if(mode==MODE[6]){
			$this.parent().next().andSelf().find('td:nth-child('+col+')').css('background-color', 'gold'); 
			$this.parent().prev().find('td:nth-child('+col+')').css('background-color', 'gold'); 
			$this.next().css('background-color', 'gold'); 
			$this.prev().css('background-color', 'gold'); 
		} 
	});
});