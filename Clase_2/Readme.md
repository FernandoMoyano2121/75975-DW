# Algoritmos y control de flujo

---

ALGORITMO en programación, es un conjunto de procedimientos o funciones que se necesitan para realizar cierta operación o acción.

Una ESTRUCTURA CONDICIONAL O DE CONTROL DE FLUJO en la programación es una estructura que permite al programa tomar decisiones y ejecutar diferentes instrucciones en  función de una condición. Consiste en evaluar una expresión lógica y dependiendo del resultado de esa evaluación, ejecutar  un bloque de código específico.

En términos más técnicos, un CONDICIONAL se compone de una expresión lógica que puede ser verdadera o falsa, y uno o más bloques de código que se ejecutan si la expresión es verdadera o falsa. El bloque de código que se ejecuta se delimita mediante llaves {} y puede contener una o más instrucciones

# Operadores

---

```javascript
// ==  Igualdad(valor)

// === Igualdad estricta(compara valor y tipo de dato)

//  <  Menor que

//  > Mayor que

// <= Menor o igual que

// >= Mayor o igual que

// != diferente que (valor)

// !== desigualdad estricta (valor y tipo de dato)

// && Operador and (y)

// || Operador or (o)

// ! Operador not (no)
```

# Que devuelve prompt cuando no ingresamos datos? ()

---

- aceptar devuelve una cadena vacía = ""
- cancelar devuelve null

# Estructuras repetitivas

---

- POR CONTEO= Repiten un bloque de código un número de veces específica. _Estructura for._

- POR CONDICION= Repiten un bloque de código mientras la condición evaluada es verdadera. _Estructuras while y do...while._

### For

```javascript
for (
  inicializador(variable);
  condicion(comparación);
  actualizacion(contador) //{...codigo a ejecutar...}
)
  for (let i = 0; i < 10; i++) {
    alert(i);
  }
//index++
//index=index+1
//index+=1

//Si quiero incluir el 10 es importante cambiar la condicion

for (let i = 1; i <= 10; i++) {
  alert(i);
}
```

### While

---

el ciclo while se utiliza cuando la cantidad de repeticiones no se conoce de antemano o se basa en una condición que puede cambiar durante la ejecución del programa. Tiene una estructura más flexible y se repite mientras se cumpla una condición especificada.

```javascript
while (condición) {
  //bloque de código a repetir
  //actualización de la condición
}

let repetir = true;

while (repetir) {
  //CUIDADO CON EL BUCLE INFINITO!!!
  console.log("Al infinito y...¡Más allá!");
}
```

# Ejemplo ludico utilizando while

---

**"Juego de Adivinanza del Número Secreto"**

Crea un programa en **JavaScript** que simule un juego de adivinanza donde el usuario debe descubrir un **número secreto** generado de forma aleatoria entre **1 y 10**. El programa debe seguir las siguientes condiciones:

1. El usuario tendrá **3 intentos** para adivinar el número secreto.
2. En cada intento, se debe pedir al usuario que ingrese un **número** mediante un **`prompt`**.
3. Después de cada intento fallido, se debe mostrar un mensaje indicando:

   - **Que no acertó**.
   - **Cuántos intentos le quedan**.

4. Si el usuario **adivina el número**, se mostrará un mensaje de felicitación y el juego terminará inmediatamente.
5. Si **agota todos los intentos** sin adivinar, se debe mostrar un mensaje revelando el **número secreto**.
6. Se debe usar una estructura de **bucle `while`** para controlar los intentos.
7. El número debe ser generado de forma **aleatoria** utilizando la función:

```javascript
Math.floor(Math.random() * 10) + 1;
```

# Ejercicio Lúdico con Switch Case

---

### 📦 **Ejercicio: "Menú de Operaciones Básicas"**

**Enunciado:**  
Crea un programa en **JavaScript** que muestre un **menú de operaciones matemáticas** y le permita al usuario elegir una de las siguientes opciones:

1. **Sumar**
2. **Restar**
3. **Multiplicar**
4. **Dividir**
5. **Salir**

- Si elige una operación del **1 al 4**, se deben solicitar **dos números** y mostrar el resultado.
- Si elige la opción **5**, se debe mostrar un mensaje de **"Gracias por utilizar la calculadora"** y terminar el programa.
- Si ingresa un número fuera de las opciones, se debe mostrar **"Opción no válida"**.

Ejemplo de salida:

```txt

Menú de Operaciones:
1. Sumar
2. Restar
3. Multiplicar
4. Dividir
5. Salir

Ingresa el número de la operación que deseas realizar: 2

Ingresa el primer número: 10
Ingresa el segundo número: 5

El resultado de la resta es: 5

```

```txt

Menú de Operaciones:
1. Sumar
2. Restar
3. Multiplicar
4. Dividir
5. Salir

Ingresa el número de la operación que deseas realizar: 5

Gracias por utilizar la calculadora.
```
