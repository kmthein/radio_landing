import '../scss/style.scss';
import $ from 'jquery';
import 'slick-carousel';

$('.gallery__container').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  })