import { CircleCheck, CreditCard, Sprout, Truck } from "lucide-react";

export default function Brandsec(){
    return(
        <>
        <div className=" my-10">
            <div className="text-3xl text-center mb-10 text-gray-600">
                What makes our brand different
            </div>
            <div className="flex gap-6 justify-center items-center ">
             
                <div className="w-[266px] h-[124px] p-5">
                <div>
                <Truck className="text-gray-500" />
                </div>
                <div className="text-gray-500">
                <h2 className="text-xl py-4">Next day as standard</h2>
                    
                    <p>Order before 3pm and get your order the next day as standard</p>
                </div>
                    
                </div>
               
                <div className="w-[266px] h-[124px] p-5">
                <div>
                <CircleCheck className="text-gray-500"/>
                </div>
                
                  <div className="text-gray-500">
                  <h2 className="text-lg py-4">Made by true artisans</h2>
                     
                     <p>Handmade crafted good made with real passion and craftmanship</p>
                  </div>
                </div>
                <div className="w-[266px] h-[124px] p-5">
                <div>
                    <CreditCard className="text-gray-500"/>
                    </div>
                   <div className="text-gray-500">
                    
                   <h2 className="text-lg py-4">Unbeatable prices</h2>
                    <p>For our materials and quality you won't find better prices anywhere</p>
                   </div>
                </div>
                <div className="w-[266px] h-[124px] p-5">
                    <div><Sprout className="text-gray-500"/></div>
                   
                   <div className="text-gray-500">
                   <h2 className="text-lg py-4">Recycled packaging</h2>
                     
                     <p>We use 100% recycled packaging to ensure our footprint is manageable</p>
                   </div>
                </div>
            </div>



        </div>
        </>
    )
}