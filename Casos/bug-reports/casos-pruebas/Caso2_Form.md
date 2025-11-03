# 🐞 Bug Report: Campo "name" no encontrado en ContactForm

## ID
BUG-001

## Componente afectado
`ContactForm.jsx`

## Pasos para reproducir
1. Ejecutar el caso de prueba CP-001.
2. Cypress intenta localizar el campo `input[name="name"]`.
3. El test falla tras 4 segundos de espera.

## Resultado esperado
El campo `input[name="name"]` debería existir y permitir ingresar el nombre.

## Resultado observado
Cypress arroja el error: Expected to find element: input[name="name"], but never found it.

## Evidencia
- Captura: `../screenshots-evidencia/contact-form-failure.png`
## Severidad
Alta — el formulario no puede completarse correctamente.

## Posible causa
El input está definido con `id="name"` pero sin atributo `name="name"`.

# 🐞 Bug Report: Formulario React sin validación de campos

## ID
BUG-002

## Componente afectado
`ContactForm.jsx`

## Descripción
El formulario permite enviarse aunque los campos estén vacíos. No hay validación de campos obligatorios.

## Pasos para reproducir
1. Abrir el proyecto en `http://localhost:5173`
2. Dejar los campos "Nombre" y "Email" vacíos
3. Hacer clic en "Enviar"

## Resultado esperado
Bloquear el envío y mostrar mensajes de error en los campos vacíos.

## Resultado observado
Muestra el mensaje “Formulario enviado ✅” sin validar los campos.

## Impacto
- Envíos inválidos
- Pérdida de datos
- Mala experiencia de usuario
- Riesgo de spam o formularios vacíos en producción

## Evidencia
- Captura del formulario vacío
- Captura del mensaje de éxito sin datos  
  ![Formulario vacío](../screenshots-evidencia/formulario-react-sin-validacion_01_formulario-vacio.png)

## Severidad
Alta — afecta la funcionalidad crítica del formulario.


## 🖼️ Evidencia del fix aplicado

Tras la corrección en `ContactForm.jsx`, el formulario ahora valida correctamente los campos obligatorios:

- Si el usuario intenta enviar con campos vacíos:
  - El campo **Nombre** se marca en rojo y muestra el mensaje: *“El nombre es obligatorio”*.
  - El campo **Email** se marca en rojo y muestra el mensaje: *“El email es obligatorio”*.
  - El envío queda bloqueado hasta completar los campos.

### Captura
![Validación de campos vacíos](../screenshots-evidencia/contact-form-validacion-obligatorios.png)

✅ Esta evidencia confirma que el bug **BUG-002** fue resuelto y el formulario cumple con el comportamiento esperado.

