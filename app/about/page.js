export default function AboutPage() {
    return (
      <div className="min-h-screen bg-[#254f1a]  text-gray-800 px-6 py-12  md:px-20 lg:px-40">
        <h1 className="text-4xl text-lime-300 md:text-5xl mt-24 font-bold mb-6 text-center">About Us</h1>
  
        <section className="mt-30">
          <h2 className="text-2xl font-semibold mb-2">Empowering You to Share More, Simply</h2>
          <p className="text-lg leading-relaxed">
            Welcome to <span className="font-bold">LinkZee</span> – your all-in-one hub to connect your audience
            with everything you do. Whether you're a content creator, business owner, influencer, or hobbyist, LinkZee helps
            you bring all your links together in one simple, beautiful place.
          </p>
          <p className="text-lg mt-4 leading-relaxed">
            With just a single link in your bio, you can direct your followers to your music, videos, store, social profiles, 
            or any other destination that defines you. Built with creators in mind, our platform is designed for ease, speed, 
            and flexibility.
          </p>
        </section>
  
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Why LinkZee?</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li><span className="font-semibold">🎯 All-in-One Simplicity:</span> Share multiple links through just one smart link.</li>
            <li><span className="font-semibold">🎨 Customizable Design:</span> Make your page reflect your personal brand or aesthetic.</li>
            <li><span className="font-semibold">🚀 Quick Setup:</span> Create your link page in minutes with our 3-step process.</li>
            <li><span className="font-semibold">📱 Perfect for All Platforms:</span> Instagram, TikTok, YouTube, Twitter – you name it.</li>
          </ul>
        </section>
  
        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Join the Movement</h2>
          <p className="text-lg mb-6">
            Over <span className="font-bold">70M+ users</span> globally have embraced link-in-bio tools – and now, it’s your turn. 
            LinkZee is here to simplify how you connect, curate, and grow your digital presence.
          </p>
          <a
            href="/"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
          >
            Claim Your LinkZee Now
          </a>
        </section>
      </div>
    );
  }
  