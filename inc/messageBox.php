<div class="message-box">
    <div class="message-wrapper">
        <p class="quote-title">NEED A QUOTE ?<p>
        <form id="myforms" name="myforms" method="post" action="/quotes/Index/index" onSubmit="return Checks()">
            <div class="contact-body">
                <p class="input-contact">
                    <input type="text" placeholder="Name" maxlength="50" name="name" class="contact-input">
                    <input type="text" placeholder="Company" maxlength="50" name="company" class="contact-input">
                </p>
                <p class="input-contact">
                    <input type="text" placeholder="E-mail" maxlength="50" name="email" class="contact-input">
                    <input type="text" placeholder="Telephone" maxlength="50" name="tel" class="contact-input">
                </p>
                <p class="input-contact">
                    <textarea rows="5" placeholder="Message" name="contents" maxlength="1000" class="contact-textarea"></textarea>
                </p>
                <div class="btn">
                    <button class="submit">Submit</button>
                </div>
            </div>
        </form>
    </div>
</div>