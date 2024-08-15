import CardStyle from "./card.style";

const Card = ({ img, alt, name, onclick }) => {
  return (
    <CardStyle>
      <div onClick={() => onclick(name)} className="card__box-wrapper">
        <img src={img} alt={alt} />
        <p className="card__title">{name}</p>
      </div>
    </CardStyle>
  );
};

export default Card;
