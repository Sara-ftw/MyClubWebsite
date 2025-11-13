import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const ExpositionGallery = () => {
  const images = [
    "/images/exposition1.jpg",
    "/images/exposition2.jpg",
    "/images/exposition3.JPG",
    "/images/exposition4.JPG",
    "/images/exposition5.JPG",
    "/images/exposition6.jpg",
  ].filter(img => img); // Remove empty entries if some images don't exist yet

  if (images.length === 0) return null;

  return (
    <div className="mt-12 max-w-5xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all group">
                  <img
                    src={image}
                    alt={`Exposition ${index + 1}`}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      // Hide image if it doesn't exist
                      e.currentTarget.parentElement?.parentElement?.remove();
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left+2" />
        <CarouselNext className="right+2" />
      </Carousel>
    </div>
  );
};