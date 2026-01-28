---
title: "Módulo 2: Compartir Diseños sin Fricción"
description: Aprende a configurar permisos, crear links públicos y compartir prototipos de forma accesible
---

# Compartir Diseños sin Fricción

## Introducción

Una de las primeras barreras para un handoff efectivo es el acceso. Si el desarrollador no puede ver tu diseño fácilmente, ya empezamos mal. En este módulo aprenderás las diferentes formas de compartir tu trabajo sin requerir que otros creen cuentas o naveguen archivos complejos.

## El Problema de las Cuentas

Muchas veces los desarrolladores no quieren crear "otra cuenta más" en otra herramienta. Y no deberían tener que hacerlo solo para consultar specs.

**Escenarios comunes:**
- Equipos externos o freelancers que solo necesitan ver, no editar
- Desarrolladores que prefieren sus propias herramientas
- Stakeholders que solo quieren aprobar, no diseñar
- Clientes que necesitan ver el progreso

La buena noticia: Figma permite compartir de formas que no requieren cuenta.

## Opciones de Compartir

### Opción 1: Link Público con "Anyone with the link"

Esta es la forma más directa de compartir sin requerir login.

**Cómo hacerlo:**
1. Click en el botón **Share** (arriba a la derecha)
2. En "Link sharing", cambiar a **"Anyone with the link"**
3. Seleccionar permiso **"can view"**
4. Copiar el link

**Resultado:** Cualquiera con el link puede ver el archivo sin iniciar sesión.

**Ideal para:**
- Desarrolladores que necesitan consultar specs
- Stakeholders que solo necesitan ver
- Compartir en documentación interna

### Opción 2: Embed de Prototipos

Cuando quieres que el prototipo sea navegable dentro de otra plataforma (Notion, Confluence, tu wiki interna).

**Cómo hacerlo:**
1. Abre el prototipo (botón Play o Present)
2. Click en **Share** dentro del prototipo
3. Selecciona **"Get embed code"**
4. Copia el código iframe

**Resultado:** Un código HTML que puedes pegar en cualquier página web.

```html
<iframe
  style="border: 1px solid rgba(0, 0, 0, 0.1);"
  width="800"
  height="450"
  src="https://www.figma.com/embed?embed_host=share&url=..."
  allowfullscreen>
</iframe>
```

**Ideal para:**
- Documentación en Notion o Confluence
- Especificaciones técnicas en wikis
- Presentaciones a stakeholders

### Opción 3: Links Específicos a Frames

Cuando quieres apuntar a una pantalla específica sin que la persona tenga que buscarla.

**Cómo hacerlo:**
1. Selecciona el frame específico
2. Click derecho > **"Copy link to selection"**
3. O usa el shortcut: Cmd/Ctrl + L

**Resultado:** Un link que abre Figma directamente en ese frame, con zoom y posición ajustados.

**Ideal para:**
- Tickets de Jira/Linear que referencian pantallas específicas
- Mensajes en Slack/Teams sobre elementos puntuales
- Documentación técnica de componentes específicos

## Permisos y Mejores Prácticas

### Niveles de Permiso

| Permiso | Puede Ver | Puede Comentar | Puede Editar |
|---------|-----------|----------------|--------------|
| can view | ✓ | ✗ | ✗ |
| can comment | ✓ | ✓ | ✗ |
| can edit | ✓ | ✓ | ✓ |

### Recomendaciones de Permisos

**Para desarrolladores:** `can view` es suficiente
- Pueden ver specs, medir, usar Dev Mode
- No pueden modificar accidentalmente nada

**Para stakeholders que dan feedback:** `can comment`
- Pueden dejar comentarios en el diseño
- No pueden modificar nada

**Para otros diseñadores:** `can edit`
- Solo cuando realmente necesitan colaborar

### Buenas Prácticas

1. **Nunca des acceso de edición innecesario**
   - Menos riesgo de modificaciones accidentales
   - Más fácil de rastrear quién cambió qué

2. **Crea un link específico para desarrollo**
   - Si cambias de proveedor, solo revocas ese link
   - Puedes tener diferentes links para diferentes equipos

3. **Verifica el link en incógnito**
   - Abre una ventana de incógnito
   - Pega el link
   - Confirma que funciona sin login

4. **Documenta dónde está el link**
   - En el README del repo
   - En el canal de Slack del proyecto
   - En Notion/Confluence
   - En los tickets de Jira

5. **Usa links con versiones si es necesario**
   - Figma guarda historial
   - Puedes compartir links a versiones específicas

## Tips para Equipos Distribuidos

### Zona Horaria Diferente
- Documenta más en el diseño mismo
- Usa comentarios para explicar decisiones
- Graba videos cortos con Loom para flujos complejos

### Idiomas Diferentes
- Usa nombres en inglés para capas (estándar de código)
- Incluye anotaciones bilingües si es necesario
- Sé explícito con descripciones

### Freelancers o Externos
- Crea links que puedas revocar fácilmente
- No compartas archivos con información sensible
- Considera duplicar solo las pantallas necesarias

## Checklist de Compartir

Antes de enviar el link, verifica:

- [ ] El link funciona sin iniciar sesión (probado en incógnito)
- [ ] El permiso es el correcto (generalmente "can view")
- [ ] El link apunta a la página/frame correcta
- [ ] La persona sabe dónde encontrar lo que necesita
- [ ] Documentaste el link en un lugar accesible
- [ ] Incluiste contexto sobre qué está listo y qué no

## Resumen

- Figma permite compartir sin que otros creen cuenta
- Usa "Anyone with the link" + "can view" para acceso simple
- Los embeds funcionan bien en documentación
- Links específicos a frames ahorran tiempo de búsqueda
- Siempre verifica que el link funcione sin login
- Documenta dónde está el link para que no se pierda

## Siguiente Paso

Ya sabes compartir. Ahora viene lo más importante: [preparar el archivo](/modulo-3-preparacion) de forma que lo que compartes sea útil y profesional.
