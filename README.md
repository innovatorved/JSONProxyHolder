# JSONProxyHolder project3 on 100days-of-projects (by CODEDAMN) 

## Project Introduction

Welcome to the JSONProxyHolder backend project on codedamn. In this project, you're supposed to work with a popular JSON placeholder API - https://jsonplaceholder.typicode.com/guide/

## First Requirement

In your codedamn playground, you can see a backend server running as a Node.js script. Your task for this project is to proxy all of your backend requests recieved to the jsonplaceholder.typicode.com endpoint.

### Examples

Let's assume your deployed URL on codedamn playground is https://something.codedamn.app (You can find this URL inside the "Settings" tab on the left)

Then, the following proxying should take place. The API calls made to your URL should return data from jsonplaceholder.typicode.com

```
GET https://something.codedamn.app/posts -> GET https://jsonplaceholder.typicode.com/posts
```

```
GET https://something.codedamn.app/posts/1 -> GET https://jsonplaceholder.typicode.com/posts/1
```

```
GET https://something.codedamn.app/posts?userId=1 -> GET https://jsonplaceholder.typicode.com/posts?userId=1
```

...and so on

In a nutshell, all of the data requested from your endpoint should further be requested from jsonplaceholder.typicode.com.

## Second Requirement

You also have to add a custom header in every response you send. Your custom header should look like the following:

```
x-codedamn-project: jsonproxyholder
```

## Third Requirement

You have to use this backend API to build a simple React app that does the following:

1. Lists all posts using the API endpoint (/posts)
2. On clicking the post title, it should show the post body and comments
3. For post body, use the endpoint (/posts/:id) and for post comments use the endpoint (/posts/:id/comments)

There's a simple web interface provided at the right to help you start. All the best.
