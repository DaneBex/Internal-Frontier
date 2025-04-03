import DarkModeToggle from "./DarkModeToggle";
import Header from "./Header";


export default function Nav() {

    return (
        <div className="border-b px-4 flex items-center justify-between">
        <Header />
        <DarkModeToggle />
        </div>
    )
}