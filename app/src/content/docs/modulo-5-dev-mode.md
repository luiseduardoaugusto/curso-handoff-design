---
title: "Módulo 5: Dev Mode y Especificaciones Técnicas"
description: Domina la herramienta principal para extraer código, medidas y assets desde Figma
---

# Dev Mode y Especificaciones Técnicas

## Introducción

Dev Mode es la vista de Figma optimizada para extraer especificaciones técnicas. Es como ver el diseño con "ojos de código". En este módulo aprenderás a usarlo y también alternativas si no tienes acceso al plan profesional.

## ¿Qué es Dev Mode?

Dev Mode es un modo de visualización en Figma que transforma la interfaz para mostrar:

- Código CSS/Swift/Android de cada elemento
- Medidas automáticas al hacer hover
- Assets listos para exportar
- Comparación de cambios entre versiones

**Cómo activarlo:** Click en el ícono `</>` en la esquina superior derecha, o usa el toggle de Dev Mode.

## Tour de Dev Mode

### Panel de Código

Cuando seleccionas un elemento, el panel derecho muestra código:

```css
/* Ejemplo: Botón seleccionado */
width: 120px;
height: 40px;
padding: 12px 24px;
background: #1E88E5;
border-radius: 8px;

/* Tipografía */
font-family: 'Inter';
font-weight: 600;
font-size: 14px;
line-height: 20px;
color: #FFFFFF;
```

**Formatos disponibles:**
- CSS (web)
- iOS (Swift/SwiftUI)
- Android (XML/Compose)

### Medidas Entre Elementos

Al seleccionar un elemento y pasar el cursor sobre otro:

```
┌─────────────────────────────────────┐
│                                     │
│   [Elemento A]                      │
│        │                            │
│        │ 24px                       │
│        ↓                            │
│   [Elemento B]                      │
│                                     │
└─────────────────────────────────────┘
```

Las distancias aparecen automáticamente. El desarrollador no tiene que adivinar.

### Referencia a Estilos

Si el elemento usa estilos de Figma, Dev Mode muestra el nombre del token:

```css
/* Sin estilos (malo) */
background: #1E88E5;

/* Con estilos (bueno) */
background: var(--primary-500); /* semantic/primary/default */
```

**Esto es oro para el desarrollador:** puede usar el mismo nombre de token en el código.

### Panel de Assets

En la pestaña de Assets:
- Todos los elementos marcados para exportar
- Descarga individual o en lote
- Los formatos configurados se respetan

## Inspección Profunda

### Propiedades de Layout

Dev Mode muestra cómo está construido el Auto Layout:

```css
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
padding: 24px;
```

### Efectos y Sombras

```css
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
border-radius: 8px;
```

### Tipografía Completa

```css
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
letter-spacing: -0.01em;
```

## Compare Changes

Dev Mode permite comparar versiones:

1. En el panel lateral, selecciona "Compare changes"
2. Elige dos versiones
3. Ve exactamente qué cambió

**Útil para:** Cuando actualizas el diseño y el desarrollador necesita saber qué implementar nuevo.

## Exportación de Assets

### Configuración Recomendada

Para iconos:
```
Formato: SVG
Nombre: icon-{nombre}.svg
```

Para imágenes:
```
Formatos: PNG @1x, @2x, @3x (o WebP)
Nombre: img-{nombre}@{escala}.png
```

### Tips de Exportación

1. **Siempre SVG para iconos**
   - Escalables sin pérdida
   - Editables con CSS (color, tamaño)
   - Peso mínimo

2. **Nombres descriptivos**
   - ✓ `icon-arrow-left.svg`
   - ✗ `Vector 23.svg`

3. **Configura la exportación en el diseño**
   - Click derecho > "Export settings"
   - Agrega los formatos necesarios
   - Así siempre están listos

4. **Usa `currentColor` en iconos**
   - Permite que el color se herede del padre
   - Más flexible en implementación

## Plugins Útiles para Dev Mode

### Tokens Studio
Para equipos que usan design tokens formalmente.
- Exporta tokens a JSON
- Sincroniza con repositorios
- Compatible con Style Dictionary

### Measure
Crea anotaciones visuales de espaciado.
- A veces quieres las medidas visibles en el diseño
- Útil para documentación estática

### Locofy / Anima
Generan código más completo.
- React, Vue, HTML
- Mantienen estructura de componentes
- Útil como punto de partida

Ver lista completa en [Plugins Recomendados](/recursos/plugins).

## ¿Y si No Tengo Dev Mode?

Dev Mode requiere plan pago. Alternativas gratuitas:

### 1. Inspect Panel (Gratuito)

La versión gratuita tiene un panel de inspección básico:
- Click en un elemento
- Panel derecho muestra propiedades
- Menos completo, pero funcional

### 2. Plugins de Especificaciones

**Redlines:**
- Genera anotaciones de dimensiones
- Muestra propiedades CSS
- Crea documentación visual

**Measure:**
- Líneas de cota automáticas
- Muestra distancias

### 3. Documentación Manual

Crea una página en tu Figma con specs escritas:

```
BUTTON PRIMARY
─────────────────────────────────────
Background: #1E88E5 (primary-500)
Border radius: 8px
Padding: 12px 24px
Height: 40px

Tipografía:
- Font: Inter SemiBold
- Size: 14px
- Color: #FFFFFF
```

No es ideal, pero funciona. Lo importante es que la información llegue al desarrollador.

## Mejores Prácticas para Dev Mode

1. **Usa estilos siempre**
   - Dev Mode mostrará el nombre del token
   - Mucho más útil que valores crudos

2. **Auto Layout correcto**
   - El código de flexbox será usable
   - Valores consistentes (múltiplos de 8)

3. **Nombra las capas**
   - Dev Mode usa los nombres en el código
   - `button-primary` es mejor que `Frame 234`

4. **Configura exportación desde el diseño**
   - Los assets estarán listos en Dev Mode
   - No habrá que configurar cada vez

5. **Mantén el archivo limpio**
   - Menos elementos = menos confusión
   - Archiva lo que no se implementa

## Resumen

- Dev Mode es la vista optimizada para desarrolladores
- Muestra código CSS/Swift/Android de cada elemento
- Las medidas aparecen automáticamente entre elementos
- Los estilos de Figma se muestran como nombres de tokens
- Compare changes ayuda a ver qué actualizaste
- Sin Dev Mode, usa Inspect panel o plugins como Redlines

## Recursos Relacionados

- [Plugins Recomendados](/recursos/plugins)
- [Checklist de Exportación](/recursos/checklist#assets-y-exportación)

## Siguiente Paso

Ya sabes extraer especificaciones. El último paso es establecer [flujos de feedback y colaboración](/modulo-6-feedback) para mantener la comunicación después del handoff.
