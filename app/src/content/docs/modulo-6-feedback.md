---
title: "Módulo 6: Feedback y Colaboración Continua"
description: Establece flujos de comunicación efectivos para mantener la colaboración después del handoff
---

# Feedback y Colaboración Continua

## Introducción

El handoff no termina cuando mandas el link. La implementación siempre genera dudas, descubrimientos y cambios. Este módulo te enseña a establecer flujos de colaboración que mantengan la comunicación fluida hasta que el producto esté en producción.

## Comentarios en Figma

### Cómo Agregar Comentarios

1. Presiona `C` para activar el modo comentario
2. Click donde quieres comentar
3. Escribe tu mensaje
4. Puedes mencionar personas con `@`

### Tipos de Comentarios

**Informativos:**
```
"Este componente tiene 3 estados adicionales
en la variante Mobile. Ver página 06."
```

**Preguntas:**
```
"@desarrollador ¿Necesitas que especifique
el comportamiento de scroll aquí?"
```

**Decisiones:**
```
"Decidimos usar skeleton en lugar de spinner
para el loading de esta lista. Confirmado con
@productmanager el 15/01."
```

### Buenas Prácticas de Comentarios

1. **Responde en menos de 24 horas**
   - Los comentarios sin respuesta bloquean
   - Si no puedes resolver, al menos confirma que lo viste

2. **Marca como resuelto lo atendido**
   - Mantiene el archivo limpio
   - Fácil ver qué está pendiente

3. **Adjunta al elemento específico**
   - No dejes comentarios flotando
   - Que quede claro a qué se refiere

4. **Usa comentarios para clarificaciones, no para cambios grandes**
   - Cambios de scope van en Jira/Linear
   - Cambios de diseño se hacen en el archivo

5. **Incluye contexto**
   - No solo "arreglado", sino "arreglado: agregué estado disabled"

## Flujo de Feedback Recomendado

### 1. Handoff Inicial

```
Diseñador:
├── Comparte link con permisos correctos
├── Notifica en canal acordado (Slack/Teams)
├── Programa walkthrough si es complejo
└── Marca como "Ready for Dev" en el Cover
```

**Mensaje de handoff ejemplo:**
```
@equipo El diseño de [Feature] está listo para desarrollo.

🔗 Link: [link a Figma]

📄 Páginas listas:
- 04 Desktop - Home (todos los estados)
- 06 Mobile - Home (todos los estados)

⚠️ Notas:
- El componente CardProduct tiene un nuevo estado "sold-out"
- Las animaciones están especificadas en la página Annotations

¿Programamos un walkthrough de 15 min?
```

### 2. Durante Implementación

```
Developer:
├── Consulta el archivo primero
├── Hace preguntas via comentarios en Figma
├── Reporta inconsistencias encontradas
└── Avisa cuando está en staging

Diseñador:
├── Responde comentarios en < 24h
├── Actualiza el archivo si hay cambios
├── Documenta decisiones de cambios
└── Marca comentarios resueltos
```

### 3. Review de Implementación

```
Developer:
└── "Está en staging, listo para QA visual"

Diseñador:
├── Revisa implementación vs diseño
├── Documenta diferencias encontradas
├── Prioriza: crítico vs nice-to-have
└── Comunica feedback específico
```

**Feedback efectivo:**
```
✓ "El espaciado entre cards debería ser 24px,
   veo aproximadamente 16px"

✓ "El hover del botón no tiene la transición
   especificada (200ms ease-out)"

✗ "No se ve bien" (demasiado vago)
✗ "Arréglalo" (no dice qué)
```

### 4. Ajustes Finales

```
├── Se iteran los detalles
├── Se documentan cambios que se aceptan
├── Se actualiza el archivo Figma si hubo cambios
└── Se aprueba para producción
```

## Herramientas Complementarias

### Loom - Para Explicaciones Complejas

Cuando escribir es insuficiente:
- Graba tu pantalla explicando el flujo
- 2 minutos de video > 10 párrafos de texto
- Útil para onboarding de nuevos miembros

**Cuándo usar Loom:**
- Flujos con múltiples pasos
- Comportamientos que dependen de contexto
- Interacciones complejas

### Notion/Confluence - Para Documentación Extensa

Figma es para diseño, no para documentación larga:
- Especificaciones de negocio
- Casos edge y reglas de validación
- Decisiones de producto
- Historiales de cambios

