import DrinkLibrary from '../components/DrinkLibrary'

import drinks from '../../parsed_drinks.json'

const drinkCards = drinks.drinks.map((drink) => {
  return {
    name: drink.name,
    url: drink.name,
    imageUrl: drink.image,
    instructions: drink.instructions,
    ingredients: drink.ingredients,
    measurements: drink.measurements,
  }
})

export default function Inventory() {
  return (
    <div className="flex flex-col gap-y-8 items-center text-blue-500">
      <h1 className="text-5xl font-extrabold">Inventory</h1>
      <DrinkLibrary drinks={drinkCards} />
    </div>
  )
}
