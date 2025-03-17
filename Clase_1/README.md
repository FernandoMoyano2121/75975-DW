# Extensiones Utiles

- **Code Runner** (_Permite Ejecutar Código Javascript_)
- **Comment Toolkit** (_Para comentarios_)
- **Error Lens** (_Para indicarnos cuales son los errores que estamos cometiendo_)
- **Live Server** (_Nos permite tener un servidor local y reflejar los cambios en tiempo real_ )
- **Prettier** (_Nos permite formatear el código_)

# Git

---

Git fue creado en **2005** por **Linus Torvalds**, el mismo creador de Linux. Surgió como una solución rápida y eficiente para gestionar el código del kernel de Linux después de que el sistema anterior, **BitKeeper**, dejara de ser gratuito. Git se volvió popular por su velocidad, su sistema distribuido y su facilidad para gestionar versiones de código. Hoy es el estándar en el desarrollo de software.

## Comandos Principales de Configuración:

1. Establecer el Nombre de Usuario:

```bash

git config --global user.name "Tu Nombre"



```

Chequear que el nombre se haya guardado bien

```bash

git config user.name


```

2. Establecer el Correo Electrónico del Usuario:

```bash

git config --global user.email "tuemail@dominio.com"


```

Chequear que el email se haya guardado bien

```bash

git config user.email


```

3. Comando para mostrar configuracion actual de Git:

```bash

git config --list


```

4. Comando para obtener ayuda de Git

```bash

git <comando> --help

```

## Principales comandos para trabajar con proyectos:

### **Iniciar un repositorio local**

```bash

git init mi_repositorio

```

### **Chequear el estado del repositorio**

```bash

git status

```

-Observamos el mensaje **untracked files** (archivos sin seguimiento)

estado: Working directory - **Directorio de trabajo**

- **"M" (Modified)** → El archivo ha sido **modificado**, pero aún no agregado con `git add`.
- **"U" (Untracked)** → El archivo es **nuevo**, pero aún no está en Git ni en el Staging Area.
- **"D" (Deleted)** → El archivo ha sido eliminado.

### **Si hay archivos que no deseamos agregar usamos un archivo **.gitignore** para especificar los mismos.**

```bash

*concidencia comodin

/ se usa para ignorar las rutas relativas al archivo .gitignore.

# es usado para agregar comentarios


```

### **Agregamos los archivos al staging Area**

```bash

git add

```

### **Verificamos que los archivos efectivamente se hayan agregados**

```bash



git status



```

Observamos por consola el mensaje Changes to be commited, y el archivo pintado de verde

### **Confirmamos cambios y enviamos los archivos a nuestro repositorio local**

```bash

git commit -m "mi comentario¨


```

agregamos un comentario descriptivo de lo que venimos haciendo.

### **Ver el historial de commits**

```bash

git log

```

Este comando mostrará una lista de commits en el historial del repositorio, incluyendo:

con la tecla "q" matamos el proceso y continuamos usando la terminal.

- El hash SHA-1 del commit.

- El autor del commit.

- La fecha del commit.

- El mensaje del commit.

### **Comando para eliminar un repositorio.(🪛Mucho cuidado con este comando)**

```bash

rm -rf .git

```

### **Subir los cambios al repositorio remoto**

```bash
git push -u origin main
```

Este comando sube los cambios al repositorio remoto pero no sube las ramas

### **Subir los cambios en la rama principal y las otras ramas**

```bash

git push --all

```

## Revertir Cambios.

1. **Revertir un commit Confirmado (Usando git reset)** Estos son cambios que han sido añadidos al historial del repositorio mediante un commit.

### **git reset --hard**

Este comando deshace todos los cambios realizados desde el commit especificado y restablece el estado del árbol de trabajo al commit especificado.

Usar **--hard** elimina permanentemente todos los cambios no confirmados, así que asegúrate de que realmente quieres deshacer todos los cambios.

```bash



git reset --hard <commit_hash>



```

### **git reset --soft**

Mueve el puntero de HEAD al commit especificado, manteniendo los cambios en el área de preparación.

```bash



git reset --soft <commit_hash>



```

### **git reset --mixed**

Mueve el puntero de HEAD al commit especificado, manteniendo los cambios en el árbol de trabajo.

```bash



git reset --mixed <commit_hash>



```

### **Revertir un commit Confirmado (Usando git revert)**

```bash



git revert <commit_hash>


```

Este comando crea un nuevo commit que deshace los cambios del commit especificado. Es útil porque no altera el historial del commit.

### **Restablecer al último commit confirmado**

```bash

git reset --hard HEAD


```

Si quieres simplemente deshacer todos los cambios no confirmados y volver al último commit confirmado:

4. **Reestablecer cambios No Confirmados (Uncommitted Changes)** (Estos son cambios que has realizado en los archivos de tu repositorio, pero que aún no has confirmado con un commit.)

_Cambios en el Árbol de Trabajo (Working Directory)_

_Cambios Añadidos al Área de Preparación (Staging Area)_

### **git reset**

```bash

git reset


```

Si los cambios han sido añadidos (staged) pero no confirmados, puedes utilizar git reset para deshacer esta acción.

### **git checkout**

```bash



git checkout -- <archivo>



```

Si los cambios no han sido añadidos al área de preparación, puedes usar git checkout para restablecerlos al último commit.

## rabajo con ramas.

### **Crear una nueva rama.**

```bash



git branch nombre-de-la-rama



```

Crea una nueva rama llamada nombre-de-la-rama basada en la rama actual.

### **Cambiar a una rama diferente**

```bash



git checkout nombre-de-la-rama



```

O usando la nueva sintaxis con **switch**

```bash



git switch nombre-de-la-rama



```

Cambia a la rama nombre-de-la-rama.

### **Crear y cambiar a una nueva Rama:**

```bash

git checkout -b nombre-de-la-rama


```

Crea una nueva rama y cambia a ella inmediatamente.

### **Listar todas las ramas:**

```bash



git branch



```

Muestra todas las ramas locales. La rama actual se indica con un asterisco `*`

### **Eliminar una Rama:**

```bash

git branch -d nombre-de-la-rama



```

Elimina la rama nombre-de-la-rama si ha sido completamente integrada en la rama actual.

### **Para forzar la eliminación de una rama (incluso si no está completamente integrada):**

```bash



git branch -D nombre-de-la-rama



```

### **Renombrar una rama:**

```bash

git branch -m nuevo-nombre


```

Renombra la rama actual a nuevo-nombre.

### **Subir una rama a Github**

```bash

git push --set-upstream origin <nombre-de-tu-rama>

```

###  **Combinar (Merge) una Rama en la Rama Actual:**

```bash


git merge nombre-de-la-rama


```

### **Rebase de una Rama:**

```bash

git rebase nombre-de-la-rama


```

Rebase la rama actual sobre la rama nombre-de-la-rama.
