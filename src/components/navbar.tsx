import Link from "next/link";

export default function Navbar(){
    return(
        <>
        <div className="flex justify-center items--center p-4 ">
            <ul className="flex gap-6 text-center text-gray-400">
                <Link href={"/"}>Plant pots</Link>
                <Link href={"/"}>Ceramics</Link>
                <Link href={"/"}>Tables</Link>
                <Link href={"/"}>Chairs</Link>
                <Link href={"/"}>Crockery</Link>
                <Link href={"/"}>Tableware</Link>
                <Link href={"/"}>Cultery</Link>
            </ul>
        </div>
        
        </>
    )
}