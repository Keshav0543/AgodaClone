
function Header() {
    return (
        <>
            <div className="rootHdiv">
                <div className="Logodiv">
                    <img src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg" alt="Agoda-img"></img>
                </div>

                <div className="TitleLeftDiv">
                    <p>Flight+Hotel</p>
                    <p>Hotels & Homes</p>
                    <p>Activities</p>
                    <p>Coupons & Deals</p>
                    <p>Esim</p>
                    <p>Travel Guides</p>
                </div>

                <div className="TitleRightDiv">
                    <button>List Your Place</button>
                    <button>Sign In</button>
                    <button>Create Account</button>
                </div>
            </div>

            <div className="BannerDiv">
                <div className="BannerImgdiv">
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/052/947/141/small/ocean-waves-under-a-clear-sky-during-midday-in-a-serene-location-photo.jpeg"></img>
                </div>

                <div className="BannerTitle">
                    <p>See the world for less</p>
                </div>

                <div className="Form1">
                    <div className="Common-share">
                        <div className="svg-img">
                            <img
                                src="https://cdn6.agoda.net/cdn-design-system/icons/9142081a.svg"
                                alt="hotel icon"
                            />
                        </div>

                        <div className="Titlesvg">
                            <p>Hotels</p>
                        </div>
                    </div>

                     <div className="Common-share">
                        <div className="svg-img">
                            <img
                                src="https://cdn6.agoda.net/cdn-design-system/icons/9d2b6cd3.svg"
                                alt="Flights icon"
                            />
                        </div>

                        <div className="Titlesvg">
                            <p>Flights</p>
                        </div>
                    </div>

                    <div className="Common-share">
                        <div className="svg-img">
                            <img
                                src="https://cdn6.agoda.net/cdn-design-system/icons/24795ac0.svg"
                                alt="Homes icon"
                            />
                        </div>

                        <div className="Titlesvg">
                            <p>Homes & Apts</p>
                        </div>
                    </div>

                      <div className="Common-share">
                        <div className="svg-img">
                            <img
                                src="https://cdn6.agoda.net/cdn-design-system/icons/2f5eefc3.svg"
                                alt="Flight+Hotel icon"
                            />
                        </div>

                        <div className="Titlesvg">
                            <p>Flight+Hotel</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;