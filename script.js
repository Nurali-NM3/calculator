const buttonNumber = document.querySelectorAll('[data-num]')
const title = document.querySelector('#title')
const buttonClear = document.querySelector('.btn-clear')
const buttonEqual = document.querySelector('.btn-equal')
const buttonDelete =document.querySelector('.btn-delete')


num = ''
title.innerText = num
buttonNumber.forEach(button => {
    button.addEventListener('click',() =>{
        title.innerText = title.innerText + button.innerText

    })
})

buttonDelete.addEventListener('click',(f) =>{
    f= title.innerText
    if(f>0 || f !==0){
        let s = f.slice(0,-1)
        return title.innerText = s
    }
})
buttonClear.addEventListener('click',(f) =>{
    f= title.innerText
    if( f !==0){

        return title.innerText = ''
    }
})
//
buttonEqual.addEventListener('click',() =>{
    let f = title.innerText
    if(f.includes('+') ){
        let a = Number(f.slice(0,f.indexOf('+')))
        let b = Number(f.slice(f.indexOf('+'),f.lastIndexOf('+')))
        let v = Number(f.slice(f.lastIndexOf('+'),f.length))
        return title.innerText =  a + b +v

    } else if(f.includes('-') ){
        let g = Number(f.slice(0,f.indexOf('-')))
        let d = Number(f.slice(f.indexOf('-')+1 ,f.lastIndexOf('-')))
        let s = Number(f.slice(f.lastIndexOf('-') +1 ,f.length))
        return title.innerText =  g - d - s

    }else if(f.includes('*') ){
        let g = Number(f.slice(0,f.indexOf('*')))
        let d = Number(f.slice(f.indexOf('*') + 1,f.lastIndexOf('*')))
        let s = Number(f.slice(f.lastIndexOf('*') +1 ,f.length))
        return title.innerText =  g * d * s

    }else if(f.includes('/') ){
        let g = Number(f.slice(0,f.indexOf('/')))
        let d = Number(f.slice(f.indexOf('/') + 1,f.lastIndexOf('/')))
        let s = Number(f.slice(f.lastIndexOf('/') +1 ,f.length))
        return title.innerText =  g / d / s

    }


})
//


