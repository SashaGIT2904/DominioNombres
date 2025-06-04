// Estas son las listas de palabras que vamos a combinar para formar los nombres de dominio
const pronoun = ['the', 'our'];              // Pronombres para empezar el dominio
const adj = ['great', 'big'];                // Adjetivos para describir
const noun = ['jogger', 'racoon'];           // Sustantivos para completar el nombre
const extensions = ['.com', '.net', '.io', '.us']; // Diferentes extensiones de dominio

// Bucle para recorrer cada pronombre
for (let p of pronoun) {
  // Bucle para recorrer cada adjetivo
  for (let a of adj) {
    // Bucle para recorrer cada sustantivo
    for (let n of noun) {
      // Bucle para recorrer cada extensión
      for (let ext of extensions) {
        // Se combina cada parte para formar el nombre completo del dominio
        const domain = `${p}${a}${n}${ext}`;
        
        // Se muestra el dominio por consola
        console.log(domain);
      }
    }
  }
}
