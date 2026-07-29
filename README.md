# 💌 Digital Apology Letter to {Name}

A minimalist, interactive digital apology letter designed with focus on sincere typography, gentle color psychology, and smooth user interactions. 

The project features a responsive envelope opening mechanism, soft background audio fading, and actionable choices to give the recipient control over the conversation.

## ✨ Features

- **Interactive Envelope**: A clean CSS-based envelope that opens dynamically via `clip-path` and transitions on user click/tap.
- **Background Music Fading**: Programmatic audio injection that automatically fades in gently when the envelope opens to set a calm mood.
- **Micro-interactions**: Clean CSS transitions for button active states, hover effects, and responsive element rendering.
- **Accessible Layout**: Semantic HTML structure supporting keyboard controls (`Enter` / `Space`) for opening the envelope.
- **Fluid Typography**: Uses a premium combination of *Fraunces* (serif) for headlines and *Source Sans 3* (sans-serif) for clean readability.

## 🎨 Theme & Styling

The application relies on custom CSS variables to generate a warm, calming color palette designed to put the reader at ease:

- **Warm Cream Background (`--bg`)**: `#f4e9e3` (Includes a subtle dual-radial gradient mesh)
- **Soft White Card (`--card`)**: `#fffaf5`
- **Deep Muted Ink (`--ink`)**: `#4a3b47`
- **Calming Sage Green (`--sage`)**: `#8b9a7d`
- **Soft Gold Accents (`--gold`)**: `#c9a66b`

## 🛠️ Built With

- **HTML5**: Semantic layout and audio integration.
- **CSS3**: Custom properties (variables), Flexbox layout, media queries for absolute mobile responsiveness, and custom clip-paths.
- **Vanilla JavaScript**: DOM manipulation, event routing, conditional visibility timing, and audio fade-in loops.

## 🚀 How to Run Locally

Since this project relies on vanilla web technologies, you don't need to install any frameworks or dependencies.

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   ```
2. **Navigate to the folder:**
   ```bash
   cd YOUR_REPOSITORY_NAME
   ```
3. **Open the project:**
   Simply double-click the `index.html` file to run it locally in your browser. Alternatively, use a local development server like the **Live Server** extension in VS Code.

## 📁 File Structure

```text
├── index.html       # The main interface, markup structure, and text content
├── style.css        # Layout structure, custom color theme, and animations
├── script.js        # Envelope animations, button triggers, and audio controls
└── bg-music.mp3     # Soft background audio asset (replace with your file)
```

## ⚙️ Customization

If you want to repurpose this letter for a different context or name:
- Open `index.html` and update the content inside the `h1` and `.letter-body` tags.
- Swap out `bg-music.mp3` with your own audio track.
- Adjust the layout accent colors globally in `style.css` under the `:root` scope.

## 📄 License

This project is open-source and free to use. Feel free to fork it to send your own digital cards.
