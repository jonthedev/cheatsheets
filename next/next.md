# NEXT JS

---

# Setup.

## Creating new project

```terminal
$ npx create-next-app <project-name>
# or
$ yarn create next-app <project-name>
```

## Create new project with TypeScript

```terminal
$ npx create-next-app --typescript <project-name>
# or
$ yarn create next-app --typescript <project-name>
```

## Run Project

```terminal
$ yarn dev
$ npm run dev
```

---

# Routing

---

# Pre-rendering & Data fetching

### What and why of pre-rendering

**Types of pre-rendering**

1. Static Generation
   - without data
   - with data
   - Incremental Static generation
   - dynamic parameters when fetching data
2. Server-side rendering
   - data fetching

**Client-side data fetching**

**Combining pre-rendering with client-side data fetching**

### React Js vs NextJs

By default, Next JS pre-renders every page in the application.

### What does pre-render mean?

NextJs generates HTML for each page in advance instead of having it all done by client-side JavaScript

### Why pre-render

1. pre-rendering improves performance

   - In a React app, you need to wait for the JavaScript to be executed.
   - Perhaps fetch data from an external API and then render the UI.
   - There is a wait time for the user.
   - With a pre-rendered page, he HTML is already generated and loads faster.

2. Pre-rendering helps with SEO
   - If you're building a blog or an e-commerce site, SEO is a concern.
   - With a React app, if the search engine hits your page, it only sees a div tag with id equal to root.
   - If search engine hits a pre-rendered page though, all th content is present in the source code which will help index that page.

Pre-rendering can result in better performance and SEO.

---

## Static Generation

A method of pre-rendering where the HTML pages are generated at build time.

The HTML with all the data that makes up the content of the web page are generated in advance when you build your application.

This can be done with and without external data.

Export _getStaticProps_ function for external data.

HTML, JavaScript and a JSON file are generated.

If you navigate directly to the page route, the HTML file is served.

If you navigate to the page route from a different route, the page is created client side using the JavaScript and JSON prefetched from the server.

**When to use?**

- Blog pages
- E-commerce product pages
- Documentation
- Marketing pages

NOTE - NextJs by default, without configuration, statically generates every page in our app when we build it for production. this allows the page to be cached by a CDN and indexed by a search engine.

### getStaticProps

1.

- Runs only on the server side
- The function will never run client-side
- The code you write inside getStaticProps won't even be included in the JS bundle that is sent to the browser.

2.

- You can write server-side code directly in _getStaticProps_
- Accessing the file system, using the fs module or querying a database can be done inside _getStaticProps_
- You also don't have to worry about including API keys in _getStaticProps_ as that won't make it to the browser.

3.

- _getStaticProps_ is allowed only in a page and cannot be run from a regular component file.
- It is used for pre-rendering and not client side data fetching

4.

- _getStaticProps_ should return an object and should contain a props key which is an object

5.

- _getStaticProps_ will run at build time
- During development, _getStaticProps_ runs on every request

### Link Pre-fetching

Any `<Link />` component in the viewport (initially or through scroll) will be prefetched by deafult (including the corresponding data) for pages using Static Generation.

When a page with _getStaticProps_ is pre-rendered at build time, in addition to the page HTML file, NextJs generates a JSON file holding the result of running _getStaticProps_

When you navigate to a page that's pre-rendered using _getStaticProps_, NextJs fetches the JSON file (pre-computed at build time) and uses it as the props to create the page component client-side.

Client side transitions will not call _getStaticProps_ as only the exported JSON is used

### getStaticPaths and fallback

- fallback: false
- fallback: true
- fallback: 'blocking

### fallback: false

1. The paths returned from _getStaticPaths_ will be rendered to HTML at build time by _getStaticProps_

2. If fallback is set to false, then any paths not returned by _getStaticPaths_ will result in a 404 page.

#### When to use?

The false value is most suitable if you have an application with a small number of paths to pre-render.

When new pages are not added often.

A blog site with a few articles is a good example for fallback set to false.

### fallback: true

1. The paths returned from _getStaticPaths_ will be rendered to HTML at build time by _getStaticProps_

2. The paths that have not been generated at build time will not result in a 404 page. Instead NextJs will serve a 'fallback' version of the page on the first request to such a path.

3. In the background, NextJs will statically generate the requested path HTML and JSON. This includes running _getStaticProps_.

4. When that's done, the browser receives the JSON for the generated path. This will be used to automatically render the page with the required props. From the user's perspective, the page will be swapped from the fallback page to the full page.

