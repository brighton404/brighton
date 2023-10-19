<!DOCTYPE HTML>
<html lang="en">
<head>
	<title>LUNA Health</title>
	<link rel="icon" type="image/x-icon" href="/images/favicon.png">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<meta charset="UTF-8">
	
	
	<!-- Font -->
	<?php
	echo "<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700%7CPoppins:400,500' rel='stylesheet'>";
	echo "<link href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css' rel='stylesheet'>";
	echo "<link rel='stylesheet' href='common-css/jquery.classycountdown.css' />";
	echo "<link href='04-comming-soon/css/styles.css' rel='stylesheet' type='text/css'>";
	echo "<link href='04-comming-soon/css/responsive.css' rel='stylesheet' type='text/css'>";
	?>
	
</head>
<body>
	
	<div class="main-area">
		<section class="left-section" style="background: url('images/TKX09516.JPG') lightgray 50% / cover no-repeat;">
		
		</section>
		<section class="right-section full-height">
			<div class="container-one">
				<div class="division-one">
					<a class="logo" href="#"><img src="images/luna logo white.svg" alt="Logo"></a>
				</div>
				<div class="division-two">
					<a href="https://www.lunafrica.com"><h5>Home</h5></a>
					<a href="https://www.lunahealth.co"><h5>LUNA Health</h5></a>
				</div>				
			</div>
			
			<div class="display-table">
				<div class="display-table-cell">
					<div class="main-content">
						<h1 class="title"><b>Under Construction</b></h1>
						<p class="desc">Our website is currently undergoing some changes.
							We Should be back shortly. <br> Thank you for your patience.</p>

						<div class="email-input-area">
								<form action="<?= model_url ?>subscriber" method="POST">
								<input class="email-input" name="subscriber_email" type="text" placeholder="Enter your email"/>
								<button class="submit-btn" name="submit" type="submit"><b>NOTIFY US</b></button>
							</form>
						</div><!-- email-input-area -->
						
						<p class="post-desc">Subscribe to Our Newsletter to stay Updated</p>
					</div><!-- main-content -->
				</div><!-- display-table-cell -->
			</div><!-- display-table -->
			
			<ul class="footer-icons">
				<li>Stay in touch : </li>
				<li><a href="https://web.facebook.com/luna4africa"><i class="fa-brands fa-facebook"></i></a></li>
				<li><a href="https://twitter.com/luna4africa"><i class="fa-brands fa-square-x-twitter"></i></a></li>
				<li><a href="https://www.linkedin.com/company/luna4africa/"><i class="fa-brands fa-linkedin"></i></a></li>
				<li><a href="https://www.tiktok.com/@luna4africa"><i class="fa-brands fa-tiktok"></i></a></li>
				<li><a href="https://www.instagram.com/luna4africa/"><i class="fa-brands fa-instagram"></i></a>
				<li><a href="https://www.youtube.com/@luna4africa"><i class="fa-brands fa-youtube"></i></a></li>
			</ul>
		
		</section><!-- right-section -->
		
	</div><!-- main-area -->
	
	<!-- SCIPTS -->
	
	<script src="common-js/jquery-3.1.1.min.js"></script>
	
	<script src="common-js/jquery.countdown.min.js"></script>
	
	<script src="common-js/scripts.js"></script>
	
</body>
</html>