## Descripción Script

El código simula la organización de una celebración donde se asignan actividades a un grupo de invitados de manera aleatoria.

1. Se define `maxGuest` como el número máximo de invitados permitidos.
2. Se genera aleatoriamente el número de invitados que asistirán al evento, asegurándose de que esté dentro del rango permitido por `maxGuest`.
3. La función `celebration` asigna actividades a los invitados en base al número proporcionado como parámetro.
4. Las actividades asignadas incluyen "balloon animals", "dancing", "juggling" y "face painting". Cada actividad tiene una capacidad y puede requerir suministros.
5. Se muestra en la consola la cantidad de invitados que participarán en cada actividad, junto con la capacidad requerida para cada una.
6. Si el número de invitados restantes es suficiente para realizar otra ronda de la misma actividad, se llama recursivamente a la función `celebration` con el nuevo número de invitados.
7. Una vez que todos los invitados hayan sido asignados a actividades, se muestra un mensaje de finalización en la consola.

### Ejemplo de Uso

Supongamos que `maxGuest` es 20 y se generan 15 invitados para la celebración. El resultado de la consola podría ser:


15 of us will enjoy dancing.
        10 will enter the dancing activity.
5 of us will enjoy balloon animals.
        5 will enter the balloon animals activity.

All done!


## Files

- `index.ts`: Fix the code here
- `index.js`: Solution code
