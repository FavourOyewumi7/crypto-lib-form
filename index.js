async function postData(url = '', data = {}) {
    
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache',
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    });
    return response.json(); 
  };

let button = document.getElementById('button');


let names =  document.getElementById('name').value;
let title = document.getElementById('title').value;
let resource = document.getElementById('resource').value;
let description = document.getElementById('description').value;
let link = document.getElementById('link').value;

data = {
    'name': names,
    'title': title,
    'resource': resource,
    'description': description,
    'link': link

}

let print =()=>{
    console.log('omo')
    console.log(data);
}


//Name
 // Title
// Resource
// Description
// Link

/*let inputs = [...document.querySelectorAll('input')];
let names =  inputs[0].value;
let email =inputs[1].value;
let resource = inputs[2].value;
let description =  inputs[3].value;
let link = inputs[4].value;*/


