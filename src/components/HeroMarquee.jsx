// This file is being replaced in its entirety.
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const imageData = [
  {
    src: "https://images.unsplash.com/photo-1689455612740-07736190951f?w=300&h=400&fit=crop",
    alt: "Handsome groom in traditional attire",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1675851211769-b184a1d189c1?w=300&h=400&fit=crop",
    alt: "Beautiful bride in elegant dress",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=400&fit=crop",
    alt: "Happy couple celebrating their engagement",
  },
  {
    src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=300&h=400&fit=crop&crop=face",
    alt: "Elegant bride with traditional jewelry",
  },
  {
    src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=300&h=400&fit=crop",
    alt: "Romantic wedding ceremony moment",
  },
  {
    src: "https://images.unsplash.com/photo-1718183472615-a3ace9b95a52?w=300&h=400&fit=crop",
    alt: "Handsome groom in traditional attire 2",
  },
];

const firstRow = imageData;

const ImageCard = ({ src, alt, index }) => {
  return (
    <div
      className={cn(
        "relative mx-2 h-96 w-60 group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300",
        "wave-image-card"
      )}
      style={{
        "--wave-index": index,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={300}
        height={400}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export function HeroMarquee() {
  return (
    <div className="relative flex -mt-10 sm:-mt-16 mx-auto flex-col items-center justify-center overflow-x-hidden">
      <Marquee
        pauseOnHover
        className="[--duration:35s] h-[500px] flex justify-center items-center wave-marquee"
      >
        {firstRow.map((image, index) => (
          <ImageCard key={`${image.alt}-${index}`} index={index} {...image} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-[2%] bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[2%] bg-gradient-to-l from-background"></div>
    </div>
  );
}
