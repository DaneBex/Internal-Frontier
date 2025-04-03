import { quotes } from "@/quotes";


export default function Quotes() {
    const random = Math.floor(Math.random() * quotes.length)
    console.log(random)
    return (
        <div className="p-5">
           <h2 className="text-2xl">{quotes[random].quote}</h2>
           <p>{quotes[random].author}</p>
        </div>
    )
}