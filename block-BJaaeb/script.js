/*
Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)
*/

  // Your code goes here
  function createInputElm(label, type='text'){
   let  labelInput = document.createElement('label')
   let input=document.createElement('input')
   input.type =type
   let labelText  = document.createTextNode(`${label}:`)
   labelInput.append(labelText , input);
   return labelInput;
  }
  // TEST
 let l= createInputElm('Your name'); //<label>Your name: <input type="text"></label>
 console.log(l)
 let p= createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>
  console.log(p)
  // 2. Do the same thing as above using string literal like `<h1>Hello</h1>`
  
  // Your code goes here
  function createInputElm(label,type='text'){
    let html = `
    <label>${label}: <input type=${type}></label 
    `
    return html
  }
  // TEST
  console.log(createInputElm('Your name')); //<label>Your name: <input type="text"></label>
  console.log(createInputElm('Your age', 'number')); //<label>Your age: <input type="number"></label>
  
  // 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
  // the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
  // Your code goes here
 function createList(array=[]){
   let html = `
   <ul>
   ${array.map((elm)=>`<li>${elm}</li>`).join('')}
   <ul>;
   `
   return html
 }
  // TEST
  console.log(createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']));
  console.log(createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']));
  
  // 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
  // the html for single todo will look like given below
  /* 
  <ul>
    <li>
      <p>Learn DOM</p>
      <input type="checkbox" checked name="" id="">
      <span>X</span>
    </li>
  </ul>
  */
  
  // Your code goes here
 function createTodoList(array){
    let html =`
    <ul>
    ${array.map((elm)=>`
    <li>
    <p>${elm.name}</p>
    <input type="checkbox" ${elm.isDone ? "checked" : ""} name="" id="">
    <span>X</span>
     </li> `).join('')}
     </ul>
    `
    return html
 }
  // TEST
 console.log( createTodoList([
    { name: 'Learn DOM', isDone: false },
    { name: 'Learn JS', isDone: true },
  ]));
 console.log( createTodoList([
    { name: 'Learn DOM', isDone: false },
    { name: 'Learn React', isDone: true },
    { name: 'Learn JS', isDone: true },
  ]));