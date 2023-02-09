import "./index.css";
function Header() {
  return (
    <div className="heading">
      <a href="https://www.pokemon.com/fr">
        <img className="image" src="images/logo-pokemon.png" alt="logo" />
      </a>
      <img
        className="image"
        href="https://corporate.pokemon.com/fr-fr/"
        src="images/corporate-fr.png"
        alt="corporate"
      />
      <img
        className="image"
        href="https://tcg.pokemon.com/fr-fr/"
        src="images/scarlet-violet.png"
        alt="scarlet"
      />
      <img
        className="image"
        href="https://scarletviolet.pokemon.com/fr-fr//"
        src="images/swshgus.png"
        alt="swshgus"
      />
      <img
        className="image"
        href="https://tcg.pokemon.com/fr-fr/expansions/silver-tempest/"
        src="images/swsh12-gus-fr.png"
        alt="swsh"
      />
      <img
        className="image"
        href="https://legends.pokemon.com/fr-fr/"
        src="images/swshgus.png"
        alt="swshgus"
      />
      <img
        className="image"
        href="https://unite.pokemon.com/fr-fr/"
        src="images/unite.png"
        alt="unite"
      />
    </div>
  );
}

export default Header;
