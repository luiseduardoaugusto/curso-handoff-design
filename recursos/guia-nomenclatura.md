# Guía de Nomenclatura para Figma

Convenciones de nombres para capas, componentes y estilos que facilitan el handoff.

---

## Principios Generales

### 1. Consistencia
Usa el mismo patrón en todo el archivo. Si eliges `camelCase`, úsalo siempre.

### 2. Descriptivo
El nombre debe indicar qué es el elemento, no cómo se ve.
- ❌ `blue-box`
- ✅ `notification-banner`

### 3. Jerárquico
Organiza de lo general a lo específico.
- ✅ `Button/Primary/Large/Default`

### 4. Sin caracteres especiales
Evita espacios, acentos y caracteres especiales que puedan causar problemas en código.

---

## Convenciones de Nomenclatura

### Opción A: kebab-case (Recomendado)
```
button-primary
card-product
input-text-error
icon-arrow-right
```
**Ventaja:** Compatible con CSS y naming de archivos.

### Opción B: PascalCase
```
ButtonPrimary
CardProduct
InputTextError
IconArrowRight
```
**Ventaja:** Compatible con componentes React/Vue.

### Opción C: snake_case
```
button_primary
card_product
input_text_error
icon_arrow_right
```
**Ventaja:** Compatible con Python y algunos frameworks backend.

---

## Nomenclatura por Tipo de Elemento

### Páginas

```
Formato: [Número] [Categoría] - [Nombre]

Ejemplos:
01 Cover
02 Design Tokens
03 Components
04 Desktop - Home
05 Desktop - Dashboard
06 Mobile - Home
07 Mobile - Dashboard
08 Prototypes
09 Archive
```

### Frames de Diseño

```
Formato: [Feature]/[Página]/[Estado]/[Breakpoint]

Ejemplos:
Auth/Login/Default/Desktop
Auth/Login/Error/Desktop
Auth/Login/Loading/Desktop
Auth/Login/Default/Mobile

Dashboard/Overview/Empty/Desktop
Dashboard/Overview/Populated/Desktop
Dashboard/Overview/Loading/Desktop

Settings/Profile/Edit-Mode/Desktop
Settings/Profile/View-Mode/Desktop
```

### Secciones dentro de una página

```
Formato: section-[nombre]

Ejemplos:
section-hero
section-features
section-testimonials
section-pricing
section-footer
```

---

## Componentes

### Estructura Básica

```
Formato: [Categoría]/[Nombre]/[Variante]/[Estado]

Niveles:
1. Categoría (tipo de componente)
2. Nombre específico
3. Variante (estilo visual)
4. Estado (interacción)
```

### Ejemplos por Categoría

#### Botones
```
Button/Primary/Large/Default
Button/Primary/Large/Hover
Button/Primary/Large/Active
Button/Primary/Large/Disabled
Button/Primary/Medium/Default
Button/Secondary/Large/Default
Button/Tertiary/Large/Default
Button/Icon-Only/Default
```

#### Inputs
```
Input/Text/Default/Empty
Input/Text/Default/Filled
Input/Text/Default/Focus
Input/Text/Default/Error
Input/Text/Default/Disabled
Input/Text/With-Icon/Empty
Input/Password/Default/Empty
Input/Search/Default/Empty
Input/Textarea/Default/Empty
```

#### Cards
```
Card/Product/Default
Card/Product/Hover
Card/Product/Selected
Card/User/Compact
Card/User/Expanded
Card/Pricing/Basic
Card/Pricing/Pro
Card/Pricing/Enterprise
```

#### Navegación
```
Nav/Header/Desktop/Default
Nav/Header/Desktop/Scrolled
Nav/Header/Mobile/Default
Nav/Header/Mobile/Menu-Open
Nav/Sidebar/Expanded
Nav/Sidebar/Collapsed
Nav/Breadcrumb/Default
Nav/Tabs/Default
Nav/Pagination/Default
```

