function Footer(){
    return(
        <>
<footer className=" text-center text-white bg-black p-4" >
  <div className="container p-4">
    
    <section className="">
      <form action="">
        <div className="row d-flex justify-content-center">
          <div className="col-auto">
            <p className="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>
          <div className="col-md-5 col-12">         
            <div className="form-outline form-white mb-4">
              <input type="email" id="form5Example2" className="form-control" placeholder="emil adress"/>
            </div>
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-outline-info mb-4">
              Subscribe
            </button>
          </div>        
        </div>        
      </form>
    </section>  
    <section className="mb-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
        distinctio earum repellat quaerat voluptatibus placeat nam,
        commodi optio pariatur est quia magnam eum harum corrupti dicta,
        aliquam sequi voluptate quas.
      </p>
    </section>
  </div>
  <div className="text-center p-4" >
    © 2020 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
</footer>
        </>
    )
}
export default Footer;