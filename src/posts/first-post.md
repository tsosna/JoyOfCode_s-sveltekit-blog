---
title: first post
description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, eligendi harum officia expedita eius distinctio!
date: '2023-04-14'
categories: 
  - svelteKit
  - svelte
published: true
list: [1, 2, 3, 4, "boo"]
---


## Markdown

Hej friends 👍🏼

```ts
function greet (name: string) {
    console.log(`Hej ${name}`)
}
```

List:
- item 1
- item 2

Paragraph

<ul>
{#each list as item}
  <li>{item}</li>
{/each}
</ul>