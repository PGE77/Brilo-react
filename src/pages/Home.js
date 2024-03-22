import React, { useState } from "react";
import "../dist/css//Home.css";
import { Link } from "react-router-dom";
import schuzka from "../img/schuzka.jpg";
import collective from "../img/colective.jpg";
import pcboy from "../img/pcboy.jpg";
import Card from "../Components/Card";
import Buttons from "../Components/Buttons";
import Data from "../Components/Data";
import logo from "../img/logo.svg";

const Home = () => {
  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((Val) => Val.category))];
  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
      // comparing category for displaying data
    });
    setItem(newItem);
  };
  return (
    <>
      <section className="head-section">
        <article>
          <h1>Hlavní nadpis webu</h1>
          <p>
            V k žert planetu rysů obdivují stravování starověkého zebřičky
            u tahů zimující. Akcí a důkaz pomoci narozen muzea signálem.
          </p>

          <div className="button-container">
            <Link to="/" className="button-white">
              Více informací
            </Link>
            <Link to="/" className="button-green">
              Poptat nabídku
            </Link>
          </div>
        </article>
        <div>
          <img className="image-responsive" src={schuzka} alt="Obrázek" />
        </div>
      </section>

      <div className="bg-money">
        <section className="section-money">
          <div>
            <img className="image-responsive" src={collective} alt="Obrázek" />
          </div>

          <article>
            <h2>Nechte své peníze růst!</h2>
            <p>
              V k žert planetu rysů obdivují stravování starověkého zebřičky
              u tahů zimující. Akcí a důkaz pomoci narozen muzea signálem –
              jižní využitelný uchu těžko. Dravcům vousům houba horu žijí mého
              vývojovou z společnosti nemigrují vy plná internetová, je charisma
              vnitrozemí, oceán a přijíždějí příbuzných zjevné, zemskou dá
              spolu. Moc král prokletí obyvatel holka ochlazení žít mimořádnými
              virů stejný či palec.
            </p>
            <ul className="money-list">
              <li>
                Musel za až angličtinu látky nohy deprimovaná polokouli i roku
                map.
              </li>
              <li>
                Těžko popsal, ještě zúročovat však, by čase musel mi nuly, ta
                naší
              </li>
              <li>
                Musel za až angličtinu látky nohy deprimovaná polokouli i roku
                map.
              </li>
              <li>
                Těžko popsal, ještě zúročovat však, by čase musel mi nuly, ta
                naší
              </li>
            </ul>

            <div className="money-button-flex">
              <Link to="/" className="button-green">
                Zjistit více
              </Link>
            </div>
          </article>
        </section>
      </div>
      <section className="section-money section-money-left">
        <article>
          <h2>Nechte své peníze růst!</h2>
          <p>
            V k žert planetu rysů obdivují stravování starověkého zebřičky
            u tahů zimující. Akcí a důkaz pomoci narozen muzea signálem – jižní
            využitelný uchu těžko. Dravcům vousům houba horu žijí mého vývojovou
            z společnosti nemigrují vy plná internetová, je charisma vnitrozemí,
            oceán a přijíždějí příbuzných zjevné, zemskou dá spolu. Moc král
            prokletí obyvatel holka ochlazení žít mimořádnými virů stejný či
            palec.
          </p>

          <div className="button-container-money">
            <Link to="/" className="button-green">
              Zjistit více
            </Link>
          </div>
        </article>
        <div>
          <img className="image-responsive" src={pcboy} alt="Obrázek" />
        </div>
      </section>

      <section className="section-services">
        <h2>Vyberte jednu z nabízených služeb</h2>
        <p>
        Hlasu zkrátka nevratné duší indičtí půlkilometrová začali nutné už od středisko. Společných snažila líně <br/> budoucnost začne vloženy stal objevováním, umělé cílem starým dne větvičky názvy moři zabíjí.
        </p>
        <Buttons
          menuItems={menuItems}
          filterItem={filterItem}
          setItem={setItem}
        />
        <Card item={item} />
      </section>

<footer className="section-footer">
    <div className="footer-flex">
     <img width="189px;" src={logo} alt="Obrázek" />

      <div className="flex-footer-links">
        <Link to="/">První proklik</Link>
        <Link to="/">Druhý proklik</Link>
        <Link to="/">Třetí proklik</Link>
      </div>
       <span>© 2022 Thalion All rights reserved.</span>
    </div>
</footer>

    </>
  );
};

export default Home;