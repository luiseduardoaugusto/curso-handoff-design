---
title: "Módulo 3: Preparación del Archivo para Handoff"
description: Organización, nomenclatura, Auto Layout y Design Tokens para un archivo profesional
---

# Preparación del Archivo para Handoff

## Introducción

Este es el módulo más importante del curso. La preparación del archivo es lo que marca la diferencia entre un handoff caótico y uno profesional. Un archivo bien organizado comunica respeto por el tiempo del desarrollador y reduce drásticamente las preguntas.

## La Diferencia entre un Archivo Malo y uno Bueno

### Archivo Mal Organizado

```
📁 Proyecto
├── Page 1
├── Page 2
├── Untitled
└── Copy of Page 1
```

Dentro de las páginas:
- Frame 234, Frame 235, Frame 236
- Rectangle 45, Group 12, Vector 23
- Componentes sin documentar
- Colores aplicados directamente (no estilos)

**Resultado:** El desarrollador no sabe por dónde empezar.

### Archivo Bien Organizado

```
📁 Proyecto
├── 01 Cover
├── 02 Design Tokens
├── 03 Components
├── 04 Desktop - Home
├── 05 Desktop - Dashboard
├── 06 Mobile - Home
├── 07 Prototypes
└── 08 Archive
```

Dentro de las páginas:
- `Home/Default/Desktop`, `Home/Loading/Desktop`
- `header`, `nav-item`, `button-primary`
- Componentes con variantes completas
- Todos los colores usan estilos

**Resultado:** El desarrollador encuentra lo que busca inmediatamente.

## Organización de Páginas

### Estructura Recomendada

| Página | Propósito |
|--------|-----------|
| Cover | Información del proyecto, estado, links útiles |
| Index | Tabla de contenidos con links a secciones |
| Design Tokens | Colores, tipografía, espaciado, sombras |
| Components | Biblioteca de componentes con variantes |
| Icons | Catálogo de iconografía |
| [Feature] - Desktop | Diseños para desktop |
| [Feature] - Mobile | Diseños para mobile |
| Prototypes | Flujos interactivos |
| Annotations | Especificaciones detalladas |
| Archive | Versiones anteriores (no implementar) |

### Tips de Organización

1. **Usa números para ordenar:** `01 Cover`, `02 Tokens`, etc.
2. **Agrupa por plataforma:** Desktop y Mobile separados
3. **Marca lo deprecado:** Mueve a Archive lo que no se implementa
4. **Incluye un Cover:** Primera impresión del archivo

## Nomenclatura de Capas

### Convención Recomendada: kebab-case

```
button-primary
card-product
input-text-error
icon-arrow-right
```

**¿Por qué kebab-case?**
- Compatible con CSS
- Compatible con nombres de archivos
- El desarrollador puede usar los mismos nombres en código

### Estructura Jerárquica para Componentes

```
[Categoría]/[Nombre]/[Variante]/[Estado]

Button/Primary/Large/Default
Button/Primary/Large/Hover
Button/Primary/Large/Disabled
Button/Secondary/Medium/Default
```

Esto crea la estructura de variantes automáticamente en Figma.

### Nombres de Capas Internas

```
CONTENEDORES
container    → Contenedor principal
wrapper      → Envoltorio de grupo
content      → Área de contenido

TEXTO
label        → Etiqueta de botón/input
title        → Título principal
description  → Descripción/párrafo
helper-text  → Texto de ayuda

ELEMENTOS
icon-leading  → Icono al inicio
icon-trailing → Icono al final
avatar        → Imagen de usuario
badge         → Insignia/contador

LAYOUT
header       → Cabecera
body         → Cuerpo
footer       → Pie
sidebar      → Barra lateral
```

### Anti-Patrones (Qué NO Hacer)

```
❌ Frame 1, Frame 2, Frame 3
❌ Rectangle 45, Group 12
❌ blue-button (nombre por apariencia)
❌ Mezclar convenciones: Button_Primary, card-product, InputText
```

## Auto Layout para Desarrollo

### ¿Por Qué es Importante?

Auto Layout se traduce **directamente a Flexbox en CSS**. Cuando configuras Auto Layout correctamente, el desarrollador obtiene código listo para usar.

### Configuración en Figma → Resultado en CSS

| Figma | CSS |
|-------|-----|
| Dirección: Vertical | `flex-direction: column` |
| Dirección: Horizontal | `flex-direction: row` |
| Gap: 16px | `gap: 16px` |
| Padding: 24px | `padding: 24px` |
| Hug contents | `width: fit-content` |
| Fill container | `flex: 1` |
| Fixed | `width: 200px` (valor fijo) |

### Mejores Prácticas de Auto Layout

