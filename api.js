// You can add your logic to geerate JSON
var customJSON = '[{"id":"1","name":"TEST_1"},{"id":"2","name":"TEST_2"},{"id":"3","name":"TEST_3"},{"id":"4","name":"TEST_4"},{"id":"5","name":"TEST_5"}]'; 

// Send a message for the outer page
window.top.postMessage(customJSON, '*');
//document.getElementById('jsonp').innerHTML = customJSON;

/*var str = "String";
console.log(JSON.stringify(str));

const params = new URLSearchParams(window.location.search);
const redirectLink = params.get("url");

// given url string
let url_str = window.location;

// create new URL object from the url string
let url = new URL(url_str);

// searchParams property is URLSearchParams object
let args = url.searchParams; 
console.log(JSON.stringify(args));*/

// loop to get all query parameters
/*(args.forEach(function(value, key) {
  console.log(key + '=' + value);
});

fetch(url_str)
.then(res => res.json())
.then(out =>
  console.log('Checkout this JSON! ', out))
.catch(err => console.log(err));*/

/*async function load() {
    let obj = await (await fetch(url_str)).json();
    console.log(obj);
}
load();*/
