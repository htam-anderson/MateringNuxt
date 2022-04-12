# Changelog

All notable changes to this project will be documented in this file.
The format is referred to [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
Custom Types of changes:

- Learn
- Review

## [2022-04-11]

### Learned

#### Lecture 1 - Getting Start

<details>
  <summary>Expand!</summary>
  
- Concept of original webpage
- Concept of Single Page Application (SPA)
- Concept of Universal Appication
- Prolem of original SPA and the rescure of NuxtJS

</details>

#### Lecture 2 - Pages and Routing

<details>
  <summary>Expand!</summary>
  
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

</details>

#### Lecture 3 - Working with Google Maps

<details>
  <summary>Expand!</summary>

- a. Creating a Google Account
- b. Creating a Google Cloud Platform Account
- c. Adding a Map To The Property Page
  - Adding a API from google map with the head() like Lecture 2 in b section
  - Concept of [defer](https://www.w3schools.com/tags/att_script_defer.asp)
  - Using mounted hook to handle show map on client (note: mounted in Nuxt is just running on the client side)
- d. Problem 1 - Scripts and Single Page Apps
  - The problem happen with those 3rd party library doesn't support SPA natively
  - In our case, it's google map library we added in the scripts
  - For the property page by its own its work fine, but when we go back to home page and click another property it will show error
  - The resone behind this is, for some library they will load another inner library they need to be operated normally
  - So the nuxt cache will let us know that there are an things that load once again in page
  - Then we remember the `callback=initMap` in the query parameters of google map api earlier, to do that we need to have a function `initMap`
  - We try to use window object in client side to set the page is load but it will come to another issue is `initMap not found` then we try to solve it like the comment in source code
  - Concept of skip in `head()`
  - *NOTE:* PLEASE BE CAREFUL WHEN USING 3RD PARTY LIBRARY, SCINE WE WILL FACING THIS ISSUE
- e. Problem 2 - Network Latency
  - For modern network speed, so far so good for this app, but things is not perfect in case of some where have 56kbs speed of internet => facing network latency problem
  - The problem is with the low speed internet, the page will be load very slow, we can try it with the software called [Charles Proxy](https://www.charlesproxy.com/)
  - The reasone behind this is we using defer attribute when loading google library, the nuxt application source is load at the end of the page, so it have to wait for the google library load and executing first
  - So we will change it to async
  - But when it async, then the page is running very fast, lead to the source that using google library in `mounted()` cannot executed since the library not finish loading and executing yet
  - We will create a method called `showMap()` and move the code from `mounted()` to `methods`
  - To be involke `showMap()` we need to use `setInterval()` in `mounted()`
  - Now the google library can be loaded and finished executing anytime except infect the whole page
- f. Solution - Plugins To The Rescue
  - Scine we have a bunch of code just for hanling showing google map on our page, we need the place to put all of that code to make the component source look nice and clean, that where plugin came for the rescure
  - Create a plugins foleder, under that the file name have convention for nuxt to support us:
    - File name contain .client.js : Will let nuxt only run in browser
    - File name contain .server.js : Will let nuxt only run in server
    - File name contain .neither.js : Will let nuxt run in both
  - Now we will migrate peace by peace to the plugin file we created `maps.client.js`
  - After folow the process of creating plugin we will need to add the plugin to `nuxt.config.js` and call the function `showMap()` from plugin in `mounted()`
  - *NOTE:* USING `maps` AS A PLUGIN NAME INSTEAD OF `googleMaps` BECAUSE OF WITH THE GENERIC NAME, WE DON'T NEED TO MODIFY ANYTHING ELSE BESIDE THE PLUGIN CODE IF WE CHANGE TO USE ANOTHER THING RATHER THAN GOOGLE MAP

</details>
