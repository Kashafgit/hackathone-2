import { Search, ShoppingCart, User, UserCircle } from "lucide-react";

export default function Topbar(){
    return(
        <>
        <div className="flex justify-between p-4  border-b-2 border-gray-300">
            <span><Search/></span>
            <h2 className="text-[24px] ">Avion</h2>

            <div className="flex gap-6">
                <ShoppingCart/>
                <UserCircle/>
            </div>
        </div>
        </>
    )
}