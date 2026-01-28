# Guion del Curso: Handoff de Figma
## De Diseño a Código - 90 minutos

---

## Información de Contexto

| Campo | Detalle |
|-------|---------|
| **Duración total** | 90 minutos |
| **Audiencia** | Diseñadores UI/UX |
| **Modalidad** | Virtual en vivo (Zoom/Meet) |
| **Formato** | Demostrativo con interacción |
| **Herramientas requeridas** | Figma con plan Professional, Zoom/Meet con screen share |

---

## Materiales Necesarios

### Para el instructor
- [ ] Archivo Figma de ejemplo preparado (bien estructurado)
- [ ] Archivo Figma con "errores comunes" (mal nombrado, sin Auto Layout)
- [ ] Slides de apoyo (opcional, para introducción)
- [ ] Links de recursos listos para compartir en el chat
- [ ] Segunda pantalla recomendada (chat + Figma)

### Documentos de referencia (ya generados)
- `recursos/checklist-handoff.md`
- `recursos/template-documentacion.md`
- `recursos/guia-nomenclatura.md`
- `recursos/plugins-recomendados.md`

### Para compartir con asistentes (post-curso)
- Link al archivo Figma de ejemplo (view only)
- PDFs de los recursos
- Grabación del curso (si aplica)

---

## Estructura General

```
00:00 - 00:10  │  Bienvenida e Introducción
00:10 - 00:20  │  Compartir Diseños sin Fricción
00:20 - 00:45  │  Preparación del Archivo para Handoff
00:45 - 00:55  │  Estados, Animaciones y Prototipos
00:55 - 01:15  │  Dev Mode y Especificaciones Técnicas
01:15 - 01:25  │  Feedback y Colaboración
01:25 - 01:30  │  Cierre y Q&A
```

---

# BLOQUE 1: Bienvenida e Introducción
## ⏱️ 00:00 - 00:10 (10 minutos)

### 00:00 - 00:03 | Bienvenida (3 min)

**[SLIDE O PANTALLA DE INICIO]**

> **GUION:**
>
> "¡Hola a todos! Bienvenidos al curso de Handoff de Figma: De Diseño a Código.
>
> Mi nombre es [NOMBRE] y hoy vamos a hablar de algo que probablemente todos hemos vivido: ese momento en que entregas tu diseño a desarrollo y... las cosas no salen exactamente como esperabas.
>
> ¿Les ha pasado que ven la implementación y piensan 'eso no era así'? ¿O que el desarrollador les pregunta cosas que creían obvias?"

**[PAUSA PARA RESPUESTAS EN CHAT]**

> "Exacto. Hoy vamos a resolver eso."

---

### 00:03 - 00:05 | Dinámica del curso (2 min)

> **GUION:**
>
> "Antes de empezar, algunas cosas sobre cómo funcionará este curso:
>
> 1. **Es demostrativo** - Voy a mostrar todo en Figma en vivo
> 2. **Pregunten en cualquier momento** - Usen el chat, lo estaré monitoreando
> 3. **Habrá encuestas rápidas** - Para hacerlo más interactivo
> 4. **Al final comparto recursos** - Checklists, guías y el archivo de ejemplo
>
> La idea es que salgan de aquí con un proceso claro que puedan aplicar desde mañana."

---

### 00:05 - 00:08 | ¿Qué es el Handoff? (3 min)

> **GUION:**
>
> "Empecemos por definir qué es el handoff.
>
> El handoff es el proceso de **transferir un diseño** del equipo de diseño al equipo de desarrollo para su implementación.
>
> Pero ojo, no es solo 'mandar el link de Figma'. Es **comunicar**:
> - Qué se debe construir
> - Cómo debe comportarse
> - Qué valores específicos usar
> - Qué estados existen
>
> Un buen handoff reduce preguntas, reduce reprocesos, y mejora la relación con el equipo de desarrollo."

---

### 00:08 - 00:10 | Problemas comunes (2 min)

