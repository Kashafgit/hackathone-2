import Image from "next/image"
export default function Hero() {
    return (
        <>
            <div className="flex  mx-auto justify-center p-10 ">
                <div className="bg-[var(--bg-color)] text-white max-w-2xl px-10 py-10">
                    <h1 className="text-4xl">The furniture brand for the <br /> future, with timeless designs</h1>
                    <button className="bg-gray-500 px-3 py-2 my-7">View collection</button>
                    <div className="mt-20">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facilis beatae perspiciatis aliquam labore possimus, dicta, assumenda quo nisi et eligendi facere. Obcaecati, similique molestiae? Quaerat quod vitae error sint.
                        </p>
                    </div>
                 

                </div>
                <div>
                <Image src={"/Right Image.png"} alt="right-img" width={400} height={400}/>
                </div>
            </div>
        </>
    )
}