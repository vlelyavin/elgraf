import { Container } from "../../../components/Container";
import tray from "../../../assets/images/packaging/tray.png";
import childrengoods from "../../../assets/images/packaging/childrengoods.svg";
import industrialgoods from "../../../assets/images/packaging/industrialgoods.png";
import shoes from "../../../assets/images/packaging/shoes.png";
import alcoholgoods from "../../../assets/images/packaging/alcoholgoods.png";
import transporting from "../../../assets/images/packaging/transporting.png";
import exhibition from "../../../assets/images/packaging/exhibition.png";
import other from "../../../assets/images/packaging/other.png";
import "./Packaging.css";
import { FormattedMessage } from "react-intl";
import { ROUTES } from "../../../constants/routes";
import { Link } from "react-router-dom";

import alcoholGoodsImage1 from "../../../assets/images/products/alcohol/1.png";
import alcoholGoodsImage2 from "../../../assets/images/products/alcohol/2.png";
import alcoholGoodsImage3 from "../../../assets/images/products/alcohol/3.png";
import alcoholGoodsImage4 from "../../../assets/images/products/alcohol/4.png";
import alcoholGoodsImage5 from "../../../assets/images/products/alcohol/5.png";
import alcoholGoodsImage6 from "../../../assets/images/products/alcohol/6.png";
import alcoholGoodsImage7 from "../../../assets/images/products/alcohol/7.png";
import alcoholGoodsImage8 from "../../../assets/images/products/alcohol/8.png";

import industrialGoodsImage1 from "../../../assets/images/products/industrial/1.png";
import industrialGoodsImage2 from "../../../assets/images/products/industrial/2.png";
import industrialGoodsImage3 from "../../../assets/images/products/industrial/3.png";
import industrialGoodsImage4 from "../../../assets/images/products/industrial/4.png";
import industrialGoodsImage5 from "../../../assets/images/products/industrial/5.png";
import industrialGoodsImage6 from "../../../assets/images/products/industrial/6.png";
import industrialGoodsImage7 from "../../../assets/images/products/industrial/7.png";
import industrialGoodsImage8 from "../../../assets/images/products/industrial/8.png";
import industrialGoodsImage9 from "../../../assets/images/products/industrial/9.png";
import industrialGoodsImage10 from "../../../assets/images/products/industrial/10.png";

import transportingImage1 from "../../../assets/images/products/transporting/1.png";
import transportingImage2 from "../../../assets/images/products/transporting/2.png";
import transportingImage3 from "../../../assets/images/products/transporting/3.png";
import transportingImage4 from "../../../assets/images/products/transporting/4.png";
import transportingImage5 from "../../../assets/images/products/transporting/5.png";
import transportingImage6 from "../../../assets/images/products/transporting/6.png";
import transportingImage7 from "../../../assets/images/products/transporting/7.png";
import transportingImage8 from "../../../assets/images/products/transporting/8.png";
import transportingImage9 from "../../../assets/images/products/transporting/9.png";
import transportingImage10 from "../../../assets/images/products/transporting/10.png";
import transportingImage11 from "../../../assets/images/products/transporting/11.png";
import transportingImage12 from "../../../assets/images/products/transporting/12.png";
import transportingImage13 from "../../../assets/images/products/transporting/13.png";
import transportingImage14 from "../../../assets/images/products/transporting/14.png";

import childrenGoodsImage1 from "../../../assets/images/products/children/1.png";
import childrenGoodsImage2 from "../../../assets/images/products/children/2.png";
import childrenGoodsImage3 from "../../../assets/images/products/children/3.png";

import bagInBoxImage1 from "../../../assets/images/products/bagInBox/1.png";
import bagInBoxImage2 from "../../../assets/images/products/bagInBox/2.png";
import bagInBoxImage3 from "../../../assets/images/products/bagInBox/3.png";
import bagInBoxImage4 from "../../../assets/images/products/bagInBox/4.png";
import bagInBoxImage5 from "../../../assets/images/products/bagInBox/5.png";
import bagInBoxImage6 from "../../../assets/images/products/bagInBox/6.png";
import bagInBoxImage7 from "../../../assets/images/products/bagInBox/7.png";
import bagInBoxImage8 from "../../../assets/images/products/bagInBox/8.png";
import bagInBoxImage9 from "../../../assets/images/products/bagInBox/9.png";
import bagInBoxImage10 from "../../../assets/images/products/bagInBox/10.png";
import bagInBoxImage11 from "../../../assets/images/products/bagInBox/11.png";
import bagInBoxImage12 from "../../../assets/images/products/bagInBox/12.png";
import bagInBoxImage13 from "../../../assets/images/products/bagInBox/13.png";
import bagInBoxImage14 from "../../../assets/images/products/bagInBox/14.png";

