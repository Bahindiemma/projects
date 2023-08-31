const links = [
    { name: 'Learn More', href: '#' }
]

export default function About() {
    return (
        <div className="relative isolate overflow-hidden bg-green-900 py-24 sm:py-32">
            <img
                src="/images/animals.jpg"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center filter brightness-75 backdrop-filter backdrop-radial-gradient circle bg-purple-900"
                style={{
                    clipPath:
                        'polygon(100% 0, 50% 0, 65% 50%, 50% 100%, 100% 100%)',
                }}
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-200">
                        The Uganda Wildlife Conservation Education Center is a fun and exciting place to see and learn about the animals of Uganda and the ecosystems in which they live. Take some time to learn how they live, eat, play, and walk.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-200">
                        Originally founded in the 1950s to accommodate confiscated and injured wildlife and to look after orphan animals confiscated from smugglers, the centre has grown considerably in recent years. Many say it's destined to become the most important facility to showcase wildlife on the African continent.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        {links.map((link) => (
                            <a className="border-2 border-white rounded-lg px-4 py-2" key={link.name} href={link.href}>
                                {link.name} <span aria-hidden="true">&rarr;</span>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
