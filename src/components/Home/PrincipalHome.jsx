import DataHome from '../../assets/Data/Home.json'

const PrincipalHome = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <video
                src={DataHome.welcome.video_url}
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay loop muted
            ></video>
            <div className="absolute inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center">
                <div className="absolute inset-x-0 bottom-60 text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{DataHome.welcome.slogan_title}</h1>
                    <p className="text-xl md:text-2xl text-white">{DataHome.welcome.slogan_description}</p>
                </div>
            </div>
        </section>
    )
}

export default PrincipalHome