**[ENCUESTA INTERACTIVA - Zoom Poll o pedir respuestas en chat]**

> **GUION:**
>
> "Hagamos una encuesta rápida. ¿Cuál de estos problemas han experimentado más?
>
> A) El desarrollador implementó algo diferente a lo diseñado
> B) Me pidieron especificaciones que creí obvias
> C) Los assets exportados no servían
> D) No sabían qué estaba aprobado y qué era borrador
> E) Todos los anteriores"

**[ESPERAR RESPUESTAS - 30 segundos]**

> "Interesante. [COMENTAR RESULTADOS]. Todos estos problemas los vamos a abordar hoy."

---

# BLOQUE 2: Compartir Diseños sin Fricción
## ⏱️ 00:10 - 00:20 (10 minutos)

### 00:10 - 00:12 | El problema de las cuentas (2 min)

**[COMPARTIR PANTALLA - Figma]**

> **GUION:**
>
> "Primer tema: cómo compartir diseños sin que los desarrolladores necesiten crear cuenta en Figma.
>
> Esto es especialmente importante cuando trabajas con:
> - Equipos externos o freelancers
> - Desarrolladores que no quieren 'otra herramienta más'
> - Stakeholders que solo necesitan ver, no editar"

---

### 00:12 - 00:17 | Demo: Opciones de compartir (5 min)

**[DEMO EN VIVO - FIGMA]**

> **GUION:**
>
> "Voy a mostrarles las diferentes formas de compartir.
>
> **Opción 1: Link público con 'Anyone with the link'**
>
> [MOSTRAR: Click en Share > cambiar a 'Anyone with the link' > 'can view']
>
> Con esta opción, cualquiera con el link puede ver el archivo SIN iniciar sesión. Es perfecto para desarrolladores que solo necesitan consultar specs.
>
> **Opción 2: Embed del prototipo**
>
> [MOSTRAR: Abrir prototipo > Share > Get embed code]
>
> Esto genera un código que pueden pegar en Notion, Confluence, o su documentación interna. El prototipo queda embebido y navegable.
>
> **Opción 3: Links específicos a frames**
>
> [MOSTRAR: Click derecho en frame > Copy link to selection]
>
> Esto es útil cuando quieren apuntar a una pantalla específica sin que el dev tenga que buscarla."

---

### 00:17 - 00:20 | Buenas prácticas de permisos (3 min)

> **GUION:**
>
> "Algunas buenas prácticas:
>
> 1. **Nunca den acceso de edición** a menos que sea necesario. 'Can view' es suficiente para handoff.
>
> 2. **Creen un link específico para desarrollo** - Así pueden revocarlo si cambian de proveedor.
>
> 3. **Verifiquen el link** - Abran una ventana incógnito y confirmen que funciona sin login.
>
> 4. **Documenten dónde está el link** - En Slack, Notion, Jira... donde sea que su equipo centralice información."

💡 **REFERENCIA:** *Ver sección "Permisos y Compartir" en `checklist-handoff.md`*

---

# BLOQUE 3: Preparación del Archivo para Handoff
## ⏱️ 00:20 - 00:45 (25 minutos)

### 00:20 - 00:22 | Introducción (2 min)

> **GUION:**
>
> "Este es el bloque más importante del curso. La preparación del archivo es lo que marca la diferencia entre un handoff caótico y uno profesional.
>
> Vamos a ver:
> - Organización de páginas y frames
> - Nomenclatura de capas
> - Auto Layout para desarrollo
> - Design tokens y estilos"

---

### 00:22 - 00:28 | Demo: Organización y Nomenclatura (6 min)

**[DEMO EN VIVO - Mostrar archivo MAL organizado vs BIEN organizado]**

