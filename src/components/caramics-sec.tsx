import { PoundSterling } from "lucide-react"
import Image from "next/image"

export default function Ceramics() {
    return (
        <>
            <div className="p-20 ">
                <h2 className="text-left text-2xl text-gray-500 px-5 pb-8">New Ceramics</h2>
                <div className="flex justify-center gap-6">
                    <div>
                        <Image src={"/Parent (3).png"} alt="img-1" width={250} height={400} />
                        <div className="text-gray-600">
                            <h3 className="pt-4 text-[20px]">The Dandy Chair</h3>
                            <p className="text-[18px] flex pt-2">
                                <PoundSterling />250</p>
                        </div>

                    </div>
                    <div>
                        <Image src={"/Parent.png"} alt="img-1" width={250} height={400} />
                        <div className="text-gray-600">
                            <h3 className="pt-4 text-[20px]">Rustic Vase Set</h3>
                            <p className="text-[18px] flex pt-2">
                                <PoundSterling />250</p>
                        </div>
                    </div>
                    <div>
                        <Image src={"/Parent (1).png"} alt="img-1" width={250} height={400} />
                        <div className="text-gray-600">
                            <h3 className="pt-4 text-[20px]">The Silky vase</h3>
                            <p className="text-[18px] flex pt-2">
                                <PoundSterling />250</p>
                        </div>
                    </div>
                    <div>
                        <Image src={"/Parent (2).png"} alt="img-1" width={250} height={400} />
                        <div className="text-gray-600">
                            <h3 className="pt-4 text-[20px]">The Lucy Lamp</h3>
                            <p className="text-[18px] flex pt-2">
                                <PoundSterling />250</p>
                        </div>
                    </div>
                   
                </div>

                <div className="flex items-center justify-center pt-10">
                <button className="px-4 py-2 bg-gray-300">View collection</button>
                </div>
               
            </div>

        </>
    )
}