



   var quant =document.getElementById('quant')
 var btn =document.getElementById('btn')
  var para =document.getElementById('para')
 var txt =document.getElementById('txt')
 var select = document.getElementById('select')

 btn.addEventListener('click',()=>{
     para.innerHTML = `Mr. ${txt.value} select ${select.value} and quantity is ${quant.value}
     your bill is ${quant.value*5} Pkr,Thanks`
 })