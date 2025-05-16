# Blog Front-end

This Project is inspirated by this [project](https://www.theodinproject.com/lessons/node-path-nodejs-blog-api).
This is the front-end stack, you can find the back-end [here](https://github.com/nicolanapa/blog-api/).
<br />
<br />
It's divided into two applications:

-   A normal Blog made to be viewed and where you can comment
-   An admin Blog where you can create posts (as a blogAuthor) and manage various things such as Posts, Comments or Users

Some live examples can be found hosted here:

-   [blog-api](https://blog-api-u57b.onrender.com/) (back-end repo [blog-api](https://github.com/nicolanapa/blog-api))
-   [normalUsage](https://blog-frontend-normalusage.netlify.app/) Subdirectory
-   [blogAdmin](https://blog-frontend-blogadmin.netlify.app/) Subdirectory

To be able to try the blogAdmin application and create a blogAuthor type of User here's the BLOG_AUTHOR_SECRET_KEY secret variable you can use:

> hUqDmZMZXZ80LWHqW4arhYbllNV7p^aKoQtVRyo&ugqlW5yhP^zUZ&$c9LYI$9wN

## Secret .env Variables

In this Project the .env file has to be stored at the root of each subdirectory (**normalUsage/.env** and **blogAdmin/.end**) if you want both applications to correctly work.

An Example (a development environment):

```
VITE_PORT=3000
VITE_HOSTNAME=localhost:3000
VITE_FULL_HOSTNAME=http://localhost:3000
```

```
VITE_PORT   -> The port from the API (blog-api)
VITE_HOSTNAME    -> The address / hostname and port of the API
VITE_FULL_HOSTNAME    -> The full address of the API including the protocol used
```
