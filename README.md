# Mini News Hub

Mini News Hub is a small news website built with Next.js. It is a learning project for practicing the App Router, dynamic routes, layouts, parallel routes, reusable components, and local image assets....

![Mini News Hub news image](public/images/news/ai-robot.jpg)

## Features

- Browse a list of news articles
- Open an individual article from its slug
- Display article images with `next/image`
- Use a shared site header and navigation
- Explore archived news by year
- Show latest news alongside archive results
- Handle unknown article slugs with a 404 page

## Built With

- Next.js 16
- React 19
- JavaScript
- CSS Modules and global CSS

## Getting Started

### 1. Install dependencies


```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```


Open [http://localhost:3000](http://localhost:3000) in your browser...

## Available Routes

| Route | Description |
| --- | --- |
| `/` | Home page |
| `/news` | List of available news articles |
| `/news/[slug]` | Detail page for one article |
| `/archive/[year]` | Archived news for a selected year |


## Project Structure

```text
src/
	app/
		news/              News list and dynamic article pages
		archive/           Archive layout and parallel route slots
		dummy-news.js      Local demo news data
	components/          Reusable UI components
public/
	images/news/         Article images
```


## Available Scripts

```bash
npm run dev      # Start the development server
npm run lint     # Check the project with ESLint
npm run build    # Create a production build
npm run start    # Start the production server
```


## Notes

This demo uses local sample data from `src/app/dummy-news.js`. 
There is no database or external news API, which keeps the project small and easy to experiment with.
