export const PartnersCarousel = () => {
  // Array of sponsor logos - you'll add your sponsor images to public/images/sponsors/
  const sponsors = [
    "/images/sponsor1.png",
    "/images/sponsor2.png",
    "/images/sponsor3.png",
    "/images/sponsor4.png",
    "/images/sponsor5.png",
    "/images/sponsor6.png",
    "/images/sponsor7.png",
    "/images/sponsor8.png",
    "/images/sponsor9.png",
    "/images/sponsor10.png",
    "/images/sponsor11.png",
    
  ].filter(img => img); // Remove empty entries

  if (sponsors.length === 0) return null;

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bebas text-primary text-center mb-16">
          ILS NOUS ONT FAIT CONFIANCE
        </h2>
        
        <div className="relative">
          <div className="flex animate-scroll-carousel gap-12 items-center">
            {sponsors.concat(sponsors).map((sponsor, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-32 flex items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-110 hover:rotate-2"
                style={{
                  animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <img
                  src={sponsor}
                  alt={`Sponsor ${index + 1}`}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all"
                  onError={(e) => {
                    e.currentTarget.parentElement?.remove();
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
