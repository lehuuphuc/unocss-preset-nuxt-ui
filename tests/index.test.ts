import presetWind4 from '@unocss/preset-wind4';
import { describe, expect, it } from 'bun:test';

import {
  createGenerator,
  transformerVariantGroup,
} from 'unocss';
import presetNuxtUI from '../src/index';

function filterPreflightsContent(css: string) {
  return css;
}

async function createUno() {
  const uno = await createGenerator({
    presets: [
      presetNuxtUI({
        preflights: false,
        safelist: false,
      }),
      presetWind4({
        preflights: { reset: false, theme: 'on-demand' },
      }),
    ],
    transformers: [
      transformerVariantGroup(),
    ],
  });

  return uno;
}

interface TestCase {
  name: string
  classes: string[]
  snapshot: string
}

const testCases: TestCase[] = [
  {
    name: 'text-color',
    classes: [
      'text-dimmed',
      'text-dimmed/50',
      'text-muted',
      'text-muted/50',
      'text-toned',
      'text-toned/50',
      'text-default',
      'text-default/50',
      'text-highlighted',
      'text-highlighted/50',
      'text-inverted',
      'text-inverted/50',
    ],
    snapshot: `
"/* layer: properties */
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-text-opacity:100%;}}
@property --un-text-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
/* layer: default */
.text-default{color:color-mix(in oklab, var(--ui-text) var(--un-text-opacity, 100%), transparent);}
.text-default\\/50{color:color-mix(in oklab, var(--ui-text) 50%, transparent);}
.text-dimmed{color:color-mix(in oklab, var(--ui-text-dimmed) var(--un-text-opacity, 100%), transparent);}
.text-dimmed\\/50{color:color-mix(in oklab, var(--ui-text-dimmed) 50%, transparent);}
.text-highlighted{color:color-mix(in oklab, var(--ui-text-highlighted) var(--un-text-opacity, 100%), transparent);}
.text-highlighted\\/50{color:color-mix(in oklab, var(--ui-text-highlighted) 50%, transparent);}
.text-inverted{color:color-mix(in oklab, var(--ui-text-inverted) var(--un-text-opacity, 100%), transparent);}
.text-inverted\\/50{color:color-mix(in oklab, var(--ui-text-inverted) 50%, transparent);}
.text-muted{color:color-mix(in oklab, var(--ui-text-muted) var(--un-text-opacity, 100%), transparent);}
.text-muted\\/50{color:color-mix(in oklab, var(--ui-text-muted) 50%, transparent);}
.text-toned{color:color-mix(in oklab, var(--ui-text-toned) var(--un-text-opacity, 100%), transparent);}
.text-toned\\/50{color:color-mix(in oklab, var(--ui-text-toned) 50%, transparent);}"
`,
  },
  {
    name: 'background-color',
    classes: [
      'bg-default',
      'bg-default/50',
      'bg-border',
      'bg-border/50',
      'bg-muted',
      'bg-muted/50',
      'bg-elevated',
      'bg-elevated/50',
      'bg-accented',
      'bg-accented/50',
      'bg-inverted',
      'bg-inverted/50',
    ],
    snapshot: `
"/* layer: properties */
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-bg-opacity:100%;}}
@property --un-bg-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
/* layer: default */
.bg-accented{background-color:color-mix(in oklab, var(--ui-bg-accented) var(--un-bg-opacity, 100%), transparent);}
.bg-accented\\/50{background-color:color-mix(in oklab, var(--ui-bg-accented) 50%, transparent);}
.bg-border{background-color:color-mix(in oklab, var(--ui-border) var(--un-bg-opacity, 100%), transparent);}
.bg-border\\/50{background-color:color-mix(in oklab, var(--ui-border) 50%, transparent);}
.bg-default{background-color:color-mix(in oklab, var(--ui-bg) var(--un-bg-opacity, 100%), transparent);}
.bg-default\\/50{background-color:color-mix(in oklab, var(--ui-bg) 50%, transparent);}
.bg-elevated{background-color:color-mix(in oklab, var(--ui-bg-elevated) var(--un-bg-opacity, 100%), transparent);}
.bg-elevated\\/50{background-color:color-mix(in oklab, var(--ui-bg-elevated) 50%, transparent);}
.bg-inverted{background-color:color-mix(in oklab, var(--ui-bg-inverted) var(--un-bg-opacity, 100%), transparent);}
.bg-inverted\\/50{background-color:color-mix(in oklab, var(--ui-bg-inverted) 50%, transparent);}
.bg-muted{background-color:color-mix(in oklab, var(--ui-bg-muted) var(--un-bg-opacity, 100%), transparent);}
.bg-muted\\/50{background-color:color-mix(in oklab, var(--ui-bg-muted) 50%, transparent);}"
`,
  },
  {
    name: 'from-to',
    classes: [
      'from-default',
      'from-default/50',
      'from-border',
      'from-border/50',
      'from-muted',
      'from-muted/50',
      'from-elevated',
      'from-elevated/50',
      'from-accented',
      'from-accented/50',
      'from-inverted',
      'from-inverted/50',
      'to-default',
      'to-default/50',
      'to-border',
      'to-border/50',
      'to-muted',
      'to-muted/50',
      'to-elevated',
      'to-elevated/50',
      'to-accented',
      'to-accented/50',
      'to-inverted',
      'to-inverted/50',
    ],
    snapshot: `
"/* layer: properties */
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-from-opacity:100%;--un-to-opacity:100%;}}
@property --un-from-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
@property --un-to-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
/* layer: default */
.from-accented{--un-gradient-from:color-mix(in oklab, var(--ui-bg-accented) var(--un-from-opacity, 100%), transparent);}
.from-accented\\/50{--un-gradient-from:color-mix(in oklab, var(--ui-bg-accented) 50%, transparent);}
.from-border{--un-gradient-from:color-mix(in oklab, var(--ui-border) var(--un-from-opacity, 100%), transparent);}
.from-border\\/50{--un-gradient-from:color-mix(in oklab, var(--ui-border) 50%, transparent);}
.from-default{--un-gradient-from:color-mix(in oklab, var(--ui-bg) var(--un-from-opacity, 100%), transparent);}
.from-default\\/50{--un-gradient-from:color-mix(in oklab, var(--ui-bg) 50%, transparent);}
.from-elevated{--un-gradient-from:color-mix(in oklab, var(--ui-bg-elevated) var(--un-from-opacity, 100%), transparent);}
.from-elevated\\/50{--un-gradient-from:color-mix(in oklab, var(--ui-bg-elevated) 50%, transparent);}
.from-inverted{--un-gradient-from:color-mix(in oklab, var(--ui-bg-inverted) var(--un-from-opacity, 100%), transparent);}
.from-inverted\\/50{--un-gradient-from:color-mix(in oklab, var(--ui-bg-inverted) 50%, transparent);}
.from-muted{--un-gradient-from:color-mix(in oklab, var(--ui-bg-muted) var(--un-from-opacity, 100%), transparent);}
.from-muted\\/50{--un-gradient-from:color-mix(in oklab, var(--ui-bg-muted) 50%, transparent);}
.to-accented{--un-gradient-to:color-mix(in oklab, var(--ui-bg-accented) var(--un-to-opacity, 100%), transparent);}
.to-accented\\/50{--un-gradient-to:color-mix(in oklab, var(--ui-bg-accented) 50%, transparent);}
.to-border{--un-gradient-to:color-mix(in oklab, var(--ui-border) var(--un-to-opacity, 100%), transparent);}
.to-border\\/50{--un-gradient-to:color-mix(in oklab, var(--ui-border) 50%, transparent);}
.to-default{--un-gradient-to:color-mix(in oklab, var(--ui-bg) var(--un-to-opacity, 100%), transparent);}
.to-default\\/50{--un-gradient-to:color-mix(in oklab, var(--ui-bg) 50%, transparent);}
.to-elevated{--un-gradient-to:color-mix(in oklab, var(--ui-bg-elevated) var(--un-to-opacity, 100%), transparent);}
.to-elevated\\/50{--un-gradient-to:color-mix(in oklab, var(--ui-bg-elevated) 50%, transparent);}
.to-inverted{--un-gradient-to:color-mix(in oklab, var(--ui-bg-inverted) var(--un-to-opacity, 100%), transparent);}
.to-inverted\\/50{--un-gradient-to:color-mix(in oklab, var(--ui-bg-inverted) 50%, transparent);}
.to-muted{--un-gradient-to:color-mix(in oklab, var(--ui-bg-muted) var(--un-to-opacity, 100%), transparent);}
.to-muted\\/50{--un-gradient-to:color-mix(in oklab, var(--ui-bg-muted) 50%, transparent);}"
`,
  },
  {
    name: 'border-color',
    classes: [
      'border-default',
      'border-default/50',
      'border-muted',
      'border-muted/50',
      'border-accented',
      'border-accented/50',
      'border-inverted',
      'border-inverted/50',
      'border-bg',
      'border-bg/50',
      'b-default',
      'b-default/50',
      'b-muted',
      'b-muted/50',
      'b-accented',
      'b-accented/50',
      'b-inverted',
      'b-inverted/50',
      'b-bg',
      'b-bg/50',
      'b-t-default',
      'b-t-default/50',
      'b-t-muted',
      'b-t-muted/50',
      'b-t-accented',
      'b-t-accented/50',
      'b-t-inverted',
      'b-t-inverted/50',
      'b-t-bg',
      'b-t-bg/50',
      'b-r-default',
      'b-r-default/50',
      'b-r-muted',
      'b-r-muted/50',
      'b-r-accented',
      'b-r-accented/50',
      'b-r-inverted',
      'b-r-inverted/50',
      'b-r-bg',
      'b-r-bg/50',
      'b-b-default',
      'b-b-default/50',
      'b-b-muted',
      'b-b-muted/50',
      'b-b-accented',
      'b-b-accented/50',
      'b-b-inverted',
      'b-b-inverted/50',
      'b-b-bg',
      'b-b-bg/50',
      'b-l-default',
      'b-l-default/50',
      'b-l-muted',
      'b-l-muted/50',
      'b-l-accented',
      'b-l-accented/50',
      'b-l-inverted',
      'b-l-inverted/50',
      'b-l-bg',
      'b-l-bg/50',
    ],
    snapshot: `
"/* layer: properties */
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-border-opacity:100%;--un-border-top-opacity:100%;--un-border-right-opacity:100%;--un-border-bottom-opacity:100%;--un-border-left-opacity:100%;}}
@property --un-border-bottom-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
@property --un-border-left-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
@property --un-border-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
@property --un-border-right-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
@property --un-border-top-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
/* layer: default */
.b-accented,
.border-accented{border-color:color-mix(in oklab, var(--ui-border-accented) var(--un-border-opacity, 100%), transparent);}
.b-accented\\/50,
.border-accented\\/50{border-color:color-mix(in oklab, var(--ui-border-accented) 50%, transparent);}
.b-b-accented{border-bottom-color:color-mix(in oklab, var(--ui-border-accented) var(--un-border-bottom-opacity, 100%), transparent);}
.b-b-accented\\/50{border-bottom-color:color-mix(in oklab, var(--ui-border-accented) 50%, transparent);}
.b-b-bg{border-bottom-color:color-mix(in oklab, var(--ui-bg) var(--un-border-bottom-opacity, 100%), transparent);}
.b-b-bg\\/50{border-bottom-color:color-mix(in oklab, var(--ui-bg) 50%, transparent);}
.b-b-default{border-bottom-color:color-mix(in oklab, var(--ui-border) var(--un-border-bottom-opacity, 100%), transparent);}
.b-b-default\\/50{border-bottom-color:color-mix(in oklab, var(--ui-border) 50%, transparent);}
.b-b-inverted{border-bottom-color:color-mix(in oklab, var(--ui-border-inverted) var(--un-border-bottom-opacity, 100%), transparent);}
.b-b-inverted\\/50{border-bottom-color:color-mix(in oklab, var(--ui-border-inverted) 50%, transparent);}
.b-b-muted{border-bottom-color:color-mix(in oklab, var(--ui-border-muted) var(--un-border-bottom-opacity, 100%), transparent);}
.b-b-muted\\/50{border-bottom-color:color-mix(in oklab, var(--ui-border-muted) 50%, transparent);}
.b-bg,
.border-bg{border-color:color-mix(in oklab, var(--ui-bg) var(--un-border-opacity, 100%), transparent);}
.b-bg\\/50,
.border-bg\\/50{border-color:color-mix(in oklab, var(--ui-bg) 50%, transparent);}
.b-default,
.border-default{border-color:color-mix(in oklab, var(--ui-border) var(--un-border-opacity, 100%), transparent);}
.b-default\\/50,
.border-default\\/50{border-color:color-mix(in oklab, var(--ui-border) 50%, transparent);}
.b-inverted,
.border-inverted{border-color:color-mix(in oklab, var(--ui-border-inverted) var(--un-border-opacity, 100%), transparent);}
.b-inverted\\/50,
.border-inverted\\/50{border-color:color-mix(in oklab, var(--ui-border-inverted) 50%, transparent);}
.b-l-accented{border-left-color:color-mix(in oklab, var(--ui-border-accented) var(--un-border-left-opacity, 100%), transparent);}
.b-l-accented\\/50{border-left-color:color-mix(in oklab, var(--ui-border-accented) 50%, transparent);}
.b-l-bg{border-left-color:color-mix(in oklab, var(--ui-bg) var(--un-border-left-opacity, 100%), transparent);}
.b-l-bg\\/50{border-left-color:color-mix(in oklab, var(--ui-bg) 50%, transparent);}
.b-l-default{border-left-color:color-mix(in oklab, var(--ui-border) var(--un-border-left-opacity, 100%), transparent);}
.b-l-default\\/50{border-left-color:color-mix(in oklab, var(--ui-border) 50%, transparent);}
.b-l-inverted{border-left-color:color-mix(in oklab, var(--ui-border-inverted) var(--un-border-left-opacity, 100%), transparent);}
.b-l-inverted\\/50{border-left-color:color-mix(in oklab, var(--ui-border-inverted) 50%, transparent);}
.b-l-muted{border-left-color:color-mix(in oklab, var(--ui-border-muted) var(--un-border-left-opacity, 100%), transparent);}
.b-l-muted\\/50{border-left-color:color-mix(in oklab, var(--ui-border-muted) 50%, transparent);}
.b-muted,
.border-muted{border-color:color-mix(in oklab, var(--ui-border-muted) var(--un-border-opacity, 100%), transparent);}
.b-muted\\/50,
.border-muted\\/50{border-color:color-mix(in oklab, var(--ui-border-muted) 50%, transparent);}
.b-r-accented{border-right-color:color-mix(in oklab, var(--ui-border-accented) var(--un-border-right-opacity, 100%), transparent);}
.b-r-accented\\/50{border-right-color:color-mix(in oklab, var(--ui-border-accented) 50%, transparent);}
.b-r-bg{border-right-color:color-mix(in oklab, var(--ui-bg) var(--un-border-right-opacity, 100%), transparent);}
.b-r-bg\\/50{border-right-color:color-mix(in oklab, var(--ui-bg) 50%, transparent);}
.b-r-default{border-right-color:color-mix(in oklab, var(--ui-border) var(--un-border-right-opacity, 100%), transparent);}
.b-r-default\\/50{border-right-color:color-mix(in oklab, var(--ui-border) 50%, transparent);}
.b-r-inverted{border-right-color:color-mix(in oklab, var(--ui-border-inverted) var(--un-border-right-opacity, 100%), transparent);}
.b-r-inverted\\/50{border-right-color:color-mix(in oklab, var(--ui-border-inverted) 50%, transparent);}
.b-r-muted{border-right-color:color-mix(in oklab, var(--ui-border-muted) var(--un-border-right-opacity, 100%), transparent);}
.b-r-muted\\/50{border-right-color:color-mix(in oklab, var(--ui-border-muted) 50%, transparent);}
.b-t-accented{border-top-color:color-mix(in oklab, var(--ui-border-accented) var(--un-border-top-opacity, 100%), transparent);}
.b-t-accented\\/50{border-top-color:color-mix(in oklab, var(--ui-border-accented) 50%, transparent);}
.b-t-bg{border-top-color:color-mix(in oklab, var(--ui-bg) var(--un-border-top-opacity, 100%), transparent);}
.b-t-bg\\/50{border-top-color:color-mix(in oklab, var(--ui-bg) 50%, transparent);}
.b-t-default{border-top-color:color-mix(in oklab, var(--ui-border) var(--un-border-top-opacity, 100%), transparent);}
.b-t-default\\/50{border-top-color:color-mix(in oklab, var(--ui-border) 50%, transparent);}
.b-t-inverted{border-top-color:color-mix(in oklab, var(--ui-border-inverted) var(--un-border-top-opacity, 100%), transparent);}
.b-t-inverted\\/50{border-top-color:color-mix(in oklab, var(--ui-border-inverted) 50%, transparent);}
.b-t-muted{border-top-color:color-mix(in oklab, var(--ui-border-muted) var(--un-border-top-opacity, 100%), transparent);}
.b-t-muted\\/50{border-top-color:color-mix(in oklab, var(--ui-border-muted) 50%, transparent);}"
`,
  },
  {
    name: 'ring-color',
    classes: [
      'ring-default',
      'ring-default/50',
      'ring-muted',
      'ring-muted/50',
      'ring-accented',
      'ring-accented/50',
      'ring-inverted',
      'ring-inverted/50',
      'ring-bg',
      'ring-bg/50',
    ],
    snapshot: `
"/* layer: properties */
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-ring-opacity:100%;}}
@property --un-ring-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
/* layer: default */
.ring-accented{--un-ring-color:color-mix(in oklab, var(--ui-border-accented) var(--un-ring-opacity, 100%), transparent);}
.ring-accented\\/50{--un-ring-color:color-mix(in oklab, var(--ui-border-accented) 50%, transparent);}
.ring-bg{--un-ring-color:color-mix(in oklab, var(--ui-bg) var(--un-ring-opacity, 100%), transparent);}
.ring-bg\\/50{--un-ring-color:color-mix(in oklab, var(--ui-bg) 50%, transparent);}
.ring-default{--un-ring-color:color-mix(in oklab, var(--ui-border) var(--un-ring-opacity, 100%), transparent);}
.ring-default\\/50{--un-ring-color:color-mix(in oklab, var(--ui-border) 50%, transparent);}
.ring-inverted{--un-ring-color:color-mix(in oklab, var(--ui-border-inverted) var(--un-ring-opacity, 100%), transparent);}
.ring-inverted\\/50{--un-ring-color:color-mix(in oklab, var(--ui-border-inverted) 50%, transparent);}
.ring-muted{--un-ring-color:color-mix(in oklab, var(--ui-border-muted) var(--un-ring-opacity, 100%), transparent);}
.ring-muted\\/50{--un-ring-color:color-mix(in oklab, var(--ui-border-muted) 50%, transparent);}"
`,
  },
  {
    name: 'ring-offset-color',
    classes: [
      'ring-offset-default',
      'ring-offset-default/50',
      'ring-offset-muted',
      'ring-offset-muted/50',
      'ring-offset-accented',
      'ring-offset-accented/50',
      'ring-offset-inverted',
      'ring-offset-inverted/50',
      'ring-offset-bg',
      'ring-offset-bg/50',
    ],
    snapshot: `
"/* layer: properties */
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-ring-offset-opacity:100%;}}
@property --un-ring-offset-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
/* layer: default */
.ring-offset-accented{--un-ring-offset-color:color-mix(in oklab, var(--ui-border-accented) var(--un-ring-offset-opacity, 100%), transparent);}
.ring-offset-accented\\/50{--un-ring-offset-color:color-mix(in oklab, var(--ui-border-accented) 50%, transparent);}
.ring-offset-bg{--un-ring-offset-color:color-mix(in oklab, var(--ui-bg) var(--un-ring-offset-opacity, 100%), transparent);}
.ring-offset-bg\\/50{--un-ring-offset-color:color-mix(in oklab, var(--ui-bg) 50%, transparent);}
.ring-offset-default{--un-ring-offset-color:color-mix(in oklab, var(--ui-border) var(--un-ring-offset-opacity, 100%), transparent);}
.ring-offset-default\\/50{--un-ring-offset-color:color-mix(in oklab, var(--ui-border) 50%, transparent);}
.ring-offset-inverted{--un-ring-offset-color:color-mix(in oklab, var(--ui-border-inverted) var(--un-ring-offset-opacity, 100%), transparent);}
.ring-offset-inverted\\/50{--un-ring-offset-color:color-mix(in oklab, var(--ui-border-inverted) 50%, transparent);}
.ring-offset-muted{--un-ring-offset-color:color-mix(in oklab, var(--ui-border-muted) var(--un-ring-offset-opacity, 100%), transparent);}
.ring-offset-muted\\/50{--un-ring-offset-color:color-mix(in oklab, var(--ui-border-muted) 50%, transparent);}"
`,
  },
  {
    name: 'divide-color',
    classes: [
      'divide-default',
      'divide-default/50',
      'divide-muted',
      'divide-muted/50',
      'divide-accented',
      'divide-accented/50',
      'divide-inverted',
      'divide-inverted/50',
      'divide-bg',
      'divide-bg/50',
    ],
    snapshot: `
"/* layer: properties */
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-divide-opacity:100%;}}
@property --un-divide-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
/* layer: default */
.divide-accented{
:where(&>:not(:last-child)){border-color:color-mix(in oklab, var(--ui-border-accented) var(--un-divide-opacity, 100%), transparent);}
}
.divide-accented\\/50{
:where(&>:not(:last-child)){border-color:color-mix(in oklab, var(--ui-border-accented) 50%, transparent);}
}
.divide-bg{
:where(&>:not(:last-child)){border-color:color-mix(in oklab, var(--ui-bg) var(--un-divide-opacity, 100%), transparent);}
}
.divide-bg\\/50{
:where(&>:not(:last-child)){border-color:color-mix(in oklab, var(--ui-bg) 50%, transparent);}
}
.divide-default{
:where(&>:not(:last-child)){border-color:color-mix(in oklab, var(--ui-border) var(--un-divide-opacity, 100%), transparent);}
}
.divide-default\\/50{
:where(&>:not(:last-child)){border-color:color-mix(in oklab, var(--ui-border) 50%, transparent);}
}
.divide-inverted{
:where(&>:not(:last-child)){border-color:color-mix(in oklab, var(--ui-border-inverted) var(--un-divide-opacity, 100%), transparent);}
}
.divide-inverted\\/50{
:where(&>:not(:last-child)){border-color:color-mix(in oklab, var(--ui-border-inverted) 50%, transparent);}
}
.divide-muted{
:where(&>:not(:last-child)){border-color:color-mix(in oklab, var(--ui-border-muted) var(--un-divide-opacity, 100%), transparent);}
}
.divide-muted\\/50{
:where(&>:not(:last-child)){border-color:color-mix(in oklab, var(--ui-border-muted) 50%, transparent);}
}"
`,
  },
  {
    name: 'outline-color',
    classes: [
      'outline-default',
      'outline-default/50',
      'outline-inverted',
      'outline-inverted/50',
    ],
    snapshot: `
"/* layer: properties */
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-outline-opacity:100%;}}
@property --un-outline-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
/* layer: default */
.outline-default{outline-color:color-mix(in oklab, var(--ui-border) var(--un-outline-opacity, 100%), transparent);}
.outline-default\\/50{outline-color:color-mix(in oklab, var(--ui-border) 50%, transparent);}
.outline-inverted{outline-color:color-mix(in oklab, var(--ui-border-inverted) var(--un-outline-opacity, 100%), transparent);}
.outline-inverted\\/50{outline-color:color-mix(in oklab, var(--ui-border-inverted) 50%, transparent);}"
`,
  },
  {
    name: 'stroke-color',
    classes: [
      'stroke-default',
      'stroke-default/50',
      'stroke-inverted',
      'stroke-inverted/50',
    ],
    snapshot: `
"/* layer: properties */
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-stroke-opacity:100%;}}
@property --un-stroke-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
/* layer: default */
.stroke-default{stroke:color-mix(in oklab, var(--ui-border) var(--un-stroke-opacity, 100%), transparent);}
.stroke-default\\/50{stroke:color-mix(in oklab, var(--ui-border) 50%, transparent);}
.stroke-inverted{stroke:color-mix(in oklab, var(--ui-border-inverted) var(--un-stroke-opacity, 100%), transparent);}
.stroke-inverted\\/50{stroke:color-mix(in oklab, var(--ui-border-inverted) 50%, transparent);}"
`,
  },
  {
    name: 'fill-color',
    classes: [
      'fill-default',
      'fill-default/50',
      'fill-inverted',
      'fill-inverted/50',
    ],
    snapshot: `
"/* layer: properties */
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-fill-opacity:100%;}}
@property --un-fill-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
/* layer: default */
.fill-default{fill:color-mix(in oklab, var(--ui-border) var(--un-fill-opacity, 100%), transparent);}
.fill-default\\/50{fill:color-mix(in oklab, var(--ui-border) 50%, transparent);}
.fill-inverted{fill:color-mix(in oklab, var(--ui-border-inverted) var(--un-fill-opacity, 100%), transparent);}
.fill-inverted\\/50{fill:color-mix(in oklab, var(--ui-border-inverted) 50%, transparent);}"
`,
  },
  {
    name: 'multiple-transition',
    classes: [
      'transition-[background]',
      'transition-[color,background]',
      'transition-[background,translate,width,height,left,scale,opacity,color]',
    ],
    snapshot: `
"/* layer: theme */
:root, :host { --default-transition-timingFunction: cubic-bezier(0.4, 0, 0.2, 1); --default-transition-duration: 150ms; }
/* layer: default */
.transition-\\[background\\,translate\\,width\\,height\\,left\\,scale\\,opacity\\,color\\]{transition-property:background,translate,width,height,left,scale,opacity,color;transition-timing-function:var(--un-ease, var(--default-transition-timingFunction));transition-duration:var(--un-duration, var(--default-transition-duration));}
.transition-\\[background\\]{transition-property:background;transition-timing-function:var(--un-ease, var(--default-transition-timingFunction));transition-duration:var(--un-duration, var(--default-transition-duration));}
.transition-\\[color\\,background\\]{transition-property:color,background;transition-timing-function:var(--un-ease, var(--default-transition-timingFunction));transition-duration:var(--un-duration, var(--default-transition-duration));}"
`,
  },
  /*
  {
    name: 'text|bg|ring|caret|fill-with-parentheses',
    classes: [
      'text---ui-border-accented',

      'text-(--ui-border-accented)',
      'bg-(--ui-border-accented)',
      'ring-(--ui-border-accented)',
      'caret-(--ui-border-accented)',
      'fill-(--ui-border-accented)',

      'w-(--reka-tabs-indicator-size)',
      'top-(--ui-header-height)',
      'z-(--level)',
      'max-w-(--ui-container)',
      'origin-(--reka-context-menu-content-transform-origin)',
      'gap-(--gap)',
      'translate-x-(--reka-navigation-menu-indicator-position)',
    ],
    snapshot: `
`,
  },
*/
  {
    name: 'variant-data',
    classes: [
      'data-active:text-dimmed',
    ],
    snapshot: `
"/* layer: properties */
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-text-opacity:100%;}}
@property --un-text-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
/* layer: default */
.data-active\\:text-dimmed[data-active]{color:color-mix(in oklab, var(--ui-text-dimmed) var(--un-text-opacity, 100%), transparent);}"
`,
  },
  {
    name: 'variant-not-data',
    classes: [
      'not-data-active:text-dimmed',
    ],
    snapshot: `
"/* layer: properties */
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-text-opacity:100%;}}
@property --un-text-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
/* layer: default */
.not-data-active\\:text-dimmed:not([data-active]){color:color-mix(in oklab, var(--ui-text-dimmed) var(--un-text-opacity, 100%), transparent);}"
`,
  },
  {
    name: 'variant-group-data',
    classes: [
      'group-data-active:text-dimmed',
    ],
    snapshot: `
"/* layer: properties */
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-text-opacity:100%;}}
@property --un-text-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
/* layer: default */
.group-data-active\\:text-dimmed{
&:is(:where(.group)[data-active] *){color:color-mix(in oklab, var(--ui-text-dimmed) var(--un-text-opacity, 100%), transparent);}
}"
`,
  },
  {
    name: 'variant-not-group-data',
    classes: [
      'not-group-data-active:text-dimmed',
    ],
    snapshot: `
"/* layer: properties */
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-text-opacity:100%;}}
@property --un-text-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
/* layer: default */
.not-group-data-active\\:text-dimmed{
&:not(*:is(:where(.group)[data-active] *)){color:color-mix(in oklab, var(--ui-text-dimmed) var(--un-text-opacity, 100%), transparent);}
}"
`,
  },
  {
    name: 'variant-group-first|last|only',
    classes: [
      'group-first:text-dimmed',
      'group-last:text-dimmed',
      'group-only:text-dimmed',
    ],
    snapshot: `
"/* layer: properties */
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-text-opacity:100%;}}
@property --un-text-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
/* layer: default */
.group-first\\:text-dimmed{
&:is(:where(.group):first-child *){color:color-mix(in oklab, var(--ui-text-dimmed) var(--un-text-opacity, 100%), transparent);}
}
.group-last\\:text-dimmed{
&:is(:where(.group):last-child *){color:color-mix(in oklab, var(--ui-text-dimmed) var(--un-text-opacity, 100%), transparent);}
}
.group-only\\:text-dimmed{
&:is(:where(.group):only-child *){color:color-mix(in oklab, var(--ui-text-dimmed) var(--un-text-opacity, 100%), transparent);}
}"
`,
  },
  {
    name: 'variant-group-not-first|last|only',
    classes: [
      'group-not-first:text-dimmed',
      'group-not-last:text-dimmed',
      'group-not-only:text-dimmed',
    ],
    snapshot: `
"/* layer: properties */
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-text-opacity:100%;}}
@property --un-text-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
/* layer: default */
.group-not-first\\:text-dimmed{
&:is(:where(.group):not(*:first-child) *){color:color-mix(in oklab, var(--ui-text-dimmed) var(--un-text-opacity, 100%), transparent);}
}
.group-not-last\\:text-dimmed{
&:is(:where(.group):not(*:last-child) *){color:color-mix(in oklab, var(--ui-text-dimmed) var(--un-text-opacity, 100%), transparent);}
}
.group-not-only\\:text-dimmed{
&:is(:where(.group):not(*:only-child) *){color:color-mix(in oklab, var(--ui-text-dimmed) var(--un-text-opacity, 100%), transparent);}
}"
`,
  },
  {
    name: 'variant-not-only',
    classes: [
      'not-only:text-dimmed',
      'not-only:first:text-dimmed',
    ],
    snapshot: `
"/* layer: properties */
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-text-opacity:100%;}}
@property --un-text-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
/* layer: default */
.not-only\\:first\\:text-dimmed:first-child{
&:not(*:only-child){color:color-mix(in oklab, var(--ui-text-dimmed) var(--un-text-opacity, 100%), transparent);}
}
.not-only\\:text-dimmed{
&:not(*:only-child){color:color-mix(in oklab, var(--ui-text-dimmed) var(--un-text-opacity, 100%), transparent);}
}"
`,
  },
  {
    name: 'variant-peer-data',
    classes: [
      'peer-data-active:text-dimmed',
    ],
    snapshot: `
"/* layer: properties */
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-text-opacity:100%;}}
@property --un-text-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
/* layer: default */
.peer-data-active\\:text-dimmed{
&:is(:where(.peer)[data-active] ~ *){color:color-mix(in oklab, var(--ui-text-dimmed) var(--un-text-opacity, 100%), transparent);}
}"
`,
  },
  {
    name: 'variant-not-peer-data',
    classes: [
      'not-peer-data-active:text-dimmed',
    ],
    snapshot: `
"/* layer: properties */
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-text-opacity:100%;}}
@property --un-text-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
/* layer: default */
.not-peer-data-active\\:text-dimmed{
&:is(:where(.peer):not(*[data-active]) ~ *){color:color-mix(in oklab, var(--ui-text-dimmed) var(--un-text-opacity, 100%), transparent);}
}"
`,
  },
  {
    name: 'before/after',
    classes: [
      'before:text-red',
      'dark:after:text-red',
      `before:content-['Hello']`,
    ],
    snapshot: `
"/* layer: properties */
@supports ((-webkit-hyphens: none) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color:rgb(from red r g b)))){*, ::before, ::after, ::backdrop{--un-content:"";--un-text-opacity:100%;}}
@property --un-text-opacity{syntax:"<percentage>";inherits:false;initial-value:100%;}
@property --un-content{syntax:"*";inherits:false;initial-value:"";}
/* layer: theme */
:root, :host { --colors-red-DEFAULT: oklch(70.4% 0.191 22.216); }
/* layer: default */
.before\\:text-red::before{color:color-mix(in srgb, var(--colors-red-DEFAULT) var(--un-text-opacity), transparent);content:var(--un-content);}
.dark .dark\\:after\\:text-red::after{color:color-mix(in srgb, var(--colors-red-DEFAULT) var(--un-text-opacity), transparent);content:var(--un-content);}
.before\\:content-\\[\\'Hello\\'\\]::before{--un-content:'Hello';content:var(--un-content);}
@supports (color: color-mix(in lab, red, red)){
.before\\:text-red::before{color:color-mix(in oklab, var(--colors-red-DEFAULT) var(--un-text-opacity), transparent);content:var(--un-content);}
.dark .dark\\:after\\:text-red::after{color:color-mix(in oklab, var(--colors-red-DEFAULT) var(--un-text-opacity), transparent);content:var(--un-content);}
}"
`,
  },
];

describe.each(testCases)('unocss-preset-nuxt-ui', (testCase) => {
// describe.each([testCases[testCases.length - 1]])('unocss-preset-nuxt-ui', (testCase) => {
  it(testCase.name, async () => {
    const uno = await createUno();
    let { css } = await uno.generate(testCase.classes);

    css = filterPreflightsContent(css);

    // expect(css).toMatchSnapshot();
    expect(css).toMatchInlineSnapshot(testCase.snapshot);
  });
});
