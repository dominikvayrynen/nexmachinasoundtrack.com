# nexmachinasoundtrack.com

## Setup guide
Make sure you have these installed...

- [NodeJS](https://nodejs.org/en/) (v18 or greater)
- [Git](https://git-scm.com/)

Then open the folder in terminal `cd path/to/nexmachinasoundtrack.com` and...

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally

Run `npm run dev` to start the development server.

#### View local server at [localhost:4321](http://localhost:4321/)

### 3. Build for production

Run `npm run build` to build the site. The output will be in the `dist/` folder.

### 4. Preview production build

Run `npm run preview` to preview the production build locally.

### 5. Deploy

nexmachinasoundtrack.com can be deployed to any static hosting service (GitHub Pages, Netlify, Vercel, etc.)

#### View the site at [nexmachinasoundtrack.com](http://nexmachinasoundtrack.com/)

## Migration Notes

This site has been migrated from Jekyll to Astro. The old Jekyll/Gulp build system has been replaced with Astro's modern build system.
