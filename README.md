  # 🎬 Movie App - React
  
  A Movie App built with **React** that allows users to browse movies, search for specific titles, and save their favorites.  
  This project demonstrates core React concepts including **page routing, state management, Context API, hooks (`useState`, `useEffect`)**, and API integration with **TMDB**.
  
  ---
  
  ## 🚀 Features
  
  - **Home Page** – Displays a list of movies fetched from the TMDB API.
  - **Search Bar** – Search for any movie by title using TMDB's search API.
  - **Favorites Page** – View all your favorited movies in one place.
  - **Add to Favorites** – Favorite a movie directly from the Home page.
  - **Persistent Data** – Favorites are saved in `localStorage` and remain after refreshing.
  - **Page Routing** – Navigate between Home and Favorites without reloading.
  - **Reusable Components** – Modular structure for maintainability.
  
  ---
  
  ## 🛠️ Technologies Used
  
  - **React** – Frontend library
  - **React Router** – Client-side routing
  - **Context API** – Global state management
  - **TMDB API** – Movie data & search functionality
  - **CSS** – Styling
  
  ---
  
  ## 📚 React Concepts Covered
  
  - **Components** – Modular UI building blocks
  - **useState** – Manage local state for movies, search results, and favorites
  - **useEffect** – Fetch data on load and handle localStorage
  - **Context API** – Share global favorites data across components
  - **React Router** – Navigation between pages without refresh
  
  ---
  
  ## 📷 Screenshots
  
  *(Add your screenshots here)*
  
  ---
  
  ## 🔑 Getting Started
  
  ### 1. Clone the repository
  ```bash
  git clone https://github.com/yourusername/movie-app.git
  cd movie-app
```
  ### 2. Install dependencies
  ```bash
  npm install
```
  ### 3. Get your TMDB API key
  Sign up at TMDB
  Get your API key and add it to your .env file:
  
  ```ini
  VITE_TMDB_API_KEY=your_api_key_here
```
  ### 4. Start the development server
  ```bash
  npm run dev
```
 ## 🖥️ Project Structure
  ```graphql
  src/
  │── components/        # Reusable components (MovieCard, Header, etc.)
  │── pages/             # Home and Favorites pages
  │── contexts/          # MovieContext for global state
  │── App.jsx            # Main app file with routing
  │── index.jsx          # Entry point
  │── App.css            # Styles
```
  ## 🌟 Learning Outcomes
  - Breaking UI into reusable components
  
  - Managing local and global state
  
  - Implementing client-side routing
  
  - Persisting data with localStorage
  
  - Fetching & integrating third-party APIs
  
  - Clean project structure for scalability
  
  ## 📬 Contact
  If you’d like to discuss React, movie apps, or frontend development, feel free to connect with me:
  
  Dattu
  LinkedIn | GitHub
