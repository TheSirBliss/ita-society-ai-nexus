import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// ITAsociety Brand Colors
				'ita-green': {
					DEFAULT: 'hsl(var(--ita-green))',
					light: 'hsl(var(--ita-green-light))',
					dark: 'hsl(var(--ita-green-dark))'
				},
				'ita-red': {
					DEFAULT: 'hsl(var(--ita-red))',
					light: 'hsl(var(--ita-red-light))',
					dark: 'hsl(var(--ita-red-dark))'
				},
				// Technology Colors
				'cyber-blue': 'hsl(var(--cyber-blue))',
				'neural-purple': 'hsl(var(--neural-purple))',
				'quantum-teal': 'hsl(var(--quantum-teal))',
				'holographic': 'hsl(var(--holographic))'
			},
			backgroundImage: {
				'gradient-neural': 'var(--gradient-neural)',
				'gradient-quantum': 'var(--gradient-quantum)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)'
			},
			boxShadow: {
				'neural': 'var(--shadow-neural)',
				'quantum': 'var(--shadow-quantum)',
				'glow': 'var(--shadow-glow)'
			},
			transitionTimingFunction: {
				'neural': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'quantum': 'cubic-bezier(0.16, 1, 0.3, 1)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'neural-pulse': {
					'0%, 100%': { 
						opacity: '1',
						transform: 'scale(1)'
					},
					'50%': { 
						opacity: '0.8',
						transform: 'scale(1.05)'
					}
				},
				'quantum-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)' 
					},
					'50%': { 
						transform: 'translateY(-10px) rotate(3deg)' 
					}
				},
				'holographic-shift': {
					'0%': { 
						background: 'linear-gradient(45deg, hsl(var(--cyber-blue)), hsl(var(--neural-purple)))' 
					},
					'50%': { 
						background: 'linear-gradient(45deg, hsl(var(--ita-green)), hsl(var(--quantum-teal)))' 
					},
					'100%': { 
						background: 'linear-gradient(45deg, hsl(var(--cyber-blue)), hsl(var(--neural-purple)))' 
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'neural-pulse': 'neural-pulse 3s ease-in-out infinite',
				'quantum-float': 'quantum-float 6s ease-in-out infinite',
				'holographic-shift': 'holographic-shift 8s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
