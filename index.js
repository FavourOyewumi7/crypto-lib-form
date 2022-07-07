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
//Name
 // Title
// Resource
// Description
// Link


button.onclick(postData())