5. At the same time, NextJs keeps track of the new list of pre-rendered pages. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.

#### When to use?

The true value is most suitable if your app has a very large number of static pages that depend on data.

A large e-commerce site.

You want all the product pages to be pre-rendered but if you have a few thousand products, builds can take a really long time.

You may statically generate a small subset of products that are popular and use _fallback: true_ for the rest.

When someone requests a page that's not generated yet, the user will see the page with a loading indicator.

Shortly after, _getStaticProps_ finishes and the page will be rendered with the requested data. From then onwards, evetone who requests the same page will get the statically pre-rendered page.

### fallback: 'blocking'

1. The paths returned from _getStaticPaths_ will be rendered to HTML at build time by _getStaticProps_

2. The paths that have not been generated at build time will not result in a 404 page. Instead, on the first request, NextJs will render the page on the server and return the generated HTML.

3. When that's done, the browser receives the HTML for the generated path. From the user's perspective, it will transition from "the browser is requesting the page" to "the full page is loaded". There is no flash of loading/fallback state.

4. At the same time, NextJs keeps track of the new list of pre-rendered pages. Subsequent requests to the same path will serve the generated page, just like other pages pre-rendered at build time.

#### When ?

On a UX level, sometimes, people prefere the page to be loaded without a loading indicator if the wait time is a few milli seconds. This helps avoid the layout shift.

Some crawlers did not support JavaScript. The loading page would be rendered and then the full page would be loaded which was causing the problem.

### Incremental Static Regeneration (ISR)

there is a need to update only those pages which needed a change without having to rebuild the entire app.

With ISR, NextJs allows you to update static pages after you've built your application.

You can statically generate individual pages without needing to rebuild the entire site, effectively solving the issue of dealing with stale data.

#### How?

In the _getStaticProps_ function, apart from the props key, we can specify a _revalidate_ key.

The value for revalidate is the number of seconds after which a page re-generation can occur.

#### Re-generation takeaways

A re-generation is initiated only if a user makes a request after the _revalidate_ time.

If a user visits our product details page but there is no other user hitting that page the entire day, the re-generation does not happen.

_revalidate_ does not mean the page automatically re-generates every 10 seconds.

It simply denotes the time after which, if a user makes a request, a re-generation has to be initiated.

The re-generation can also fail and previously cached HTML could be served till the subsequent re-generations succeed.

---

## SERVER-SIDE RENDERING

SSR is a form of pre-rendering where the HTML is generated at request time.

SSR is required when you need to fetch data per request and also when you need to fetch personalized data keeping in mind SEO.

### getServerSideProps

1.  - _getServerSideProps_ runs only on the server side.
    - The function will never run client-side.
    - The code you write inside _getServerSideProps_ won't even be included in the JS bundle that is sent to the browser.

2.  - You can write server-side code directly in the _getServerSideProps_
    - Accessing the file system using the fs module or querying a database can be done inside _getServerSideProps_.
    - You also don't have to worry about including API keys in _getServerSideProps_ as that won't make it to the browser.

3.  - _getServerSideProps_ is allowed only in page and cannot be run from a regular component file.
    - It is used only for pre-rendering and not client-side data fetching.

4.  - _getServerSideProps_ should return an object and object should contain a props key which is an object.

5.  - _getServerSideProps_ will run at request time.

### Shallow Routing - routing without calling _getStaticProps/getServerSideProps_

---

# API ROUTES

You can write the FE code in React and also write APIs that can be called by the front end code.

API routes allow you to create RESTful endpoints as part of your NextJs application folder structure.

Within the pages folder, you need to create a folder called 'api'.

Within that 'api' folder, you can define all the APIs for your application.

You can add business logic without needing to write any additional custom server code and without having to configure any API routes.

NextJs gives you everything you need to write full-stack React + Node applications.

The API routing mechanism is similar to page based routing mechanism.

APIs are associated with a route based on their file name.

Every API route exports default function typically names as a handler function.

The handler function receives the _request_ and _response_ as parameters.

You can cater to different requests **(CRUD)** using _req.method_

**NOTE** you should NOT call our own API routes for pre-rendering content.

---

# STYLING

**Global** - In our application, we need to import CSS file within **'pages/\_app.js'**

**Component Level** - NextJs supports CSS Modules using a [name].module.css naming convention.

**SASS Support** - Install the _sass_ package.

**CSS-in-JS Solutions** - Inline styles and Styled Components

---

# MISC
