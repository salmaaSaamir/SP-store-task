import '../style/about.css'
function AboutUs(){
    return(
        <>
        <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img  class="d-block w-100" src="https://img.freepik.com/free-photo/about-us-information-service-sharing-join-concept_53876-124056.jpg?w=1060&t=st=1688841431~exp=1688842031~hmac=31d131e420ef20ccd77ea03068d1688e382d248bf805dd6e8bce9409722d0529" alt="First slide" />
      <div class="carousel-caption d-none d-md-block">
        <h5>Who We Are</h5>
        <p>we are an electric store , you can find each item you search for and if you don't we can make it available as soon as it possible.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img  class="d-block w-100" src="https://img.freepik.com/free-photo/business-team-present-professional-investor-working-new-startup-project-finance-meeting_1421-97.jpg?w=1060&t=st=1688841973~exp=1688842573~hmac=1f23ce422af72544d3e3aadde11efede15a81af6058b1ceb1018a759ef8cbfe0" alt="Second slide" />
      <div class="carousel-caption d-none d-md-block">
        <h5>How We Start</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img   class="d-block w-100" src="https://img.freepik.com/free-photo/man-playing-tablet-with-shopping-cart_1134-193.jpg?w=1060&t=st=1688844210~exp=1688844810~hmac=f442bea7179a80431d5c717ab867de2418ef14630fc10712c4483d8eabc73731" alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
        <h5>what you will find in the store</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}
export default AboutUs;