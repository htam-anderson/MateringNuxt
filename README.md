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

| Section  | Title  | Learned Descriptions                                                                                                                                                     | Notes  |
|--------- |------- |------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |------- |
| All      | All    | - Concept of original webpage<br>- Concept of Single Page Application (SPA)<br>- Concept of Universal Application<br>- Proplem of original SPA and the rescue of NuxtJS  |        |

</details>

#### Lecture 2 - Pages and Routing

<details>
  <summary>Expand!</summary>
  
| Section | Title                                                      | Learned Descriptions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Notes |
|---------|------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|
| a       | Creating Our Homepage                                      | - Concept of components<br>- Pass data from parrent to children through "prop"<br>- Auto import by using nuxt.conifg.js                                                                                                                                                                                                                                                                                                                                                                                                                                               |       |
| b       | Adding Meta Tags and Other Elemenents to the HTML Head Tag | - Modify nuxt.config.js to add meta tag by Nuxt provided<br>- Same concept to body and another element, refer to [Meta Tags and SEO](https://nuxtjs.org/docs/features/meta-tags-seo/)                                                                                                                                                                                                                                                                                                                                                                                 |       |
| c       | How Does Routing in Nuxt Work?                             | - Based ont the structure in pages and the name of files to binding paramter<br>- Variable $route from Nuxt<br>- Using the created method from Vue Life Cycle                                                                                                                                                                                                                                                                                                                                                                                                         |       |
| d       | Creating the Property Page                                 | - Create a property page ready for link from homepage<br>- Put detail information and apply lecture 2b to load its title<br>- Create an static folder for a static data<br>- Under the static folder will be the relative path folder using for static path in html                                                                                                                                                                                                                                                                                                   |       |
| e       | Nuxt Link                                                  | - To be able to navigate redirect to a sub page by link there are several things to notice:<br>  - Using `<a>` will lead to the page have to reload all the elements and data<br>  - Using `<router-link>` provide by vue will handle it under the vue router, prevent the full load of `<a>`<br>  - Using `<nuxt-link>` similar with `<router-link>` but the sub page will be load before hand<br>  - Using `<nuxt-link>` with attribute no-prefetch will help to prevent this, in case of reducing the load since the application have haevy load in the first page |       |
| f       | Disabling Prefetch Globally                                | - Removing the `no-prefetch` in the homepage and adding config for it in nuxt.config.js by `route:{prefecthLinks: false}`<br>- If you want to `prefecth` the subpage again, you can add the attributes `prefecth` bage to the homepage<br>- Note: depend on the strategy of optimiztion then you can define when to prefetch or not to                                                                                                                                                                                                                                |       |
| g       | Creating Page Layouts                                      | - Create folder layout for structure the application view<br>- The tag `<nuxt/>` will help us with the feature to layout our web<br>- Create a default.vue for the default layout with header is grey color<br>- Clone a default.vue to red.vue for customize header with red color<br>- In the sub page, we just nee to add `layout: "red",` to the export default to make it change from Homepage and sub page                                                                                                                                                      |       |

</details>

## [2022-04-12]

### Learned

#### Lecture 3 - Working with Google Maps

<details>
  <summary>Expand!</summary>

| Section | Title                                    | Learned Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Notes                                                                                                                                                                                                                 |
|---------|------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| a       | Creating a Google Account                |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                       |
| b       | Creating a Google Cloud Platform Account |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |                                                                                                                                                                                                                       |
| c       | Adding a Map To The Property Page        | - Adding a API from google map with the head() like Lecture 2 in b section<br>- Concept of [defer](https://www.w3schools.com/tags/att_script_defer.asp)<br>- Using mounted hook to handle show map on client (note: mounted in Nuxt is just running on the client side)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                                                                                       |
| d       | Problem 1 - Scripts and Single Page Apps | - The problem happen with those 3rd party library doesn't support SPA natively<br>- In our case, it's google map library we added in the scripts<br>- For the property page by its own its work fine, but when we go back to home page and click another property it will show error<br>- The resone behind this is, for some library they will load another inner library they need to be operated normally<br>- So the nuxt cache will let us know that there are an things that load once again in page<br>- Then we remember the `callback=initMap` in the query parameters of google map api earlier, to do that we need to have a function `initMap`<br>- We try to use window object in client side to set the page is load but it will come to another issue is `initMap not found` then we try to solve it like the comment in source code<br>- Concept of skip in `head()`                                                                                                                                                                                                    | *NOTE:* PLEASE BE CAREFUL WHEN USING 3RD PARTY LIBRARY, SCINE WE WILL FACING THIS ISSUE                                                                                                                               |
| e       | Problem 2 - Network Latency              | - For modern network speed, so far so good for this app, but things is not perfect in case of some where have 56kbs speed of internet => facing network latency problem<br>- The problem is with the low speed internet, the page will be load very slow, we can try it with the software called [Charles Proxy](https://www.charlesproxy.com/)<br>- The reason behind this is we using defer attribute when loading google library, the nuxt application source is load at the end of the page, so it have to wait for the google library load and executing first<br>- So we will change it to async<br>- But when it async, then the page is running very fast, lead to the source that using google library in `mounted()` cannot executed since the library not finish loading and executing yet<br>- We will create a method called `showMap()` and move the code from `mounted()` to `methods`<br>- To be invoke `showMap()` we need to use `setInterval()` in `mounted()`<br>- Now the google library can be loaded and finished executing anytime except infect the whole page |                                                                                                                                                                                                                       |
| f       | Solution - Plugins To The Rescue         | - Scine we have a bunch of code just for hanling showing google map on our page, we need the place to put all of that code to make the component source look nice and clean, that where plugin came for the rescure<br>- Create a plugins foleder, under that the file name have convention for nuxt to support us:<br>+ File name contain .client.js : Will let nuxt only run in browser<br>+ File name contain .server.js : Will let nuxt only run in server<br>+ File name contain .neither.js : Will let nuxt run in both<br>- Now we will migrate peace by peace to the plugin file we created `maps.client.js`<br>- After folow the process of creating plugin we will need to add the plugin to `nuxt.config.js` and call the function `showMap()` from plugin in `mounted()`                                                                                                                                                                                                                                                                                                    | *NOTE:* USING `maps` AS A PLUGIN NAME INSTEAD OF `googleMaps` BECAUSE OF WITH THE GENERIC NAME, WE DON'T NEED TO MODIFY ANYTHING ELSE BESIDE THE PLUGIN CODE IF WE CHANGE TO USE ANOTHER THING RATHER THAN GOOGLE MAP |

</details>

## [2022-04-13]

### Learned

#### Lecture 4 - Working with APIs

<details>
  <summary>Expand!</summary>

| Section | Title                                | Learned Description                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Notes                                                                                                                                                                     |
|---------|--------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| a       | Creating an Algolia Account          | - Using [Algolia](https://www.algolia.com)                                                                                                                                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                           |
| b       | Using APIs on the Property Page      | - Replacing local data test by calling API from algolia<br>- Adding plugins to call APIs<br>- Using nuxt hook `asyncData()` to trigger the function call API                                                                                                                                                                                                                                                                                                                   | - `asyncData()` is the hook from NuxtJS provide to executing on server side                                                                                               |
| c       | Fetch & Polyfills                    | - In case of the older browser not support fetch, we need to using another thing to handle it<br>- In this case there are 3 options: <br>+ [node-fetch](https://github.com/node-fetch/node-fetch)<br>+ [unfetch](https://github.com/developit/unfetch)<br>+ [Polyfill.io](https://polyfill.io/)                                                                                                                                                                                | - We can skip it for now and comeback to it later if need                                                                                                                 |
| d       | Handling Errors                      | - In case of user modify the URL for not found records or the API die, we need to handle the error response from the API<br>- By itself, Nuxt already gave us the `error` function to handle the default error page, we can use it in `async asyncData({ params, $dataApi, error }) {`<br>- Fetch response already have a property `ok` to check whether the response with http code 200 or not<br>- Adapt it with the `error` from Nuxt we can have the simple error handling | - This is the started error handler method                                                                                                                                |
| e       | Customizing The Error Page           | - Of course, the default error page of Nuxt not really look friendly, so we need to customize the error page                                                                                                                                                                                                                                                                                                                                                                   | - For professional and helpful 404 page, we can refer to [Google's 404 Page Recommendations](https://developers.google.com/search/docs/advanced/crawling/soft-404-errors) |
| f       | Importing Reviews Into Algolia       | - We will import the json file in `data/reviews.json` to Algolia<br>- Then we will index it by using Algolia feature `facets`<br>- This means when we search or filtering the API whether it's 20 or 20 million records, we still get the exact records we need                                                                                                                                                                                                                |                                                                                                                                                                           |
| g       | Reviews Section on the Property Page | - After we create the new API path `reviews` by create index on Algolia, now is time for us to handle its data on page<br>- Create another function to call to API Post with Data from [query in Algolia API](https://www.algolia.com/doc/rest-api/search/#search-index-post)<br>- Adding another call API in our page and display it on template                                                                                                                              |                                                                                                                                                                           |
| h       | Reviews Data Formatting              | - Since we got the contents from the reviewers, but the raw data not really look good and friendly, such as Datetime and comment too long<br>- Then we will create a code to format those<br>- For date we will using pure JS Date with function [toLocaleDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)<br>- For the comments we will create an component to handle it business and display          | - We using `created` instead of `mounted` because we want it to run on the server side <br>- We can filter number of review by `hitsPerPage` from Algolia                 |
| i       | Host Section                         | - Same with section h, practice it                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                           |
| j       | Refactoring For Speed                | - Using [Promise.all()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) to prevent the waterfall await response in the page when calling API                                                                                                                                                                                                                                                                                     |                                                                                                                                                                           |
</details>