#### Feedback
```
Alert/Success/Default
Alert/Warning/Default
Alert/Error/Default
Alert/Info/Default
Toast/Success/Default
Toast/Error/Default
Modal/Confirmation/Default
Modal/Form/Default
Tooltip/Top/Default
Tooltip/Bottom/Default
```

#### Formularios
```
Form/Field/Text/Default
Form/Field/Select/Default
Form/Field/Checkbox/Unchecked
Form/Field/Checkbox/Checked
Form/Field/Radio/Unselected
Form/Field/Radio/Selected
Form/Field/Toggle/Off
Form/Field/Toggle/On
Form/Label/Required
Form/Label/Optional
Form/Helper-Text/Default
Form/Error-Message/Default
```

---

## Capas Internas

### Estructura de un Componente

```
Button/Primary/Large/Default
├── container
│   ├── icon-leading (optional)
│   ├── label
│   └── icon-trailing (optional)
```

### Nombres de Capas Comunes

```
CONTENEDORES
─────────────────────────────
container       → Contenedor principal
wrapper         → Envoltorio de grupo
content         → Área de contenido
inner           → Contenido interno
outer           → Contenido externo

TEXTO
─────────────────────────────
label           → Etiqueta de botón/input
title           → Título principal
subtitle        → Subtítulo
description     → Descripción/párrafo
caption         → Texto pequeño auxiliar
placeholder     → Texto placeholder
helper-text     → Texto de ayuda
error-message   → Mensaje de error

ELEMENTOS VISUALES
─────────────────────────────
icon            → Icono genérico
icon-leading    → Icono al inicio
icon-trailing   → Icono al final
icon-action     → Icono de acción
avatar          → Imagen de usuario
thumbnail       → Imagen miniatura
image           → Imagen principal
background      → Fondo
overlay         → Capa superpuesta
divider         → Línea divisoria
badge           → Insignia/contador
dot             → Indicador circular

INTERACTIVOS
─────────────────────────────
button          → Botón
link            → Enlace
input           → Campo de entrada
checkbox        → Casilla de verificación
radio           → Botón de radio
toggle          → Interruptor
slider          → Deslizador
dropdown        → Menú desplegable

LAYOUT
─────────────────────────────
header          → Cabecera
body            → Cuerpo
footer          → Pie
sidebar         → Barra lateral
main            → Contenido principal
row             → Fila
column          → Columna
grid            → Cuadrícula
stack           → Apilado
spacer          → Espaciador
```

---

## Estilos de Color

### Estructura

```
Formato: [categoría]/[nombre]/[variante]

COLORES PRIMITIVOS (Paleta base)
─────────────────────────────────────
primitive/blue/100
primitive/blue/200
primitive/blue/300
primitive/blue/400
primitive/blue/500
primitive/gray/100
primitive/gray/500
primitive/gray/900

COLORES SEMÁNTICOS (Por uso)
─────────────────────────────────────
semantic/primary/default
semantic/primary/hover
semantic/primary/active
semantic/secondary/default
semantic/success/default
semantic/warning/default
semantic/error/default
semantic/info/default

COLORES DE SUPERFICIE
─────────────────────────────────────
surface/background/primary
surface/background/secondary
surface/background/tertiary
surface/foreground/primary
surface/foreground/secondary
surface/foreground/muted
surface/border/default
surface/border/strong

COLORES ESPECÍFICOS DE COMPONENTE
─────────────────────────────────────
component/button/primary/background
component/button/primary/text
component/button/secondary/background
component/input/background
component/input/border
component/input/border-focus
component/card/background
component/card/border
```

---

## Estilos de Texto

### Estructura

```
Formato: [categoría]/[tamaño]/[peso]

DISPLAY
─────────────────────────────────────
display/xl/bold
display/lg/bold
display/md/bold

HEADINGS
─────────────────────────────────────
heading/h1/bold
heading/h2/semibold
heading/h3/semibold
heading/h4/medium
heading/h5/medium
heading/h6/medium

BODY
─────────────────────────────────────
body/lg/regular
body/lg/medium
body/lg/bold
body/md/regular
body/md/medium
body/sm/regular
body/sm/medium

UTILITY
─────────────────────────────────────
utility/caption/regular
utility/overline/medium
utility/label/medium
utility/button/medium
utility/link/regular
utility/code/mono
```

