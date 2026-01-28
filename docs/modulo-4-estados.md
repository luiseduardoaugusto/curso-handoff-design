---
title: "Módulo 4: Estados, Animaciones y Prototipos"
description: Documenta todos los estados de tus componentes y especifica animaciones de forma clara
---

# Estados, Animaciones y Prototipos

## Introducción

Un error común es diseñar solo el estado "feliz" de las interfaces. Pero los desarrolladores necesitan saber qué pasa en **todos los estados**. Este módulo te enseña a documentar estados de forma completa y especificar animaciones de manera que puedan implementarse fielmente.

## Los 8 Estados Esenciales

Cada componente interactivo puede tener hasta 8 estados diferentes. No todos aplican a todos los componentes, pero debes considerar cada uno.

### 1. Default
El estado inicial/normal. Cómo se ve el elemento cuando la página carga.

### 2. Hover
Cuando el cursor está sobre el elemento. Generalmente incluye cambios sutiles de color o sombra.

### 3. Active / Pressed
Durante el click, mientras el usuario mantiene presionado. Suele ser más oscuro que hover.

### 4. Focus
Cuando el elemento está seleccionado mediante navegación con teclado (Tab). **Crítico para accesibilidad.**

El estado focus debe ser claramente visible. Generalmente incluye:
- Outline de color contrastante
- Ring o borde adicional
- Nunca lo ocultes con `outline: none` sin alternativa

### 5. Disabled
Cuando el elemento no es interactivo. Características comunes:
- Opacidad reducida (50-60%)
- Color desaturado
- Cursor `not-allowed`
- Sin estados hover/active

### 6. Loading
Cuando el elemento está procesando una acción. Aplica a botones, formularios, y áreas de contenido.

- Spinner o skeleton
- Texto que indica la acción ("Guardando...", "Cargando...")
- El elemento puede estar disabled durante loading

### 7. Error
Cuando algo salió mal. Aplica especialmente a inputs y formularios.

- Borde o fondo en color de error (generalmente rojo)
- Mensaje de error visible
- Icono de advertencia opcional

### 8. Success
Cuando la acción fue exitosa. No siempre necesario, pero útil para confirmaciones.

- Color de éxito (generalmente verde)
- Mensaje de confirmación
- Puede ser temporal (desaparece después de unos segundos)

### Estado Adicional: Empty
Para listas, tablas, y áreas de contenido que pueden no tener datos.

- Mensaje explicativo
- Ilustración opcional
- Call to action para agregar contenido

## Documentando Estados en Figma

### Método 1: Variantes de Componente (Recomendado)

Crea todas las variantes dentro del componente principal:

```
Button/Primary/Large
├── State=Default
├── State=Hover
├── State=Active
├── State=Focus
├── State=Disabled
└── State=Loading
```

**Ventaja:** El desarrollador ve todos los estados en un solo lugar.

### Método 2: Frame de Estados

Crea un frame que muestre todos los estados lado a lado:

```
┌─────────────────────────────────────────────────────┐
│ BUTTON STATES                                       │
│                                                     │
│ [Default] [Hover] [Active] [Focus] [Disabled] [Load]│
│                                                     │
│ Primary                                             │
│ [██████] [██████] [██████] [██████] [██████] [████] │
│                                                     │
│ Secondary                                           │
│ [▢▢▢▢▢▢] [▢▢▢▢▢▢] [▢▢▢▢▢▢] [▢▢▢▢▢▢] [▢▢▢▢▢▢] [▢▢▢▢] │
└─────────────────────────────────────────────────────┘
```

### Estados para Inputs

Los inputs tienen estados adicionales importantes:

```
Input/Text
├── State=Empty (placeholder visible)
├── State=Filled (con contenido)
├── State=Focus (cursor activo)
├── State=Error (validación fallida)
├── State=Success (validación exitosa, opcional)
└── State=Disabled
```

**No olvides documentar:**
- El texto del placeholder
- El mensaje de error específico
- La posición del mensaje de error
- El icono que acompaña cada estado

## Especificación de Animaciones

### Por Qué Especificar

Un prototipo de Figma muestra **qué** anima, pero el desarrollador necesita saber **cómo** implementarlo:
- ¿Cuánto dura la transición?
- ¿Qué tipo de easing usa?
- ¿Qué propiedades cambian?

### Formato de Especificación

Para cada animación, documenta:

