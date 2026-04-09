/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Tema GitHub Dark — disesuaikan dengan terminal Rico
                primary:     '#58a6ff',  // GitHub blue — accent, border aktif, link
                navy:        '#010409',  // GitHub background — latar utama (hampir hitam)
                'navy-card': '#0d1117',  // GitHub panel — permukaan kartu
                muted:       '#8b949e',  // GitHub muted — teks sekunder
                'gh-green':  '#3fb950',  // GitHub green — badge PM
                'gh-yellow': '#d29922',  // GitHub yellow — badge Ops
            },
            fontFamily: {
                sans: ['JetBrains Mono', 'ui-monospace', 'monospace'],
                mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
            }
        }
    }
};
