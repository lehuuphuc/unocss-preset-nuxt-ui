import type { Preset, RuleContext, UtilObject } from '@unocss/core';
import type { Theme } from '@unocss/preset-wind4';
import { definePreset } from '@unocss/core';
import {
  colorCSSGenerator,
  defineProperty,
} from '@unocss/preset-wind4/utils';
import defu from 'defu';

type ColorValue = string | Record<string, string>;

export interface PresetOptions {
  colorSpace?: string
  preflights?: boolean | Preset['preflights']
  safelist?: boolean
  theme?: {
    colors?: ColorValue
    textColors?: Record<string, string>
    backgroundColors?: Record<string, string>
    borderColors?: Record<string, string>
    ringColors?: Record<string, string>
    ringOffsetColors?: Record<string, string>
    divideColors?: Record<string, string>
    outlineColors?: Record<string, string>
    strokeColors?: Record<string, string>
    fillColors?: Record<string, string>
  }
}

export default definePreset((options: PresetOptions = {}) => {
  const colorSpace = options.colorSpace || 'oklab';
  const preflights: PresetOptions['preflights'] = options.preflights === false
    ? undefined
    : typeof options.preflights === 'object'
      ? options.preflights
      : [
          {
            getCSS: () => {
              return `/* unocss-nuxt-ui preflight start */
:root {
  --color-black: #000;
  --color-white: #fff;
}

:root, .light {
  --ui-text-dimmed: var(--ui-color-neutral-400);
  --ui-text-muted: var(--ui-color-neutral-500);
  --ui-text-toned: var(--ui-color-neutral-600);
  --ui-text: var(--ui-color-neutral-700);
  --ui-text-highlighted: var(--ui-color-neutral-900);
  --ui-text-inverted: var(--color-white);

  --ui-bg: var(--color-white);
  --ui-bg-muted: var(--ui-color-neutral-50);
  --ui-bg-elevated: var(--ui-color-neutral-100);
  --ui-bg-accented: var(--ui-color-neutral-200);
  --ui-bg-inverted: var(--ui-color-neutral-900);

  --ui-border: var(--ui-color-neutral-200);
  --ui-border-muted: var(--ui-color-neutral-200);
  --ui-border-accented: var(--ui-color-neutral-300);
  --ui-border-inverted: var(--ui-color-neutral-900);

  --ui-radius: 0.25rem;
  --ui-container: var(--container-7xl);
}

.dark {
  --ui-text-dimmed: var(--ui-color-neutral-500);
  --ui-text-muted: var(--ui-color-neutral-400);
  --ui-text-toned: var(--ui-color-neutral-300);
  --ui-text: var(--ui-color-neutral-200);
  --ui-text-highlighted: var(--color-white);
  --ui-text-inverted: var(--ui-color-neutral-900);

  --ui-bg: var(--ui-color-neutral-900);
  --ui-bg-muted: var(--ui-color-neutral-800);
  --ui-bg-elevated: var(--ui-color-neutral-800);
  --ui-bg-accented: var(--ui-color-neutral-700);
  --ui-bg-inverted: var(--color-white);

  --ui-border: var(--ui-color-neutral-800);
  --ui-border-muted: var(--ui-color-neutral-700);
  --ui-border-accented: var(--ui-color-neutral-700);
  --ui-border-inverted: var(--color-white);
}
/* unocss-nuxt-ui preflight end */`;
            },
          },
        ];
  const safelist = options.safelist === false
    ? undefined
    : [
        `before:content-['']`,
        `after:content-['']`,
      ];
  const theme = defu(options?.theme, {
    colors: {
      primary: {
        DEFAULT: 'var(--ui-primary)',
        50: 'var(--ui-color-primary-50)',
        100: 'var(--ui-color-primary-100)',
        200: 'var(--ui-color-primary-200)',
        300: 'var(--ui-color-primary-300)',
        400: 'var(--ui-color-primary-400)',
        500: 'var(--ui-color-primary-500)',
        600: 'var(--ui-color-primary-600)',
        700: 'var(--ui-color-primary-700)',
        800: 'var(--ui-color-primary-800)',
        900: 'var(--ui-color-primary-900)',
        950: 'var(--ui-color-primary-950)',
      },
      secondary: {
        DEFAULT: 'var(--ui-secondary)',
        50: 'var(--ui-color-secondary-50)',
        100: 'var(--ui-color-secondary-100)',
        200: 'var(--ui-color-secondary-200)',
        300: 'var(--ui-color-secondary-300)',
        400: 'var(--ui-color-secondary-400)',
        500: 'var(--ui-color-secondary-500)',
        600: 'var(--ui-color-secondary-600)',
        700: 'var(--ui-color-secondary-700)',
        800: 'var(--ui-color-secondary-800)',
        900: 'var(--ui-color-secondary-900)',
        950: 'var(--ui-color-secondary-950)',
      },
      success: {
        DEFAULT: 'var(--ui-success)',
        50: 'var(--ui-color-success-50)',
        100: 'var(--ui-color-success-100)',
        200: 'var(--ui-color-success-200)',
        300: 'var(--ui-color-success-300)',
        400: 'var(--ui-color-success-400)',
        500: 'var(--ui-color-success-500)',
        600: 'var(--ui-color-success-600)',
        700: 'var(--ui-color-success-700)',
        800: 'var(--ui-color-success-800)',
        900: 'var(--ui-color-success-900)',
        950: 'var(--ui-color-success-950)',
      },
      info: {
        DEFAULT: 'var(--ui-info)',
        50: 'var(--ui-color-info-50)',
        100: 'var(--ui-color-info-100)',
        200: 'var(--ui-color-info-200)',
        300: 'var(--ui-color-info-300)',
        400: 'var(--ui-color-info-400)',
        500: 'var(--ui-color-info-500)',
        600: 'var(--ui-color-info-600)',
        700: 'var(--ui-color-info-700)',
        800: 'var(--ui-color-info-800)',
        900: 'var(--ui-color-info-900)',
        950: 'var(--ui-color-info-950)',
      },
      warning: {
        DEFAULT: 'var(--ui-warning)',
        50: 'var(--ui-color-warning-50)',
        100: 'var(--ui-color-warning-100)',
        200: 'var(--ui-color-warning-200)',
        300: 'var(--ui-color-warning-300)',
        400: 'var(--ui-color-warning-400)',
        500: 'var(--ui-color-warning-500)',
        600: 'var(--ui-color-warning-600)',
        700: 'var(--ui-color-warning-700)',
        800: 'var(--ui-color-warning-800)',
        900: 'var(--ui-color-warning-900)',
        950: 'var(--ui-color-warning-950)',
      },
      error: {
        DEFAULT: 'var(--ui-error)',
        50: 'var(--ui-color-error-50)',
        100: 'var(--ui-color-error-100)',
        200: 'var(--ui-color-error-200)',
        300: 'var(--ui-color-error-300)',
        400: 'var(--ui-color-error-400)',
        500: 'var(--ui-color-error-500)',
        600: 'var(--ui-color-error-600)',
        700: 'var(--ui-color-error-700)',
        800: 'var(--ui-color-error-800)',
        900: 'var(--ui-color-error-900)',
        950: 'var(--ui-color-error-950)',
      },
      neutral: {
        DEFAULT: 'var(--ui-neutral)',
        50: 'var(--ui-color-neutral-50)',
        100: 'var(--ui-color-neutral-100)',
        200: 'var(--ui-color-neutral-200)',
        300: 'var(--ui-color-neutral-300)',
        400: 'var(--ui-color-neutral-400)',
        500: 'var(--ui-color-neutral-500)',
        600: 'var(--ui-color-neutral-600)',
        700: 'var(--ui-color-neutral-700)',
        800: 'var(--ui-color-neutral-800)',
        900: 'var(--ui-color-neutral-900)',
        950: 'var(--ui-color-neutral-950)',
      },
    },
    textColors: {
      dimmed: 'var(--ui-text-dimmed)',
      muted: 'var(--ui-text-muted)',
      toned: 'var(--ui-text-toned)',
      default: 'var(--ui-text)',
      highlighted: 'var(--ui-text-highlighted)',
      inverted: 'var(--ui-text-inverted)',
    },
    backgroundColors: {
      default: 'var(--ui-bg)',
      border: 'var(--ui-border)',
      muted: 'var(--ui-bg-muted)',
      elevated: 'var(--ui-bg-elevated)',
      accented: 'var(--ui-bg-accented)',
      inverted: 'var(--ui-bg-inverted)',
    },
    borderColors: {
      default: 'var(--ui-border)',
      muted: 'var(--ui-border-muted)',
      accented: 'var(--ui-border-accented)',
      inverted: 'var(--ui-border-inverted)',
      bg: 'var(--ui-bg)',
    },
    ringColors: {
      default: 'var(--ui-border)',
      muted: 'var(--ui-border-muted)',
      accented: 'var(--ui-border-accented)',
      inverted: 'var(--ui-border-inverted)',
      bg: 'var(--ui-bg)',
    },
    ringOffsetColors: {
      default: 'var(--ui-border)',
      muted: 'var(--ui-border-muted)',
      accented: 'var(--ui-border-accented)',
      inverted: 'var(--ui-border-inverted)',
      bg: 'var(--ui-bg)',
    },
    divideColors: {
      default: 'var(--ui-border)',
      muted: 'var(--ui-border-muted)',
      accented: 'var(--ui-border-accented)',
      inverted: 'var(--ui-border-inverted)',
      bg: 'var(--ui-bg)',
    },
    outlineColors: {
      default: 'var(--ui-border)',
      inverted: 'var(--ui-border-inverted)',
    },
    strokeColors: {
      default: 'var(--ui-border)',
      inverted: 'var(--ui-border-inverted)',
    },
    fillColors: {
      default: 'var(--ui-border)',
      inverted: 'var(--ui-border-inverted)',
    },
    radius: {
      'xs': 'calc(var(--ui-radius) * 0.5)',
      'sm': 'var(--ui-radius)',
      'md': 'calc(var(--ui-radius) * 1.5)',
      'lg': 'calc(var(--ui-radius) * 2)',
      'xl': 'calc(var(--ui-radius) * 3)',
      '2xl': 'calc(var(--ui-radius) * 4)',
      '3xl': 'calc(var(--ui-radius) * 6)',
    },
  });

  return {
    name: 'unocss-preset-nuxt-ui',
    theme: {
      colors: theme.colors,
    },
    preflights,
    shortcuts: [
      ['text-md', 'text-base'],
      ['column-1', 'columns-1'],
      ['align-center', 'align-middle'],
    ],
    rules: [
      // text-dimmed, text-dimmed/50, ...
      [
        /^text-(\w+)(?:\/(\d+))?$/,
        ([, color, opacity]) => {
          if (!(theme.textColors && color in theme.textColors)) {
            return;
          }

          const colorKey = color as keyof typeof theme.textColors;
          const outputOpacity = opacity ? `${opacity}%` : 'var(--un-text-opacity, 100%)';

          return [
            defineProperty('--un-text-opacity', { syntax: '<percentage>', inherits: false, initialValue: '100%' }),
            {
              color: `color-mix(in ${colorSpace}, ${theme.textColors[colorKey]} ${outputOpacity}, transparent)`,
            },
          ];
        },
        { autocomplete: `text-(${Object.keys(theme.textColors).join('|')})` },
      ],
      // bg-default, bg-default/50, ...
      [
        /^bg-(\w+)(?:\/(\d+))?$/,
        ([, color, opacity]) => {
          if (!(theme.backgroundColors && Object.keys(theme.backgroundColors).includes(color))) {
            return;
          }

          const colorKey = color as keyof typeof theme.backgroundColors;
          const outputOpacity = opacity ? `${opacity}%` : 'var(--un-bg-opacity, 100%)';

          return [
            defineProperty('--un-bg-opacity', { syntax: '<percentage>', inherits: false, initialValue: '100%' }),
            {
              'background-color': `color-mix(in ${colorSpace}, ${theme.backgroundColors[colorKey]} ${outputOpacity}, transparent)`,
            },
          ];
        },
        { autocomplete: `bg-(${Object.keys(theme.backgroundColors).join('|')})` },
      ],
      // from-default, from-default/50, to-default, to-default/50, ...
      [
        /^(from|to)-([a-z-]+)(?:\/(\d{1,3}))?$/,
        ([, position, color, opacity]) => {
          if (!(theme.backgroundColors && Object.keys(theme.backgroundColors).includes(color))) {
            return;
          }

          const colorKey = color as keyof typeof theme.backgroundColors;
          const outputOpacity = opacity ? `${opacity}%` : `var(--un-${position}-opacity, 100%)`;

          return [
            defineProperty(`--un-${position}-opacity`, { syntax: '<percentage>', inherits: false, initialValue: '100%' }),
            {
              [`--un-gradient-${position}`]: `color-mix(in ${colorSpace}, ${theme.backgroundColors[colorKey]} ${outputOpacity}, transparent)`,
            },
          ];
        },
        { autocomplete: [
          `from-(${Object.keys(theme.backgroundColors).join('|')})`,
          `to-(${Object.keys(theme.backgroundColors).join('|')})`,
        ] },
      ],
      // border-muted, border-muted/50, b-muted, b-muted/50, b-t-muted, b-t-muted/50, b-r-muted, b-r-muted, b-b-muted, b-b-muted/50, b-l-muted, b-t-muted/50 ...
      [
        /^(?:b|border|(?:b|border)-([trbl]))-(\w+)(?:\/(\d+))?$/,
        ([, direction, color, opacity]) => {
          if (!(theme.borderColors && Object.keys(theme.borderColors).includes(color))) {
            return;
          }

          const colorKey = color as keyof typeof theme.borderColors;
          const outputDirection = direction ? direction.replace('t', 'top').replace('r', 'right').replace('b', 'bottom').replace('l', 'left') : '';
          const outputOpacity = typeof opacity === 'string'
            ? `${opacity}%`
            : `var(--un-border${outputDirection ? `-${outputDirection}` : ''}-opacity, 100%)`;

          return [
            defineProperty(`--un-border${outputDirection ? `-${outputDirection}` : ''}-opacity`, { syntax: '<percentage>', inherits: false, initialValue: '100%' }),
            {
              [`border${outputDirection ? `-${outputDirection}` : ''}-color`]: `color-mix(in ${colorSpace}, ${theme.borderColors[colorKey]} ${outputOpacity}, transparent)`,
            },
          ];
        },
        { autocomplete: [
          `border-(${Object.keys(theme.borderColors).join('|')})`,
          `b-(${Object.keys(theme.borderColors).join('|')})`,
          `b-t-(${Object.keys(theme.borderColors).join('|')})`,
          `b-r-(${Object.keys(theme.borderColors).join('|')})`,
          `b-b-(${Object.keys(theme.borderColors).join('|')})`,
          `b-l-(${Object.keys(theme.borderColors).join('|')})`,
        ] },
      ],
      // ring-default, ring-default/50, ...
      [
        /^ring-(\w+)(?:\/(\d+))?$/,
        ([, color, opacity]) => {
          if (!(theme.ringColors && Object.keys(theme.ringColors).includes(color))) {
            return;
          }

          const colorKey = color as keyof typeof theme.ringColors;
          const outputOpacity = opacity ? `${opacity}%` : 'var(--un-ring-opacity, 100%)';

          return [
            defineProperty('--un-ring-opacity', { syntax: '<percentage>', inherits: false, initialValue: '100%' }),
            {
              '--un-ring-color': `color-mix(in ${colorSpace}, ${theme.ringColors[colorKey]} ${outputOpacity}, transparent)`,
            },
          ];
        },
        { autocomplete: `ring-(${Object.keys(theme.ringColors).join('|')})` },
      ],
      // ring-offset-default, ring-offset-default/50, ...
      [
        /^ring-offset-(\w+)(?:\/(\d+))?$/,
        ([, color, opacity]) => {
          if (!(theme.ringOffsetColors && Object.keys(theme.ringOffsetColors).includes(color))) {
            return;
          }

          const colorKey = color as keyof typeof theme.ringOffsetColors;
          const outputOpacity = opacity ? `${opacity}%` : 'var(--un-ring-offset-opacity, 100%)';

          return [
            defineProperty('--un-ring-offset-opacity', { syntax: '<percentage>', inherits: false, initialValue: '100%' }),
            {
              '--un-ring-offset-color': `color-mix(in ${colorSpace}, ${theme.ringOffsetColors[colorKey]} ${outputOpacity}, transparent)`,
            },
          ];
        },
        { autocomplete: `ring-offset-(${Object.keys(theme.ringOffsetColors).join('|')})` },
      ],
      // divide-default, divide-default/50, ...
      [
        /^divide-(\w+)(?:\/(\d+))?$/,
        ([, color, opacity], configs) => {
          if (!(theme.divideColors && Object.keys(theme.divideColors).includes(color))) {
            return;
          }

          const colorKey = color as keyof typeof theme.divideColors;
          const outputOpacity = opacity ? `${opacity}%` : 'var(--un-divide-opacity, 100%)';

          return [
            defineProperty('--un-divide-opacity', { syntax: '<percentage>', inherits: false, initialValue: '100%' }),
            {
              [configs.symbols.variants]: [{
                handle: (input, next) => next({
                  ...input,
                  parent: `${input.parent ? `${input.parent} $$ ` : ''}${input.selector}`,
                  selector: ':where(&>:not(:last-child))',
                }),
              }],
              'border-color': `color-mix(in ${colorSpace}, ${theme.divideColors[colorKey]} ${outputOpacity}, transparent)`,
            },
          ];
        },
        { autocomplete: `divide-(${Object.keys(theme.divideColors).join('|')})` },
      ],
      // outline-default, outline-default/50, ...
      [
        /^outline-(\w+)(?:\/(\d+))?$/,
        ([, color, opacity]) => {
          if (!(theme.outlineColors && Object.keys(theme.outlineColors).includes(color))) {
            return;
          }

          const colorKey = color as keyof typeof theme.outlineColors;
          const outputOpacity = opacity ? `${opacity}%` : 'var(--un-outline-opacity, 100%)';

          return [
            defineProperty('--un-outline-opacity', { syntax: '<percentage>', inherits: false, initialValue: '100%' }),
            {
              'outline-color': `color-mix(in ${colorSpace}, ${theme.outlineColors[colorKey]} ${outputOpacity}, transparent)`,
            },
          ];
        },
        { autocomplete: `outline-(${Object.keys(theme.outlineColors).join('|')})` },
      ],
      // stroke-default, stroke-default/50, ...
      [
        /^stroke-(\w+)(?:\/(\d+))?$/,
        ([, color, opacity]) => {
          if (!(theme.strokeColors && Object.keys(theme.strokeColors).includes(color))) {
            return;
          }

          const colorKey = color as keyof typeof theme.strokeColors;
          const outputOpacity = opacity ? `${opacity}%` : 'var(--un-stroke-opacity, 100%)';

          return [
            defineProperty('--un-stroke-opacity', { syntax: '<percentage>', inherits: false, initialValue: '100%' }),
            {
              stroke: `color-mix(in ${colorSpace}, ${theme.strokeColors[colorKey]} ${outputOpacity}, transparent)`,
            },
          ];
        },
        { autocomplete: `stroke-(${Object.keys(theme.strokeColors).join('|')})` },
      ],
      // fill-default, fill-default/50, ...
      [
        /^fill-(\w+)(?:\/(\d+))?$/,
        ([, color, opacity]) => {
          if (!(theme.fillColors && Object.keys(theme.fillColors).includes(color))) {
            return;
          }

          const colorKey = color as keyof typeof theme.fillColors;
          const outputOpacity = opacity ? `${opacity}%` : 'var(--un-fill-opacity, 100%)';

          return [
            defineProperty('--un-fill-opacity', { syntax: '<percentage>', inherits: false, initialValue: '100%' }),
            {
              fill: `color-mix(in ${colorSpace}, ${theme.fillColors[colorKey]} ${outputOpacity}, transparent)`,
            },
          ];
        },
        { autocomplete: `fill-(${Object.keys(theme.fillColors).join('|')})` },
      ],
      // text-(--xxx), text-(--xxx)/yyy and bg-(--xxx), bg-(--xxx)/yyy
      [
        /^(text|bg|ring|caret|fill)-(--[\w-]+|\w+)(?:\/(\d+))?$/,
        ([full, prefix, color, opacity], configs) => {
        // full class was transformed to text---xxx or bg---xxx by transformerVariantGroup
          if (!full.startsWith(`${prefix}---`)) {
            return;
          }

          const alpha = typeof opacity === 'string' ? `${opacity}%` : opacity;
          const cssProperty = prefix === 'text'
            ? 'color'
            : prefix === 'bg'
              ? 'background-color'
              : prefix === 'ring'
                ? '--un-ring-color'
                : prefix === 'caret'
                  ? 'caret-color'
                  : prefix;

          return colorCSSGenerator(
            {
              name: color,
              color: `var(${color})`,
              alpha,
              keys: undefined,
              opacity: undefined,
              modifier: undefined,
              no: undefined,
              cssColor: undefined,
            },
            cssProperty,
            prefix,
            configs as any as RuleContext<Theme>,
          );
        },
      ],
      // transition-[background], transition-[color,translate], ...
      [
        /^transition-\[([a-z-]+(?:,[a-z-]+)*)\]$/,
        ([, props]) => {
          return {
            'transition-property': props,
            'transition-timing-function': 'var(--un-ease, var(--default-transition-timingFunction))',
            'transition-duration': 'var(--un-duration, var(--default-transition-duration))',
          };
        },
        { autocomplete: 'transition-[prop1,prop2]' },
      ],
    ],
    variants: [
      // data-xxx:...  -> ....[data-xxx] { ... }
      (matcher) => {
        const match = matcher.match(/^data-([a-zA-Z0-9-]+):(.*)$/);

        if (!match) {
          return matcher;
        }

        const attr = match[1];
        const rest = match[2];

        return {
          matcher: rest,
          selector: s => `${s}[data-${attr}]`,
        };
      },
      // not-data-xxx:...  -> ....:not([data-xxx]) { ... }
      (matcher) => {
        const match = matcher.match(/^not-data-([a-zA-Z0-9-]+):(.*)$/);

        if (!match) {
          return matcher;
        }

        const attr = match[1];
        const rest = match[2];

        return {
          matcher: rest,
          selector: s => `${s}:not([data-${attr}])`,
        };
      },
      // variant: group-data-xxx:...  -> .group-data-xxx\:... { &:is(:where(.group)[data-xxx] *) { ... } }
      (matcher) => {
        const match = matcher.match(/^group-data-([a-zA-Z0-9-]+):(.*)$/);

        if (!match) {
          return matcher;
        }

        const attr = match[1];
        const rest = match[2];

        return {
          matcher: rest,
          handle(input, next) {
            return next({
              ...input,
              parent: `${input.parent ? `${input.parent} $$ ` : ''}${input.selector}`,
              selector: `&:is(:where(.group)[data-${attr}] *)`,
            });
          },
        };
      },
      // not-group-data-xxx:...  -> .not-group-data-xxx\:... { &:not(*:is(:where(.group)[data-xxx] *)) { ... } }
      (matcher) => {
        const match = matcher.match(/^not-group-data-([a-zA-Z0-9-]+):(.*)$/);

        if (!match) {
          return matcher;
        }

        const attr = match[1];
        const rest = match[2];

        return {
          matcher: rest,
          handle(input, next) {
            return next({
              ...input,
              parent: `${input.parent ? `${input.parent} $$ ` : ''}${input.selector}`,
              selector: `&:not(*:is(:where(.group)[data-${attr}] *))`,
            });
          },
        };
      },
      // group-[first|last|only]:...  -> .group-[first|last|only]\:... { &:is(:where(.group):[first|last|only]-child *) { { ... } }
      (matcher) => {
        const match = matcher.match(/^group-(first|last|only):(.*)$/);

        if (!match) {
          return matcher;
        }

        const pseudo = match[1];
        const rest = match[2];

        return {
          matcher: rest,
          handle(input, next) {
            return next({
              ...input,
              parent: `${input.parent ? `${input.parent} $$ ` : ''}${input.selector}`,
              selector: `&:is(:where(.group):${pseudo}-child *)`,
            });
          },
        };
      },
      // group-not-[first|last|only]:...  -> .group-not-[first|last|only]\:... { &:is(:where(.group):not(*:[first|last|only]-child) *) { ... } }
      (matcher) => {
        const match = matcher.match(/^group-not-(first|last|only):(.*)$/);

        if (!match) {
          return matcher;
        }

        const pseudo = match[1];
        const rest = match[2];

        return {
          matcher: rest,
          handle(input, next) {
            return next({
              ...input,
              parent: `${input.parent ? `${input.parent} $$ ` : ''}${input.selector}`,
              selector: `&:is(:where(.group):not(*:${pseudo}-child) *)`,
            });
          },
        };
      },
      // not-only:... -> ... { &:not(*:only-child) { ... } }
      (matcher) => {
        const match = matcher.match(/^not-only:(.*)$/);

        if (!match) {
          return matcher;
        }

        const rest = match[1];

        return {
          matcher: rest,
          handle(input, next) {
            return next({
              ...input,
              parent: `${input.parent ? `${input.parent} $$ ` : ''}${input.selector}`,
              selector: `&:not(*:only-child)`,
            });
          },
        };
      },
      // peer-data-xxx:...  -> .peer-data-xxx\:... { &:is(:where(.peer)[data-xxx] ~ *) { ... } }
      (matcher) => {
        const match = matcher.match(/^peer-data-([a-zA-Z0-9-]+):(.*)$/);

        if (!match) {
          return matcher;
        }

        const attr = match[1];
        const rest = match[2];

        return {
          matcher: rest,
          handle(input, next) {
            return next({
              ...input,
              parent: `${input.parent ? `${input.parent} $$ ` : ''}${input.selector}`,
              selector: `&:is(:where(.peer)[data-${attr}] ~ *)`,
            });
          },
        };
      },
      // not-peer-data-xxx:...  -> .not-peer-data-active\:text-amber-50 { &:is(:where(.peer):not(*[data-active]) ~ *) { ... } }
      (matcher) => {
        const match = matcher.match(/^not-peer-data-([a-zA-Z0-9-]+):(.*)$/);

        if (!match) {
          return matcher;
        }

        const attr = match[1];
        const rest = match[2];

        return {
          matcher: rest,
          handle(input, next) {
            return next({
              ...input,
              parent: `${input.parent ? `${input.parent} $$ ` : ''}${input.selector}`,
              selector: `&:is(:where(.peer):not(*[data-${attr}]) ~ *)`,
            });
          },
        };
      },
    ],
    safelist,
    postprocess: [postProcessFn],
  };
});

function postProcessFn(util: UtilObject) {
  if (util.layer === 'properties') {
    return;
  }

  if (
    (util.selector.includes('before\\:') || util.selector.includes('after\\:'))
    && !(util.entries.find(i => i[0] === 'content') || util.entries.find(i => i[0] === '--un-content'))
  ) {
    util.entries.push(['content', 'var(--un-content)']);
  }
}
