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

