function StarRating({ rating }) {
  let starArray = [];
  for (let i = 0; i < rating; i++) {
    starArray.push(<Img key={i} />);
  }
  return <div className="star-wrapper">{starArray}</div>;

  function Img() {
    return (
      <img
        alt=""
        className="gold-star"
        src="https://sandpack-bundler.vercel.app/img/gold-star.svg"
      />
    );
  }
}

export default StarRating;
