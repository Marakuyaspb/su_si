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


function showResult(){

  /* delete old notions */
  document.getElementById('notion_deposit_mob').innerText = '';
  document.getElementById('notion_apr_mob').innerText = '';
  document.getElementById('result_inner_mob').innerText = '';
  document.getElementById('deposit_mob').classList.remove('blue_tg_bg_op');
  document.getElementById('show_result_mob').classList.remove('disabled');
  /* */

  let deposit = parseInt(document.getElementById('deposit_mob').value); 

  let rate;

  if (deposit === 0 || deposit === null || isNaN(deposit)){
      document.getElementById('notion_deposit_mob').innerText = 'Enter any amount, please!';
      document.getElementById('show_result_mob').classList.add('disabled');
      rate = 0;
  } else if (deposit > 0 && deposit < 500) {
      document.getElementById('notion_deposit_mob').innerText = 'This is too small amount. Enter value bigger than $500, please';
      document.getElementById('show_result_mob').classList.add('disabled');
      rate = 0;
  }  else if (deposit >= 500 && deposit <= 10000) {
      rate = 0.3;
  } else if (deposit > 10000 && deposit < 50000) {
      rate = 0.25;
  } else if (deposit >= 50000 && deposit < 100000) {
      rate = 0.2;
  } else if (deposit >= 100000) {
      document.getElementById('notion_deposit_mob').innerHTML = `
      <span class=''>Because of the size of the deposit we would like to offer you </span><b><u>special conditions! </u></b>
      <br><span class=''>Please, <a href='https://t.me/cryptoreaper_06'>contact us <img src='static/icons/telegram.svg' class='icon_xs'></a></span>
      `;
      document.getElementById('deposit_mob').classList.add('blue_tg_bg_op');
      document.getElementById('show_result_mob').classList.add('disabled');
      rate = 0;
  }
  

  let apr = 0;
  let apr_show = 0;
  if (document.getElementById('optimist_mob').checked) {
      apr = parseFloat((document.getElementById('optimist_mob').value)/100);
      apr_show = 320;
  } 
  else if (document.getElementById('realist_mob').checked) {
      apr = parseFloat((document.getElementById('realist_mob').value)/100);
      apr_show = 120;
  } 
  else if (document.getElementById('pessimist_mob').checked) {
      apr = parseFloat((document.getElementById('pessimist_mob').value)/100);
      apr_show = 80;
  } else{
    document.getElementById('notion_apr_mob').innerText = 'Choise APR, please!';
    document.getElementById('show_result_mob').classList.add('disabled');
  }


  let plan;
  const checkbox = document.getElementById('subscr_plan_mob');

  if (checkbox.checked) {
      plan = parseInt(25*12);
  } else {
      plan = parseInt(50*12);
  }


  let the_profit;
 
    if (deposit === 0 || deposit === null || isNaN(deposit)) {
      document.getElementById('notion_deposit_mob').innerText = 'Enter any amount, please!';
      document.getElementById('show_result_mob').classList.add('disabled');
    } else if(apr === 0 || apr === null || isNaN(apr)){
      document.getElementById('notion_apr_mob').innerText = 'Choise APR, please!';
      document.getElementById('show_result_mob').classList.add('disabled');
    } 
    else {
      let the_profit = 

         deposit+deposit*apr_show/100-deposit*apr_show/100*rate-plan

      ;

      let the_profit_floor = Math.floor(the_profit);

      let the_profit_space = the_profit_floor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

      document.getElementById('result_inner_mob').innerHTML = `<div class='calc_result mb-3'>
          <div class='profit_info btn_glass'>
            <div class='calc_details'>TOTAL</div>
            <div id='profit_result' class=''>$ ${the_profit_space}</div>
          </div>
          <div class='mt-2'>
            <div class='calc_details'>Deposit: $ ${deposit}</div>
            <div class='calc_details'>APR: ${apr_show} %</div>
            <div class='calc_details pb-2'>Subscribtion: $ ${plan}/year </div>
          </div></div>`;
      }

}