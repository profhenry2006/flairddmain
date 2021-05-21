<script>
    import Footer from '../components/Footer.svelte';

    import Socials from '../components/Socials.svelte';
</script>

<svelte:head>
	<title>Contact FlairDM.com - Flair Digital Media - Cambodia</title>
</svelte:head>

        <div class="cd-contact cd-main-content">
            <div class="buttons-hire">
                <a class="button button-blue hide-menu clk hvr" href="demo"><i class="fa fa-phone"></i>HIRE ME</a>
            </div>
            <div class="buttons-menu">
                <span class="button button-blue hvr clk" onclick="toggleOverlay()"><i class="fa fa-toggle-off"></i><i class="fa fa-toggle-on"></i>MENU</span>
            </div>
            <div class="wrapper contacty">
                <div class="logo"><img src="images/logo2.png" alt="FlairDM logo"/></div>
                <div class="contactbanner2">
                    <div class="bannertxtc">
                        <div class="bird"><img src="images/bird.png" alt="" /></div>
                        <div class="bannersplat">
                            <img class="splatoverlay" src="images/splatterdark.png" width="" height="" alt="" />
                            <div class="fluid lbblue">
                            </div>
                        </div>
                        <h1 class="fade-in">Send me a note</h1>
                    </div>
                    <div class="scroll2 bounce"></div>
                </div>

                <div class="fontsncolours big-btn">
                    <h2 class="hideme">Want to contact me for work?</h2>
                    <p class="hideme">I'm reachable and available to work with you. Click the link below to request a FREE demo and one-on-one consultation. Also get to know my process.</p>
                    <a class="hideme clk bub3" href="demo">Get started here</a>
                    <p>&nbsp;</p>
                </div>

                <div class="formholder">
                    <div class="bluewrapcontact group">
                    <h2 class="hideme">Want to contact me for any other reason?</h2>
                    <p class="hideme">Call to my phone number or send a direct email to me.</p>
                    <p class="big">Email: hello@flairdd.com</p>
                    <p class="big">Phone: +855-15-607-180</p>
                    <p class="hideme">You may prefer to use the contact form below. Please fill it appropriately and submit. I will surely reply as soon as possible.</p>
                        <form action="https://formsubmit.io/send/8d385950-c814-4436-b8b6-32217751a3cd" method="post">
                        <input name="_redirect" type="hidden" id="name" value="https://flairdd.com">
                            <div class="fieldwrap group">
                                <div class="formleft">
                                    <h3 class="fieldlabel">What's your name?</h3><br>
                                    <input type="text" name="cf_name" placeholder="Enter your name here"><br></div>
                                <div class="formright">
                                    <h3 class="fieldlabel">What's your email?</h3><br>
                                    <input type="text" name="cf_email" placeholder="Enter your best email address here"><br></div>
                            </div>
                            <div class="formmessage">
                                <h3 class="fieldlabel">What's the content of your message?</h3><br>
                                <textarea name="cf_message" class="formmessagestyle" placeholder="Tell me why you are contacting me. Pour it out-ch here..."></textarea><br></div>
                            <input type="submit" value="Filled the form already? Send Now">
                            <input name="_formsubmit_id" type="text" style="display:none">
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <Footer />

        <Socials />