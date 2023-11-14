export type DrinkModalProps = {
    name: string,
    url: string,
    imageUrl: string,
    instructions: string,
    ingredients: string[],
    measurements: string[],
    close?: () => void,
}

export default function DrinkModal(props: DrinkModalProps) {
    const instructions = props.ingredients.map((ingredient, index) => {
        const measurement = props.measurements[index]
        return (
            <div key={index}>
                <div className="flex justify-between items-center">
                    <div>
                        <a className="font-bold text-xl">{ingredient}</a>
                        <p>{measurement}</p>
                    </div>
                    <div className="font-bold text-xl text-green-600">Owned ✔</div>
                </div>
            </div>
        )
    })

    return (
        <div onClick={props.close} className="fixed left-0 right-0 top-0 bottom-0 z-50 px-2 py-8 bg-white/50 backdrop-blur overscroll-y-contain text-black hover:cursor-pointer">
            <div className="mx-auto h-full flex flex-col gap-y-6 bg-white max-w-prose rounded-2xl p-8 border-2 border-black overflow-y-scroll hover:cursor-default">
                <p className="text-4xl font-bold">{props.name}</p>

                <img className="aspect-square object-cover rounded-2xl" src={props.imageUrl} />

                {instructions}

                <div>
                    <p className="font-bold text-3xl">Instructions</p>
                    <p className="py-2 text-lg">{props.instructions}</p>
                </div>
            </div>
        </div>
    )
}