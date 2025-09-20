import Image from "next/image"

const highlights = [
    { title: "Modern Design", img: "/images/thumb1.jpg" },
    { title: "Green Spaces", img: "/images/thumb2.jpg" },
    { title: "Prime Location", img: "/images/thumb3.jpg" },
]

export default function Highlights() {
    return (
        <section className="section container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Why Choose Mesaimeer?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {highlights.map((item, idx) => (
                    <div key={idx} className="text-center">
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={400}
                            height={300}
                            className="rounded-xl shadow-md"
                        />
                        <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}
