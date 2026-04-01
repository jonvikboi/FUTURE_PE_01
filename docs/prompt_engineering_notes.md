# 📝 Prompt Engineering Notes — AI Website Copy Framework

## Approach & Methodology

### 1. Why Structured Prompts Matter

The difference between mediocre AI output and publish-ready copy is **prompt architecture**. Unstructured prompts ("write website copy for a café") produce generic, interchangeable content. Our framework uses a 5-layer prompting structure:

| Layer | Purpose | Example |
|-------|---------|---------|
| **Role Priming** | Sets the AI's expertise context | "You are a conversion copywriter specializing in F&B brands" |
| **Context Injection** | Provides business-specific variables | Business name, location, USPs, target audience |
| **Output Structuring** | Defines exact deliverable format | Headlines, sub-headlines, bullet points, word counts |
| **Tone Calibration** | Controls emotional register | Friendly / Professional / Confident |
| **Constraint Setting** | Prevents common AI pitfalls | No superlatives, active voice only, reading level |

### 2. Key Design Decisions

**a) Variable-based templates over free-form prompts**
By using `{{BUSINESS_NAME}}`, `{{LOCATION}}`, etc., we create reusable templates. A salon owner swaps their details into the same prompt and gets equally specific output.

**b) Explicit anti-patterns**
AI models default to clichés ("world-class," "one-stop shop," "best in class"). Our prompts explicitly ban these phrases, forcing the model to generate fresh, specific language.

**c) Sensory language requirements**
Local businesses sell experiences, not features. Requiring "at least one sensory word" pushes the AI to write about aroma, warmth, texture — language that triggers emotional response.

**d) Location anchoring**
Every section naturally references the neighborhood (Koramangala, Bangalore). This serves dual purpose: local SEO and making the copy feel grounded rather than templated.

**e) Three CTA types instead of one**
Different positions on the page serve different visitor mindsets:
- **Top**: Ready to act → Direct booking CTA
- **Middle**: Still evaluating → Trust-building CTA
- **Bottom**: Fully scrolled, needs final push → Location/urgency CTA

### 3. Prompt Iteration Log

| Version | Change Made | Result |
|---------|------------|--------|
| v1.0 | Basic "write homepage copy" prompt | Generic output, no personality |
| v1.1 | Added role priming + business context | Better specificity, still flat tone |
| v1.2 | Added sensory word requirement + anti-patterns | Noticeably warmer, more vivid copy |
| v1.3 | Added output structure (headline/sub/intro format) | Clean, organized output ready for design |
| v2.0 | Full framework with constraints + tone definitions | Publish-ready copy with character |

### 4. What Makes Good Local Business Copy

From analyzing 50+ successful local business websites:

1. **Specificity beats superlatives** — "beans from Coorg estates" > "the finest coffee"
2. **Personality beats polish** — "your barista can tell you the farmer's name" > "we maintain rigorous quality standards"
3. **Action beats description** — "Reserve Your Table" > "Contact Us"
4. **Trust beats claims** — "4,200 cups this month" > "award-winning coffee"
5. **Location beats generic** — "Koramangala 5th Block" > "conveniently located"

### 5. Limitations & Honest Notes

- AI-generated testimonials should be replaced with real customer quotes before publishing
- Operating hours, addresses, and contact info are illustrative — real businesses must verify
- While the prompt framework produces strong first drafts, a human editor should always do a final pass for brand voice consistency
- Some outputs may need local slang or cultural references that AI might miss (e.g., Bangalore-specific colloquialisms)

### 6. Reusability Score

| Business Type | Adaptation Effort | Notes |
|--------------|-------------------|-------|
| Another café | Minimal — swap variables | Same tone, structure works |
| Salon/spa | Low — swap services + tone adapter | Switch to "pampering" language |
| Clinic | Medium — full tone adapter run | Professional tone, compliance-aware |
| Coaching center | Medium — needs social proof emphasis | Confident tone, results-focused |
| Agency/freelancer | Medium — portfolio-style services | Professional tone, case-study focus |

## Tools Comparison

| Tool | Strength | Best For |
|------|----------|----------|
| **Gemini (Antigravity)** | Strong at structured output, follows format well | Services pages, structured content |
| **ChatGPT** | Natural conversational tone | Hero sections, CTA copy |
| **Claude** | Excellent at nuance and constraint-following | Tone adaptation, editing passes |

All three tools were tested; the final outputs were generated primarily through Google Antigravity (Gemini) with refinement passes.
