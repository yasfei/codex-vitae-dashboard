import { useEffect, useState } from "react";

interface Character {
  _id: string;
  name: string;
  race: string;
  class: string;
  alignment: string;
  background: string;
}

export default function Dashboard() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    // Mock inicial (depois conecta com backend)
    setCharacters([
      {
        _id: "1",
        name: "Aeloria",
        race: "Elfa",
        class: "Maga",
        alignment: "Caótico Bom",
        background:
          "Antiga estudiosa das ruínas de Eldarion, busca restaurar os segredos perdidos do fogo etéreo.",
      },
      {
        _id: "2",
        name: "Thorn",
        race: "Anão",
        class: "Guerreiro",
        alignment: "Leal Neutro",
        background:
          "Ex-guardião das minas de Karag-Dûm, carrega o peso de um juramento quebrado.",
      },
    ]);
  }, []);

  return (
    <div className="p-6 text-gray-200">
      <h2 className="text-2xl mb-4 font-semibold">Personagens Registrados</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((char) => (
          <div
            key={char._id}
            className="bg-gray-800 rounded-xl p-4 shadow hover:shadow-lg transition-all"
          >
            <h3 className="text-lg font-bold text-indigo-300">{char.name}</h3>
            <p>
              {char.race} — {char.class}
            </p>
            <p className="text-sm text-gray-400">{char.alignment}</p>
            <p className="text-sm mt-2 text-gray-300 italic overflow-hidden text-ellipsis">
              {char.background}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
