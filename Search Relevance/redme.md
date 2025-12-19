# Search Relevance Testing (Evaluación de Resultados de Búsqueda)

## ¿Qué es?
La **evaluación de resultados de búsqueda** consiste en analizar si los productos o documentos devueltos por un motor de búsqueda coinciden con la intención del usuario expresada en la query.  
Se realiza mediante **juicios de relevancia**, donde el tester etiqueta cada resultado según su grado de correspondencia.

## ¿Qué función cumple?
- Medir la calidad de los algoritmos de búsqueda y recomendación.
- Entrenar modelos de machine learning para mejorar precisión.
- Detectar coincidencias exactas, sustitutos, complementos o resultados irrelevantes.
- Garantizar que la experiencia del usuario sea satisfactoria.

## Herramientas comunes
- **Aurora Studio / Internal Annotation Tools:** plataformas de anotación con pasos definidos (SQ, OP, etiquetas).
- **Excel / Google Sheets:** para registrar juicios en proyectos pequeños.
- **Jira / Trello:** para seguimiento de tareas de anotación.
- **GitHub README:** documentación de criterios y ejemplos.

## Cómo se usa
1. Se recibe una **Search Query (SQ)** y un **Offered Product (OP)**.  
2. Se comparan atributos: título, imágenes, detalles.  
3. Se identifican coincidencias y mismatches.  
4. Se asigna una etiqueta de relevancia:  
   - **Exact:** Coincidencia perfecta.  
   - **Substitute:** Similar en género o función.  
   - **Complement:** Producto complementario.  
   - **Irrelevant:** No relacionado.  
   - **Unjudgeable:** Query en otro idioma o no interpretable.  
5. Se documenta la decisión con una breve explicación.

## Ejemplo
**Query:** "Indiana Jones blu ray"  
**Offered Product:** "National Treasure 2 – Book of Secrets [Blu-ray]"  
**Etiqueta asignada:** *Substitute* (género similar, pero diferente franquicia).

## Aplicaciones
- Testing de motores de búsqueda en e-commerce (Amazon, Mercado Libre).  
- Evaluación de sistemas de recomendación.  
- Entrenamiento de modelos de IA para mejorar relevancia.  
