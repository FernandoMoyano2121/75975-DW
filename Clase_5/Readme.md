| Característica           | `localStorage`                                      | `sessionStorage`                                   |
|--------------------------|-----------------------------------------------------|----------------------------------------------------|
| **Persistencia**         | Dura **hasta que el usuario borre los datos** (o el desarrollador). | Dura **solo mientras la pestaña esté abierta**.   |
| **Alcance**              | Está disponible en **todas las pestañas** del mismo dominio. | Solo en **la pestaña actual**.                    |
| **Tamaño aprox.**        | Hasta **5-10 MB** dependiendo del navegador.        | Igual, pero **menos recomendado para mucho dato**. |
| **Uso típico**           | Guardar preferencias, temas, tokens, etc. que persistan. | Info temporal como pasos de un formulario.         |
