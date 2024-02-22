/* ONLY int here */
document.querySelectorAll('.only_int').forEach(
  function(element) {
    element.addEventListener('input', function(){
        this.value = this.value.replace(/[^0-9]/g, '');
      });
});

/* FAST VALUES - DEPOSITS */
document.getElementById('th3_mob').addEventListener('click', function() {
  document.getElementById('deposit_mob').value = '3000';
})
document.getElementById('th10_mob').addEventListener('click', function() {
  document.getElementById('deposit_mob').value = '10000';
})
document.getElementById('th50_mob').addEventListener('click', function() {
  document.getElementById('deposit_mob').value = '50000';
})


/* FAST VALUES - MONTHS */
document.getElementById('m1_mob').addEventListener('click', function() {
  document.getElementById('mths_mob').value = '12';
});

document.getElementById('m3_mob').addEventListener('click', function() {
  document.getElementById('mths_mob').value = '24';
});

document.getElementById('m6_mob').addEventListener('click', function() {
  document.getElementById('mths_mob').value = '36';
});



function showResult_mob(){
  /* delete old notions */
  document.getElementById('notion_deposit_mob').innerText = '';
  document.getElementById('notion_mob').innerText = '';


  let deposit = parseInt(document.getElementById('deposit_mob').value); 

  let rate;

  if (deposit === 0 || deposit === null || isNaN(deposit)){
      document.getElementById('notion_deposit_mob').innerText = 'Enter any amount, please!';
      rate = 0;
  } else if (deposit <= 10000) {
      rate = 0.3;
  } else if (deposit > 10000 && deposit < 50000) {
      rate = 0.25;
  } else if (deposit >= 50000) {
      rate = 0.2;
  } 


  let mths = parseInt(document.getElementById('mths_mob').value);
  

  let apr = 0;
  let apr_show = 0;
  if (document.getElementById('optimist_mob').checked) {
      apr = parseInt((document.getElementById('optimist_mob').value)/100);
      apr_show = 320;
  } 
  else if (document.getElementById('realist_mob').checked) {
      apr = parseInt((document.getElementById('realist_mob').value)/100);
      apr_show = 120;
  } 
  else if (document.getElementById('pessimist_mob').checked) {
      apr = parseInt((document.getElementById('pessimist_mob').value)/100);
      apr_show = 80;
  }


  let plan;
  const checkbox = document.getElementById('subscr_plan_mob');

  if (checkbox.checked) {
      plan = parseInt(25*12);
  } else {
      plan = parseInt(50*12);
  }
    console.log(apr);

  let the_profit;


  if (mths < 600) {
    
    if (deposit === 0 || deposit === null || isNaN(deposit)) {
      document.getElementById('notion_deposit_mob').innerText = 'Enter any amount, please!';
    } 
    else {
      let the_profit = 

        deposit + ( ( (deposit * (apr-rate)) ) - plan) * (mths/12)

      ;

  console.log(the_profit);
      let the_profit_floor = Math.floor(the_profit);

      let the_profit_space = the_profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

      document.getElementById('result_inner_mob').innerHTML = `<div class='calc_result mb-3'>
          <div class='profit_info btn_glass'>
            <div class='calc_details'>YOUR  PROFIT</div>
            <div id='profit_result' class=''>$ ${the_profit_space}</div>
          </div>
          <div class='mt-2'>
            <div class='calc_details'>Deposit: $ ${deposit}</div>
            <div class='calc_details'>APR: ${apr_show} %</div>
            <div class='calc_details'>Period: ${mths} months</div>
            <div class='calc_details pb-2'>Subscribtion: $ ${plan}/year </div>
          </div></div>`;
      }
  }

  else if(mths === 0 || mths === null || isNaN(mths)){
    document.getElementById('notion').innerText = 'Enter number of months, please';
  } 
  else {
    let years =Math.floor(mths/12)

    document.getElementById('notion_mob').innerText = years + ' years!' + ' Are you sure?';
    document.getElementById('profit_result_mob').innerText = 'Check the number of months, please';
  }
}