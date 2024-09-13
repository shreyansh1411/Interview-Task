function footer(){
    return(
        <>
            <div className="footer">
                <div className="planet">
                    <div className="planet-box"></div>
                    <p>Our mission is very important to the planet: we<br/>
                        plant as many trees as possible. Can you figure<br/> 
                        out?</p>
                </div>
                <div className="information">
                    <h5>More informatio</h5>
                    <p>Home</p>
                    <p>About us</p>
                    <p>Shop</p>
                    <p>Contact</p>
                    <h5 style={{"margin-top":"15px"}}>Stay in contact</h5>
                    <p>info@contact.com</p>
                    <p>+34 654 654 654</p>
                </div>
                <div className="suscribe">
                    <div className="suscribe-box">
                        <h5>Suscribe now to the<br/> 
                        newsletter</h5>
                        <button style={{"margin-bottom":"5px"}}><span>Your Name</span></button>
                        <button style={{"margin-top":"-100px"}}><span>Your Email</span></button>
                        <p>I consent the privacy policy</p>
                        <button className="suscribe-button"><span>Subscribe</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default footer;