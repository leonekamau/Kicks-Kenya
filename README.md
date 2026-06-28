# Kicks Kenya 👟

**Kenya's premier online sneaker destination** — a fully responsive multi-page web application built with HTML5, CSS3, JavaScript (ES6+), and Bootstrap 5.

🌐 **Live site:** [GitHub Pages link here]  
📁 **Repository:** [Your GitHub repo URL here]

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, featured products, categories, testimonials preview |
| Shop | `shop.html` | Filterable product grid (brand + category + price range) |
| Product Detail | `product.html` | Size selector, gallery, reviews, add to cart |
| About | `about.html` | Brand story, team, values, stats |
| Contact | `contact.html` | Validated contact form, store info, M-Pesa details |
| Blog | `blog.html` | Sneaker culture articles and news |
| FAQ | `faq.html` | Accordion FAQ (authenticity, delivery, returns, sizing) |
| Testimonials | `testimonials.html` | 9 customer reviews with rating breakdown |

---

## Features

### JavaScript Interactive Features
1. **Product Filter** (`shop.html`) — filter by brand, category, and max price with live count update
2. **Contact Form Validation** (`contact.html`) — validates name, email, Kenyan phone number, and message with inline error messages
3. **Dark / Light Mode Toggle** — persists via localStorage across all pages
4. **Size Selector** — interactive size buttons with selected state
5. **Add to Cart Toast** — confirmation message after selecting size
6. **Back to Top Button** — appears after scrolling 400px
7. **Scroll Animations** — IntersectionObserver fade-in on cards

---

## Tech Stack

- **HTML5** — semantic markup, ARIA attributes, breadcrumbs
- **CSS3** — custom properties (CSS variables), flexbox, grid, media queries
- **JavaScript ES6+** — modules, IntersectionObserver, localStorage, arrow functions
- **Bootstrap 5.3** — grid system, navbar, accordion, tabs, modals
- **Bootstrap Icons 1.11** — icon set

---

## File Structure

```
kicks-kenya/
├── index.html          # Home page
├── shop.html           # Shop / product listing
├── product.html        # Product detail
├── about.html          # About us
├── contact.html        # Contact form
├── blog.html           # Blog / news
├── faq.html            # FAQ accordion
├── testimonials.html   # Customer reviews
├── css/
│   └── style.css       # Main stylesheet (CSS variables, components)
├── js/
│   └── main.js         # All JavaScript (filter, validation, dark mode)
└── README.md
```

---

## Commit Guide (≥ 34 commits, June 15–28)

### Suggested commit messages for remaining commits:

```bash
# Today — June 25 (push ~12 commits)
git commit -m "Initial project setup: HTML skeleton and folder structure"
git commit -m "Add shared CSS variables and root styles"
git commit -m "Build responsive Bootstrap navbar with dark mode toggle"
git commit -m "Create site footer with social links and contact info"
git commit -m "Add Home page hero section and stats strip"
git commit -m "Add featured products section to Home page"
git commit -m "Add categories grid and why-us section to Home"
git commit -m "Create Shop page with Bootstrap product grid"
git commit -m "Add filter bar with brand and category buttons"
git commit -m "Build Product Detail page with size selector"
git commit -m "Add product image gallery and tab component"
git commit -m "Create About page with team section"

# June 26 (push ~12 commits)
git commit -m "Add Contact page with M-Pesa payment info"
git commit -m "Implement contact form with JavaScript validation"
git commit -m "Add Kenyan phone number validation to contact form"
git commit -m "Create Blog page with featured post layout"
git commit -m "Add blog article cards with category labels"
git commit -m "Build FAQ page with Bootstrap accordion component"
git commit -m "Add FAQ sections: authenticity, delivery, returns, sizing"
git commit -m "Create Testimonials page with rating breakdown"
git commit -m "Add product filter JavaScript — brand and category"
git commit -m "Add price range slider filter to shop page"
git commit -m "Implement dark mode toggle with localStorage persistence"
git commit -m "Add scroll animation with IntersectionObserver"

# June 27 (push ~6 commits)
git commit -m "Add back-to-top button and WhatsApp float button"
git commit -m "Add breadcrumb navigation to all inner pages"
git commit -m "Improve mobile responsiveness — test on 375px viewport"
git commit -m "Fix navbar collapse behaviour on mobile devices"
git commit -m "Add product quantity selector and add-to-cart toast"
git commit -m "Polish card hover effects and button transitions"

# June 28 — final (push ~6 commits)
git commit -m "Add newsletter signup section to Home and Blog pages"
git commit -m "Improve footer links across all 8 pages"
git commit -m "Add ARIA labels and alt attributes for accessibility"
git commit -m "Fix CSS variable theming in dark mode for all components"
git commit -m "Cross-browser test: Chrome, Firefox, Edge — fix minor issues"
git commit -m "Final review: validate all HTML links and form behaviour"
```

---

## Running Locally

No build tools needed — open `index.html` directly in your browser, or use VS Code Live Server for the best experience.

---

## Author

**[Your Name]**  
Web Application Development — 2026  
Kicks Kenya is a fictional Nairobi shoe shop created for coursework purposes.
