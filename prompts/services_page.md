# 📋 Prompt Template: Services / Menu Page

## Purpose
Generate detailed, benefit-focused descriptions for each service or offering. Each description should answer: What is it? What's included? Why should I choose this business for it?

---

## Prompt Template

```
You are an experienced brand copywriter creating service descriptions for a local business website. Your copy must be specific, benefit-driven, and free of generic filler text. Every description should make the reader feel confident about choosing this business.

**Client Brief:**
- Business Name: {{BUSINESS_NAME}}
- Business Type: {{BUSINESS_TYPE}}
- Location: {{LOCATION}}
- Services/Offerings: {{SERVICES_LIST}}
- Target Audience: {{TARGET_AUDIENCE}}
- Tone: {{TONE}}
- Price Range Indicator: {{PRICE_RANGE}} (budget / mid-range / premium)

**Task:**
For EACH service/offering listed, generate:

1. **Service Name** — A clear, descriptive title (can be creative but must be instantly understandable)

2. **Tagline** (max 8 words) — A punchy one-liner that captures the essence

3. **Description** (30–50 words) — Explain:
   - What the customer gets
   - What makes it special
   - One sensory or emotional detail

4. **What's Included** — 3–5 bullet points of specific inclusions

5. **Why Choose Us** (1 sentence) — A differentiating statement specific to THIS business, not a generic claim

**Constraints:**
- Do NOT use superlatives like "the best" or "unmatched"
- Use concrete details over vague claims
- Each service must feel distinct — avoid repetitive language across descriptions
- Include at least one locally relevant detail per service (ingredient source, neighborhood reference, etc.)
- Keep language at Grade 8 reading level

**Output Format:**
Return each service as a clearly separated block with all 5 elements labeled.
```

---

## Example Variables: Bloom & Brew Café

```
SERVICES_LIST:
1. Single-Origin Pour-Over Coffee
2. Artisan Brunch Plates
3. Sourdough Bakery Selection
4. Co-Working Day Pass
5. Private Event Hosting

PRICE_RANGE: mid-range to premium
```

### Generated Output:
→ See `/outputs/services_copy.md`
