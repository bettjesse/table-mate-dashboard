import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default ({ env }) => ({
  plugins: [
    tailwindcss({
      config: './src/css/tailwind.config.js',
    }),
    autoprefixer(),
  ],
});
