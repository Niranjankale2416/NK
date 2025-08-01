const Certificate = ({ ImgSertif, title }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md">
      <img
        src={`${import.meta.env.BASE_URL}Certificate/${ImgSertif}`}
        alt={title}
        className="w-full h-auto object-cover rounded"
      />
      {title && (
        <p className="mt-2 text-center text-sm text-slate-300">{title}</p>
      )}
    </div>
  );
};

export default Certificate;
