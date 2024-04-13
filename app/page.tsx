// import orangutan from "@/public/images/orangutan.jpg";
// import orangutan from "@/public/images/orangutan.jpg"
import Image from "next/image";


export default function Home() {

  return (
    <div className="relative h-32 w-80">
      <Image 
        src="https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg" 
        alt="orangutan" 
        fill
        className="object-cover"
        quality={75}
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
      />
    </div>
  );
}