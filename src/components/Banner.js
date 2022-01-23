import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Banner.css";
import Search from "./Search";
function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Ocultar" : "Buscar Fechas"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Los anfitriones lo hacen posible</h1>
        <h5>
          Descubre alojamientos enteros y habitaciones privadas, perfectos para
          cualquier viaje.
        </h5>
        <Button variant="outlined">Explore Nerby</Button>
      </div>
    </div>
  );
}

export default Banner;
