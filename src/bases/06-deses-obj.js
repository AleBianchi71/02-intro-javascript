//Desestructuración

const persona = {
    nombre: "Tony",
    clave: "IronMan",
    edad: 45,
  };
  
  const Context = ({ clave, nombre, edad, rango = "Capitan" }) => {
    return {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.128384,
        lng: 238374,
      },
    };
  };
  
  const {
    nombreClave,
    anios,
    latlng: { lat, lng },
  } = Context(persona);
  
  console.log(nombreClave, anios);
  console.log(lat, lng);
  