```
TRANSICIÓN: Modal de confirmación

Entrada (fade in):
- Propiedad: opacity
- De: 0 → A: 1
- Duración: 200ms
- Easing: ease-out

- Propiedad: transform (scale)
- De: 0.95 → A: 1
- Duración: 200ms
- Easing: ease-out

Salida (fade out):
- Propiedad: opacity
- De: 1 → A: 0
- Duración: 150ms
- Easing: ease-in
```

### Valores Comunes de Easing

| Nombre | CSS | Uso |
|--------|-----|-----|
| Linear | `linear` | Progreso constante, poco natural |
| Ease | `ease` | Default del navegador, uso general |
| Ease-in | `ease-in` | Empieza lento, acelera. Para salidas. |
| Ease-out | `ease-out` | Empieza rápido, frena. Para entradas. |
| Ease-in-out | `ease-in-out` | Lento-rápido-lento. Para loops. |

### Duraciones Recomendadas

| Tipo | Duración | Ejemplo |
|------|----------|---------|
| Micro | 100-150ms | Hover en botones |
| Pequeña | 200-300ms | Tooltips, dropdowns |
| Media | 300-400ms | Modales, sidebars |
| Larga | 400-500ms | Transiciones de página |

### Dónde Documentar

**Opción 1: Anotación en el diseño**
```
┌─────────────────────┐
│                     │
│   [Modal]           │◄── Fade in: 200ms, ease-out
│                     │    Scale: 0.95→1
└─────────────────────┘
```

**Opción 2: Página de especificaciones**
Crea una página dedicada en Figma con todas las animaciones del proyecto.

**Opción 3: Comentario en Figma**
Adjunta un comentario al elemento con las specs.

## Prototipos: Cuándo Usarlos

### Usa Prototipos Cuando:

- El flujo es complejo y difícil de explicar con imágenes estáticas
- Necesitas validar con stakeholders antes de implementar
- Hay animaciones específicas que mostrar
- El comportamiento de navegación no es obvio
- Quieres testear con usuarios

### No Necesitas Prototipo Cuando:

- Es un CRUD básico (crear, leer, actualizar, eliminar)
- Los flujos son estándar (login, registro, checkout típico)
- Ya tienes documentación escrita clara
- El equipo ya conoce el patrón

### Tip Importante

Los prototipos toman tiempo. Úsalos **estratégicamente**, no para todo.

## Checklist de Estados

Antes del handoff, verifica que cada componente interactivo tenga:

### Botones
- [ ] Default
- [ ] Hover
- [ ] Active/Pressed
- [ ] Focus
- [ ] Disabled
- [ ] Loading (si aplica)

### Inputs
- [ ] Empty (con placeholder)
- [ ] Filled
- [ ] Focus
- [ ] Error (con mensaje)
- [ ] Disabled
- [ ] Success (opcional)

### Links
- [ ] Default
- [ ] Hover
- [ ] Active
- [ ] Visited (si aplica)
- [ ] Focus

### Cards Interactivas
- [ ] Default
- [ ] Hover
- [ ] Selected (si aplica)
- [ ] Disabled (si aplica)

### Listas y Tablas
- [ ] Con datos
- [ ] Vacío (empty state)
- [ ] Loading (skeletons)
- [ ] Error

## Mejores Prácticas

1. **Diseña mobile-first para estados touch**
   - En móvil no hay hover
   - Active es más importante
   - Las áreas tocables deben ser mínimo 44x44px

2. **Focus siempre visible**
   - Es un requisito de accesibilidad
   - No asumas que todos usan mouse

3. **Loading states son críticos**
   - El usuario debe saber que algo está pasando
   - Evita "pantallas en blanco"

4. **Error states deben ser claros**
   - Mensaje específico (no solo "Error")
   - Cómo solucionar el problema
   - Color + icono + texto

5. **Empty states son una oportunidad**
   - Explica qué irá ahí
   - Da un call to action
   - Usa ilustraciones si aplica

## Resumen

- Hay hasta 8 estados que debes considerar para cada componente
- Focus es crítico para accesibilidad, nunca lo ignores
- Las animaciones necesitan specs específicas (duración, easing)
- Los prototipos son útiles pero no siempre necesarios
- Empty states y loading states mejoran la experiencia

## Recursos Relacionados

- [Checklist de Estados](/recursos/checklist#estados-de-componentes)

## Siguiente Paso

Con los estados documentados, es hora de aprender a usar [Dev Mode](/modulo-5-dev-mode), la herramienta que los desarrolladores usarán para extraer todas estas especificaciones.
