<script>
    import Footer from '../components/Footer.svelte';

    import Socials from '../components/Socials.svelte';
</script>

<svelte:head>
    <title>Portfolio of FlairDD.com - Flair Designer and Developer - Brand strategist</title>
</svelte:head>

        <div class="cd-londonborn cd-main-content">
            <div class="buttons-hire">
                <a class="button button-blue hide-menu clk hvr" href="demo"><i class="fa fa-phone"></i>HIRE ME</a>
            </div>
            <div class="buttons-menu">
                <span class="button button-blue hvr clk" onclick="toggleOverlay()"><i class="fa fa-toggle-off"></i><i class="fa fa-toggle-on"></i>MENU</span>
            </div>
            <div class="wrapperwork">
                <div class="logo"><img src="images/logo2.png" alt="FlairDD logo"/></div>
                <div class="worklbbanner">
                    <div class="bannertxt">
                        <div class="workbannerpic"><img src="images/wine.png" alt="" /></div>
                        <div class="bannersplat">
                            <img class="splatoverlay" src="images/splatterdark.png" alt="" />
                            <div class="fluid lbdark">
                            </div>
                        </div>
                        <h1 class="fade-in">Portfolio</h1>
                        <div class="scroll2 bounce"></div>
                    </div>
                </div>
                <div class="workpix"><img src="images/londonborn-device.png" alt="" /></div>
                <div class="workintrocont">
                    <div class="workintrobox">
                        <h2>Wine with a stiff upper lip.</h2>
                        <p>Aure wines was a family-owned winery in Beamsville who needed to tell a story: their own. Coming from England, a country more known for drinking wine than making it, set them apart. And when it comes to wine, that’s what makes you stand out. Not just the wine. But the unique experience. Squhead.com stepped in to challenge the brand to stay true to its roots. Soon after the result was a rebrand to the London Born Wine Co., complete with this first execution of their website.</p>
                    </div>
                </div>
                <div class="wires group">
                    <div class="wiresleft">
                        <h2>Nevermind the bollocks.</h2>
                        <p>The first launch of the website needed to be straight to the point, communicating the rebrand in a way that was fun and easy to navigate. But we also needed to keep in mind that the site would grow in the near future. The focus was first on telling the story. And doing so in a way that would set them apart from the rest of the Beamsville Bench and Ontario’s growing wine region.</p>
                    </div>
                    <div class="wiresright hideme"><img src="images/work-lb-wires.png" alt="" /></div>
                </div>
                <div class="brandpic">
                    <div class="brandpicover"><img src="images/work-lb-bottles.png" alt="" /></div>
                    <div class="fluiddark lbblob">
                    </div>
                </div>
                <div class="fontsncolours group">
                    <h2 class="hideme">Fonts &amp; Colours</h2>
                    <div class="font hideme"><img src="images/LBfont.png" alt="" /></div>
                    <div class="colours hideme"><img src="images/LBcar.png" alt="" /></div>
                </div>

                <div class="mobileshots">
                    <div class="shot1"><img src="images/work-lb-phone1.png" alt="" /></div>
                    <div class="shot2"><img src="images/work-lb-phone3.png" alt="" /></div>
                    <div class="shot3"><img src="images/work-lb-phone2.png" alt="" /></div>
                </div>

                <div class="fullshot"><img src="images/work-lb-full.png" alt="" /></div>

                <div class="fontsncolours">
                    <h2 class="hideme">Like the quality of what you see?</h2>
                    <a class="cd-btn" href="demo">Click here to start your project with a FREE demo</a>
                </div>

                <div class="nextsubbanner">
                    <a class="cd-btn" href="subaru.html">Up next: Subaru</a>
                </div>
            </div>
        </div>

        <Footer />

        <Socials />