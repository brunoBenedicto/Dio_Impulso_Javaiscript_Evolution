<html>
	<head>
		<meta charset="utf-8">
  		<meta name="viewport" content="width=device-width, initial-scale=1">
  		<title>Desafio accordion</title>
  		<link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
  		<link rel="stylesheet" href="/resources/demos/style.css">
  		<script src="https://code.jquery.com/jquery-3.6.0.js"></script>
 		<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
		<script>
		  $( function() {
		    $( "#accordion" ).accordion();
		  } );
		</script>
	</head>
	
	<body>
		<div id="accordion">
		  <h3> primeria seção</h3>
		  <div>
		    <p >
		    area da primeira seção
		    </p>
		  </div>
		  <h3>segunda seção</h3>
		  <div>
		    <p>
		    area da segunda seção
		    </p>
		  </div>
		  <h3>terceira seção</h3>
		  <div>
		    <p>
		    area da terceira seção
		    </p>
		  </div>
		</div>
	</body>
	
</html>