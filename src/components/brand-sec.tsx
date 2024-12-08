import { CircleCheck, CreditCard, Sprout, Truck } from "lucide-react";

export default function Brandsec() {
    return (
        <>
            <div className="my-10">
                <div className="text-3xl text-center mb-10 text-gray-600">
                    What makes our brand different
                </div>

                {/* Flexbox grid layout for responsive columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* Item 1 */}
                    <div className="flex flex-col items-center">
                        <Truck className="text-gray-500" />
                        <h2 className="text-xl py-4 text-center">Next day as standard</h2>
                        <p className="text-gray-500 text-center">Order before 3pm and get your order the next day as standard</p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col items-center">
                        <CircleCheck className="text-gray-500" />
                        <h2 className="text-xl py-4 text-center">Made by true artisans</h2>
                        <p className="text-gray-500 text-center">Handmade crafted goods made with real passion and craftsmanship</p>
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col items-center">
                        <CreditCard className="text-gray-500" />
                        <h2 className="text-xl py-4 text-center">Unbeatable prices</h2>
                        <p className="text-gray-500 text-center">For our materials and quality, you won't find better prices anywhere</p>
                    </div>

                    {/* Item 4 */}
                    <div className="flex flex-col items-center">
                        <Sprout className="text-gray-500" />
                        <h2 className="text-xl py-4 text-center">Recycled packaging</h2>
                        <p className="text-gray-500 text-center">We use 100% recycled packaging to ensure our footprint is manageable</p>
                    </div>
                </div>
            </div>
        </>
    );
}
