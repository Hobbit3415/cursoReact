export const operaciones = (numeros, setNumeros) => {

  // Desestructuracion de los valores del array numeros para poder
  // utilizarlos de forma independiente
  const { numero1, numero2 } = numeros

  const handleChange = (e) => {
    setNumeros({
      ...numeros,
      [e.target.name]: parseFloat(e.target.value),
    })
  }

  const suma = () => parseFloat(numero1 + numero2);
  const resta = () => parseFloat(numero1 - numero2);
  const multiplicacion = () => parseFloat(numero1 * numero2);
  const division = () => parseFloat(numero2 !== 0 ? numero1 / numero2 : undefined);

  return { handleChange, suma, resta, multiplicacion, division, numero1, numero2 }
}