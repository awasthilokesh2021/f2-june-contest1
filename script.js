fetch("product.json")
.then((response)=>
  response.json())
.then((data)=>{
  let place = document.querySelector('#data-json')
  var out = " ";
  for(var k of data){
    out += `
       <tr>
       <td><img src="${k.image}"></td>
        <td>${k.id}</td>
        <td>${k.symbol}</td>
        <td>${k.name}</td>
        <td>${k.current_price}</td>
        <td>${k.total_volume}</td>
        
       </tr>
    `;  
}
  place.innerHTML = out;
})


function searchup(){
    let filter = document.getElementById('mYinput').value.toUpperCase();
 
    let mytable = document.getElementById('table-data')
 
    let tr = mytable.getElementsByTagName('tr')
    
    for(var i=0;i<tr.length;i++){
       let td = tr[i].getElementsByTagName('td')[0];
       if(td){
 
          let textvalue = td.textContent || td.innerHTML;
 
          if(textvalue.toUpperCase().indexOf(filter) > -1)
          {
             tr[i].style.display = "";
          }
          else
          {
             tr[i].style.display =  'none';
          }
       }
    }
}