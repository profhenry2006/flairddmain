<script>
	export let segment;
</script>

<style>
	[aria-current] {
		position: relative;
		display: inline-block;
    	color: #a5b0bf;
        cursor: crosshair;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 0.3em);
		height: 8px;
		background-color: #a5b0bf;
		display: block;
		bottom: 39%;
	}
</style>

            <div class="menumainoverlay fade-in">
                <div class="overlay-content">
                    <nav class="menu-overlay">

                        <div class="menu-left">

                            <img src="images/logo.png" alt="FlairDD logo" />

                            <h3>Fly Your Ideas</h3>

                            <p class="menu-links">
                                <a href='solutions' aria-current='{segment === "solutions" ? "page" : undefined}' class="clk bub1 hide-menu">Web design</a>
                                ·
                                <a href='solutions' aria-current='{segment === "solutions" ? "page" : undefined}' class="clk hvr hide-menu">Web development</a>
                                ·
                                <a href='solutions' aria-current='{segment === "solutions" ? "page" : undefined}' class="clk bub2 hide-menu">Graphic design</a>
                                ·
                                <a href='solutions' aria-current='{segment === "solutions" ? "page" : undefined}' class="clk hvr hide-menu">Branding</a>
                                ·
                                <a href='solutions' aria-current='{segment === "solutions" ? "page" : undefined}' class="clk bub3 hide-menu">E-commerce</a>
                                ·
                                <a href='solutions' aria-current='{segment === "solutions" ? "page" : undefined}' class="clk hvr hide-menu">E-marketing</a>
                                ·
                                <a href='solutions' aria-current='{segment === "solutions" ? "page" : undefined}' class="clk bub1 hide-menu">Consulting</a>
                                ·
                                <a href='solutions' aria-current='{segment === "solutions" ? "page" : undefined}' class="clk bub2 hide-menu">And more</a>
                            </p>

                            <p class="menu-contact">+855 15 607 180 <span>&mdash;</span> hello@flairdd.com</p>
                        </div>

                        <div class="menu-center">

                            <div>
                                <i class="fa fa-plane"></i>
                                <p><a href='intro' aria-current='{segment === "intro" ? "page" : undefined}' class="clk bub1 hide-menu">Intro</a></p>
                            </div>

                            <div>
                                <i class="fa fa-user"></i>
                                <p><a href='about' aria-current='{segment === "about" ? "page" : undefined}' class="clk bub2 hide-menu">About me</a></p>
                            </div>

                            <div>
                                <i class="fa fa-puzzle-piece"></i>
                                <p><a href='solutions' aria-current='{segment === "solutions" ? "page" : undefined}' class="clk bub3 hide-menu">My solutions</a></p>
                            </div>

                            <div>
                                <i class="fa fa-briefcase"></i>
                                <p><a href='portfolio' aria-current='{segment === "portfolio" ? "page" : undefined}' class="clk hvr hide-menu">Sample works</a></p>
                            </div>

                        </div>

                        <div class="menu-right">

                            <div>
                                <i class="fa fa-eye"></i>
                                <p><a href='demo' aria-current='{segment === "demo" ? "page" : undefined}' class="clk bub3 hide-menu">Free demo</a></p>
                            </div>

                            <div>
                                <i class="fa fa-envelope"></i>
                                <p><a href='contact' aria-current='{segment === "contact" ? "page" : undefined}' class="clk bub2 hide-menu">Contact me</a></p>
                            </div>

                            <div>
                                <i class="fa fa-dollar"></i>
                                <p><a href='affiliate' aria-current='{segment === "affiliate" ? "page" : undefined}' class="clk hvr hide-menu">Earn money</a></p>
                            </div>

                            <div>
                                <i class="fa fa-shopping-cart"></i>
                                <p><a href="https://bands.flairdd.com" class="clk bub1 hide-menu">Blog &amp; shop</a></p>
                            </div>

                        </div>

                    </nav>
                </div>
            </div>
