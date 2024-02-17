/* ONLY int here */
document.querySelectorAll('.only_int').forEach(
  function(element) {
    element.addEventListener('input', function(){
        this.value = this.value.replace(/[^0-9]/g, '');
      });
});

/* FAST VALUES - DEPOSITS */
document.getElementById('th3').addEventListener('click', function() {
  document.getElementById('deposit').value = '3000';
})
document.getElementById('th10').addEventListener('click', function() {
  document.getElementById('deposit').value = '10000';
})
document.getElementById('th50').addEventListener('click', function() {
  document.getElementById('deposit').value = '50000';
})



/* FAST VALUES - MONTHS */
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
  /* delete old notions */
  document.getElementById('notion_deposit').innerText = '';
  document.getElementById('notion').innerText = '';



  let deposit = parseInt(document.getElementById('deposit').value); 

  if (deposit === 0 || deposit === null || isNaN(deposit)){
      document.getElementById('notion_deposit').innerText = 'Enter any amount, please!';
    }

  let mths = parseInt(document.getElementById('mths').value);
  

  let apr = 0;
  if (document.getElementById('optimist').checked) {
      apr = parseInt(document.getElementById('optimist').value);
  } 
  else if (document.getElementById('realist').checked) {
      apr = parseInt(document.getElementById('realist').value);
  } 
  else if (document.getElementById('pessimist').checked) {
      apr = parseInt(document.getElementById('pessimist').value);
  }


  let plan;
  const checkbox = document.getElementById('subscr_plan');

  if (checkbox.checked) {
      plan = parseInt(25);
  } else {
      plan = parseInt(50);
  }


  let the_profit;

  /* check the time */  
  if (mths < 600) {
    

    if (deposit === 0 || deposit === null || isNaN(deposit)) {
      document.getElementById('notion_deposit').innerText = 'Enter any amount, please!';
    } else if (deposit < 10000) {
        let the_profit = Math.floor((deposit + (deposit * apr / 100 / 12 - (deposit * apr / 100 / 12 * 0.3)) - plan * mths));
        let the_profit_space = the_profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

        document.getElementById('result_inner').innerHTML = `<div class='calc_result mb-3'>
              <div class='profit_info btn_glass'>
              <div class='calc_details'>
                YOUR  PROFIT 
              </div>
              <div id='profit_result' class='' >
                $ ${the_profit_space}
              </div>
            </div>
            <div class='mt-2'>
              <div class='calc_details'>Deposit: $ ${deposit}</div>
              <div class='calc_details'>APR: ${apr}</div>
              <div class='calc_details'>Months: ${mths}</div>
              <div class='calc_details'>Plan: ${plan} </div>
            </div></div>`;

    } else if (deposit > 10000 && deposit <= 50000) {
        let the_profit = (deposit + (deposit * apr / 100 / 12 - (deposit * apr / 100 / 12 * 0.25)) - plan) * mths;
        let the_profit_floor = Math.floor(the_profit);

        document.getElementById('result_inner').innerHTML = `<div class='calc_result mb-3'>
              <div class='profit_info btn_glass'>
              <div class='calc_details'>
                YOUR  PROFIT 
              </div>
              <div id='profit_result' class='' >
                $ ${the_profit_floor}
              </div>
            </div>
            <div class='mt-2'>
              <div class='calc_details'>Deposit: $ ${deposit}</div>
              <div class='calc_details'>APR: ${apr}</div>
              <div class='calc_details'>Months: ${mths}</div>
              <div class='calc_details'>Plan: $ ${plan} / month </div>
            </div></div>`;

    } else if (deposit <= 100000) {

        let the_profit = (deposit + (deposit * apr / 100 / 12 - (deposit * apr / 100 / 12 * 0.2)) - plan) * mths;
        let the_profit_floor = Math.floor(the_profit);

        document.getElementById('result_inner').innerHTML = `<div class='calc_result mb-3'>
              <div class='profit_info btn_glass'>
              <div class='calc_details'>
                YOUR  PROFIT 
              </div>
              <div id='profit_result' class='' >
                $ ${the_profit_floor}
              </div>
            </div>
            <div class='mt-2'>
              <div class='calc_details'>Deposit: $ ${deposit}</div>
              <div class='calc_details'>APR: ${apr}</div>
              <div class='calc_details'>Months: ${mths}</div>
              <div class='calc_details'>Plan: ${plan} </div>
            </div></div>`;
    }
  }

  else if(mths === 0 || mths === null || isNaN(mths)){
    document.getElementById('notion').innerText = 'Enter number of months, please';
  } 
  else {
    let years =Math.floor(mths/12)

    document.getElementById('notion').innerText = years + ' years!' + ' Are you sure?';
    document.getElementById('profit_result').innerText = 'Check the number of months, please';
  }

}