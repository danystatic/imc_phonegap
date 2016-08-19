$('#calcular').click(function (){
	var p= $('#peso').val();
	var a= $('#altura').val()/100;
	var imc=p/(a*a);
	$('#resultado').fadeIn().val(imc);

});
