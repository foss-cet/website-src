---
title: "Subpanel Recruitment Call"
id: "subpanel_call_2026"
description: "Apply to join a subpanel of FOSS CET."
date: 2026-09-25
form:
  submit_text: "Submit Application"
  fields:
    - id: "name"
      label: "Name"
      type: "text"
      required: true

    - id: "email"
      label: "Email Address (We'll send updates here!)"
      type: "email"
      required: true

    - id: "mobile"
      label: "Mobile Number"
      type: "tel"
      required: true

    - id: "year"
      label: "Year"
      type: "select"
      options:
        - '1'
        - '2'
        - '3'
        - '4'
      required: true

    - id: "dept"
      label: "Department and Batch (eg: CSE B2)"
      type: "text"
      required: true

    - id: "subpanel"
      label: "Which subpanel are you applying to?"
      type: "select"
      options:
        - 'Documentation'
        - 'Content'
        - 'Design'
        - 'Project'
        - 'Media'
        - 'Student Relations'
      required: true

    - id: "doc_why"
      label: "Why do you want to join the Documentation Subpanel of FOSS CET?"
      type: "textarea"
      required: true
      show_if:
        field: "subpanel"
        equals: "Documentation"

    - id: "doc_tools"
      label: "What kind of documentation tools are you familiar with?"
      type: "textarea"
      required: true
      show_if:
        field: "subpanel"
        equals: "Documentation"

    - id: "doc_samples"
      label: "Is there anything you've written or documented that you would like us to see? (optional)"
      type: "textarea"
      required: false
      show_if:
        field: "subpanel"
        equals: "Documentation"

    - id: "content_fulfilment"
      label: "Do you think fulfilment is a necessity in life?"
      type: "textarea"
      required: true
      show_if:
        field: "subpanel"
        equals: "Content"

    - id: "content_ai"
      label: "How would you quantify the influence of AI used in a creative work objectively?"
      type: "textarea"
      required: true
      show_if:
        field: "subpanel"
        equals: "Content"

    - id: "content_grammar"
      label: '"Tung tung sahur was fighting tralalero tralala" - what is wrong with this sentence?'
      type: "textarea"
      required: true
      show_if:
        field: "subpanel"
        equals: "Content"

    - id: "design_why"
      label: "Why would you like to join the Design Team subpanel?"
      type: "textarea"
      required: true
      show_if:
        field: "subpanel"
        equals: "Design"

    - id: "design_tools"
      label: "What open-source design software are you familiar with, and how proficient would you say you are with each?"
      type: "textarea"
      required: true
      show_if:
        field: "subpanel"
        equals: "Design"

    - id: "design_work"
      label: "Show us some of your work (mandatory)"
      type: "url"
      required: true
      show_if:
        field: "subpanel"
        equals: "Design"

    - id: "project_stack"
      label: "What tech stacks are you most proficient in? (can include python, web, android, etc)"
      type: "textarea"
      required: true
      show_if:
        field: "subpanel"
        equals: "Project"

    - id: "project_git_scale"
      label: "On a scale of 1 to 10, how proficient are you with Git?"
      type: "number"
      required: true
      show_if:
        field: "subpanel"
        equals: "Project"

    - id: "project_github"
      label: "GitHub profile URL (mandatory)"
      type: "url"
      required: true
      show_if:
        field: "subpanel"
        equals: "Project"

    - id: "project_motivation"
      label: "A project has a great idea, but no one on the team is motivated to work on it. What would you do?"
      type: "textarea"
      required: true
      show_if:
        field: "subpanel"
        equals: "Project"

    - id: "media_bad"
      label: "What is one thing you think most college club social-media pages do badly?"
      type: "textarea"
      required: true
      show_if:
        field: "subpanel"
        equals: "Media"

    - id: "media_idea"
      label: "Give us one idea to make FOSSCET's Instagram more engaging."
      type: "textarea"
      required: true
      show_if:
        field: "subpanel"
        equals: "Media"

    - id: "media_tools"
      label: "What tools/software are you comfortable with?"
      type: "textarea"
      required: true
      show_if:
        field: "subpanel"
        equals: "Media"

    - id: "sr_gap"
      label: "What is the gap you saw in how surveys are conducted before and after events for various clubs across CET, including FOSSCET?"
      type: "textarea"
      required: true
      show_if:
        field: "subpanel"
        equals: "Student Relations"

    - id: "sr_bridge"
      label: "How do you think you can bridge this gap?"
      type: "textarea"
      required: true
      show_if:
        field: "subpanel"
        equals: "Student Relations"

    - id: "sr_automation"
      label: "Ideas on automating this pipeline (no need for anything technical)"
      type: "textarea"
      required: true
      show_if:
        field: "subpanel"
        equals: "Student Relations"

    - id: "sr_feedback"
      label: "What in your opinion is the most counter-intuitive manner of collecting and managing feedback in today's age?"
      type: "textarea"
      required: true
      show_if:
        field: "subpanel"
        equals: "Student Relations"
---

Fill this out to apply for a subpanel of FOSS CET. Pick your subpanel above — the questions for it will appear below.

This draft is autosaved as you type. Remember to submit when you're done!
