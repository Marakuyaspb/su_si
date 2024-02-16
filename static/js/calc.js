/* ONLY int here */
document.querySelectorAll('.only_int').forEach(
  function(element) {
    element.addEventListener('input', function(){
        this.value = this.value.replace(/[^0-9]/g, '');
      });
});

/* FAST VALUES DEPOSITS */
document.getElementById('th3').addEventListener('click', function() {
  document.getElementById('deposit').value = '3000';
})
document.getElementById('th10').addEventListener('click', function() {
  document.getElementById('deposit').value = '10000';
})
document.getElementById('th50').addEventListener('click', function() {
  document.getElementById('deposit').value = '50000';
})



/* FAST VALUES MONTHS */
document.getElementById('m1').addEventListener('click', function() {
  document.getElementById('mths').value = '1';
});

document.getElementById('m3').addEventListener('click', function() {
  document.getElementById('mths').value = '3';
});

document.getElementById('m6').addEventListener('click', function() {
  document.getElementById('mths').value = '6';
});
document.getElementById('m12').addEventListener('click', function() {
  document.getElementById('mths').value = '12';
});





function showResult(){
  console.log('start');
  let deposit = parseInt(document.getElementById('deposit').value); 
  let mths = parseInt(document.getElementById('mths').value);
  




  if (mths < 600) {
    let the_profit = deposit * mths;

    /* here normal code */

  document.getElementById('profit_result').innerText = the_profit;
  } else{
    let years =Math.floor(mths/12)
    
    document.getElementById('notion').innerText = years + ' years!' + 'Are you sure?';
    document.getElementById('profit_result').innerText = 'Check the number of months, please';
  }

  let apr
  let plan

  
}

/**/
600