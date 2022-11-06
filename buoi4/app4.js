localStorage.setItem('text','value')
let drink=['cafe','nước ép','sinh tố']
let movie=[
    {
        name:'Batman'
    },{
        name:'wakanda'
    }
]
localStorage.setItem('drink', JSON.stringify(drink))
localStorage.setItem('movie', JSON.stringify(movie))

let get_test=localStorage.getItem('test')
console.log(get_test);
let get_movie=localStorage.getItem('movie')
console.log(get_movie);
console.log(JSON.parse(get_movie));
setTimeout(function(){
    console.log("Ú oà mình chỉ là người đến sau");
},1000);
setTimeout(function(){
    console.log("biết em đã có");
},1000);
setTimeout(function(){
    console.log("ngưới ở gần bên");
},1000);
setTimeout(function(){
    console.log("nhưng anh");
},1000);
setTimeout(function(){
    console.log("vẫn ở đây và chờ em mưa giông");
},1000);





