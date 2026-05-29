<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>LUXE CONNECTÉ · montre intelligente</title>
  <!-- Google Fonts : élégance & lisibilité -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Inter:opsz,wght@14..32,300;14..32,400;14..32,600;14..32,700&display=swap" rel="stylesheet">
  <style>
    /* RESET & BASE */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Inter', sans-serif;
      background: #f7f5f0;
      color: #1e1e1e;
      line-height: 1.5;
      scroll-behavior: smooth; /* fallback, mais smooth géré par JS */
    }

    /* TYPOGRAPHIE LUXE */
    h1, h2, h3, .logo, .nav-link, .hero-sub, .price {
      font-family: 'Playfair Display', serif;
      font-weight: 400;
      letter-spacing: 0.02em;
    }

    h2 {
      font-size: 2.8rem;
      margin-bottom: 1.5rem;
      font-weight: 600;
      letter-spacing: 0.01em;
    }

    .container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* NAVBAR — fixe, transparente → solide au scroll */
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 1.2rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: transparent;
      transition: background 0.4s ease, box-shadow 0.3s ease, padding 0.3s;
      z-index: 1000;
      backdrop-filter: blur(0px);
    }

    .navbar.scrolled {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(12px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
      padding: 0.8rem 2rem;
    }

    .logo {
      font-size: 1.9rem;
      font-weight: 600;
      color: #1a1a1a;
      text-decoration: none;
      letter-spacing: 0.1rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }

    .logo span {
      font-weight: 300;
      color: #b59a6b;
    }

    .nav-links {
      display: flex;
      gap: 2.8rem;
      list-style: none;
      align-items: center;
    }

    .nav-links a {
      text-decoration: none;
      color: #1e1e1e;
      font-weight: 400;
      font-size: 1rem;
      transition: color 0.2s;
      position: relative;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0%;
      height: 1px;
      background: #b59a6b;
      transition: width 0.3s;
    }

    .nav-links a:hover::after {
      width: 100%;
    }

    .nav-links a:hover {
      color: #b59a6b;
    }

    /* HAMBURGER */
    .hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 4px;
      z-index: 1100;
    }

    .hamburger span {
      display: block;
      width: 28px;
      height: 2px;
      background: #1e1e1e;
      transition: 0.3s;
      border-radius: 2px;
    }

    .hamburger.active span:nth-child(1) {
      transform: rotate(45deg) translate(5px, 5px);
    }
    .hamburger.active span:nth-child(2) {
      opacity: 0;
    }
    .hamburger.active span:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -5px);
    }

    /* HERO — parallaxe douce */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #eae5db;
      position: relative;
      overflow: hidden;
      padding: 8rem 2rem 6rem;
    }

    .hero-bg {
      position: absolute;
      inset: -10% -10% -10% -10%;
      background: radial-gradient(circle at 30% 40%, #d8d0c0, #c6bbaa 70%, #b5aa99);
      will-change: transform;
      z-index: 0;
      transition: transform 0.1s ease-out; /* lissé par JS */
    }

    .hero-content {
      position: relative;
      z-index: 2;
      text-align: center;
      max-width: 900px;
    }

    .hero h1 {
      font-size: 4.8rem;
      font-weight: 400;
      line-height: 1.1;
      color: #1a1a1a;
      margin-bottom: 1rem;
      letter-spacing: -0.01em;
    }

    .hero-sub {
      font-size: 1.6rem;
      font-weight: 300;
      color: #3b352e;
      margin-bottom: 2.5rem;
      font-style: italic;
    }

    .price {
      font-size: 2.8rem;
      color: #b59a6b;
      margin-bottom: 2rem;
      font-weight: 600;
    }

    .btn {
      display: inline-block;
      background: #1a1a1a;
      color: #f7f5f0;
      padding: 1rem 3rem;
      font-size: 1rem;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
      text-decoration: none;
      border: none;
      transition: all 0.3s;
      cursor: pointer;
      font-weight: 600;
      border-radius: 40px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    }

    .btn:hover {
      background: #b59a6b;
      color: #fff;
      transform: translateY(-3px);
      box-shadow: 0 12px 28px rgba(181, 154, 107, 0.3);
    }

    /* SECTIONS générales */
    section {
      padding: 6rem 0;
    }

    .section-dark {
      background: #1e1e1e;
      color: #f0ede8;
    }

    .section-light {
      background: #f7f5f0;
      color: #1e1e1e;
    }

    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;
    }

    .text-gold {
      color: #b59a6b;
    }

    /* CARTES PRODUIT / CARACTÉRISTIQUES */
    .feature-card {
      background: rgba(255,255,255,0.04);
      padding: 2rem 1.8rem;
      border-radius: 24px;
      backdrop-filter: blur(4px);
      border: 1px solid rgba(255,255,255,0.06);
      transition: transform 0.3s, background 0.3s;
      text-align: center;
    }

    .feature-card i {
      font-size: 2.4rem;
      margin-bottom: 1rem;
      display: inline-block;
      color: #b59