import type { Config } from "tailwindcss";

const config: Config = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['var(--font-outfit)'],
  			display: ['var(--font-space-grotesk)'],
  		},
  		colors: {
  			border: "hsl(var(--border))",
  			input: "hsl(var(--input))",
  			ring: "hsl(var(--ring))",
  			background: "hsl(var(--background))",
  			foreground: "hsl(var(--foreground))",
  			primary: {
  				DEFAULT: "hsl(var(--primary))",
  				foreground: "hsl(var(--primary-foreground))",
  			},
  			secondary: {
  				DEFAULT: "hsl(var(--secondary))",
  				foreground: "hsl(var(--secondary-foreground))",
  			},
  			destructive: {
  				DEFAULT: "hsl(var(--destructive))",
  				foreground: "hsl(var(--destructive-foreground))",
  			},
  			muted: {
  				DEFAULT: "hsl(var(--muted))",
  				foreground: "hsl(var(--muted-foreground))",
  			},
  			accent: {
  				DEFAULT: "hsl(var(--accent))",
  				foreground: "hsl(var(--accent-foreground))",
  			},
  			popover: {
  				DEFAULT: "hsl(var(--popover))",
  				foreground: "hsl(var(--popover-foreground))",
  			},
  			card: {
  				DEFAULT: "hsl(var(--card))",
  				foreground: "hsl(var(--card-foreground))",
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: "var(--radius)",
  			md: "calc(var(--radius) - 2px)",
  			sm: "calc(var(--radius) - 4px)"
  		},
  		typography: {
  			DEFAULT: {
  				css: {
  					maxWidth: '65ch',
  					color: 'var(--tw-prose-body)',
  					'[class~="lead"]': {
  						color: 'var(--tw-prose-lead)',
  					},
  					strong: {
  						color: 'var(--tw-prose-bold)',
  					},
  					'ol[type="A"]': {
  						'--list-counter-style': 'upper-alpha',
  					},
  					'ol[type="a"]': {
  						'--list-counter-style': 'lower-alpha',
  					},
  					'ol[type="A" s]': {
  						'--list-counter-style': 'upper-alpha',
  					},
  					'ol[type="a" s]': {
  						'--list-counter-style': 'lower-alpha',
  					},
  					'ol[type="I"]': {
  						'--list-counter-style': 'upper-roman',
  					},
  					'ol[type="i"]': {
  						'--list-counter-style': 'lower-roman',
  					},
  					'ol[type="I" s]': {
  						'--list-counter-style': 'upper-roman',
  					},
  					'ol[type="i" s]': {
  						'--list-counter-style': 'lower-roman',
  					},
  					'ol[type="1"]': {
  						'--list-counter-style': 'decimal',
  					},
  					'ol > li': {
  						position: 'relative',
  					},
  					'ol > li::before': {
  						content: 'counter(list-item, var(--list-counter-style, decimal)) "."',
  						position: 'absolute',
  						left: '0',
  						marginLeft: '-1.5em',
  						fontWeight: '400',
  						color: 'var(--tw-prose-counters)',
  					},
  					'ul > li': {
  						position: 'relative',
  						paddingLeft: '1.75em',
  					},
  					'ul > li::before': {
  						content: '""',
  						width: '0.375em',
  						height: '0.375em',
  						position: 'absolute',
  						top: 'calc(0.875em - 0.1875em)',
  						left: '0.25em',
  						borderRadius: '50%',
  						backgroundColor: 'var(--tw-prose-bullets)',
  					},
  					hr: {
  						borderColor: 'var(--tw-prose-hr)',
  						borderTopWidth: 1,
  						marginTop: '3em',
  						marginBottom: '3em',
  					},
  					blockquote: {
  						marginTop: '1.6em',
  						marginBottom: '1.6em',
  						paddingLeft: '1em',
  						fontWeight: '500',
  						fontStyle: 'italic',
  						color: 'var(--tw-prose-quotes)',
  						borderLeftWidth: '0.25rem',
  						borderLeftColor: 'var(--tw-prose-quote-borders)',
  						quotes: '"\\201C""\\201D""\\2018""\\2019"',
  					},
  					'blockquote p:first-of-type::before': {
  						content: 'open-quote',
  					},
  					'blockquote p:last-of-type::after': {
  						content: 'close-quote',
  					},
  					h1: {
  						color: 'var(--tw-prose-headings)',
  						fontWeight: '800',
  						fontSize: '2.25em',
  						marginTop: '0',
  						marginBottom: '0.8888889em',
  						lineHeight: '1.1111111',
  					},
  					h2: {
  						color: 'var(--tw-prose-headings)',
  						fontWeight: '700',
  						fontSize: '1.5em',
  						marginTop: '2em',
  						marginBottom: '1em',
  						lineHeight: '1.3333333',
  					},
  					h3: {
  						color: 'var(--tw-prose-headings)',
  						fontWeight: '600',
  						fontSize: '1.25em',
  						marginTop: '1.6em',
  						marginBottom: '0.6em',
  						lineHeight: '1.6',
  					},
  					h4: {
  						color: 'var(--tw-prose-headings)',
  						fontWeight: '600',
  						marginTop: '1.5em',
  						marginBottom: '0.5em',
  						lineHeight: '1.5',
  					},
  					'figure figcaption': {
  						color: 'var(--tw-prose-captions)',
  						fontSize: '0.875em',
  						lineHeight: '1.4285714',
  						marginTop: '0.8571429em',
  					},
  					code: {
  						color: 'var(--tw-prose-code)',
  						fontWeight: '600',
  						fontSize: '0.875em',
  					},
  					'code::before': {
  						content: '"`"',
  					},
  					'code::after': {
  						content: '"`"',
  					},
  					'a code': {
  						color: 'var(--tw-prose-links)',
  					},
  					pre: {
  						color: 'var(--tw-prose-pre-code)',
  						backgroundColor: 'var(--tw-prose-pre-bg)',
  						overflowX: 'auto',
  						fontWeight: '400',
  						fontSize: '0.875em',
  						lineHeight: '1.7142857',
  						marginTop: '1.7142857em',
  						marginBottom: '1.7142857em',
  						borderRadius: '0.375rem',
  						paddingTop: '0.8571429em',
  						paddingRight: '1.1428571em',
  						paddingBottom: '0.8571429em',
  						paddingLeft: '1.1428571em',
  					},
  					'pre code': {
  						backgroundColor: 'transparent',
  						borderWidth: '0',
  						borderRadius: '0',
  						padding: '0',
  						fontWeight: 'inherit',
  						color: 'inherit',
  						fontSize: 'inherit',
  						fontFamily: 'inherit',
  						lineHeight: 'inherit',
  					},
  					'pre code::before': {
  						content: 'none',
  					},
  					'pre code::after': {
  						content: 'none',
  					},
  					table: {
  						width: '100%',
  						tableLayout: 'auto',
  						textAlign: 'left',
  						marginTop: '2em',
  						marginBottom: '2em',
  					},
  					thead: {
  						borderBottomWidth: '1px',
  						borderBottomColor: 'var(--tw-prose-th-borders)',
  					},
  					'thead th': {
  						color: 'var(--tw-prose-headings)',
  						fontWeight: '600',
  						verticalAlign: 'bottom',
  						paddingRight: '0.5714286em',
  						paddingBottom: '0.5714286em',
  						paddingLeft: '0.5714286em',
  					},
  					'tbody tr': {
  						borderBottomWidth: '1px',
  						borderBottomColor: 'var(--tw-prose-td-borders)',
  					},
  					'tbody tr:last-child': {
  						borderBottomWidth: '0',
  					},
  					'tbody td': {
  						verticalAlign: 'baseline',
  						paddingTop: '0.5714286em',
  						paddingRight: '0.5714286em',
  						paddingBottom: '0.5714286em',
  						paddingLeft: '0.5714286em',
  					},
  				},
  			},
  		}
  	}
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
