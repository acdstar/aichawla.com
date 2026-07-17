---
layout: page
title: Contact
eyebrow: "Get in touch"
lede: "For consulting, training, speaking, or media inquiries."
permalink: /contact/
---

<div class="contact-grid">
  <div>
    <!--
      GitHub Pages can't process form submissions on its own (it's static hosting).
      This form is wired to Formspree (free tier) — sign up at formspree.io,
      create a form, and replace YOUR_FORM_ID below with the ID they give you.
      Until then this form won't actually send anywhere.
    -->
    <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
      <div class="field">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="field">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="field">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="6" required></textarea>
      </div>
      <button type="submit" class="btn">Send message</button>
    </form>
  </div>

  <div>
    <ul class="contact-list">
      <li>
        <span class="k">Email</span>
        <span class="v"><a href="mailto:{{ site.email }}">{{ site.email }}</a></span>
      </li>
      <li>
        <span class="k">LinkedIn</span>
        <span class="v"><a href="{{ site.linkedin_url }}" target="_blank" rel="noopener">{{ site.linkedin_url }}</a></span>
      </li>
      <li>
        <span class="k">Based in</span>
        <span class="v">[Your city, country]</span>
      </li>
      <li>
        <span class="k">Available for</span>
        <span class="v">Consulting · Training · Speaking</span>
      </li>
    </ul>
  </div>
</div>
