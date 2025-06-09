// Espera a que se cargue toda la página antes de ejecutar el código
window.onload = () => {
  // Arrays con las diferentes partes del dominio
  const pronoun = ['the', 'our'];
  const adj = ['great', 'big'];
  const noun = ['jogger', 'racoon'];
  const extensions = ['.com', '.net', '.io', '.us'];

  // Selecciona el <ul> donde se van a mostrar los dominios
  const domainList = document.getElementById('domains');

  // Cuatro bucles anidados para recorrer todas las combinaciones posibles
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        for (let ext of extensions) {
          // Se genera el dominio combinando las palabras y la extensión
          const domain = `${p}${a}${n}${ext}`;

          // Se crea un nuevo <li> en el HTML con ese dominio
          const listItem = document.createElement('li');
          listItem.textContent = domain;

          // Se añade ese <li> a la lista en pantalla
          domainList.appendChild(listItem);
        }
      }
    }
  }
};