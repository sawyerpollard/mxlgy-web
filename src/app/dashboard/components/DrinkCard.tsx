export type DrinkCardProps = {
    name: string,
    imageUrl: string,
}

export default function DrinkCard(props: DrinkCardProps) {
    return (
        <div className="aspect-square rounded-2xl overflow-hidden scale-90 hover:scale-100 transition border-4 border-black">
            <img className="object-cover w-full" src={props.imageUrl} />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white">
                <p className="text-black text-2xl font-bold">{props.name}</p>
            </div>
        </div>
    )
}