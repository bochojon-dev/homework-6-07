import React, { useEffect, useState } from "react";
import axios from "../../api/index";
import { Link, useParams } from "react-router-dom";

const SingleRoute = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    axios
      .get(`/product/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);
  //   if (!product) {
  //     return (
  //       <img
  //         src={
  //           "https://res.cloudinary.com/practicaldev/image/fetch/s--U0qzSe0R--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dn1cmfwkc5iksmu2yw16.jpg"
  //         }
  //         alt="loading..."
  //       />
  //     );
  //   }
  console.log(product);
  return (
    <div className="single">
      <div className="container">
        <div
          style={{
            paddingTop: 120,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
          className="single_contents"
        >
          <img src={product?.images[0]} alt="product" />
          <div className="more_images">
            <img src={product?.images[1]} alt="" />
            <img src={product?.images[2]} alt="" />
          </div>
          <h3>{product?.title} title</h3>
          <p>{product?.description} description</p>
          <h4>
            Price: <span>cost</span>
          </h4>
          <Link to={"/products"}>
            <button>go back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleRoute;
