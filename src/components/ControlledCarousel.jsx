import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'assets/img/homepage-banner-1.png'} 
                        alt='test' />
                    <Carousel.Caption>
                        {/* <h3>First Demo </h3> */}
                    </Carousel.Caption>
                </Carousel.Item  >

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'assets/img/homepage-banner-bus-solution-2.png'}
                        alt='test' />
                    <Carousel.Caption>
                        {/* <h3>Second Demo</h3> */}
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'assets/img/homepage-banner-mobile-app-3.png'}
                        alt='test' />
                    <Carousel.Caption>
                        {/* <h3>Third Demo</h3> */}
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'assets/img/homepage-banner-home-security-4.png'}
                        alt='test' />
                    <Carousel.Caption>
                        {/* <h3>Forth Demo</h3> */}
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={'assets/img/homepage-product-5.png'}
                        alt='test' />
                    <Carousel.Caption>
                        {/* <h3>Fifth Demo</h3> */}
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}


export default ControlledCarousel;