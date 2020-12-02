


async function update() {           // easiest way to fetch api info from websites, need an 'async function' to work with promises
    const response = await fetch('https://fullstack-academy-api.vercel.app/posts');
    const data = await response.json();
    return data;                   // used to output variable 'data' after function executes
}

update().then(data => {
    data; 
    console.log(data)
    
    let output = "";
    let output2 = "";
    for (i in data) {
        output += "<p class = 'quoteTitle'>" + data[i].title + "</p>" + "<p class = 'quoteConten'>" + data[i].content + "</p>" + "<br>" + "<br>";
        document.getElementById("title").innerHTML = output + "<br>";
      }
      //document.getElementById("title").innerHTML = output;
      
  });


  async function status() {
    const response = await fetch('https://fullstack-academy-api.vercel.app/posts');
    
    response.ok;     // => false
    response.status; // => 404
  
    const text = await response.status;
    return text;
  }
  
  status().then(text => {
    text; 
    console.log(text)
    document.getElementById("error").innerHTML = "Status: " + text;
    if (text = "200") {
        document.getElementById("error").style.color = "#228A08";
    } else {
        document.getElementById("error").style.color = "#E1341E";
    }
  });


