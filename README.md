# Adreign Birthday Website 🎀

A soft pink, coquette-style birthday greeting website built with plain HTML, CSS, and JavaScript.

## Project structure

```text
adreign-birthday/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── photo3.jpg
└── music/
    └── our-song.mp3
```

The photo and music files are optional. The site shows cute placeholders if the photos aren't present, and the music button explains if the audio file is missing.

## Run it in VS Code

1. Extract this ZIP file.
2. Open VS Code.
3. Select **File → Open Folder...** and choose `adreign-birthday`.
4. Open `index.html`.
5. If you have the **Live Server** extension, right-click `index.html` and choose **Open with Live Server**. Otherwise, double-click `index.html` in File Explorer to open it in your browser.
6. Test the envelope, music button, and cake button.

## Personalize the page

### Add photos
Put three image files in the `images` folder and name them exactly:
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`

JPG files are easiest. If your photo is a PNG or WebP, either convert it to JPG or update the matching `src` filename in `index.html`.

### Add music
Add an audio file you have permission to use to the `music` folder and name it `our-song.mp3`. You can change the filename in the `<audio>` element in `index.html`. Audio starts only after the visitor presses the music button because browsers block autoplay in many situations.

### Edit the birthday letter
Open `index.html` and find `<article id="letterCard"`. Edit the paragraphs inside it to make the message more personal.

## Publish online with GitHub Pages

This project is a static site, so GitHub Pages can host it for free.

1. Sign in or create an account at https://github.com/.
2. Create a **new public repository**, for example `adreign-birthday`.
3. Upload the project files and folders. Make sure `index.html` is in the repository's top level, not inside another nested folder.
4. In the repository, open **Settings → Pages**.
5. Under the build/deployment section, choose **Deploy from a branch**.
6. Select the `main` branch and the `/(root)` folder, then save.
7. Wait a few minutes. GitHub will show the published site URL, usually like `https://YOUR-USERNAME.github.io/adreign-birthday/`.
8. Open the public URL in a private/incognito browser window or on your phone to check it.

Menu names may change slightly as GitHub updates its interface. Keep the repository public for the simplest free GitHub Pages setup. Anyone with the link can view the page and any photos/music you upload.

## Shorten the public URL with TinyURL

1. First make sure your GitHub Pages URL works. TinyURL cannot publish a site that only exists on your computer.
2. Visit https://tinyurl.com/.
3. Paste the complete public GitHub Pages URL into the link field.
4. Create the short link. If the service offers a custom alias, try something memorable like `birthday-for-adreign` if it is available.
5. Test the TinyURL link on your phone before sending it.

## Notes
- This website does not need a server, database, or build step.
- Do not upload private or sensitive photos unless you are comfortable with anyone who has the public link seeing them.
- Use music you own or have permission to share.
