 var $about = $('.about');
 var $win = $(window);
 var aparece_1 = 0;
var a1=0;
$(document).ready(function(){
	$('#skills').hide();
    $('[data-toggle="tooltip"]').tooltip();  
    $('#me').click(function() {
    	$(this).hide();
    	$('#aparece').fadeIn(1200);
    });
        $('#me2').click(function() {
    	$(this).hide();
    	$('#me').fadeIn('slow');
    });
    $('#btn_skills').click(function(){
    	$('#skills').toggle();
    });
    $win.on('scroll', function(){  	
    	var top =$win.scrollTop();
    	var r=0;
    	var s=0;
    	var t=0;
		if (top>=216 &&top<=360){
    		
    		s = ((100/144)*(top-216))/100;
    			
    		var escala = 1-s;
    		document.getElementById("ab").style.transform = "scale("+escala+","+escala+")";
    		$('#about').append('<div id="hidable_ab"><p id="text_ab"class ="text"> Hi my name is Pablo Alvarado, '+
    			'this page is made for you to know me better. Hope you like it, if you do...or if '+
    			'you do not please <a href="#contact">contact</a> me, I will be pleased to check it </p>'+
    			'<div id="bta" class="container"><p>I was born in 1995, in Bogota Colmbia. Were i have lived almost my hole life</p>'+
              '<div class="container-fluid" ><img class="img-responsive" id="phBogo" alt="BogotaD.C." align="middle" src="https://static.iris.net.co/semana/upload/images/2017/10/27/545243_1.jpg">'+
              '</div><button id="btn_bogota"type="button" class="btn" onclick="change()">More</button></div></div></div><button type="button" class="btn" id="btn_hide_ab" onclick="hideAb()">Click</button>').prop('id','info_about');
    		}
    	else if (top>=765 &&top<=909){
    		r = (360/144)*(top-765);
    		document.getElementById("hob").style.transform = "rotate("+r+"deg)";
    		document.getElementById("ab").style.transform = "scale("+1+","+1+")";

    	}
    	else if (top>909){
    		t=(((top-909)/10)-20)%40;
    		document.getElementById('ct_ti').style.transform="translate("+t+"%)";
    	}
    	else {
    	document.getElementById("hob").style.transform = "rotate("+0+"deg)";	
    	document.getElementById('ct_ti').style.transform="translate(-"+20+"%)";	
    	}
    });

});

function hideAb(){
	$('#about').append('<div id="hide_ab"><button type="button" class="btn" id="btn_show_ab" onclick="showAb()">More</button></div>').prop('id','info_about');
	$('#hidable_ab').toggle();
	
}
function showAb(){
	$('#hide_ab').hide();
	$('#hidable_ab').show();
}


function change() {
$("#bta").remove();
console.log("borra");
var but = $("<button type='button' class='btn' onclick='otherChange()'>")
  .text("More");
var photo = $("<img>")
  .addClass("img-responsive")
  .attr("src", "http://www.coc.org.co/wp-content/uploads/hockey_24demayo_hockey-sp1.jpg")
  .attr("alt", "hockey s.p.")
  .attr("id","hockey_ph");
var tex = $("<p></p>")
  .text("When i was a kid the most important thing to me was playing hockey, seems i have grown a lot");
var div2 = $("<div >");
var div = $("<div id='hockey'>")
  .append(tex,div2,photo,but);
$("#hidable_ab").append(div);
}
function otherChange(){
$("#hockey").empty();
var photo = $("<img>")
  .addClass("img-responsive")
  .attr("src", "http://4.bp.blogspot.com/-zPPnwXn3GJI/Vj-en5uK5AI/AAAAAAAAPSE/RSKCq1QMY5k/s640/thats%2Bit%2Bthats%2Ball%2Bfolks.jpg")
  .attr("alt", "that's it folks")
  .attr("id","thatsall_ph");
var tex = $("<p></p>")
  .text("I think that's all for now");
var div2 = $("<div >");
var div = $("<div >")
  .append(tex,div2,photo);
$("#hidable_ab").append(div);
}









