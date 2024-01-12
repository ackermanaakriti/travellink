import React, {useRef} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PackagesCard from './PackagesCard';

const RelatedPackageSlider = ({relatedPackagesListData}) => {
    const sliderRef = useRef(null);
    const settings = {
        dots: false,
        nav:false,
        infinite: false,
        autoplay: true,
        slidesToShow:3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };

    return (<div>
        <Slider {...settings}
            ref={sliderRef}
            className="flex items-center">       
          {
                relatedPackagesListData ?. map((item, index) => (
                    <div className='px-[24px]'
                        key={index}>
                        <PackagesCard key={index}
                                data={item} Package={item?.name}
                                link={`/details/${item?.slug}`}/>
                    </div>
                ))
            } 
            </Slider>
    </div>)
}

export default RelatedPackageSlider
