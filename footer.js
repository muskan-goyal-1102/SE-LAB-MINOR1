document.write(`<div class="footer2">
	<h4>Want to know about our future events?</h4>
	<h5>Subscribe to our newsletter now.</h5>
	<form method="post">
		<input type="email" class="e" name="email" value="" placeholder="Enter your Email Address" size="70">
		<br>
		<button type="submit" class="eb1" formaction="" onclick="msga()">Yes! Why not!</button>
		<button type="submit" class="eb1" formaction="home.html">No, I would prefer to stay away from amazing events!</button>
	</form>
</div>
<div class="footer3">
	<div class="leftbox">
		<p style="font-weight:bolder; font-size:25px;">Stay Tuned!</p>
		<p>Connect with us</p>
		<p style="margin-bottom:10px;">and stay in the loop.</p>
		<a href="https://www.instagram.com" target="_blank"><img src="footer/1.png" alt="">
			<a href="https://twitter.com" target="_blank"><img src="footer/4.png" alt="">
				<a href="https://www.facebook.com" target="_blank"><img src="footer/3.png" alt="">
					<a href="https://www.linkedin.com" target="_blank"><img src="footer/5.png" alt="">
	</div>
	<div class="middlebox">
		<a href="contact.html">Contact Us</a><br>
		<a href="team.html">Our Team</a><br>
		<form action="order.html">
			<button type="submit" class="o">REGISTER NOW!</button>
		</form>
	</div>
	<div class="rightbox">
		<p style="font-weight:bolder; font-size:25px;">Questions?</p>
		<p>We've got answers.</p>
		<p>Try us!</p>
		<!--  <form action="mailto:goyalmuskan11@gmail.com">
      <div class="r">
      <button type="submit" class="eu">EMAIL US</button>-->
		<a class="wa" href="https://wa.me/919910444383" target="_blank">
			<span class="wa-icon"><i class="fa fa-whatsapp" aria-hidden="true"></i></span>
		</a>
		<!--</div>
  </form>-->
	</div>
</div>
<footer>
	<p>Copyright - SCIS 2022</p>
</footer>
<script>
	function msga() {
		alert("Thank you for subscribing!")
	}
</script>`)
