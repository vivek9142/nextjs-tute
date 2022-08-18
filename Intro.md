## Step-01 Initial Setup
index.js is a special file name,such that Next.js will
not use the file name as a path then,but instead will load the index.js component as the main component for slash nothing.

So, here in this case, we have index.js and this file would be loaded if we just visit our domain and then we have no other path after our domain.

But what goes into this index.js file?
Well, as mentioned before, just a regular React component.
There is nothing special to that.

## Step-02 Adding Dynamic Paths & Routes
Now we can add more and more pages by adding more and more files here in Pages directory.But at some point you might want to structure your pages in a different way, or you need some deeply
nested path consisting of multiple segments.
In such cases, you can add folders to the pages folder.
so in order to do this we can make portfolio page(for e.g) and inside it we can make index.js file and declare its component there so it will display portfolio route page.Therefore, this is an equivalent to creating a file named portfolio JS one level above that folder.

Now Sub folders don't just exist so that we have an alternative to a file named about though. Instead we need them if we want to create paths that consists of multiple segments, of for example, in portfolio if we want to have let's say a list JS file
so that we can have a URL of /portfolio/list,then there is no way around having a sub folder because in there we can now create our List Page,and return our JSX code here, The List Page.

of course in general, having some kind of structure in the pages folder and working with sub folders for grouping files together isn't a bad idea in general,because of course that allows you
to keep your files more organized,especially if you're working on websites with dozens or hundreds of pages.

## Step-3
maybe you all remember that last use case down there with the square brackets. This can be used to have a dynamic path
with a dynamic path segment.And that's another key feature Next.js offers to us.That's exactly where we would create

such a dynamic route component. And here the naming pattern is always exactly the same, you use square brackets,
and then of course still .js because it's still a JavaScript file.

And inside of the square brackets, any identifier of your choice.
it doesn't have to be ID, it just very often will be some kind of ID, but that's up to you, it could, for example, be project ID.,those tell Next.js that here we don't wanna have
slash portfolio, slash project ID, but that instead this is a placeholder for any kind of value which we then will have access
to in the component to load different kinds of data,

if we use slash one instead of slash something, or slash hello,
so whatever value we enter here, this is valid because here we defined that we wanna accept any value that we just have a placeholder here and now we're filling in that concrete value for that placeholder. Please also notice though, that slash list

still loads the list page, since Next.js is smart and checks your other files as well.So if it sees that a value could be treated as a value for this placeholder, it all checks if you maybe have a more concrete file for that exact value.

So for a slash list after slash portfolio, it sees that there is a list file in the portfolio folderand it prioritize a that file over this dynamic file.And that's a great behavior,because it means that you can have static predefined route page files,
next to dynamic ones like this one.But what can we now do with that file?It's a placeholder,but what's the real benefit we get
by using such a placeholder.As I said a common scenario
for using such a dynamic page would be,that you have the same kind of page that should be loaded for different pieces of data,
different products in our shop or different blog posts in a blog,so we're gonna use that link route to seee if the data present is in so it will use for itsown calculations,

## step-04 - Extracting Dynamic Path Segment Data (Dynamic Routes)
import router from nextjs/router and use it to declare hook and use it afterwards. so we can get the query,url-parameter.
This query property on the router gives us access to the concrete data that is encoded in the URL.

we can use this router query property to get access to the concrete value encoded in the URL.And if this would be the ID of some database object,we could then send a request to some backend server to fetch the piece of data with an ID of
router dot query dot project ID in this case. That's how we could use this encoded value.

## step-05- Building Nested Dynamic Routes & Paths
Now, when working with such dynamic routes, such dynamic paths, there are two interesting variations or extensions of that concept you should be aware of.One variation or extension is that you can,of course also have nested dynamic paths.

So let's say besides portfolio slash projectid,
we also have another folder,the clients folder let's say
and we wanna construct a nested path here,where we have dynamic client id,which can be different for the different clients.
And then for every client id, we have some static pages
like a list of all projects we did with that client
but then also dynamic nested paths for the individual projects we did with a client.

But then I wanna have a dynamic path, but a dynamic path with nested paths. So not a file named square bracket something js
but instead we can have a sub folder,which also has this square bracket name.So here we could then have the id of a client

but now that's not a file,that's a folder with this special name.
And then here again, we could have a index.js file and that could, for example, list all the Projects or all the Client Projects.so with that,I added a bunch of new folders and files
and the interesting thing of course is that we have this dynamic folder name.

