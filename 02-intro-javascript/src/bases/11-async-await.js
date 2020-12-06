

// const getImagenPromesa = () => 
//       new Promise((resolve) => resolve('https://adasdsfaffsfjs.com'))
// getImagenPromesa().then(console.log);

const getImagen = async () => {

  try {
    const apiKey = 'YoMlNMOQn17UR2r2dlCxgWEnSnKo6sK5';

		const resp = await fetch(
			`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`,
		);
		const {data} = await resp.json();

		const {url} = data.images.original;

		const img = document.createElement('img');

		img.src = url;

		document.body.append(img);
  } catch (error) {
    console.error(error);
    
  }

	


};

  

getImagen();









