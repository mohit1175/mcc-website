interface Alumni {
  link?: string;
  photo: string;
  name: string;
  position: string;
  year: string;
}

interface AlumniCardProps {
  items: Alumni[];
}

function AlumniCard({ items }: AlumniCardProps) {
  return (
    <>
      {items.map((alumni, index) => (
        <div className="w-[200px] m-5 text-center font-manrope-semibold" key={index}>
          {alumni.link ? (
            <a href={alumni.link} target="_blank" rel="noreferrer">
              <div className="alumni-photo">
                <img src={alumni.photo} alt={alumni.name} className="aspect-square w-4/5" />
              </div>
              <div className="text-lg">{alumni.name}</div>
              <div className="text-md">{alumni.position}</div>
              <div className="text-md">{alumni.year}</div>
            </a>
          ) : (
            <>
              <div className="alumni-photo">
                <img src={alumni.photo} alt={alumni.name} className="aspect-square w-4/5" />
              </div>
              <div className="text-lg">{alumni.name}</div>
              <div className="text-md">{alumni.position}</div>
              <div className="text-md">{alumni.year}</div>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default AlumniCard; 