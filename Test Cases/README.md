# Test Cases (Casos de Prueba)

## ¿Qué son?
Los **casos de prueba** son documentos que describen escenarios específicos para verificar que una funcionalidad del software cumple con los requisitos definidos.  
Cada caso de prueba incluye:
- **ID único:** para rastrear y organizar.
- **Precondiciones:** estado inicial del sistema.
- **Entradas:** datos o acciones que se ejecutan.
- **Pasos:** instrucciones detalladas para el tester.
- **Resultado esperado:** lo que debería ocurrir.
- **Resultado obtenido:** lo que realmente ocurre.
- **Estado:** aprobado, fallido, bloqueado.

## ¿Para qué sirven?
- Validar que el sistema funciona según lo esperado.
- Detectar errores, inconsistencias o desviaciones.
- Documentar evidencia clara y repetible.
- Facilitar la comunicación entre QA, desarrollo y stakeholders.
- Permitir la trazabilidad entre requisitos y pruebas.

## Herramientas comunes
- **Jira / Zephyr:** gestión de casos de prueba y ejecución.
- **TestRail:** repositorio centralizado de pruebas.
- **Excel / Google Sheets:** para proyectos pequeños o documentación rápida.
- **GitHub Projects:** integración con repositorios de código.

## Cómo se usan
1. Se diseñan a partir de los **requisitos funcionales**.
2. Se ejecutan manualmente o mediante **automatización** (Selenium, Cypress, Playwright).
3. Se registran los resultados y se reportan defectos si hay fallos.
4. Se reutilizan en regresión y ciclos futuros.

## Ejemplo
**Caso de prueba:** Inicio de sesión con credenciales válidas  
- **Precondición:** Usuario registrado en la base de datos.  
- **Pasos:**  
  1. Abrir la aplicación.  
  2. Ingresar usuario y contraseña correctos.  
  3. Presionar "Login".  
- **Resultado esperado:** El sistema permite acceso y muestra el panel principal.  
- **Resultado obtenido:** Acceso correcto.  
- **Estado:** Aprobado ✅
