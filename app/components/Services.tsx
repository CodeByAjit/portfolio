"use client";

export default function Services() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-12 text-center">What I Do</h2>

      <div className="grid md:grid-cols-3 gap-10">
        
        {/* Card 1 */}
        <div className="card">
          <div className="mb-3 w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-red-600 flex items-center justify-center text-xl">
            💻
          </div>
          <h3 className="text-xl font-semibold mb-2">Website Development</h3>
          <p className="text-gray-300">Responsive websites built with modern UI standards</p>
        </div>

        {/* Card 2 */}
        <div className="card">
          <div className="mb-3 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-xl">
            📱
          </div>
          <h3 className="text-xl font-semibold mb-2">App Development</h3>
          <p className="text-gray-300">Fast, scalable apps built for Android & iOS</p>
        </div>

        {/* Card 3 */}
        <div className="card">
          <div className="mb-3 w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-xl">
            🌐
          </div>
          <h3 className="text-xl font-semibold mb-2">Hosting & Deployment</h3>
          <p className="text-gray-300">Hosting, deployment, reverse proxy, security setups</p>
        </div>

      </div>
    </section>
  );
}
