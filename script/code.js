let fPrice = document.getElementById('fmalePrice')
let fQnty = document.getElementById('fmaleQnty')
let fTotal = document.getElementById('fmaleTotal')

let mPrice = document.getElementById('malePrice')
let mQnty = document.getElementById('maleQnty')
let mTotal = document.getElementById('maleTotal')

let calc = document.getElementById('calculate')
let Total = document.getElementById('finalTotal')


calc.addEventListener('click', (event)=>{
    event.preventDefault()
    calculation()
})
function calculation() {
   let total1 = eval(fPrice.innerText * fQnty.value)
   let total2 = eval(mPrice.innerText * mQnty.value)
   let total3 = total1 + total2

   fTotal.innerText = total1
   mTotal.innerText = total2
   Total.innerText = total3.toFixed(2)
   
   
   
}