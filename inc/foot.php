<div class="sepreate"></div>
<div class="footer">
    <div class="footer-container">
        <div class="footer-item footer-products">
            <div class="footer-title">
                <a href="../products">PRODUCTS</a>
            </div>
            <div class="footer-detail">
                <p><a href="../products/rental-led.php">Rental LED Display</a></p>
                <p><a href="../products/commercial-led.php">Commercial LED Display</a></p>
                <p><a href="../products/fine-pitch.php">Fine Pitch LED Display</a></p>
                <p><a href="../products/creative-led.php">Creative LED Display</a></p>
            </div>
        </div>
        <div class="footer-item footer-gallery">
            <div class="footer-title">
                <a href="../gallery">GALLERY</a>
            </div>
            <div class="footer-detail">
                <p><a href="../gallery-detail/rental-cases.php">Rental Event Cases</a></p>
                <p><a href="../gallery-detail/fixed-cases.php">Fixed Install Cases</a></p>
                <p><a href="../gallery-detail/fine-pitch-cases.php">Fine Pitch Cases</a></p>
            </div>
        </div>
        <div class="footer-item input-item">
            <div class="footer-title">
                GET A QUOTE
            </div>
            <div class="footer-detail">
                <form id="myform" name="myform" method="post" action="/quotes/Index/index" onSubmit="return Check()">
                    <p class="input-line">
                        <input type="text" name="name" maxlength="50" placeholder="Name">
                        <input type="text" name="company" maxlength="50" placeholder="Company">
                    </p>
                    <p class="input-line">
                        <input type="text" name="email" maxlength="50" placeholder="E-mail">
                        <input type="text" name="tel" maxlength="50" placeholder="Telephone">
                    </p>
                    <textarea name="contents" maxlength="1000" placeholder="Message"></textarea>
                    <button type="submit" class="submit foot-submit">Submit</button>
                </form>
            </div>
        </div>
<script language="javascript">
function Check()
{
    if (document.myform.name.value.length==""){
        alert ("Your name is null!");
        document.myform.name.focus();
        return false;
    }
 if (document.myform.company.value.length==""){
        alert ("Company name is null!");
        document.myform.company.focus();
        return false;
    }
    if (document.myform.email.value.length==""){
        alert ("Email is null!");
        document.myform.email.focus();
        return false;
    }
    if (document.myform.tel.value.length==""){
        alert ("Telephone is null!");
        document.myform.tel.focus();
        return false;
    }
    if (document.myform.contents.value.length==""){
        alert ("Message is null!");
        document.myform.contents.focus();
        return false;
    }	
}
</script>

<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5d55529277aa790be32f093b/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->

        <div class="footer-item footer-contact">
            <div class="footer-title">
                <a href="../contact">CONTACT</a>
            </div>
            <div class="footer-detail">
                <a class="companyName">Hongkong Cinstar Electronics  Co., Limited</a>
                <a class="adderss">Building A, Hengchangrong technology park, Shiyan street, Boan district, Shenzhen, China</a>
                <a>sales@cinstar-led.com</a>
                <a class="phone">+86 183 2088 9297</a>
            </div>
            <div class="footer-social">
                <a href="https://www.facebook.com/Cinstar-Electronics-2334889366581201/?modal=admin_todo_tour" target="_blank"><i class="fa fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/cinstarled/" target="_blank"><i class="fa fa-instagram"></i></a>
                <a href="https://twitter.com/Cinstar_led" target="_blank"><i class="fa fa-twitter"></i></a>
            </div>
        </div>
    </div>
</div>
<div class="copy">
    Copyright &copy; Cinstar Electronics. All Rights Reserved
</div>