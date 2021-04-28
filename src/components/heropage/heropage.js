import './heropage.scss'

const HeroPage = () => {
    return(
        <div className='hero-page'>
            <div className='container'>
                <div className='image-container'>
                    <div className='hero-image image1'>
                        <div className='hero-text'>
                        <div className='heading'>
                            <h2>Our new Hibisucy Top.</h2>
                        <h2>Naturally died organic fabric.</h2>
                        </div>
                        
                        <a className='link' href='/'>show slow</a>
                        </div>
                    </div>
                    <div className='hero-image image2'></div>
                </div>
                <div className='data-container'>
                    <div className='data'>
                        <div className='hand-img'>
                            <span></span>
                        </div>
                        <div className='moto'>
                            <h4>
                                Feel good, do good. For us, for you & for our world. 
                                Bringing thoughtfulness to all the little things that make us who we are.
                                Why? Because this is what our travels with nature have taught us, 
                                and continues to teach us. Read about us
                            </h4>
                        </div>
                        <div className='qualities'>
                            <div className='quality qua1'>
                                <span></span>
                                <h4>Sustainable</h4>
                            </div>
                            <div className='quality  qua2'>
                                <span></span>
                                <h4>Hand Made</h4>
                            </div>
                            <div className='quality  qua3'>
                                <span></span>
                                <h4>Comfortable</h4>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default HeroPage