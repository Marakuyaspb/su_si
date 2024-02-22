const buttons = document.querySelectorAll('.calc_btn_sm');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('calc_btn_clicked'));
        button.classList.add('calc_btn_clicked');
    });
});
