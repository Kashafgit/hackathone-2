import Brandsec from "@/components/brand-sec";
import Ceramics from "@/components/caramics-sec";
import Products from "@/components/products";
import Bottom from "@/components/last-sec";
import { Input } from "@/components/ui/input"

export default function Home(){
  return(
    <>
    <Brandsec/>
    <Ceramics/>
    <Products/>
    <div className=" bg-gray-100 py-10 px-24 mt-20">
      <div className=" bg-white py-10 px-72">
        <h1 className="text-3xl text-center text-gray-900 py-8">Join the club and get the benefits</h1>
        <p className="text-center text-gray-700 mb-10">
          Sign up for newsletter and recieve exclusive offers on new ranges, sales, pop up stores and more
        </p>
        <div className="flex w-[400px] justify-center ml-14">
        <Input placeholder="your@email.com" className="bg-gray-200 text-gray-700 border-none py-6 pl-6"/>
        <button className="bg-[var(--bg-color)] w-32 px-4 text-white">Sign up</button>
        </div>

      </div>
    </div>
    <Bottom/>
    </>
  )
}