> **GUION:**
>
> "Les voy a mostrar dos archivos. Este primero es lo que NO deben hacer."
>
> **[MOSTRAR ARCHIVO MALO]**
>
> [Señalar mientras hablas:]
>
> "Miren:
> - Las páginas se llaman 'Page 1', 'Page 2', 'Untitled'
> - Los frames son 'Frame 234', 'Frame 235'
> - Las capas internas... 'Rectangle 45', 'Group 12'
>
> Si yo fuera desarrollador viendo esto, no sabría por dónde empezar.
>
> Ahora veamos el mismo diseño bien organizado."
>
> **[CAMBIAR A ARCHIVO BUENO]**
>
> "Aquí tenemos:
> - Páginas claras: 'Cover', 'Design Tokens', 'Components', 'Desktop - Home'
> - Frames nombrados: 'Home/Default/Desktop', 'Home/Loading/Desktop'
> - Capas descriptivas: 'header', 'nav-item', 'button-primary'
>
> El desarrollador puede encontrar lo que busca inmediatamente."

💡 **REFERENCIA:** *Ver estructura completa en `template-documentacion.md`*

---

### 00:28 - 00:30 | Convenciones de nomenclatura (2 min)

> **GUION:**
>
> "Para los nombres, mi recomendación es usar **kebab-case**: todo en minúsculas separado por guiones.
>
> - `button-primary`
> - `card-product`
> - `input-error`
>
> ¿Por qué? Porque es compatible con CSS. El desarrollador puede usar esos mismos nombres en su código.
>
> Para componentes, usen jerarquía con slashes:
> - `Button/Primary/Large/Default`
> - `Button/Primary/Large/Hover`
>
> Esto crea la estructura de variantes automáticamente."

💡 **REFERENCIA:** *Ver convenciones completas en `guia-nomenclatura.md`*

---

### 00:30 - 00:38 | Demo: Auto Layout para Desarrollo (8 min)

**[DEMO EN VIVO - FIGMA]**

> **GUION:**
>
> "Ahora viene algo crucial: Auto Layout.
>
> Muchos diseñadores usan Auto Layout para comodidad propia, pero no saben que **Auto Layout se traduce directamente a Flexbox en CSS**.
>
> Les voy a mostrar cómo configurarlo pensando en desarrollo."

**[MOSTRAR UN COMPONENTE CARD]**

> "Vean esta card. Tiene Auto Layout con:
> - Dirección vertical
> - Gap de 16px entre elementos
> - Padding de 24px
>
> [ABRIR DEV MODE]
>
> Cuando el desarrollador ve esto en Dev Mode, obtiene:
> ```css
> display: flex;
> flex-direction: column;
> gap: 16px;
> padding: 24px;
> ```
>
> Es código listo para usar.
>
> **Configuración importante:**
>
> [MOSTRAR PANEL DE AUTO LAYOUT]
>
> - **Spacing mode:** Usen valores fijos (8px, 16px, 24px), no 'Auto'
> - **Padding:** Configuren los 4 lados explícitamente si son diferentes
> - **Resizing:**
>   - 'Hug' = El elemento se ajusta al contenido (width: fit-content)
>   - 'Fill' = El elemento ocupa todo el espacio disponible (flex: 1)
>   - 'Fixed' = Tamaño fijo en píxeles"

---

### 00:38 - 00:40 | Momento de reflexión (2 min)

**[PAUSA INTERACTIVA]**

> **GUION:**
>
> "Hagamos una pausa. Quiero que piensen en su último proyecto.
>
> En el chat, díganme: ¿Sus archivos actuales tienen las capas bien nombradas? ¿Usan Auto Layout consistentemente?
>
> Sean honestos, esto es un espacio seguro."

**[LEER ALGUNAS RESPUESTAS DEL CHAT]**

> "Gracias por la honestidad. No se preocupen, lo importante es mejorar de aquí en adelante. Y les voy a dar un checklist que pueden usar."

---

### 00:40 - 00:45 | Demo: Design Tokens y Estilos (5 min)

**[DEMO EN VIVO - FIGMA]**

