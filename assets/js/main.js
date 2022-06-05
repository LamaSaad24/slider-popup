let items = document.getElementsByClassName('item');
let slide = document.getElementById('slide')
let close = document.getElementById('close')
let slideItem = document.getElementById('slide-item')

let  prev = document.getElementById('prev')
let  next = document.getElementById('next')

let imgs = items.length

let index = 0

Array.from(items).forEach((item,i) => {
    item.addEventListener('click',function(){
        console.log(i)
        let img = items[i].childNodes[1].getAttribute('src')

        slideItem.childNodes[3].setAttribute('src',img)
        slideItem.childNodes[1].innerHTML=` ${i+1} / ${imgs}`

        slide.classList.add('active')

        index = i

        
    })
    
});


close.addEventListener('click', function(){
    slide.classList.remove('active')
})


next.addEventListener('click', function(){
    changeImage(index+1)
})


prev.addEventListener('click', function(){
    changeImage(index-1)
})

function changeImage(i){
    if(i>=imgs){
        index = 0
    }else if(i < 0){
        index = imgs -1
    }else{
        index = i
    }

    let img = items[index].childNodes[1].getAttribute('src')

    slideItem.childNodes[3].setAttribute('src',img)
    slideItem.childNodes[1].innerHTML=` ${index + 1} / ${imgs}`
}
