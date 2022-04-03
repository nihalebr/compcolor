/**
 * @author : @nihalebr
 * 
 * it change the value of button to hi if hello is pressent in the button text
 * @param  {object} btn - button element
 * 
 */
function fly(btn) {
    btn.id === 'First' ? document.getElementById('Second') : btn;
    btn.textContent === 'Hello' ? btn.textContent = 'Hi' : btn.textContent = 'Hello';
}