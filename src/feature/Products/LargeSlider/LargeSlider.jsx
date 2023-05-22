import Slider from "react-slick";

export const LargeSlider = ({ images, closeSlider, settings }) => {
  return (
    <>
      <Slider {...settings} className="largeSlider">
        {images?.map((image, id) => (
          <img key={id} src={image} />
        ))}
      </Slider>
      <div className="largeSlider__close__button" onClick={closeSlider}>
        <div className="largeSlider__close__button__line left"></div>
        <div className="largeSlider__close__button__line right"></div>
      </div>
    </>
  );
};
