---
title: "Image Test Form"
id: "image_test"
description: "Test form for image uploads — submit a photo or screenshot."
date: 2026-09-09
form:
  submit_text: "Submit Image"
  fields:
    - id: "name"
      label: "Your Name"
      type: "text"
      required: true

    - id: "email"
      label: "Email Address"
      type: "email"
      required: true

    - id: "photo"
      label: "Photo / Screenshot"
      type: "file"
      accept: "image/*"
      required: true

    - id: "caption"
      label: "Caption"
      type: "textarea"

---

Uploads go to Cloudflare R2 and show up as thumbnails in the dashboard.