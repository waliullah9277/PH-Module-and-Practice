import Image from "next/image";
import Link from "next/link";
import React from "react";

const FoodCard = ({food}) => {

    const {id, dish_name, price, image_link} = food;
  return (
    <div className="card bg-base-100 shadow-sm mt-5 py-5">
      <Image 
        src={image_link}
        width={230}
        height={230}
        alt={dish_name}
        className="mx-auto"
      ></Image>
      <div className="card-body">
        <h2 className="card-title">
          {dish_name}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <h4>Price: {price}</h4>
        <div className="card-actions justify-end">
          <Link href={`/menu/${id}`}>
            <div className="badge badge-outline">Food Details</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
