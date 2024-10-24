const colors = [
  { name: "Blue-400", color: "#60a5fa" },
  { name: "Blue-200", color: "#bfdbfe" },
  { name: "Normal-800", color: "#1f2937" },
  { name: "Normal-700", color: "#374151" },
  { name: "Blue-100", color: "#dbeafe" },
];

const ShowroomPage = () => {
  return (
    <div className="flex flex-col items-center space-y-4 p-8">
      {/* Font sample */}
      <p className="text-3xl font-bold text-blue-400">Showroom</p>

      {/* Description and showroom box */}
      <div className="flex flex-col items-center space-y-4 w-1/2 p-8 bg-normal-800 border-normal-700 text-blue-100 rounded-xl shadow-md">
        <p className="text-2xl font-semibold text-blue-200">Geist Mono</p>
        <p className="text-blue-200 text-center">
          Klar, eindeutig und minimalistisch. Fuktioniert super auf verschieden grossen Bildschirmen. 
          Die Font gibt es in verschiedenen Formen von Thin bis Extra Bold und ist somit für alle Anwendungsfälle geeignet.
        </p>
      </div>

      {/* Color boxes */}
      <div className="flex space-x-4 mt-4">
        {colors.map((color, index) => (
          <div
            key={index}
            className="w-16 h-16 rounded-lg shadow-md"
            style={{ backgroundColor: color.color }}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowroomPage;
