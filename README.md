# 😂 Joke Generator

A clean, card-style **random joke generator** built with **vanilla HTML, CSS, and JavaScript**. It fetches a fresh joke from the **API Ninjas Jokes API** on page load and every time you press **Generate New Joke** — complete with a loading state and a smooth animated card.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📌 Project Type

| | |
|---|---|
| **Category** | Frontend API-based mini app |
| **Type** | Static single-page app (no routing, no build step) |
| **Purpose** | Fetch and display a random joke on demand |
| **External API** | [API Ninjas — Jokes API](https://api-ninjas.com/api/jokes) |
| **Dependencies** | None (plain HTML/CSS/JS) |
| **Build Tools** | None — runs directly in the browser |

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (gradient background, card hover lift, keyframe fade-in, media queries) |
| Logic | Vanilla JavaScript (ES6+, `async`/`await`, Fetch API) |
| Data Source | API Ninjas REST API (JSON) |
| Fonts | System UI stack (Segoe UI, Tahoma, Verdana) |
| Hosting | Any static host (GitHub Pages, Netlify, Vercel) |

---

## ✨ Features

- 🎲 **Random joke** fetched from a live REST API
- ⚡ **"Generate New Joke"** button for instant refresh
- ⏳ **Loading state** — shows "Loading joke..." while the request is in flight
- 🎭 **Emoji + typography** design with a gradient card
- 💫 **Smooth animations** — fade-in on load, card lift on hover
- 📱 **Responsive** — centered layout with fluid width up to 600px

---

## ⚙️ How It Works

```js
const response = await fetch("https://api.api-ninjas.com/v1/jokes", {
  method: "GET",
  headers: { "X-Api-Key": "YOUR_API_KEY" },
});

const data = await response.json();
jokeText.innerHTML = data[0].joke;
```

1. On load (and on every button click) the app calls the Jokes endpoint.
2. The API key is sent in the `X-Api-Key` request header.
3. The JSON response is an array of joke objects; the first joke text is rendered into the card.
4. The button sets a "Loading joke..." placeholder before each request.

---

## 🔑 Setup (API Key Required)

This project uses a **free API key** from API Ninjas.

1. Sign up at [api-ninjas.com](https://api-ninjas.com/) (free tier available).
2. Copy your API key.
3. Open `js/app.js` and replace the key in the request header:

```js
headers: {
  "X-Api-Key": "YOUR_OWN_API_KEY"
}
```

> ⚠️ **Security note:** never commit a real API key to a public repository. Prefer a small config file excluded via `.gitignore`, or a serverless proxy that injects the key on the server side. If a key was ever pushed publicly, **revoke and regenerate it** from your API dashboard.

---

## 📁 Project Structure

```
jokeGenerator/
├── index.html        # Card layout, joke display, generate button
├── css/
│   └── custom.css    # Gradient theme, card animations, responsive rules
└── js/
    └── app.js        # Fetch request, API key header, joke rendering
```

---

## 🚀 Getting Started

No installation required — just an API key.

```bash
git clone https://github.com/faisalrlakhany/jokeGenerator.git
cd jokeGenerator
```

Add your API key in `js/app.js`, then open `index.html` in your browser (or use VS Code **Live Server**).

---

## 🧠 Concepts Practiced

- `async` / `await` with the Fetch API
- Consuming a third-party REST API with custom headers
- Handling async UI states (loading → loaded)
- DOM updates with `querySelector` and `innerHTML`
- CSS keyframe animations and hover transitions

---

## 👨‍💻 Author

**Muhammad Faisal Lakhany**
GitHub: [@faisalrlakhany](https://github.com/faisalrlakhany)