> **GUION:**
>
> "Último tema de este bloque: Design Tokens.
>
> Los tokens son los valores fundamentales de su sistema: colores, tipografías, espaciados. Y deben estar como **estilos en Figma**, no como valores sueltos."

**[MOSTRAR PANEL DE ESTILOS]**

> "Miren, aquí tengo mis estilos de color organizados:
> - `primary/500`
> - `semantic/error`
> - `surface/background`
>
> Y mis estilos de texto:
> - `heading/h1`
> - `body/regular`
> - `caption/small`
>
> Cuando todo usa estilos, el desarrollador puede ver exactamente qué token corresponde a cada elemento.
>
> **Tip importante:** Los nombres de sus estilos deberían coincidir con los nombres en el código. Coordinen con su equipo de desarrollo."

**[MOSTRAR VARIABLES DE FIGMA SI TIENE TIEMPO]**

> "Y si tienen acceso a Figma Variables, aún mejor. Las variables permiten temas (light/dark) y se exportan directamente como CSS custom properties o design tokens JSON."

💡 **REFERENCIA:** *Ver estructura de tokens en `guia-nomenclatura.md` sección "Estilos de Color"*

---

# BLOQUE 4: Estados, Animaciones y Prototipos
## ⏱️ 00:45 - 00:55 (10 minutos)

### 00:45 - 00:50 | Demo: Documentando Estados (5 min)

**[DEMO EN VIVO - FIGMA]**

> **GUION:**
>
> "Un error común es diseñar solo el estado 'feliz' de las interfaces. Pero los desarrolladores necesitan saber qué pasa en TODOS los estados.
>
> Les voy a mostrar qué estados deberían documentar."

**[MOSTRAR COMPONENTE BUTTON CON VARIANTES]**

> "Para un botón, mínimo necesitan:
> - **Default** - Estado inicial
> - **Hover** - Cursor encima
> - **Active/Pressed** - Click sostenido
> - **Focus** - Navegación con teclado (¡importante para accesibilidad!)
> - **Disabled** - No interactivo
> - **Loading** - Si aplica
>
> [MOSTRAR CADA ESTADO EN VARIANTES]
>
> Todos estos están como variantes del componente. El desarrollador puede verlos todos en un solo lugar."

**[MOSTRAR INPUT CON ESTADOS]**

> "Para un input de formulario, además necesitan:
> - **Empty** - Sin contenido
> - **Filled** - Con contenido
> - **Error** - Validación fallida
> - **Success** - Validación exitosa (opcional)
>
> Y no olviden el mensaje de error. ¿Qué texto aparece? ¿Dónde se posiciona?"

---

### 00:50 - 00:53 | Especificando Animaciones (3 min)

> **GUION:**
>
> "Para animaciones y transiciones, no basta con hacer un prototipo bonito. Necesitan especificar los valores."

**[MOSTRAR PROTOTIPO CON TRANSICIÓN]**

> "Vean esta transición de modal. En Figma configuro:
> - Tipo: Smart animate
> - Easing: Ease out
> - Duración: 300ms
>
> Pero el desarrollador necesita saber esto explícitamente. Mis opciones son:
>
> 1. **Anotación en el diseño** - Un texto que diga: 'Fade in, 300ms, ease-out'
> 2. **Página de especificaciones** - Una página dedicada a documentar animaciones
> 3. **Comentario en Figma** - Un comentario adjunto al elemento
>
> Lo importante es que quede documentado en algún lugar."

---

### 00:53 - 00:55 | Cuándo usar prototipos (2 min)

> **GUION:**
>
> "Una nota sobre prototipos: son útiles, pero no siempre necesarios.
>
> **Usen prototipos cuando:**
> - El flujo es complejo y difícil de explicar con imágenes estáticas
> - Necesitan validar con stakeholders antes de implementar
> - Hay animaciones específicas que mostrar
>
> **No necesitan prototipo cuando:**
> - Es un CRUD básico
> - Los flujos son estándar (login, registro, etc.)
> - Ya tienen documentación escrita clara
>
> Los prototipos toman tiempo. Úsenlos estratégicamente."

