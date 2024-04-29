This is Namaste React Course repository by Akshay Saini ! 
#Namaste Food Ordering App


/**
Header
 - Logo
 - nav-items
Body
 - Search
 - res-container
  - res-card
   - Img
   - Name of res, start rating, cuisine, delivery time etc 
 */
Virtual Dom :- Oobject representation of this jsx

Body.js
 -Search
  -searchbox
   we use onchange in searchBox because without using onChange (it is an event in js) we are not able to type something in the search box because we have bind this search box with a use state (searchtext )and initially this usestate is an empty string therefore it is not able to take any input .
   That's why use onChange function will update my searchtext to new value.

   IMP:- Everytime we type a letter in our search box our whole body component got rendered again
   so basically if I am searching Pizza in search box than my whole body componenet got re-rendered again and again 5 times.
   (It is not visible since react is doing it so fast !)

   in other words
   whenever our state variable updates react triggers a recoinciliation cycle (re renders the component)
   <!-- This recoinciliation cycle algo is making react faster. -->

  How does React do this?
   React finds the diff btw older virtual dom and new virtual dom and then renders the changed version.

   **React is re-rendring the whole body componenet but it only updates the input value inside the dom (beacause Dom manipulation is very expensive) that's how react is efficient.**
   

   <!-- useEffect is a Hook  -->
   which takes two arguments :-
    1.First one is an call back function and
    2.Second one is an optional argument - [array dependency] ,
    if we do not keep the second argument than this useeffect will be called after every rendering which we don,t want .
     we only want our useeffect to render once therefore we will give an empty array as second argument

     useEffect(()=>
     {

     },[]);


Loading and Mounting , rendered are the same thing :- showing component onto the webpage.


  1.Chunking
  2.Code Splitting
  3.Dynamic Bundling
  4.Lazy Loading
  5.On demand Loading
  6.Dynamic Import
  **All are same**
  -When we load our app our home page is load but our grocery app will not load it will only load when we will click on the grocery link.
  This is known as lazy loading.

  How this will be done ?
  -Our bundler parcel bundles our whole code and send it to the browser but when we are making large scale project like, our this project we have our res app, and inside that we have our another whole grocery app , therefore it is not good that we should bind our whole code together therefore we will bundled our app differently.
  **Therefore initially when we will load our sitw it will have only res ocde and does not have grocery code and when we will click out grocery link then we will have our grocery code.**

We donot import directly to our App.js this grocery 
we will import using lazy function:-
const Grocery = lazy(() => import("./components/Grocery"));

and there is a little  time between we click the grocery link and this grocery component will load  so meanwhile this will show error therefore we use suspense with fallback .
   
 element: <Suspense fallback={<h1>Loading......</h1>}><Grocery /></Suspense>,


 //Higher Order component is a Function taht takes a component and returns a component. 
      It takes a component , enhoances that conponent and then returns back a new enhanced component.
