
## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans:--- getElementById() : 
Selects an element by its id and returns a single element.Since id is unique name in the page, It's the fastest method to get a dedicated element.

getElementsByClassName() :
It selects elements by it's class name. It returns many items by the same class name.

querySelector() :
Selects the first element that matches a CSS selector.
it's works with any CSS selector (id, class, tag, or complex selector)

querySelectorAll() :
Selects all elements that match a CSS selector


### 2. How do you create and insert a new element into the DOM?
ans:--- For creating a new element we have to use document.createElement() and also we have to give it a parameter so the browser can understand what type of html element we want to creat.
Then we can add content like inner HTML or text by using innerHTML or textContent tags. or we can just left it blank.
then we can insert the element into the DOM by using appendChild()tag. 

### 3. What is Event Bubbling? And how does it work?
ans:---When we click on an element the event moves to its parent elements.
When we click the element the event starts to work and it goes to it's parent then the parent gos to it's own parent. this process keeps working until the actual main parent like html tag is reached.
this automatic propagation from child to parent is called event bubbling.

### 4. What is Event Delegation in JavaScript? Why is it useful?

ans:--- Event delegation is a technique where we add an event to the parent element instead of it's child elements . Parent element handles all the events of its children so we dont have to add events on the child element.For that it helps to reduce memory and decrease site loading time. most importantly if any new child is being added we dont have to add any event listeners on it. The parent can handle it easly.Also it gives a cleaner code which means easier to manage.

### 5. What is the difference between preventDefault() and stopPropagation() methods?
ans:--- PreventDefault() :
 In short it stops the default browser action.
for example every HTML element has some default behavior, if we click on a link normally it will opens but if we use preventDEfault() tag it will not open .
It will stop what the browser normally dose.

stopPropagation() :
 It stops the event from moving or bubbling to the parent element. if we use the tag and commit an event the event will not go to the parent element.

Main diffrence is :

preventDefault() = stops browser's default behavior.

stopPropagation() = Stops event from bubbling to parent.
                     ---end---
















































































## Functionalities Part
- Clicking on Interview button on the card 
    - will add the data on Interview tab 
    - add the status as Interview.
    - Will increase the the count of interview in Dashboard 

- Clicking on Rejected button on the card 
    - will add the data on Rejected tab 
    - add the status as Rejected.
    - Will increase the the count of Rejected in Dashboard

- Enable toggle between Interview and rejected button(you can select Rejected button after clicking on Interview, and Interview button after clicking on Rejected button). It will change the tab and dashboard count also. It will show tab wise jobs count on the right.

---