import React, { useState } from "react";

const Recepi = () => {
  let str = "(: Select your recipe :)";


  const [Count, setCount] = useState(str);

  function Item1() {
    return (
      <ol className="text-black-500 text-left capitalize">
        <li>
        1- Heat up 1/4 cup milk in a pan or microwave. Add instant 1 & 1/2 to 2 tablespoons instant coffee to it. You can adjust the amount of coffee powder to taste and how strong coffee you prefer.
        </li>
        <li>2- Add in 3 tablespoons sugar (adjust to taste). You can add more or less depending on the sweetness you prefer.</li>
        <li> 3- Using a spoon or whisk, mix everything together. Since the milk is hot, the coffee and sugar will dissolve easily.</li>
        <li>4- Your sweet coffee mix is now ready to be added to the blender. You can also straight away use 1/4 cup of a strong filter coffee decoction or espresso shot</li>
        <li>
         <li>5- To your blender, now add 2 cups chilled milk. I have used whole milk here. Also add 3 to 4 ice cubes (optional).</li>
         <li>6- Add the prepared coffee-sugar mix into the blender. At this point, you can use add vanilla ice cream if you want.</li>
         <li>7- Close the lid and blend for few seconds until everything is mixed together and the coffee is frothy.</li>
         <li>8- Transfer to glasses and serve immediately. You can pour some chocolate syrup in the glasses and chill for 15 minutes before pouring the coffee in glasses. The foam will settle down after a while so this is best enjoyed immediately especially if you like frothy coffee.</li>
        </li>
      </ol>
    );
  }

  const Coffee = () => {
    setCount(Item1);
  };

  function Item2() {
    return (
      <ol className="text-black text-left  text-2xl">
        <li>
          1.Set Aside a Bowl With Ice. Prepare an ice bath in a large bowl and
          set a clean bowl over it
        </li>
        <li>
          2.Mix and Simmer ,Milk Cream,
          Sugar, and Vanilla
        </li>
        <li>
          3.Beat the Eggs
        </li>
        <li>4.Add Milk Mixture</li>
        <li>5.Thicken the Custard</li>
        <li>6.Move It to the </li>
        Ice-Cream Maker
        <li>
          7.Transfer and Frezze.
        </li>
      </ol>
    );
  }

  const Ice_Cream = () => {
    setCount(Item2);
  };

  const Reset = () => {
    setCount("Select your recipe");
  };

  return (
    <>
      <div className="mt-20">
        <span>
          <p className="text-center text-4xl text- font-mono mt-10 p-2 bg-blue-300">
            UseStack Recipe
          </p>
        </span>
        <h1 className="font-bold mt-20 flex items-center justify-center text-4xl">
          {Count}
        </h1>
        <div className="flex justify-center gap-4 mt-10 mb-10">
          <button
            className="px-4 py-2 rounded-md border-2 border-black text-l font-mono hover:bg-blue-300 transition-all ease-linear duration-200"
            onClick={Coffee}
          >
            Coffee
          </button>
          <button
            className="px-4 py-2 rounded-md hover:bg-blue-300 text-2xl font-mono border-2 border-black transition-all ease-linear duration-200"
            onClick={Ice_Cream}
          >
            Ice-Cream
          </button>
          <button
            className="px-4 py-2 rounded-md text-2xl border-2 border-black font-mono hover:bg-red-700 transition-all ease-linear duration-200"
            onClick={Reset}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Recepi;