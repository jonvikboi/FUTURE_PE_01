# 🎨 Prompt Template: Tone Adaptation

## Purpose
Adapt existing website copy to match a different tone — enabling the same prompt framework to serve salons, clinics, agencies, cafés, or any local business by simply switching the tone parameter.

---

## Prompt Template

```
You are a brand voice specialist. Your job is to take existing website copy and re-write it in a different tone while keeping the core message, facts, and structure intact. The meaning must not change — only the feel.

**Source Copy:**
{{ORIGINAL_COPY}}

**Current Tone:** {{CURRENT_TONE}}
**Target Tone:** {{TARGET_TONE}}

**Tone Definitions:**

1. **Friendly** (ideal for: cafés, salons, bakeries, pet shops)
   - Conversational, warm, uses "you" and "we"
   - Short sentences, relatable language
   - Light humor okay, emoji-friendly
   - Feels like talking to a knowledgeable friend

2. **Professional** (ideal for: clinics, law firms, consulting agencies)
   - Polished, credible, uses proper terminology
   - Structured sentences, formal but not stiff
   - No slang, no emoji
   - Feels like talking to a trusted expert

3. **Confident** (ideal for: coaching centers, gyms, personal brands)
   - Bold, direct, uses strong verbs
   - Makes claims with backing (numbers, results)
   - Slightly aspirational, empowering language
   - Feels like talking to a successful mentor

**Task:**
Rewrite the source copy in the {{TARGET_TONE}} tone. Maintain:
- All factual claims and specific details
- The same structural format (headlines, bullets, paragraphs)
- The same approximate word count (±10%)
- All local/business-specific references

**Constraints:**
- Do NOT add new information not present in the original
- Do NOT remove any key selling points
- Adjust vocabulary, sentence structure, and emotional register only
- Flag any phrases that don't translate well to the target tone

**Output Format:**
Return the adapted copy with [TONE: {{TARGET_TONE}}] label at the top, preserving original section labels.
```

---

## Tone Comparison Example

### Original (Friendly — Café):
> "Pull up a chair and stay a while. Our baristas hand-brew every cup using beans we source directly from farms in Coorg and Chikmagalur."

### Adapted to Professional (Clinic):
> "We maintain direct sourcing relationships with farms in Coorg and Chikmagalur, ensuring every cup meets our rigorous quality standards for origin and freshness."

### Adapted to Confident (Coaching Center):
> "Every cup starts with beans sourced directly from Coorg and Chikmagalur. No shortcuts, no blends, no compromises — just coffee done right."

---

## Usage Notes

This prompt is a **post-processing tool**. The typical workflow is:
1. Generate copy using `homepage_hero.md` or `services_page.md` with tone = friendly
2. If the client needs a different tone, run the output through this adapter
3. Compare both versions and pick the best fit

This avoids regenerating from scratch and ensures consistency across tone variants.
