// Use REST API to obtain stops for driver
export default function(driverID) {

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(json => console.log(json))
}