const About = () => {
    return (
      <section className="tw-wrapper">
        <h2 className="tw-heading">About the Pokédex site</h2>
        <p className="tw-paragraph">
          This site is build with React, Vite, and Tailwind CSS. It retrieves data from the public
          <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer" className="tw-link"> PokéAPI</a>.
        </p>
        <p className="tw-paragraph">
          The Pokédex allows users to explore various Pokémon, displaying information such as image, type, stats, height, weight, and abilities.
        </p>
      </section>
    );
  };
  
  export default About;
  