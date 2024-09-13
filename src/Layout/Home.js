import React from "react";
function home(){
    return(
        <>
        <div className="future">
            <div className="content">
                <h1>The future of web<br/>
                design, today</h1>
                <h4>The future of web design, today</h4>
                <button className="future-button"><span>Call to action</span></button>
            </div>
            <div className="image">
                <div className="future-img"></div>
            </div>
        </div>

        <div className="forgot">
            <div className="forgot-content">
                <h4>Don’t forget to grab this one, it’s free!</h4>
                <p>Download the Ultimate con tomate guide.</p>
                </div>
            <div className="forgot-button">
                <button><span>Call to action</span></button>
            </div>
        </div>

        <div className="mission">
            <div className="mission-text1">
                <h3>What we do</h3>
                <p>Our mission is very important to the planet: we<br/>
                plant as many trees as possible. </p>
                <p>Can you figure out?</p>
            </div>
            <div className="mission-text2">
                <p>We recycle everything we see</p>
                <p>We teach people how to reuse their stuff</p>
                <p>We belive in human being as problem solver</p>
            </div>
        </div>

        <div className="Featured">
            <p>Featured things</p>
            <h6>Our mission is very important to the planet: we plant as many<br/>
            trees as possible. Can you figure out?</h6>
        </div>
        <div className="card">
            <div className="card-text">
                <div className="card-img"></div>
                <h3>The future of web<br/> 
                design, today</h3>
                <p>The future of web design, today</p>
                <button><span>Call to action</span></button>
            </div>
            <div className="card-text">
            <div className="card-img"></div>
                <h3>The future of web<br/> 
                design, today</h3>
                <p>The future of web design, today</p>
                <button><span>Call to action</span></button>
            </div>
            <div className="card-text">
            <div className="card-img"></div>
                <h3>The future of web<br/> 
                design, today</h3>
                <p>The future of web design, today</p>
                <button><span>Call to action</span></button>
            </div>
        </div>
        <h3>Our mission is very important to the planet: we plant as many<br/> 
        trees as possible. Can you figure out?</h3>
        <button><span>call to action</span></button>
        </>
    )
}

export default home;