# Ron Kibel Portfolio App

Next.js portfolio site for Ron Kibel, focused on Computer Vision, Spatial Computing, and AI engineering.

## Overview

This app is designed as a polished technical portfolio for recruiters and engineering teams. It highlights:

- Real-time perception, 3D geometry, multimodal AI, and AR systems
- Google Beam camera and graphics systems work
- ServiceNow AI Search multimodal retrieval work
- Spatial AI and Computer Vision projects including POINTER
- UCSB MS/BS education, valedictorian recognition, and technical skills

## Tech Stack

- Next.js 15 App Router
- React 19
- Tailwind CSS
- `next/font` with Geist and Geist Mono
- `react-hook-form`, Axios, and Nodemailer for the contact form

## Structure

```text
src/app/
  page.js                 Main page composition
  layout.js               Metadata and root layout
  globals.css             Global styles and motion preferences
  api/send-email/route.js Contact form API route

src/components/
  ContactForm.js
  EmailPopup.js
  portfolio/
    Hero.js
    CVVisualBackground.js
    About.js
    Experience.js
    Projects.js
    ProjectVisual.js
    Skills.js
    Education.js
    ContactFooter.js
    data.js
```

## Content Sources

Portfolio content is centralized in `src/components/portfolio/data.js`. Static assets live in `public/`, including:

- `resume.pdf`
- `profile.png`
- `logo.png`

## Quality Notes

- Layouts use responsive grids and flexible wrapping for mobile, tablet, laptop, and wide displays.
- Motion is disabled or minimized when `prefers-reduced-motion` is enabled.
- Interactive project details use native buttons with `aria-expanded`.
- External links and resume links include appropriate target and rel attributes.
