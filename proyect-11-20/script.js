let text = document.getElementById('text');
let scene = document.getElementById('scene');
let parallaxText = new Parallax(text);
let parallaxScene = new Parallax(scene);
parallaxScene.friction(0.2, 0.2);