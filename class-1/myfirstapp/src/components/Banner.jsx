import './banner.css'

function Banner(){
    return(
        <div className="banner-container">
            <div className="banner-hero">
                <div className="banner-content">
                    <h1 className="banner-title">Great deals on top products</h1>
                    <p className="banner-subtitle">Shop the latest collection with unbeatable prices</p>
                    <button className="banner-btn">Shop Now</button>
                </div>
            </div>
            
            <div className="banner-cards">
                <div className="promo-card">
                    <h3>Electronics</h3>
                    <img src="https://via.placeholder.com/300x200/FF9900/FFFFFF?text=Electronics" alt="Electronics" />
                    <a href="#" className="card-link">See more</a>
                </div>
                <div className="promo-card">
                    <h3>Fashion</h3>
                    <img src="https://via.placeholder.com/300x200/232F3E/FFFFFF?text=Fashion" alt="Fashion" />
                    <a href="#" className="card-link">See more</a>
                </div>
                <div className="promo-card">
                    <h3>Home & Kitchen</h3>
                    <img src="https://via.placeholder.com/300x200/FF9900/FFFFFF?text=Home+Kitchen" alt="Home & Kitchen" />
                    <a href="#" className="card-link">See more</a>
                </div>
                <div className="promo-card">
                    <h3>Best Sellers</h3>
                    <img src="https://via.placeholder.com/300x200/232F3E/FFFFFF?text=Best+Sellers" alt="Best Sellers" />
                    <a href="#" className="card-link">See more</a>
                </div>
            </div>
        </div>
    )
}
export default Banner