import showBoxImage1 from "../../../assets/images/products/showBox/6.png";
import showBoxImage2 from "../../../assets/images/products/showBox/2.png";
import showBoxImage3 from "../../../assets/images/products/showBox/3.png";
import showBoxImage4 from "../../../assets/images/products/showBox/4.png";
import showBoxImage5 from "../../../assets/images/products/showBox/5.png";
import showBoxImage6 from "../../../assets/images/products/showBox/1.png";
import showBoxImage7 from "../../../assets/images/products/showBox/7.png";
import showBoxImage8 from "../../../assets/images/products/showBox/8.png";
import showBoxImage9 from "../../../assets/images/products/showBox/9.png";
import showBoxImage10 from "../../../assets/images/products/showBox/10.png";
import showBoxImage11 from "../../../assets/images/products/showBox/11.png";
import showBoxImage12 from "../../../assets/images/products/showBox/12.png";
import showBoxImage13 from "../../../assets/images/products/showBox/13.png";
import showBoxImage14 from "../../../assets/images/products/showBox/14.png";
import showBoxImage15 from "../../../assets/images/products/showBox/15.png";
import showBoxImage16 from "../../../assets/images/products/showBox/16.png";
import showBoxImage17 from "../../../assets/images/products/showBox/17.png";
import showBoxImage18 from "../../../assets/images/products/showBox/18.png";

import leftArrow from "../../../assets/images/icons/arrowLeft.svg";
import rightArrow from "../../../assets/images/icons/arrowRight.svg";
import Slider from "react-slick";

function CustomPrevArrow(props) {
  const { className, onClick } = props;
  return <img src={leftArrow} alt="leftArrow" className={className} onClick={onClick} />;
}

function CustomNextArrow(props) {
  const { className, onClick } = props;
  return <img src={rightArrow} alt="leftArrow" className={className} onClick={onClick} />;
}

export const Packaging = () => {
  const industrialGoodsImages = [
    industrialGoodsImage1,
    industrialGoodsImage2,
    industrialGoodsImage3,
    industrialGoodsImage4,
    industrialGoodsImage5,
    industrialGoodsImage6,
    industrialGoodsImage7,
    industrialGoodsImage8,
    industrialGoodsImage9,
    industrialGoodsImage10,
  ];

  const alcoholGoodsImages = [
    alcoholGoodsImage1,
    alcoholGoodsImage2,
    alcoholGoodsImage3,
    alcoholGoodsImage4,
    alcoholGoodsImage5,
    alcoholGoodsImage6,
    alcoholGoodsImage7,
    alcoholGoodsImage8,
  ];

  const transportingImages = [
    transportingImage1,
    transportingImage2,
    transportingImage3,
    transportingImage4,
    transportingImage5,
    transportingImage6,
    transportingImage7,
    transportingImage8,
    transportingImage9,
    transportingImage10,
    transportingImage11,
    transportingImage12,
    transportingImage13,
    transportingImage14,
  ];

  const bagInBoxImages = [
    bagInBoxImage1,
    bagInBoxImage2,
    bagInBoxImage3,
    bagInBoxImage4,
    bagInBoxImage5,
    bagInBoxImage6,
    bagInBoxImage7,
    bagInBoxImage8,
    bagInBoxImage9,
    bagInBoxImage10,
    bagInBoxImage11,
    bagInBoxImage12,
    bagInBoxImage13,
    bagInBoxImage14,
  ];

  const showBoxImages = [
    showBoxImage1,
    showBoxImage2,
    showBoxImage3,
    showBoxImage4,
    showBoxImage5,
    showBoxImage6,
    showBoxImage7,
    showBoxImage8,
    showBoxImage9,
    showBoxImage10,
    showBoxImage11,
    showBoxImage12,
    showBoxImage13,
    showBoxImage14,
    showBoxImage15,
    showBoxImage16,
    showBoxImage17,
    showBoxImage18,
  ];

  const childrenGoodsImages = [childrenGoodsImage1, childrenGoodsImage2, childrenGoodsImage3];

  const settings = {
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const items = [
    {
      title: <FormattedMessage id="packaging.trays" />,
      src: tray,
      images: industrialGoodsImages,
      background: "#FFB919",
    },
    {
      title: <FormattedMessage id="packaging.childrenGoods" />,
      src: childrengoods,

      images: childrenGoodsImages,
      background: "#B1D036",
    },
    {
      title: <FormattedMessage id="packaging.industrialGoods" />,
      src: industrialgoods,
      images: industrialGoodsImages,
      background: "#21A7FF",
    },
    {
      title: <FormattedMessage id="packaging.shoes" />,
      src: shoes,
      images: [shoes],
      background: "#366BD0",
    },
    {
      title: <FormattedMessage id="packaging.alcoholGoods" />,
      src: alcoholgoods,
      images: alcoholGoodsImages,
      background: "#366BD0",
    },
    {
      title: <FormattedMessage id="packaging.differentNeeds" />,
      src: other,
      images: [other],
      background: "#6E9913",
    },
    {
      title: <FormattedMessage id="packaging.transport" />,
      src: transporting,
      images: transportingImages,
      background: "#FFB919",
    },
    {
      title: <FormattedMessage id="packaging.displays" />,
      src: exhibition,
      images: showBoxImages,
      background: "#B1D036",
    },
  ];
  return (
    <Container>
      <section className="packaging">
        <h1 className="packaging__title">
          <FormattedMessage id="packaging.title" />
          {/* Ми виготовляємо упаковки для: */}
        </h1>
        <div className="packaging__items">
          {items.map((item, id) => (
            <Link to={ROUTES.products} className="packaging__item" key={id} style={{ background: item.background }}>
              <Slider {...settings} className="packaging__item__image__container">
                {item.images.map((image, id) => (
                  <img key={id} src={image} alt="industrialGoodsImage" className="packaging__item__image" />
                ))}
              </Slider>
              <p className="packaging__item__title">{item.title}</p>
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
};
