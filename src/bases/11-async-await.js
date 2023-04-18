const getImagen = async () => {
    try {
      const apiKey = "p8Imwy6Hbc9kdspAZco16ehB5o4IwZUr";
      const resp = await fetch(
        `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
      );
      const { data } = await resp.json();
  
      const { url } = data.images.original;
  
      const img = document.createElement("img");
      img.src = url;
  
      document.body.append(img);
    } catch (error) {}
    //manejo del error
  };
  getImagen();
  