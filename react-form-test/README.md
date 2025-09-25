# 🐞 Bug Report — Formulario React sin validación

## 🔍 Descripción
El formulario permite enviar aunque los campos estén vacíos. No hay validación de campos obligatorios.

## 📋 Pasos para reproducir
1. Abrir el proyecto en `http://localhost:5173`
2. Dejar los campos "Nombre" y "Email" vacíos
3. Clic en "Enviar"

## ❌ Resultado actual
Muestra el mensaje “Formulario enviado ✅” sin validar los campos.

## ✅ Resultado esperado
Bloquear el envío y mostrar mensajes de error en los campos vacíos.

## 🧠 Impacto
- Envíos inválidos
- Pérdida de datos
- Mala experiencia de usuario
- Riesgo de spam o formularios vacíos en producción

## 📎 Evidencia
- Captura del formulario vacío
- Captura del mensaje de éxito sin datos
📎 Evidencia

![Formulario vacío](../screenshots-evidencia/formulario-react-sin-validacion_01_formulario-vacio.png)