💡 **REFERENCIA:** *Ver checklist de estados en `checklist-handoff.md` sección "Estados de Componentes"*

---

# BLOQUE 5: Dev Mode y Especificaciones Técnicas
## ⏱️ 00:55 - 01:15 (20 minutos)

### 00:55 - 00:58 | Introducción a Dev Mode (3 min)

> **GUION:**
>
> "Ahora vamos a lo que más le importa al desarrollador: Dev Mode.
>
> Dev Mode es la vista de Figma optimizada para extraer especificaciones técnicas. Es como ver el diseño con 'ojos de código'.
>
> [ACTIVAR DEV MODE - Click en el toggle o </> icon]
>
> Noten cómo cambia la interfaz. Ahora tenemos:
> - Panel de código a la derecha
> - Medidas automáticas al hacer hover
> - Assets listos para exportar"

---

### 00:58 - 01:08 | Demo: Usando Dev Mode (10 min)

**[DEMO EXTENSIVA EN VIVO]**

> **GUION:**
>
> "Les voy a hacer un tour completo de Dev Mode."

**PARTE 1: Inspección de elementos (3 min)**

> "[SELECCIONAR UN ELEMENTO]
>
> Cuando selecciono este botón, a la derecha veo:
> - **CSS** - Código listo para copiar
> - Puedo cambiar a otros formatos: iOS (Swift), Android (XML/Compose)
>
> [MOSTRAR CÓDIGO CSS]
>
> Miren: width, height, padding, background, border-radius... todo está aquí.
>
> Y si el elemento usa estilos de Figma, aparece el nombre del token, no el valor crudo. Eso es oro para el desarrollador."

**PARTE 2: Medidas entre elementos (2 min)**

> "[SELECCIONAR DOS ELEMENTOS]
>
> Si selecciono un elemento y paso el cursor sobre otro, veo la distancia entre ellos.
>
> [MOSTRAR MEDIDAS]
>
> 16px, 24px... el desarrollador no tiene que adivinar ni medir manualmente."

**PARTE 3: Assets y exportación (3 min)**

> "[IR A SECCIÓN DE ASSETS]
>
> En la pestaña de Assets, veo todos los elementos marcados para exportar.
>
> [MOSTRAR ICONOS/IMÁGENES]
>
> Puedo descargarlos individualmente o en lote. Los formatos configurados en el diseño se respetan aquí.
>
> **Tip:** Siempre configuren los iconos como SVG. Y denles nombres descriptivos: `icon-arrow-left.svg`, no `Vector 23.svg`."

**PARTE 4: Compare changes (2 min)**

> "[MOSTRAR COMPARE SI HAY VERSIONES]
>
> Dev Mode también permite comparar versiones. Si actualicé el diseño, el desarrollador puede ver exactamente qué cambió.
>
> Esto evita el clásico '¿qué cambió desde la última vez?'"

---

### 01:08 - 01:12 | Demo: Plugins útiles para Dev Mode (4 min)

**[DEMO EN VIVO]**

> **GUION:**
>
> "Dev Mode es poderoso, pero hay plugins que lo complementan.
>
> **Tokens Studio** - Para equipos que usan design tokens formalmente
>
> [MOSTRAR SI ESTÁ INSTALADO]
>
> Permite exportar tokens a JSON que el desarrollador puede consumir directamente.
>
> **Measure** - Para crear anotaciones visuales de espaciado
>
> [MOSTRAR EJEMPLO]
>
> A veces queremos dejar las medidas visibles en el diseño, no solo en Dev Mode.
>
> Hay una lista completa de plugins en los recursos que les compartiré."

💡 **REFERENCIA:** *Ver lista completa en `plugins-recomendados.md`*

---

### 01:12 - 01:15 | ¿Y si no tengo Dev Mode? (3 min)

