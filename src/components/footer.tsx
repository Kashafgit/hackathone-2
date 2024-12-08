import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Input } from "./ui/input";



export default function Footer() {
    return (
        <>
            <footer className="bg-[var(--bg-color)] p-10">
                <div className="flex justify-between text-white">

                    <div className="flex justify-between gap-32 text-white">
                        <div >
                            <ul className="space-y-5">
                                <li>Menu</li>
                                <li>New arrivals</li>
                                <li>Best sellers</li>
                                <li>Recently viewed</li>
                                <li> Popular this week</li>
                                <li>All Products</li>

                            </ul>
                        </div>
                        <div >
                            <ul className="space-y-5">
                                <li>Categories</li>
                                <li>Crockery</li>
                                <li>Farniture</li>
                                <li> Homeware</li>
                                <li>Plant pots</li>
                                <li>Chairs</li>
                                <li> Crockery</li>

                            </ul>
                        </div>
                        <div>
                            <ul className="space-y-5">
                                <li>
                                    Our company</li>
                                <li>About us</li>
                                <li>Vacancies</li>
                                <li>Contact us</li>
                                <li> Privacy</li>
                                <li>Return policy</li>

                            </ul>
                        </div>

                    </div>
                    <div  >
                        <p>Join our mailing list</p>
                        <div className="flex w-[400px] justify-center mt-10">
                            <Input placeholder="your@email.com" className="bg-gray-900 text-gray-200 border-none py-6 pl-6" />
                            <button className="bg-white w-32 px-4 text-gray-600">Sign up</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center pt-10">
                    <div>
                        <h4 className="text-white">Copyright 2022 Avion LTD</h4>
                    </div>
                    <div className="flex gap-6">
                    <Linkedin className="text-white"/>
                    <Facebook className="text-white" />
                    <Instagram className="text-white" />
                    <Twitter className="text-white"/>
                    </div>
                </div>

            </footer>

        </>
    )
}