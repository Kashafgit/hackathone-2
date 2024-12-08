import Image from "next/image"
export default function Bottom() {
    return (
        <>
            <div className="flex ml-20  ">
                <div className="">
                    <div className="w-[600px] p-20 text-gray-500">
                        <h1 className="text-2xl ">From a studio in London to a global with over 400 outlets</h1><br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reprehenderit dolorem, ut veritatis cupiditate aperiam.</p><br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sit assumenda laboriosam, reprehenderit accusantium quibusdam similique sint. Nemo sunt provident exercitationem! </p>
                    </div>
                    <button className="bg-gray-100 px-5 ml-20 py-2 my-7">Get in touch</button>
                </div>
                <div>
                    <Image src={"/Image (2).png"} alt="right-img" width={600} height={600} />
                </div>
            </div>

        </>
    )
}