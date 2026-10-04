import Image from "next/image";
import React from "react";

const FoodDetailPage = async ({ params }) => {
  const { foodId } = await params;

  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`
  );

  const data = await res.json();
  const food = data.data;

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <div className="max-w-6xl mx-auto px-4">

        {/* Main Food Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-base-100 rounded-2xl shadow-lg overflow-hidden">

          {/* Food Image */}
          <div className="flex items-center justify-center bg-base-200 p-6">

            <Image src={food.image_link}
              alt={food.dish_name} width={300} height={300}></Image>
          </div>

          {/* Food Information */}
          <div className="p-6 lg:p-10 flex flex-col justify-center">

            {/* Category */}
            <span className="badge badge-primary mb-4 w-fit">
              {food.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {food.dish_name}
            </h1>

            {/* Alternative Names */}
            <div className="mb-5">
              <p className="text-sm font-semibold mb-2">
                Also known as:
              </p>

              <div className="flex flex-wrap gap-2">
                {food.alternative_names.map((name, index) => (
                  <span
                    key={index}
                    className="badge badge-outline"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {/* Rating + Price */}
            <div className="flex items-center gap-6 mb-6">

              <div>
                <p className="text-sm text-base-content/60">
                  Rating
                </p>

                <p className="text-xl font-bold">
                  ⭐ {food.rating}/5
                </p>
              </div>

              <div className="divider divider-horizontal"></div>

              <div>
                <p className="text-sm text-base-content/60">
                  Price
                </p>

                <p className="text-2xl font-bold text-primary">
                  ৳{food.price}
                </p>
              </div>

            </div>

            {/* Cuisine */}
            <div className="mb-5">
              <p className="text-sm text-base-content/60">
                Cuisine
              </p>

              <p className="font-medium">
                {food.cuisine}
              </p>
            </div>

            {/* Origin */}
            <div>
              <p className="text-sm text-base-content/60">
                Origin & Popularity
              </p>

              <p className="leading-relaxed">
                {food.origin_and_popularity}
              </p>
            </div>

          </div>
        </div>


        {/* Ingredients + Nutrition */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

          {/* Ingredients */}
          <div className="lg:col-span-2 bg-base-100 rounded-2xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-5">
              🥗 Main Ingredients
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

              {food.main_ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-base-200 rounded-lg"
                >
                  <span className="text-primary font-bold">
                    ✓
                  </span>

                  <p className="text-sm">
                    {ingredient}
                  </p>
                </div>
              ))}

            </div>
          </div>


          {/* Nutrition */}
          <div className="bg-base-100 rounded-2xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-5">
              🥑 Nutrition
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between border-b pb-3">
                <span>Calories</span>
                <span className="font-semibold">
                  {food.approximate_nutrition_per_serving.calories}
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span>Protein</span>
                <span className="font-semibold">
                  {food.approximate_nutrition_per_serving.protein}
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span>Carbohydrates</span>
                <span className="font-semibold">
                  {food.approximate_nutrition_per_serving.carbohydrates}
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span>Fat</span>
                <span className="font-semibold">
                  {food.approximate_nutrition_per_serving.fat}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Fiber</span>
                <span className="font-semibold">
                  {food.approximate_nutrition_per_serving.fiber}
                </span>
              </div>

            </div>
          </div>

        </div>


        {/* Possible Price in Dhaka */}
        <div className="bg-base-100 rounded-2xl shadow-md p-6 mt-8">

          <h2 className="text-2xl font-bold mb-5">
            💰 Possible Price in Dhaka
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="p-5 bg-base-200 rounded-xl">
              <p className="text-sm text-base-content/60">
                Home Cooked
              </p>

              <p className="text-xl font-bold mt-2">
                {food.possible_price_in_dhaka.home_cooked}
              </p>
            </div>

            <div className="p-5 bg-base-200 rounded-xl">
              <p className="text-sm text-base-content/60">
                Street Food / Small Restaurant
              </p>

              <p className="text-xl font-bold mt-2">
                {food.possible_price_in_dhaka.street_food_or_small_restaurant}
              </p>
            </div>

            <div className="p-5 bg-base-200 rounded-xl">
              <p className="text-sm text-base-content/60">
                Cafe / Healthy Eatery
              </p>

              <p className="text-xl font-bold mt-2">
                {food.possible_price_in_dhaka.cafe_or_healthy_eatery}
              </p>
            </div>

          </div>
        </div>


        {/* Cooking Steps */}
        <div className="bg-base-100 rounded-2xl shadow-md p-6 mt-8">

          <h2 className="text-2xl font-bold mb-6">
            👨‍🍳 Cooking Steps
          </h2>

          <div className="space-y-5">

            {food.cooking_steps.map((step, index) => (
              <div
                key={index}
                className="flex gap-4"
              >

                {/* Step Number */}
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-content flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Step */}
                <div className="flex-1">
                  <p className="leading-relaxed">
                    {step}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
};

export default FoodDetailPage;