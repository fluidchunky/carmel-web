const { m } = require('framer-motion');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
    './screens/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  darkMode: ['class', 'class'],
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
    './screens/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
    './screens/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
  	extend: {
  		keyframes: {
  			'slide-out-bottom': {
  				'0%': {
  					transform: 'translateY(0)',
  					opacity: 1
  				},
  				'100%': {
  					transform: 'translateY(120%)',
  					opacity: 0
  				}
  			},
  			'fade-in': {
  				'0%': {
  					visibility: 'hidden',
  					opacity: 0
  				},
  				'100%': {
  					visibility: 'visible',
  					opacity: 1
  				}
  			},
  			'fade-out': {
  				'0%': {
  					visibility: 'visible',
  					opacity: 1
  				},
  				'100%': {
  					visibility: 'hidden',
  					opacity: 0
  				}
  			},
  			gradient: {
  				to: {
  					backgroundPosition: 'var(--bg-size, 300%) 0'
  				}
  			}
  		},
  		animation: {
  			'bounce-10': 'bounce 10s linear infinite',
  			'bounce-11': 'bounce 11s linear infinite',
  			'bounce-12': 'bounce 12s linear infinite',
  			'bounce-13': 'bounce 13s linear infinite',
  			'bounce-14': 'bounce 14s linear infinite',
  			'bounce-15': 'bounce 15s linear infinite',
  			'pulse-slow': 'pulse 5s linear infinite',
  			'slide-out-bottom': 'slide-out-bottom 7s linear infinite both',
  			'slide-out-bottom-8': 'slide-out-bottom 8s linear infinite both',
  			'slide-out-bottom-10': 'slide-out-bottom 10s linear infinite both',
  			'slide-out-bottom-11': 'slide-out-bottom 11s linear infinite both',
  			'slide-out-bottom-12': 'slide-out-bottom 12s linear infinite both',
  			'slide-out-bottom-13': 'slide-out-bottom 13s linear infinite both',
  			'fade-in': 'fade-in 0.5s linear both',
  			'fade-out': 'fade-out 0.5s both',
  			gradient: 'gradient 8s linear infinite'
  		},
  		colors: {
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			'light-primary': '#77FFF7',
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			grey: '#8899B2',
  			page: '#E7E1DB',
  			'secondary-page': '#CDC7C0',
  			'secondary-green': '#053D36',
  			'secondary-grey': '#B4BACA',
  			'green-price-tier': '#31C48D',
  			'primary-color-transparent': 'rgba(0, 188, 212, 0.5)',
  			'secondary-color': '#D9F5F9',
  			'third-color': '#01C5BA',
  			'primary-background': 'rgba(0, 188, 212, 0.08)',
  			'primary-background-blend': '#091d22',
  			'footer-grey-background': 'rgba(0, 0, 0, 0.1)',
  			'primary-color': 'rgba(0, 188, 212)',
  			'carmel-background': '#383838',
  			'carmel-white': '#FFFFFF',
  			'carmel-black': '#1A1C1F',
  			'carmel-grey': '#6E757C',
  			'carmel-light-grey': '#F9F9F9',
  			'carmel-dark-grey': '#272E35',
  			'carmel-sky-grey': '#F5F5F7',
  			'membership-gold': '#FFC700',
  			'light-grey': 'rgba(0, 0, 0, 0.65)',
  			'light-grey-2': '#CECCD6',
  			'toggle-grey': '#ccc',
  			'neutral-color': '#6B6785',
  			'highlight-green-primary': '#6FCF9733',
  			'highlight-green-secondary': '#219653',
  			'dark-green': '#0A0F12',
  			'description-gray': 'rgba(156, 153, 174, 0.8)',
  			'description-gray-2': 'rgba(255, 255, 255, 0.8)',
  			'dark-purple': 'rgba(182, 0, 212, 0.08)',
  			linkedin: '#0077B5',
  			twitter: '#00A8FF',
  			'dark-blue': '#0077B5',
  			'blue-navy': '#016DB0',
  			'turquoise-light': '#01FFCA',
  			'twitter-teal': '#03A9F4',
  			neon: 'rgba(97, 255, 0, 0.2)',
  			green: '#61FF00',
  			'green-dark': 'rgba(97, 255, 0, 0.08)',
  			'bright-green': '#61FF00',
  			purple: '#B600D4',
  			'light-purple': 'rgba(182, 0, 212, 0.2)',
  			'light-blue': 'rgba(0, 188, 212, 0.2)',
  			'dark-green-secondary': '#022A27',
  			'dark-turquoise': '#00FFFF3D',
  			cyan: '#00FFFF',
  			'cyan/50': '#018880',
  			'dark-cyan': '#03664E',
  			'dark-indigo': '#0E0D17',
  			'light-green': '#ADFFAB',
  			red: '#AD1457',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			'inner-input-sm': 'inset 1px 1px 7px 0 rgb(0 0 0 / 0.05)',
  			'inner-input-xl': 'inset 2px 2px 7px 0 rgb(0 0 0 / 0.2)',
  			'early-access-button': '0px 4px 16px 0px #01FFCA3D',
  			footer: '30px -5px 50px 10px #0D252E'
  		},
  		backgroundImage: {
  			'primary-gradient': 'url(/images/bg-1.png)'
  		},
  		backgroundSize: {
  			fill: '100% 100%',
  			quest: '100% 50%',
  			footer: '100%'
  		},
  		backgroundPosition: {
  			questposition: '50% 150%'
  		},
  		width: {
  			'164': '41rem',
  			'192': '48rem',
  			'220': '220px',
  			'296': '296px',
  			'367': '367px',
  			'384': '96rem',
  			'414': '26rem',
  			'432': '28rem',
  			'449': '449px',
  			'500': '500px',
  			'800': '800px',
  			'900': '900px',
  			'1000': '1000px',
  			'1100': '1100px',
  			'1400': '1400px',
  			'2000': '2000px',
  			'7.5': '1.9rem',
  			unset: 'unset'
  		},
  		height: {
  			'26': '1.625rem',
  			'100': '25rem',
  			'360': '360px',
  			'450': '450px',
  			'580': '580px',
  			'638': '638px',
  			'700': '700px',
  			'784': '784px',
  			unset: 'unset'
  		},
  		maxWidth: {
  			'160': '160px',
  			'240': '240px',
  			'320': '320px',
  			'386': '24rem',
  			'400': '400px',
  			'414': '26rem',
  			'432': '27rem',
  			'1/4': '25%',
  			'2/4': '50%',
  			'3/4': '75%'
  		},
  		maxHeight: {
  			'311': '311px',
  			'580': '36.25',
  			'1/4': '25%'
  		},
  		minWidth: {
  			'292': '292px',
  			'320': '320px',
  			'1/4': '25%',
  			auto: 'auto'
  		},
  		minHeight: {
  			'32': '8rem',
  			'72': '18rem',
  			'100': '25rem',
  			'1/4': '25%'
  		},
  		fontFamily: {
  			sans: [
  				'Epilogue'
  			],
  			'epilogue-medium': 'Epilogue-Medium',
  			'epilogue-bold': 'Epilogue-Bold'
  		},
  		screens: {
  			xxs: '320px',
  			xs: '468px',
  			'3xl': '1770px',
  			'4xl': '2240px',
  			'5xl': '3000px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	fontFamily: {
  		orbitron: [
  			'Orbitron',
  			'sans-serif'
  		],
  		rocGrotesk: [
  			'roc-grotesk',
  			'sans-serif'
  		],
  		rocGroteskWide: [
  			'roc-grotesk-wide',
  			'sans-serif'
  		]
  	},
  	fontSize: {
  		xxs: '0.6875',
  		xs: '.75rem',
  		sm: '.875rem',
  		base: '1rem',
  		lg: '1.125rem',
  		xl: '1.25rem',
  		'2xl': '1.5rem',
  		'3xl': '1.875rem',
  		'4xl': '2.25rem',
  		'5xl': '3rem',
  		'6xl': '4rem',
  		'7xl': '5rem'
  	},
  	lineHeight: {
  		'3': '0.75rem',
  		'4': '1rem',
  		'5': '1.25rem',
  		'6': '1.5rem',
  		'7': '1.75rem',
  		'8': '2rem',
  		'9': '2.25rem',
  		'10': '2.5rem'
  	}
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('@tailwindcss/line-clamp'),
      require("tailwindcss-animate")
],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'main',
    themes: [
      {
        main: {
          primary: '#00BCD4',
          secondary: '#D926A9',
          accent: '#1FB2A6',
          neutral: '#191D24',
          'base-100': '#2A303C',
          'base-200': '#232731',
          'base-300': '#1D2129',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
          '--rounded-box': '1rem', // border radius rounded-box utility class, used in card and other large boxes
          '--rounded-btn': '0rem', // border radius rounded-btn utility class, used in buttons and similar element
          '--rounded-badge': '1.9rem', // border radius rounded-badge utility class, used in badges and similar
          '--animation-btn': '0.25s', // duration of animation when you click on button
          '--animation-input': '0.2s', // duration of animation for inputs like checkbox, toggle, radio, etc
          '--btn-text-case': 'uppercase', // set default text transform for buttons
          '--btn-focus-scale': '0.95', // scale transform of button when you focus on it
          '--border-btn': '0px', // border width of buttons
          '--tab-border': '1px', // border width of tabs
          '--tab-radius': '0.5rem', // border radius of tabs
        },
      },
    ],
  },
};