> **GUION:**
>
> "Ahora, sé que no todos tienen acceso a Dev Mode (requiere plan pago). ¿Qué pueden hacer?
>
> **Alternativas:**
>
> 1. **Inspect panel** - La versión gratuita tiene un panel de inspección básico. No es tan completo, pero muestra dimensiones y colores.
>
> 2. **Plugins de especificaciones** - 'Redlines' y 'Measure' generan anotaciones visuales que cualquiera puede ver.
>
> 3. **Documentación manual** - Una página en su Figma con specs escritas: 'El botón primario usa #1E88E5, border-radius 8px, padding 12px 24px'.
>
> No es ideal, pero funciona. Lo importante es que la información llegue al desarrollador de alguna forma."

---

# BLOQUE 6: Feedback y Colaboración
## ⏱️ 01:15 - 01:25 (10 minutos)

### 01:15 - 01:18 | Comentarios en Figma (3 min)

**[DEMO EN VIVO]**

> **GUION:**
>
> "El handoff no termina cuando mandas el link. La colaboración continúa.
>
> Figma tiene un sistema de comentarios que es perfecto para esto."

**[MOSTRAR CÓMO AGREGAR COMENTARIO]**

> "Para agregar un comentario: presiono C, click donde quiero comentar, escribo.
>
> [AGREGAR COMENTARIO DE EJEMPLO]
>
> Puedo mencionar personas con @, puedo adjuntar el comentario a un elemento específico, y puedo marcarlo como resuelto cuando se atiende.
>
> **Buenas prácticas:**
> - Respondan comentarios en menos de 24 horas
> - Marquen como resuelto lo que ya se atendió
> - Usen comentarios para clarificaciones, no para cambios grandes"

---

### 01:18 - 01:22 | Flujo de feedback recomendado (4 min)

> **GUION:**
>
> "Les recomiendo establecer un flujo claro de feedback con su equipo. Aquí hay uno que funciona bien:
>
> **1. Handoff inicial**
> - Diseñador comparte link con el diseño listo
> - Notifica en el canal acordado (Slack, Teams, etc.)
> - Programa una reunión de 'walkthrough' si es complejo
>
> **2. Durante implementación**
> - Developer hace preguntas via comentarios en Figma
> - Diseñador responde y clarifica
> - Si hay cambios de requerimientos, se documenta
>
> **3. Review de implementación**
> - Developer avisa cuando está en staging
> - Diseñador hace QA visual
> - Feedback específico: 'El espaciado aquí debería ser 16px, veo 12px'
>
> **4. Ajustes finales**
> - Se iteran los detalles
> - Se aprueba para producción
>
> La clave es que haya un canal oficial y tiempos esperados de respuesta."

---

### 01:22 - 01:25 | Herramientas complementarias (3 min)

> **GUION:**
>
> "Figma es el centro, pero hay herramientas que complementan:
>
> **Loom** - Para grabar explicaciones de flujos complejos
> En lugar de escribir un párrafo, graben 2 minutos mostrando cómo debe funcionar.
>
> **Notion/Confluence** - Para documentación más extensa
> Especificaciones de negocio, casos edge, reglas de validación...
>
> **Storybook** - Para conectar diseño con código
> Permite vincular componentes de Figma con su implementación real.
>
> **Slack/Teams** - Para comunicación rápida
> Pero ojo: las decisiones importantes deben quedar documentadas en Figma o Notion, no perdidas en un hilo de Slack."

---

# BLOQUE 7: Cierre y Q&A
## ⏱️ 01:25 - 01:30 (5 minutos)

### 01:25 - 01:27 | Resumen y recursos (2 min)

> **GUION:**
>
> "Hemos cubierto mucho. Resumamos los puntos clave:
>
> 1. **Compartir sin fricción** - Links públicos, permisos correctos
> 2. **Preparar el archivo** - Nombres claros, Auto Layout, estilos
> 3. **Documentar estados** - No solo el happy path
> 4. **Usar Dev Mode** - La herramienta principal del desarrollador
> 5. **Feedback continuo** - Comentarios, flujos claros
>
> Ahora les comparto los recursos."

