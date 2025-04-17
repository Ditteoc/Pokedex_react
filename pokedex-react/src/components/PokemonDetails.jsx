const PokemonDetails = ({ inlineData }) => {
    const pokemon = inlineData;
  
    return (
      <section className="tw-wrapper">
        <h2 className="tw-title-detail capitalize">{pokemon.name}</h2>
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="tw-img-detail"
        />
  
        <div className="tw-grid">
          <div><h3 className="tw-label">Types:</h3><p>{pokemon.types.map(t => t.type.name).join(", ")}</p></div>
          <div><h3 className="tw-label">Abilities:</h3><ul className="list-disc ml-4">{pokemon.abilities.map(a => (<li key={a.ability.name}>{a.ability.name}</li>))}</ul></div>
          <div><h3 className="tw-label">Height:</h3><p>{pokemon.height / 10} m</p></div>
          <div><h3 className="tw-label">Weight:</h3><p>{pokemon.weight / 10} kg</p></div>
          <div className="sm:col-span-2">
            <h3 className="tw-label">Stats:</h3>
            <ul className="tw-stats-list space-y-2">
              {pokemon.stats.map((s) => (
                <li key={s.stat.name}>
                  <div className="flex justify-between">
                    <span>{s.stat.name}</span>
                    <span>{s.base_stat}</span>
                  </div>
                  <div className="bg-gray-200 h-2 rounded overflow-hidden">
                    <div
                      className="bg-green-500 h-full"
                      style={{ width: `${Math.min(s.base_stat, 100)}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  };
  
  export default PokemonDetails;
  