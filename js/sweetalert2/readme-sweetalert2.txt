<?php
//Iniciar session em todas as páginas
session_start();

$_SESSION['maxflashbag'] = array(
	'type'      => 'success',
	'title'     => 'Enviado',
	'message'   => 'Seu contato foi enviado com sucesso.',
);

$_SESSION['maxflashbag'] = array(
	'type'      => 'error',
	'title'     => 'Erro',
	'message'   => 'Não foi possível enviar seu contato. Tente novamente.',
);

?>


<?php
if(isset($_SESSION['maxflashbag'])){?>
	<script type="text/javascript">
		Swal.fire('<?=$_SESSION['maxflashbag']['title']?>', '<?=$_SESSION['maxflashbag']['message']?>', '<?=$_SESSION['maxflashbag']['type']?>');           
	</script>
	<?php
	unset($_SESSION['maxflashbag']);
}?>