# Disclaimer

This project is just a fun experiment and not intended for widespread use. It’s a basic URL shortener that you can play around with locally, but don’t expect a polished product! Feel free to explore the code and tinker with it if you like, but keep in mind that it’s not intended to be a fully-featured application.

## Features to think about

- [ ] URL expiration option
- [ ] Login possibility
    - [ ] Dashboard to manage shortend URLs
- [ ] Analytics (click tracking for shortened URLs)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/c3met/url-shortener.git

2. Enter env variables
   ```js
   DATABASE_URL="mongodb://root:prisma@localhost:27017/UrlEntry?authSource=admin"
   APP_URL="http://localhost:5173/" 
   ```   
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start Docker
   ```sh
   docker compose up -d
   ```
5. Start Sveltekit
   ```sh
   npm run dev
   ```

