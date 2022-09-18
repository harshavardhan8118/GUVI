var mainDiv= document.createElement('div');
var head= document.createElement('h1');
var subHead= document.createElement('h2');
head.innerText="Dog Breeds";
subHead.innerText="Click on the breed to view an image";

var contentDiv= document.createElement('div');
contentDiv.setAttribute('class', 'contentDiv','imageDiv')

var button1= document.createElement('button');
button1.innerText="Husky";
var button2= document.createElement('button');
button2.innerText="Labrador";
var button3= document.createElement('button');
button3.innerText="Germanshepherd";
var button4= document.createElement('button');
button4.innerText="Rottweiler";
var button5= document.createElement('button');
button5.innerText="Pitbull";
contentDiv.append(button1,button2,button3,button4,button5);

var imageDiv= document.createElement('div');
imageDiv.setAttribute('class', 'imageDiv')

mainDiv.append(head,subHead,contentDiv,imageDiv);

document.body.appendChild(mainDiv);

button1.addEventListener('click',()=>{
    fetch("https://dog.ceo/api/breed/husky/images/random")
    .then((res)=>{
        return res.json();
    })
    .then((result)=>{
        var src1=result.message;
        imageDiv.innerHTML="<img src=" + src1 + ">"
    })
    .catch((err)=>{
        console.log(err);
    })
})

button2.addEventListener('click',()=>{
    fetch("https://dog.ceo/api/breed/labrador/images/random")
    .then((res)=>{
        return res.json();
    })
    .then((result)=>{
        var src2=result.message;
        imageDiv.innerHTML="<img src=" + src2 + ">"
    })
    .catch((err)=>{
        console.log(err);
    })
})

button3.addEventListener('click',()=>{
    fetch("https://dog.ceo/api/breed/germanshepherd/images/random")
    .then((res)=>{
        return res.json();
    })
    .then((result)=>{
        var src3=result.message;
        imageDiv.innerHTML="<img src=" + src3 + ">"
    })
    .catch((err)=>{
        console.log(err);
    })
})

button4.addEventListener('click',()=>{
    fetch("https://dog.ceo/api/breed/rottweiler/images/random")
    .then((res)=>{
        return res.json();
    })
    .then((result)=>{
        var src4=result.message;
        imageDiv.innerHTML="<img src=" + src4 + ">"
    })
    .catch((err)=>{
        console.log(err);
    })
})

button5.addEventListener('click',()=>{
    fetch("https://dog.ceo/api/breed/pitbull/images/random")
    .then((res)=>{
        return res.json();
    })
    .then((result)=>{
        var src5=result.message;
        imageDiv.innerHTML="<img src=" + src5 + ">"
    })
    .catch((err)=>{
        console.log(err);
    })
})