**Estructura recomendada:**
```
📁 Documentación del Proyecto
├── 📄 Overview y Objetivos
├── 📄 Especificaciones Técnicas
├── 📄 Link a Figma
├── 📄 Casos Edge y Validaciones
├── 📄 Decisiones y Cambios
└── 📄 QA Checklist
```

### Storybook - Para Conectar Diseño con Código

Storybook documenta componentes implementados:
- Muestra el componente real funcionando
- Documenta props y variantes
- Permite comparar con el diseño

**Plugin Storybook Connect:**
- Vincula componentes de Figma con Storybook
- Ve el estado de implementación
- Facilita QA de componentes

### Slack/Teams - Para Comunicación Rápida

Reglas para que funcione:
- **Las decisiones importantes van a Figma o Notion**
- Slack es para coordinación, no documentación
- Usa threads para mantener contexto
- No esperes respuestas inmediatas

## Ceremonias de Sincronización

### Design Review Semanal

**Propósito:** Mostrar trabajo en progreso, recibir feedback temprano.

**Formato:**
- 30 min máximo
- Diseñador presenta, equipo comenta
- Se documentan decisiones

### Handoff Meeting

**Propósito:** Transferir formalmente un diseño a desarrollo.

**Formato:**
- 15-30 min por feature
- Walkthrough del diseño
- Responder dudas iniciales
- Confirmar entendimiento

### QA Visual Session

**Propósito:** Revisar implementación vs diseño.

**Formato:**
- Diseñador y developer juntos
- Revisar en staging
- Documentar diferencias
- Priorizar fixes

### Retro de Handoff

**Propósito:** Mejorar el proceso.

**Preguntas:**
- ¿Qué funcionó bien?
- ¿Qué causó fricción?
- ¿Qué cambiaríamos para la próxima?

## Gestión de Cambios

### Cuando Hay Cambios Durante Implementación

1. **Documenta el cambio**
   - Qué era antes, qué es ahora
   - Por qué se cambió
   - Quién lo aprobó

2. **Actualiza el archivo Figma**
   - No dejes versiones desactualizadas
   - Mueve lo anterior a Archive

3. **Comunica explícitamente**
   - No asumas que lo vieron
   - Notifica en el canal acordado

### Versionado

Figma guarda historial automáticamente, pero:

- Nombra versiones importantes manualmente
- "v1.0 - Handoff inicial"
- "v1.1 - Ajustes post-QA"

## Checklist Post-Handoff

- [ ] Responder comentarios en menos de 24 horas
- [ ] Documentar decisiones de cambios durante implementación
- [ ] Hacer QA visual cuando esté en staging
- [ ] Actualizar el archivo con cambios aprobados
- [ ] Marcar comentarios resueltos
- [ ] Comunicar cuando todo esté aprobado

## Mejores Prácticas

1. **Define el canal oficial**
   - ¿Comentarios en Figma? ¿Slack? ¿Jira?
   - Que todos sepan dónde preguntar

2. **Establece tiempos de respuesta**
   - "Comentarios en Figma: respuesta en 24h"
   - Evita bloqueos por esperas

3. **Sé específico en el feedback**
   - Valores exactos, no "se ve raro"
   - Screenshots comparativos ayudan

4. **Documenta, no asumas**
   - Lo que no está escrito, no existe
   - Las conversaciones verbales se olvidan

5. **Itera el proceso**
   - Lo que funciona para un equipo puede no funcionar para otro
   - Pregunta qué mejorar después de cada proyecto

## Resumen

- El handoff continúa hasta que el producto está en producción
- Los comentarios en Figma son el canal principal de clarificaciones
- Establece un flujo claro: handoff → implementación → review → ajustes
- Usa herramientas complementarias según la necesidad
- Las ceremonias regulares mantienen la sincronización
- Documenta cambios y decisiones

## Recursos Relacionados

- [Plugins de Colaboración](/recursos/plugins#colaboración)
- [Checklist Post-Handoff](/recursos/checklist#notas-post-handoff)

## ¡Felicitaciones!

Has completado el curso de Handoff de Figma. Ahora tienes las herramientas para:

- Compartir diseños sin fricción
- Preparar archivos profesionales
- Documentar estados y animaciones
- Usar Dev Mode efectivamente
- Mantener colaboración continua

**Siguiente paso:** Aplica lo aprendido en tu próximo proyecto. Usa el [Checklist de Handoff](/recursos/checklist) como guía.

---

[Volver al inicio](/index) | [Ver Recursos](/recursos/checklist)
