import gallery1 from "../../assets/images/gallery1.png";
import gallery2 from "../../assets/images/gallery2.png";
import gallery3 from "../../assets/images/gallery3.png";
import gallery4 from "../../assets/images/gallery4.png";
import gallery5 from "../../assets/images/gallery5.png";
import gallery6 from "../../assets/images/gallery6.png";
import { useState } from "react";

const Gallery = () => {

  const galleryImages = [
    {
      image: gallery1,
      title: "Mathematics Class",
    },
    {
      image: gallery5,
      title: "Physics Lab",
    },
    {
      image: gallery6,
      title: "Academy Building",
    },
    {
      image: gallery3,
      title: "Group Discussion",
    },
    {
      image: gallery2,
      title: "Science Activity",
    },
    {
      image: gallery4,
      title: "Prize Distribution",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-24 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF0033]/10 border border-[#FF0033]/30">
            <span className="text-[#FF0033] text-lg">✦</span>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#FF0033]">
              Gallery
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
          Moments From Our
          <span className="block text-[#FF0033]">
            Academy
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-center text-base md:text-lg leading-8 text-slate-300">
          Explore our classrooms, activities, academic events, and memorable moments that reflect our commitment to quality education.
        </p>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                onClick={() => {
                  setSelectedImage(item.image);
                }}
                className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div> */}

              {/* Title */}
              <div className="absolute bottom-6 left-6 translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <img
            src={selectedImage}
            alt="Gallery"
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-[90%] max-h-[90vh] rounded-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;


