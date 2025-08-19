# 🛍️ Velvetry E-Commerce Website

Velvetry is a modern, stylish e-commerce platform built with [Next.js](https://nextjs.org/) and TypeScript. It features a beautiful UI, product catalog, shopping cart, checkout, order tracking, admin dashboard, and more.

## ✨ Features

- Modern Next.js 14+ app directory structure
- TypeScript for type safety
- Modular, reusable React components
- Shopping cart with context
- Product catalog and details pages
- Checkout and order confirmation
- Order tracking
- Admin dashboard and login
- Responsive design
- Custom hooks and utilities
- Styled with CSS (globals.css) and PostCSS

## 📁 Project Structure

```
.
├── app/                # Next.js app directory (routing, pages)
├── components/         # Reusable UI and page components
├── contexts/           # React context providers (e.g., cart)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and data logic
├── public/             # Static assets (images, icons)
├── styles/             # Global styles
├── package.json        # Project metadata and scripts
├── tsconfig.json       # TypeScript configuration
├── next.config.mjs     # Next.js configuration
├── postcss.config.mjs  # PostCSS configuration
├── pnpm-lock.yaml      # pnpm lockfile
└── .gitignore
```

## 🚀 Getting Started

### 1. **Clone the repository**

```bash
git clone <your-repo-url>
cd Velvetry-ECommerce-Website
```

### 2. **Install dependencies**

If you use **pnpm** (recommended):

```bash
pnpm install
```

Or with **npm**:

```bash
npm install
```

Or with **yarn**:

```bash
yarn install
```

### 3. **Run the development server**

```bash
pnpm dev
```
or
```bash
npm run dev
```
or
```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### 4. **Build for production**

```bash
pnpm build
pnpm start
```
or
```bash
npm run build
npm start
```
or
```bash
yarn build
yarn start
```

## 🛠️ Customization

- Add or update products in `lib/products.ts` and images in `public/`.
- Edit styles in `styles/globals.css`.
- Update components in `components/` as needed.

## 📦 Dependencies

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostCSS](https://postcss.org/)
- [pnpm](https://pnpm.io/) (optional, but recommended for speed)

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

[MIT](LICENSE)

---

**How to run this project:**

1. Open a terminal in the project folder.
2. Run `pnpm install` (or `npm install`).
3. Start the dev server with `pnpm dev` (or `npm run dev`).
4. Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

Enjoy building with Velvetry! 🎉