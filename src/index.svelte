<script>
	import Indexblob from '../components/Indexblob.svelte';
</script>

<svelte:head>
	<title>FlairDD.com - Flair Designer and Developer | Web | Mobile | Branding | Marketing | and more</title>
</svelte:head>

	<div class="index-main">

        <div class="contour-bg"></div>
        <div class="logo-index planesound"><img src="images/logo.png" alt="FlairDD Logo" class="planesound"></div>
		<div class="shadow-slogan-index" data-switch data-glitch>Fly Your Ideas</div>
        <div class="footer-strip"></div>
        <div class="fluiddark index"></div>
		<Indexblob />

        <div class="main-wrap">
			<div class="pieces" style="background-image: url(images/normal.png)" data-img-normal="url(images/normal.png)" data-img-alt="url(images/alt.png)" data-img-code="url(images/code.png)"></div>
			<div class="overlay overlay--hidden"></div>
			<div class="content">
				<div class="content__inner">
					<div class="content__top">
						<h2 class="title">
							<span class="title__inner mode mode--design" data-switch data-glitch>&nbsp;</span>
						</h2>
						<div class="controls">
							<button class="btn btn--menu mode mode--design" data-switch>
								<svg class="icon icon--menu"><use xlink:href="#icon-menu"></use></svg>
								<svg class="icon icon--menu-alt"><use xlink:href="#icon-menu-alt"></use></svg>
							</button>
						</div>
					</div>
					<div class="menu">
						<ul class="menu__inner">
							<li class="menu__item menu__link" data-switch><span class="menu__link" data-switch>Apps</span></li>
							<li class="menu__item"><span class="menu__link" data-switch>Brands</span></li>
							<li class="menu__item"><span class="menu__link" data-switch>Graphics</span></li>
							<li class="menu__item"><span class="menu__link" data-switch>And more...</span></li>
						</ul>
					</div>
					<div class="menu menu--code">
						<ul class="menu__inner">
							<li class="menu__item"><a href="intro" class="menu__link" data-switch>Apps</a></li>
							<li class="menu__item"><a href="intro" class="menu__link" data-switch>Branding</a></li>
							<li class="menu__item"><a href="intro" class="menu__link" data-switch>E-Strategy</a></li>
							<li class="menu__item"><a href="intro" class="menu__link" data-switch>E-Commerce</a></li>
						</ul>
					</div>
					<div class="content__bottom">
						<div class="switch mode mode--design">
							<a href="./" class="switch__item switch__item--current clk hvr">Design</a>
							<a href="./" class="switch__item clk bub3"><span class="mode mode--design" data-switch data-glitch>Develop</span></a>
						</div>
						<div class="link-wrap planesound">
							<a href="intro" class="contact-link mode mode--design clk" data-switch>Enter Main Site Here &#8594;</a>
						</div>
					</div>
					<!-- Sponsor -->
					<div class="pater mode mode--design">
						<img src="images/flags.png" class="pater__img" alt="Flags" />
						<h2 class="pater__title" aria-label="Hired">​FlairDD is a creative freelance Web Designer, Developer, and brand strategist...based in Cambodia.</h2>
						<p class="pater__desc">I'm glad you are here to experience what I can do, and create for you.</p>
					</div>
				</div><!-- /content__inner-->
			</div><!-- /content -->
        </div>

		<div class="menu-marq">
			<div class="menu-marq__pre-designer">Creative</div>
			<div class="menu-marq__item">
				<span class="menu-marq__item-link"><span class="white-text">D</span>esigner</span>
				<img src="images/1.jpg" class="menu-marq__item-img" alt="Design"/>
				<div class="marquee">
					<div class="marquee__inner" aria-hidden="true">
						<span>Designer.</span>
						<span>Designer.</span>
						<span>Designer.</span>
						<span>Designer.</span>
					</div>
				</div>
			</div>
			<div class="menu-marq__pre-developer">Code</div>
			<div class="menu-marq__item">
				<span class="menu-marq__item-link">Developer</span>
				<img src="images/2.jpg" class="menu-marq__item-img" alt="Develop"/>
				<div class="marquee">
					<div class="marquee__inner" aria-hidden="true">
						<span>Developer.</span>
						<span>Developer.</span>
						<span>Developer.</span>
						<span>Developer.</span>
					</div>
				</div>
			</div>
		</div>

		<div class="loading"></div>

	</div>