**[COMPARTIR EN CHAT]**

> "En el chat les dejo:
> - **Checklist de Handoff** - Lista de verificación antes de entregar
> - **Guía de Nomenclatura** - Convenciones de nombres
> - **Template de Documentación** - Estructura recomendada para su archivo
> - **Lista de Plugins** - Herramientas útiles
> - **Link al archivo de ejemplo** - Para que lo exploren
>
> Guárdenlos, son suyos."

---

### 01:27 - 01:30 | Q&A Final (3 min)

> **GUION:**
>
> "Tenemos unos minutos para preguntas. ¿Qué dudas tienen?
>
> Pueden escribir en el chat o activar su micrófono."

**[RESPONDER 2-3 PREGUNTAS DEL CHAT]**

**[SI NO HAY PREGUNTAS]**

> "Si no hay preguntas ahora, recuerden que tienen los recursos. Y si les surge algo después, pueden contactarme en [EMAIL/LINKEDIN].
>
> Gracias por su tiempo y su atención. ¡Mucho éxito con sus handoffs!"

---

# Ejercicios Post-Curso

Ya que el formato es demostrativo, aquí hay ejercicios que los asistentes pueden hacer después:

## Ejercicio 1: Auditoría de Archivo (30 min)
**Objetivo:** Evaluar el estado actual de un archivo propio

1. Abrir un proyecto reciente en Figma
2. Usar el `checklist-handoff.md` para evaluar
3. Contar cuántos ítems cumplen vs no cumplen
4. Identificar las 3 mejoras más urgentes

## Ejercicio 2: Renombrar Capas (20 min)
**Objetivo:** Practicar nomenclatura

1. Elegir una página de su archivo
2. Renombrar TODAS las capas siguiendo `guia-nomenclatura.md`
3. Usar el plugin "Rename It" para hacer cambios en lote

## Ejercicio 3: Documentar Estados (30 min)
**Objetivo:** Completar estados de un componente

1. Elegir un componente (botón, input, card)
2. Crear todas las variantes de estado (default, hover, active, disabled, etc.)
3. Organizar como variantes en Figma

## Ejercicio 4: Preparar para Dev Mode (20 min)
**Objetivo:** Optimizar un diseño para Dev Mode

1. Verificar que todos los elementos usen estilos (no colores sueltos)
2. Configurar Auto Layout correctamente
3. Abrir Dev Mode y verificar que el código generado sea útil

## Ejercicio 5: Simular Handoff (45 min)
**Objetivo:** Hacer un handoff completo de práctica

1. Elegir una pantalla de su proyecto
2. Preparar el archivo usando todo lo aprendido
3. Generar el link de compartir
4. Escribir un mensaje de handoff como si lo fueran a enviar a un desarrollador
5. Incluir: link, qué pantallas están listas, notas importantes

---

# Notas para el Instructor

## Timing
- Si van cortos de tiempo, reducir el bloque de plugins (01:08-01:12)
- Si van sobrados, extender Q&A o hacer más interacción en el bloque de preparación

## Problemas técnicos comunes
- **Figma lento:** Tener archivo de backup más liviano
- **Dev Mode no carga:** Refrescar o tener screenshots de respaldo
- **Chat muy activo:** Anotar preguntas para responder al final

## Interacción virtual
- Hacer preguntas al chat cada 10-15 minutos
- Leer nombres de quienes responden para personalizar
- Usar reacciones de Zoom para pulso rápido (👍 si entienden)

## Archivos de ejemplo sugeridos
- Un archivo "malo" con errores obvios: Frame 1, Rectangle 45, sin Auto Layout
- Un archivo "bueno" con la misma UI pero bien estructurado
- Un componente con todas sus variantes de estado

---

*Última actualización: Enero 2024*
