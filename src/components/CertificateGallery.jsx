import React, { useEffect, useState } from "react";
import CertificateCard from "./CertificateCard";

const CertificateGallery = () => {
  const [certificates, setCertificates] = useState({});
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
fetch("Certificate/certificates.json")

      .then((res) => res.json())
      .then((data) => {
        setCertificates(data);
        setActiveCategory(Object.keys(data)[0]); // default to first category
      })
      .catch((error) => console.error("Error loading certificates:", error));
  }, []);

  const categories = Object.keys(certificates);

  return (
    <div className="text-white">
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-1.5 text-sm rounded-full transition-all duration-300 font-semibold
              ${activeCategory === category
                ? "bg-purple-600 text-white"
                : "bg-white/10 hover:bg-white/20 text-slate-300"}
            `}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {certificates[activeCategory]?.map((item, index) => (
          <CertificateCard key={index} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default CertificateGallery;
