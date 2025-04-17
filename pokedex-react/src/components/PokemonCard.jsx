import { useState } from "react";
import PokemonDetails from "./PokemonDetails";

const PokemonCard = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="tw-card">
      <button onClick={() => setShowDetails(true)} className="block w-full">
        <img src={data.sprites.other["official-artwork"].front_default} alt={data.name} className="tw-img" />
        <h3 className="tw-name">{data.name}</h3>
        <p className="tw-subtext">Type: {data.types.map(t => t.type.name).join(", ")}</p>
      </button>
      {showDetails && (
        <div className="tw-modal-backdrop" onClick={() => setShowDetails(false)}>
          <div className="tw-modal" onClick={(e) => e.stopPropagation()}>
            <button className="tw-modal-close" onClick={() => setShowDetails(false)}>×</button>
            <PokemonDetails inlineData={data} />
          </div>
        </div>
      )}
    </li>
  );
};

export default PokemonCard;
