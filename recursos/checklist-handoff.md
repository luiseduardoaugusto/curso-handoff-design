# Checklist de Handoff de Figma

Lista de verificación antes de entregar diseños al equipo de desarrollo.

---

## Pre-Handoff: Preparación del Archivo

### Organización General
- [ ] El archivo tiene una estructura de páginas clara y organizada
- [ ] Existe una página de "Cover" o portada con información del proyecto
- [ ] Las páginas están nombradas de forma descriptiva (no "Page 1", "Page 2")
- [ ] Se eliminaron frames de prueba, borradores y elementos descartados
- [ ] El archivo no contiene componentes huérfanos o sin usar

### Nomenclatura
- [ ] Todas las capas tienen nombres descriptivos (no "Frame 123", "Rectangle 45")
- [ ] Se sigue una convención de nomenclatura consistente en todo el archivo
- [ ] Los componentes siguen el patrón acordado (ej: `Button/Primary/Default`)
- [ ] Los grupos y frames tienen nombres que reflejan su contenido

### Componentes y Estilos
- [ ] Todos los elementos repetidos están componentizados
- [ ] Las variantes de componentes están completas (todos los estados)
- [ ] Los componentes tienen descripciones documentadas
- [ ] Se utilizan estilos de color (no colores sueltos)
- [ ] Se utilizan estilos de texto (no tipografía suelta)
- [ ] Los estilos están nombrados siguiendo tokens del sistema de diseño

---

## Estructura y Layout

### Auto Layout
- [ ] Los frames principales usan Auto Layout
- [ ] El padding y gap están definidos correctamente
- [ ] El comportamiento de resize está configurado (Hug/Fill/Fixed)
- [ ] Los constraints reflejan el comportamiento responsive esperado

### Responsive
- [ ] Existen versiones para breakpoints principales (Mobile, Tablet, Desktop)
- [ ] Los elementos se adaptan correctamente al cambiar el tamaño del frame
- [ ] Se documentaron los breakpoints utilizados

### Espaciado y Grid
- [ ] Se utiliza un sistema de espaciado consistente (4px, 8px base)
- [ ] Los grids están documentados (columnas, márgenes, gutters)
- [ ] El espaciado entre elementos es múltiplo del sistema base

---

## Estados e Interacciones

### Estados de Componentes
- [ ] **Default** - Estado inicial/normal
- [ ] **Hover** - Al pasar el cursor
- [ ] **Active/Pressed** - Al hacer clic
- [ ] **Focus** - Al navegar con teclado
- [ ] **Disabled** - Estado deshabilitado
- [ ] **Loading** - Estado de carga (si aplica)
- [ ] **Error** - Estado de error (si aplica)
- [ ] **Success** - Estado de éxito (si aplica)
- [ ] **Empty** - Estado vacío (si aplica)

### Interacciones y Animaciones
- [ ] Las transiciones están especificadas (duración, easing)
- [ ] Las micro-interacciones están documentadas
- [ ] Se crearon prototipos para flujos complejos
- [ ] Se especificó el tipo de animación (fade, slide, scale, etc.)

### Flujos de Usuario
- [ ] Los flujos principales tienen prototipos navegables
- [ ] Se documentaron los edge cases y estados de error
- [ ] Las validaciones de formularios están especificadas

---

## Assets y Exportación

### Iconos
- [ ] Los iconos están en formato vectorial (SVG)
- [ ] Los iconos tienen tamaño consistente (ej: 24x24, 16x16)
- [ ] Los iconos usan `currentColor` o color configurable
- [ ] Se configuró la exportación en los formatos necesarios

### Imágenes
- [ ] Las imágenes placeholder están marcadas como tal
- [ ] Se especificaron las dimensiones y aspect ratios
- [ ] Se definió el tratamiento de imágenes (crop, cover, contain)
- [ ] Se configuró exportación @1x, @2x, @3x si es necesario

### Exportación General
- [ ] Los assets exportables están marcados para exportación
- [ ] Los formatos de exportación están configurados (SVG, PNG, WebP)
- [ ] Los nombres de archivo de exportación son correctos

---

## Documentación y Anotaciones

### Especificaciones
- [ ] Los colores tienen sus valores hex/rgba documentados
- [ ] La tipografía tiene especificaciones completas (font, weight, size, line-height)
- [ ] Los border-radius están especificados
- [ ] Las sombras tienen valores documentados

### Anotaciones
- [ ] Las interacciones complejas tienen notas explicativas
- [ ] Los comportamientos condicionales están documentados
- [ ] Las excepciones y casos especiales están marcados
- [ ] Se incluyeron notas de accesibilidad donde aplica

### Contenido
- [ ] El copy/texto es el final (no lorem ipsum en producción)
- [ ] Se documentaron las variaciones de texto (singular/plural, truncado)
- [ ] Se especificó el comportamiento de texto largo (truncate, wrap)

---

## Accesibilidad

### Contraste
- [ ] Los textos cumplen con ratio de contraste WCAG AA (4.5:1 para texto normal)
- [ ] Los elementos interactivos tienen contraste suficiente
- [ ] Se verificó el contraste en todos los estados

### Tamaños
- [ ] El texto mínimo es 16px para cuerpo (o equivalente)
- [ ] Las áreas tocables son mínimo 44x44px en mobile
- [ ] Los iconos tienen tamaño suficiente para ser reconocibles

### Otros
- [ ] Se definió el orden de lectura/tabulación
- [ ] Los elementos interactivos tienen estados de focus visibles
- [ ] Se proporcionaron textos alternativos para imágenes importantes

---

## Permisos y Compartir

### Configuración de Acceso
- [ ] El archivo tiene los permisos correctos configurados
- [ ] Se generó link de solo lectura para desarrolladores
- [ ] El link no expira o tiene fecha de expiración adecuada
- [ ] Se verificó que el link funciona sin iniciar sesión

### Comunicación
- [ ] Se notificó al equipo de desarrollo que el handoff está listo
- [ ] Se programó reunión de walkthrough si es necesario
- [ ] Se compartió en el canal de comunicación acordado

---

## Checklist Rápido (Versión Corta)

Para handoffs urgentes, verifica al menos estos puntos críticos:

- [ ] Capas nombradas correctamente
- [ ] Componentes con todos sus estados
- [ ] Auto Layout configurado
- [ ] Estilos de color y texto aplicados
- [ ] Assets listos para exportar
- [ ] Link compartido con permisos correctos
- [ ] Desarrolladores notificados

---

## Notas Post-Handoff

- [ ] Mantener el archivo actualizado con cambios aprobados
- [ ] Responder comentarios de desarrolladores en < 24h
- [ ] Documentar decisiones de cambios durante implementación
- [ ] Hacer QA visual una vez implementado

---

*Utiliza este checklist antes de cada handoff para asegurar una entrega completa y profesional.*
