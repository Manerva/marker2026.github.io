content = `<br><p class="header_marupik">Marupik</p><br><br><p>Marupik это ванильный, бесплатный сервер с элементами RolePlay(РП) на последних версиях.<br> Когда вы зайдёте на сервер Вы сможете поселится у кого-то в городе, или создать свой. Столица находится в грибном биоме(4578 -1979)</p>`

document.write(`
<!DOCTYPE HTML>
<html>
	<head>
		<link rel="icon" type="image/png" href="http://www.marupik.ru/favicon.png" sizes="50x50">
		<meta http-equiv="Content-Type" content="charset=utf-8">
		<title>Marupik</title>
		<meta name="keywords" content="" />
		<meta name="description" content="" />
    <link href="http://marupik.ru/css/style.css" rel="stylesheet">
    <!-- <link rel="import" href="http://marupik.ru/code/menu.html"> -->
	</head>
    <body>
		<div class="wrapper">
			<header class="header">
                <div class="m" id="m">
                <ul id="navbar">
                <script src="http://www.marupik.ru/code/menu.js"></script>
                </ul>
				</div>
                </header><!-- .header-->
            
                <div class="middle">
            
                    <div class="container">`+content+`</div>
            
                    <aside class="left-sidebar">
                        <h6>Новости:</h6><br><div id="news"><script src="http://www.marupik.ru/code/news.js"></script></div>
                    </aside><!-- .left-sidebar -->
            
                </div><!-- .middle-->
            
                <footer class="footer">
                    <strong>Autor:</strong><p>marker2026 ©</p>
                </footer><!-- .footer -->
            
            </div><!-- .wrapper -->
        </body>
</html>`);