# Changelog

All notable changes to this project will be documented in this file.
The format is referred to [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
Custom Types of changes:

- Learn
- Review

## [2022-04-11]

### Learned

#### Lecture 1 - Getting Start

- Concept of original webpage
- Concept of Single Page Application (SPA)
- Concept of Universal Appication
- Prolem of original SPA and the rescure of NuxtJS

#### Lecture 2 - Pages and Routing

- a. Creating Our Homepage
  - Concept of components
  - Pass data from parrent to children through "prop"
  - Auto import by using nuxt.conifg.js
- b. Adding Meta Tags and Other Elemenents to the HTML Head Tag
  - Modify nuxt.config.js to add meta tag by Nuxt provided
  - Same concept to body and another element, refer to [Meta Tags and SEO](https://nuxtjs.org/docs/features/meta-tags-seo/)
- c. How Does Routing in Nuxt Work?
  - Based ont the structure in pages and the name of files to binding paramter
  - Variable $route from Nuxt
  - Using the created method from Vue Life Cycle
- d. Creating the Property Page
  - Create a property page ready for link from homepage
  - Put detail information and apply lecture 2b to load its title
  - Create an static folder for a static data
  - Under the static folder will be the relative path folder using for static path in html
- e. Nuxt Link
  - To be able to navigate redirect to a sub page by link there are several things to notice:
    - Using `<a>` will lead to the page have to reload all the elements and data
    - Using `<router-link>` provide by vue will handle it under the vue router, prevent the full load of `<a>`
    - Using `<nuxt-link>` similar with `<router-link>` but the sub page will be load before hand
    - Using `<nuxt-link>` with attribute no-prefetch will help to prevent this, in case of reducing the load since the application have haevy load in the first page
- f. Disabling Prefetch Globally
  - Removing the `no-prefetch` in the homepage and adding config for it in nuxt.config.js by `route:{prefecthLinks: false}`
  - If you want to `prefecth` the subpage again, you can add the attributes `prefecth` bage to the homepage
  - Note: depend on the strategy of optimiztion then you can define when to prefetch or not to
- g. Creating Page Layouts
  - Create folder layout for structure the application view
  - The tag `<nuxt/>` will help us with the feature to layout our web
  - Create a default.vue for the default layout with header is grey color
  - Clone a default.vue to red.vue for customize header with red color
  - In the sub page, we just nee to add `layout: "red",` to the export default to make it change from Homepage and sub page