---

## Estilos de Efectos

### Sombras

```
elevation/sm      → Elevación pequeña (cards)
elevation/md      → Elevación media (dropdowns)
elevation/lg      → Elevación grande (modals)
elevation/xl      → Elevación extra (tooltips sticky)
```

### Blur

```
blur/sm           → Blur pequeño (4px)
blur/md           → Blur medio (8px)
blur/lg           → Blur grande (16px)
blur/backdrop     → Para overlays
```

---

## Iconos

### Nomenclatura

```
Formato: icon/[categoría]/[nombre]

icon/navigation/arrow-left
icon/navigation/arrow-right
icon/navigation/chevron-down
icon/navigation/chevron-up
icon/navigation/menu
icon/navigation/close

icon/action/edit
icon/action/delete
icon/action/add
icon/action/remove
icon/action/search
icon/action/filter
icon/action/download
icon/action/upload
icon/action/share
icon/action/copy

icon/communication/mail
icon/communication/chat
icon/communication/notification
icon/communication/phone

icon/status/check
icon/status/warning
icon/status/error
icon/status/info
icon/status/loading

icon/media/image
icon/media/video
icon/media/audio
icon/media/file

icon/social/twitter
icon/social/facebook
icon/social/linkedin
icon/social/instagram
```

---

## Variables (Figma Variables)

### Nomenclatura

```
COLORES
─────────────────────────────────────
colors/primary/500
colors/secondary/500
colors/neutral/100
colors/semantic/success
colors/semantic/error

ESPACIADO
─────────────────────────────────────
spacing/xs          → 4px
spacing/sm          → 8px
spacing/md          → 16px
spacing/lg          → 24px
spacing/xl          → 32px
spacing/2xl         → 48px
spacing/3xl         → 64px

RADIOS
─────────────────────────────────────
radius/none         → 0px
radius/sm           → 4px
radius/md           → 8px
radius/lg           → 16px
radius/xl           → 24px
radius/full         → 9999px

BREAKPOINTS
─────────────────────────────────────
breakpoint/mobile   → 375px
breakpoint/tablet   → 768px
breakpoint/desktop  → 1024px
breakpoint/wide     → 1440px
```

---

## Anti-Patrones (Qué NO hacer)

### Nombres Genéricos
```
❌ Frame 1, Frame 2, Frame 3
❌ Group 1, Group 2
❌ Rectangle 1
❌ Component 1

✅ hero-section
✅ product-card-group
✅ avatar-background
✅ button-primary
```

### Nombres por Apariencia
```
❌ blue-button
❌ big-text
❌ rounded-box
❌ left-sidebar

✅ button-primary
✅ heading-h1
✅ card-container
✅ navigation-sidebar
```

### Inconsistencia
```
❌ Mezclar convenciones:
   - Button_Primary
   - card-product
   - InputText

✅ Mantener una sola convención:
   - button-primary
   - card-product
   - input-text
```

### Nombres Muy Largos
```
❌ button-primary-large-with-icon-left-and-right-disabled-state

✅ Button/Primary/Large/With-Icons/Disabled
   (usar jerarquía de componentes en lugar de nombre largo)
```

---

## Checklist de Nomenclatura

Antes del handoff, verifica:

- [ ] Todas las capas tienen nombres descriptivos
- [ ] No hay "Frame 123" o "Group 456"
- [ ] Los componentes siguen la estructura jerárquica
- [ ] Los estilos de color tienen nombres semánticos
- [ ] Los estilos de texto indican uso, no apariencia
- [ ] Los iconos están categorizados
- [ ] Se usa una sola convención (kebab-case, PascalCase, etc.)
- [ ] Los nombres son en inglés (recomendado para código)

---

*Adopta estas convenciones desde el inicio del proyecto para mantener consistencia.*