1. **Usa valores fijos de spacing**
   - ✓ Gap de 8px, 16px, 24px (múltiplos de 8)
   - ✗ Gap de 13px, 17px (valores arbitrarios)

2. **Configura los 4 lados del padding explícitamente**
   ```
   Padding: 24px 16px 24px 16px
            ↑top  ↑right ↑bottom ↑left
   ```

3. **Elige el resize correcto**
   - **Hug:** El elemento se ajusta al contenido
   - **Fill:** El elemento ocupa todo el espacio disponible
   - **Fixed:** Tamaño fijo en píxeles

4. **Anida Auto Layouts**
   - Crea estructuras complejas combinando layouts
   - Piensa como si fueran divs con flexbox

### Ejemplo Práctico: Card

```
Card (Auto Layout vertical, gap: 16px, padding: 24px)
├── image (Fixed height: 200px, Fill width)
├── content (Auto Layout vertical, gap: 8px, Fill width)
│   ├── title (Hug)
│   └── description (Hug)
└── actions (Auto Layout horizontal, gap: 12px, Hug)
    ├── button-secondary (Hug)
    └── button-primary (Hug)
```

## Design Tokens y Estilos

### ¿Qué son los Design Tokens?

Los tokens son los valores fundamentales de tu sistema: colores, tipografías, espaciados. Deben estar definidos como **estilos en Figma**, no como valores sueltos.

### Estructura de Estilos de Color

```
COLORES PRIMITIVOS (Paleta base)
primitive/blue/100
primitive/blue/500
primitive/gray/100
primitive/gray/900

COLORES SEMÁNTICOS (Por uso)
semantic/primary/default
semantic/error/default
semantic/success/default

COLORES DE SUPERFICIE
surface/background/primary
surface/foreground/primary
surface/border/default
```

### Estructura de Estilos de Texto

```
HEADINGS
heading/h1/bold
heading/h2/semibold
heading/h3/medium

BODY
body/lg/regular
body/md/regular
body/sm/regular

UTILITY
utility/caption/regular
utility/label/medium
utility/button/medium
```

### Variables de Figma

Si tienes acceso a Variables de Figma:

```
ESPACIADO
spacing/xs    → 4px
spacing/sm    → 8px
spacing/md    → 16px
spacing/lg    → 24px
spacing/xl    → 32px

RADIOS
radius/sm     → 4px
radius/md     → 8px
radius/lg     → 16px
radius/full   → 9999px
```

**Ventaja:** Las variables se exportan como CSS custom properties o design tokens JSON.

### Tip Importante

Los nombres de tus estilos deberían coincidir con los nombres en el código. **Coordina con tu equipo de desarrollo** antes de definir la nomenclatura.

## Componentes y Variantes

### Documentación de Componentes

Cada componente debería tener:

1. **Todas las variantes de estado** (default, hover, active, disabled, etc.)
2. **Todos los tamaños** (small, medium, large)
3. **Todas las variantes visuales** (primary, secondary, tertiary)
4. **Descripción** en el panel de propiedades

### Estructura de Variantes

```
Button
├── Type: Primary, Secondary, Tertiary
├── Size: Small, Medium, Large
├── State: Default, Hover, Active, Focus, Disabled, Loading
└── Icon: None, Leading, Trailing, Both
```

### Props Documentadas

En la descripción del componente, incluye:

```
Button - Componente principal de acción

Props:
- type: primary | secondary | tertiary
- size: sm (32px) | md (40px) | lg (48px)
- state: default | hover | active | focus | disabled | loading
- icon: leading | trailing | both | none

Uso:
- Primary: Acción principal de la página
- Secondary: Acciones secundarias
- Tertiary: Acciones de bajo énfasis
```

## Mejores Prácticas

1. **Nombra mientras diseñas** - Es más fácil que renombrar todo al final
2. **Usa estilos desde el inicio** - No apliques colores directamente
3. **Estructura con Auto Layout** - Piensa en cómo se construirá
4. **Documenta en el archivo** - No dependas de explicaciones verbales
5. **Limpia antes de entregar** - Elimina frames de prueba y elementos no usados

## Resumen

- La organización del archivo es lo que hace la diferencia
- Nomenclatura consistente ahorra tiempo a todos
- Auto Layout se traduce directamente a CSS Flexbox
- Los estilos permiten que el desarrollador vea qué token usar
- Los componentes deben tener todas sus variantes documentadas

## Recursos Relacionados

- [Guía Completa de Nomenclatura](/recursos/nomenclatura)
- [Template de Documentación](/recursos/template)
- [Checklist de Handoff](/recursos/checklist)

## Siguiente Paso

Con el archivo bien preparado, el siguiente paso es asegurar que documentas [todos los estados y animaciones](/modulo-4-estados) de tus componentes.
