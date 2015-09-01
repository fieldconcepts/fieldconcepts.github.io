

/*
function addITC() {
    var length = prompt("Please enter ITC length (m)", "");
    if (length != null) {
        $("#toolstring").append('<img src="images/ITC.png" alt="ITC" style="width:40px">');
		
		$("#t01").append('<tr class="data"><td></td><td>ITC</td><td>' + length + '</td><td>x</td></tr>')
		
		theTotal = Number(theTotal) + Number(length);
		$('#total').text(theTotal);
    }	
}
*/


$(document).ready(function(){
	
	var theTotal = 0;
	var counter = 1;
	

	//SLIM TAS TOOL
	$("#btn1").click(function(){
        
		
		//adds he tool PNG to the string
		$("#toolstring").append('<img src="http://i.imgur.com/3BESvEH.png" alt="STAS" style="width:40px">');
		
		//adds the data to the table
		$("#t01").append('<tr class="data"><td></td><td>Slim TAS</td><td>0.86</td><td>6</td></tr>')
		
		//add the length to the total SUM of the tool string
		theTotal = Number(theTotal) + Number($(this).val());
		$('#total').text(theTotal);
		
		$("#clicks").text(counter++);
		
		$('#t01 .data').each(function(idx){
			$(this).children().first().html(idx + 1);
		});
	});
	
	//GSR TOOL
	$("#btn2").click(function(){
        
		$('.clicks').html(counter++);
		
		//adds he tool PNG to the string
		$("#toolstring").append('<img src="http://i.imgur.com/oAdGAY9.png" alt="GSR" style="width:40px">');
		
		//adds the data to the table
		$("#t01").append('<tr class="data"><td></td><td>GSR</td><td>1.13</td><td>9</td></tr>')
		
		//add the length to the total SUM of the tool string
		theTotal = Number(theTotal) + Number($(this).val());
		$('#total').text(theTotal);
		
		$('#t01 .data').each(function(idx){
			$(this).children().first().html(idx + 1);
		});

    });
	
	//SLIM VRS TOOL
	$("#btn3").click(function(){
	
		$('.clicks').text(counter++);
        
		//adds he tool PNG to the string
		$("#toolstring").append('<img src="http://i.imgur.com/mZbF8cm.png" alt="SVRS" style="width:40px">');
		
		//adds the data to the table
		$("#t01").append('<tr class="data"><td></td><td>Slim VRS</td><td>0.80</td><td>11</td></tr>')

		//add the length to the total SUM of the tool string
		theTotal = Number(theTotal) + Number($(this).val());
		$('#total').text(theTotal);
		
		$('#t01 .data').each(function(idx){
			$(this).children().first().html(idx + 1);
		});
	
	});
	

	//TAS TOOL
	$("#btn10").click(function(){
        
		
		//adds he tool PNG to the string
		$("#toolstring").append('<img src="images/TAS.png" alt="STAS" style="width:40px">');
		
		//adds the data to the table
		$("#t01").append('<tr class="data"><td></td><td>TAS</td><td>0.48</td><td>7</td></tr>')
		
		//add the length to the total SUM of the tool string
		theTotal = Number(theTotal) + Number($(this).val());
		$('#total').text(theTotal);
		
		$("#clicks").text(counter++);
		
		$('#t01 .data').each(function(idx){
			$(this).children().first().html(idx + 1);
		});
	});
	
	//ASR TOOL
	$("#btn11").click(function(){
        
		$('.clicks').html(counter++);
		
		//adds he tool PNG to the string
		$("#toolstring").append('<img src="images/ASR.png" alt="GSR" style="width:40px">');
		
		//adds the data to the table
		$("#t01").append('<tr class="data"><td></td><td>ASR</td><td>0.88</td><td>17</td></tr>')
		
		//add the length to the total SUM of the tool string
		theTotal = Number(theTotal) + Number($(this).val());
		$('#total').text(theTotal);
		
		$('#t01 .data').each(function(idx){
			$(this).children().first().html(idx + 1);
		});

    });
	
	//VRS TOOL
	$("#btn12").click(function(){
	
		$('.clicks').text(counter++);
        
		//adds he tool PNG to the string
		$("#toolstring").append('<img src="images/VRS.png" alt="SVRS" style="width:40px">');
		
		//adds the data to the table
		$("#t01").append('<tr class="data"><td></td><td>VRS</td><td>1.20</td><td>41</td></tr>')

		//add the length to the total SUM of the tool string
		theTotal = Number(theTotal) + Number($(this).val());
		$('#total').text(theTotal);
		
		$('#t01 .data').each(function(idx){
			$(this).children().first().html(idx + 1);
		});
	
	});
	
	//ITC 5m
	$("#btn20").click(function(){
	
		$('.clicks').text(counter++);
        
		//adds he tool PNG to the string
		$("#toolstring").append('<img src="http://i.imgur.com/iwB7FpN.png" alt="5m ITC" style="width:40px">');
		
		//adds the data to the table
		$("#t01").append('<tr class="data"><td></td><td>5m ITC</td><td>4.11</td><td>x</td></tr>')

		//add the length to the total SUM of the tool string
		theTotal = Number(theTotal) + Number($(this).val());
		$('#total').text(theTotal);
		
		$('#t01 .data').each(function(idx){
			$(this).children().first().html(idx + 1);
		});
	
	});
	
	//ITC 10m
	$("#btn21").click(function(){
	
		$('.clicks').text(counter++);
        
		//adds he tool PNG to the string
		$("#toolstring").append('<img src="http://i.imgur.com/iwB7FpN.png" alt="10m ITC" style="width:40px">');
		
		//adds the data to the table
		$("#t01").append('<tr class="data"><td></td><td>10m ITC</td><td>9.11</td><td>x</td></tr>')

		//add the length to the total SUM of the tool string
		theTotal = Number(theTotal) + Number($(this).val());
		$('#total').text(theTotal);
		
		$('#t01 .data').each(function(idx){
			$(this).children().first().html(idx + 1);
		});
	
	});
	
	//ITC 15m
	$("#btn22").click(function(){
	
		$('.clicks').text(counter++);
        
		//adds he tool PNG to the string
		$("#toolstring").append('<img src="http://i.imgur.com/iwB7FpN.png" alt="15m ITC" style="width:40px">');
		
		//adds the data to the table
		$("#t01").append('<tr class="data"><td></td><td>15m ITC</td><td>14.11</td><td>x</td></tr>')

		//add the length to the total SUM of the tool string
		theTotal = Number(theTotal) + Number($(this).val());
		$('#total').text(theTotal);
		
		$('#t01 .data').each(function(idx){
			$(this).children().first().html(idx + 1);
		});
	
	});
	
	//ITC 30m
	$("#btn23").click(function(){
	
		$('.clicks').text(counter++);
        
		//adds he tool PNG to the string
		$("#toolstring").append('<img src="http://i.imgur.com/iwB7FpN.png" alt="30m ITC" style="width:40px">');
		
		//adds the data to the table
		$("#t01").append('<tr class="data"><td></td><td>30m ITC</td><td>29.11</td><td>x</td></tr>')

		//add the length to the total SUM of the tool string
		theTotal = Number(theTotal) + Number($(this).val());
		$('#total').text(theTotal);
		
		$('#t01 .data').each(function(idx){
			$(this).children().first().html(idx + 1);
		});
	
	});
	

	
	//Reset the page
	$("#btn91").click(function(){
        location.reload();
    });
	
	//Increase image size to 200%
	$("#btn92").click(function() {
    var img = $('img');
    
    if (img.width() < 100)
		{
			img.animate({width: "80px"}, 1000);
		}
	});
	
	
	//Reduce the image size to 50%
	$("#btn93").click(function() {
    var img = $('img');
    
    if (img.width() > 20)
		{
			img.animate({width: "20px"}, 1000);
		}
	});
	
	//Reset image size to 100%
	$("#btn94").click(function() {
    var img = $('img');
    
    if (img.width() > 19)
		{
			img.animate({width: "40px"}, 1000);
		}
	});
	
	
	

});


