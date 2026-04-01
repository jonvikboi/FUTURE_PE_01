# 🎯 Prompt Template: Call-to-Action (CTA) Sections

## Purpose
Generate multiple CTA variants — contact/booking prompts, trust-building copy, and urgency/location-based CTAs — tailored to the business type and audience.

---

## Prompt Template

```
You are a direct-response copywriter creating call-to-action sections for a local business website. Your CTAs must feel natural (not pushy), provide a clear reason to act, and reduce friction. Each CTA should make the next step obvious and appealing.

**Client Brief:**
- Business Name: {{BUSINESS_NAME}}
- Business Type: {{BUSINESS_TYPE}}
- Location: {{LOCATION}}
- Primary Action: {{PRIMARY_ACTION}} (e.g., book a table, call now, visit us, schedule appointment)
- Contact Info: {{CONTACT_INFO}}
- Operating Hours: {{HOURS}}
- Target Audience: {{TARGET_AUDIENCE}}
- Tone: {{TONE}}

**Task:**
Generate THREE distinct CTA sections:

---

### CTA Type 1: Primary Contact / Booking CTA
- **Headline** (max 8 words) — Create urgency or desire without being pushy
- **Supporting Text** (15–25 words) — Remove friction, answer the "why now?" question
- **Button Text** (2–4 words) — Specific action verb
- **Trust Element** (1 line) — Social proof, guarantee, or reassurance (e.g., "No reservation fee" or "Rated 4.8 on Google")

---

### CTA Type 2: Trust-Building CTA (Mid-Page)
Purpose: Reassure visitors who are browsing but not yet convinced.

- **Headline** (max 8 words) — Address a common hesitation
- **Body Copy** (30–40 words) — Build confidence through specifics (years in business, customer count, sourcing story, founder story)
- **Micro-CTA** (text link style, not button) — Gentle nudge (e.g., "See what our regulars say →")

---

### CTA Type 3: Location / Urgency CTA (Footer)
Purpose: Convert visitors who've scrolled to the bottom.

- **Headline** (max 10 words) — Reference the location for local SEO + connection
- **Address + Map Prompt** — Full address with a "Get Directions" link prompt
- **Hours Display** — Formatted operating hours
- **Closing Line** (max 15 words) — Warm, inviting, makes them picture being there

**Constraints:**
- NO fake urgency (avoid "Limited time!" or "Hurry!")
- Button text must be specific to the business (not "Submit" or "Learn More")
- Include at least one location reference for local SEO
- Trust elements must be plausible and specific
- Write in active voice

**Output Format:**
Return each CTA type as a clearly labeled section with all elements.
```

---

## Example Variables: Bloom & Brew Café

```
PRIMARY_ACTION: Reserve a table / Walk in
CONTACT_INFO: +91 98456 12345, hello@bloomandbrew.in
HOURS: Mon–Fri 7:30 AM – 9:00 PM | Sat–Sun 8:00 AM – 10:00 PM
```

### Generated Output:
→ See `/outputs/cta_copy.md`