How could we now reach those different files and pages?
Well we can enter slash clients to reach this index.js file and there's nothing special about this.If I enter slash clients, I see The Clients Page,which is the output of this functional component.But now we have this dynamic id segment folder
and in there we have an index.js file as well,

we can, again import useRouter And simply get access to the router by calling useRouter
and then logging router.query.And if we do that,
we see that we did do get an object with two properties now
because I am logging this inner component that is loaded for a file name with a dynamic segment,which is inside of a folder with a dynamic segment.And you always get access to all the concrete values for the different placeholders that might've been
part of the overall path for which this component was loaded.

## Step-06 - Adding Catch-All Routes
I did mention two extensions or variations of this concept here.
And the nested dynamic segments that was one important aspect of routing in Next.js when it comes to dynamic routes.

The other important variation or extension is that you can also define collect all routes or catch all routes, 

Let's say, we also have a blog sub folder and now we might have different ways of loading blog posts. For example, we could get just the slug, just the idea of a blog post.

So therefore, of course, in there we could add a file named [id].js. But maybe we also want to support other URLs for loading a single blog post. 
For example, we want a support /blog/the-id-of-a-post
but maybe we also want to support /blog/2020/12/the-idea-of-a-post.
To only search for this post if it was released in December 2020.
Or we just want to load blog/2020/12 to load all blog posts for that specific month in that year.So, we have different URL formats which we want to support,and maybe we want to support them all with the same component, so no matter what the path is
and how many segments it has we always want to load the same component.And that's what we can do with such a catch all route.

Instead of just using square brackets, and then any identifier of our choice
we can add a syntax here or a special notation here,which you might know from JavaScript.
We can add three dots here,like the spread operator in JavaScript.
so on runnning router.query on nested route will give tyhe arrray of nested routes sed in the url.we defined this as a catch all path with the three dots here, next.js does catch anything
after blog because we're defining this in the blog folder Anything after blog is caught by this page component and is made available as an array through that slug property
on that query object in the router object.

## step -07 - Navigating with the "Link" Component
Now, up to this point, we have all those different pages and components, but we can only navigate between them by manually changing the URL.And that's of course not very realistic.
In reality, we typically wanna navigate through links or programmatically when some action completed and therefore that what we're going to have a look at right now and for this let's go to our main index JS file.

So directly in the pages folder,this homepage component here,there, let's say we now also wanna add a bunch of links so we can add a unordered list component with a couple of lists items.And then in every list item, we want to have a link to some of those pages we created here.

we can go with a tag but here it's has disadvantages. It is that with such a standard link, we in the end send a brand new HTTP request to load this new page, which means that any application state we might have when our running React app would be lost.
If we have some App-wide state, which is stored with React context or Redux,it would be lost since we send a brand new request and we get a brand new HTML page.
And that's not really the idea of building a React app
no matter if you're using Next.js or not,

so we can use next link component here and it cut down makingany requests to the server and be a SPA. it also automatically pre fetches any data off the page we might navigate to as soon as we hover over the link and so on.
we can also set a couple of other props of, for example
we can set a replace prop to not push this new page but replace the current page with it.So that we can't go back that can sometimes be useful.

## Step-08 - navigate to dynamic pages
So to navigate to dynamic pages,we can still use this link component,
which we import from next/link.We use it just as before, so here, in clients index.js file we will use dynamic routes nav.

## Step-09 - Navigating Programmatically
Sometimes you need to navigate programmatically because of forum, Bras submitted, for example
and I want to show this as well. So let's say on the page for a specific client
we now also have a button.And when this button is pressed we want to load project a for this client.

Now we could absolutely use a link here.If we just want to have a clickable thing
that navigates somewhere else I'm just using this here, this button here to
show how you could navigate imperatively typically of course you would not do that to replace a link but to navigate In code when some action completed when you parsed a forum that was submitted, for example but here to learn how imperative navigation works a button will do.
So we have this button and when the button is clicked, we want to navigate away.
So therefore, first of all we can define a number function here in this component function.
So a nested function which should be triggered when the button is clicked.

go to clients/[id]/index folder

## Step-10 - Adding custom 404 page
Now, of course you might want to ship your own 404 page with your own content and style.And Next.js makes that easy.You just need to add a special file in your pages folder.So on the root level of your pages folder, next to this underscore app JS file and this index JS file,and here, in this folder,

we now want to add a 404 dot JS file and it must be named like this because Next.js will then always load the component returned
by this file or export it from this file when a 404 error arises.