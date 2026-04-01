# 🚀 AI Website Copy Generator — Prompt Engineering Framework

## 📋 Project Overview

A structured prompt engineering system that generates **high-quality, conversion-focused website copy** for local businesses. This project demonstrates how AI + well-crafted prompts can replace expensive copywriting agencies — producing publish-ready content in minutes.

## 🏪 Client Chosen

**Bloom & Brew Café** ☕  
📍 Koramangala 5th Block, Bangalore, Karnataka  

A specialty coffee and artisan brunch café known for single-origin pour-overs, sourdough-based brunch plates, and a cozy co-working-friendly atmosphere. The café targets young professionals (25–35), remote workers, and weekend brunch enthusiasts in one of Bangalore's trendiest neighborhoods.

## 🧠 Prompt Logic & Strategy

### Framework Design Principles

1. **Role Priming** — Every prompt begins by assigning the AI a specific expert role (e.g., "You are a conversion copywriter specializing in F&B brands")
2. **Context Injection** — Business name, location, target audience, USPs, and tone are injected as structured variables
3. **Output Formatting** — Prompts specify exact output structure (headlines, sub-headlines, bullet points, CTA text)
4. **Tone Calibration** — A `tone` parameter adapts language between friendly, professional, and confident styles
5. **Constraint Setting** — Word limits, banned phrases (e.g., "best in class"), and readability targets keep output focused

### Prompt Categories

| Category | Purpose | Output |
|----------|---------|--------|
| `homepage_hero.md` | Generate headline + value proposition | Hero section copy |
| `services_page.md` | Create service/menu descriptions | Service cards |
| `cta_sections.md` | Write calls-to-action | Booking/contact copy |
| `tone_adapter.md` | Adapt existing copy to different tones | Re-toned content |

## 📁 Repository Structure

```
FUTURE_PE_01/
├── README.md                    # This file
├── prompts/                     # Structured prompt templates
│   ├── homepage_hero.md         # Homepage headline & value prop prompt
│   ├── services_page.md         # Services/menu description prompt
│   ├── cta_sections.md          # Call-to-action generation prompt
│   └── tone_adapter.md          # Tone adaptation prompt
├── outputs/                     # Generated copy (AI outputs)
│   ├── homepage_copy.md         # Final homepage content
│   ├── services_copy.md         # Final services content
│   └── cta_copy.md              # Final CTA content
├── website/                     # Live website implementation
│   ├── index.html               # Main website file
│   ├── styles.css               # Styling
│   └── script.js                # Interactivity & animations
└── docs/
    └── prompt_engineering_notes.md  # Approach & learnings
```

## 🛠️ Tools Used

| Tool | Purpose |
|------|---------|
| **Google Antigravity (Gemini)** | Primary AI for prompt execution & copy generation |
| **Claude AI** | Prompt refinement & tone comparison |
| **VS Code** | Code editing & project organization |

## 🌐 Live Website

Open `website/index.html` in any browser to see the generated copy in a fully designed, publish-ready website for Bloom & Brew Café.

## ✨ Key Features

- ✔ **Conversion-focused copy** — Every section drives action (visit, call, book)
- ✔ **Business-specific language** — Coffee terminology, Bangalore locality references, real menu items
- ✔ **Strong CTAs** — Location-based, urgency-based, and trust-building variants
- ✔ **Reusable framework** — Swap business details to generate copy for any local business
- ✔ **Publish-ready output** — Content can go live on a real website immediately

## 📤 How to Reuse for Other Businesses

1. Open any prompt file in `/prompts/`
2. Replace the `{{BUSINESS_*}}` variables with your client's details
3. Run through ChatGPT, Claude, or Gemini
4. Copy the output into your website template

---

**Built as part of the Future Skills Prompt Engineering Program**  
*Demonstrating practical, portfolio-worthy AI prompt engineering*
