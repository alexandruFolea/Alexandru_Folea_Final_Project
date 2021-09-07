/*
create a wrapper withh 100% width and 100% height
    create child container and display it absolute to the wrapper
        -give it an opacity of 0.5
    
    create a form div
        create a form a fieldset with 2 inputs and a submit button

*/

window.addEventListener('DOMContentLoaded', () => {
	FORM.style.display = 'none';
});

const BODY = document.querySelector('body');
const CONTACT_BTNS = document.querySelectorAll('.contact-btn');
const WRAPPER = document.createElement('div');
const FORM = document.createElement('form');
const FORM_DIV = document.createElement('div');
const FIELDSET = document.createElement('fieldset');
const FIELDSET_LEGEND = document.createElement('legend');
const NAME_INPUT = document.createElement('input');
const EMAIL_INPUT = document.createElement('input');
const SUBMIT_BTN = document.createElement('input');
const FORM_INFO = document.createElement('p');
// const CLOSE_BTN = document.createElement('button');

BODY.appendChild(WRAPPER);
WRAPPER.appendChild(FORM);
FORM.appendChild(FIELDSET);
FORM.appendChild(FORM_INFO);
// FORM.appendChild(CLOSE_BTN);
FIELDSET.appendChild(FORM_DIV);
FIELDSET.appendChild(FIELDSET_LEGEND);
FORM_DIV.appendChild(NAME_INPUT);
FORM_DIV.appendChild(EMAIL_INPUT);
FORM_DIV.appendChild(SUBMIT_BTN);

//stopping bubbling event on the form so user can type without the modal closing
// because of the event listener on its parent container
FORM.addEventListener('click', (e) => {
	e.stopPropagation();
});

// style for the parent container
function styleContactWrapper() {
	WRAPPER.classList.add('contact-wrapper');
	WRAPPER.style.width = '100%';
	WRAPPER.style.height = '100%';
	WRAPPER.style.position = 'fixed';
	WRAPPER.style.top = '0';
	WRAPPER.style.left = '0';
	WRAPPER.style.zIndex = '3';
	WRAPPER.style.display = 'flex';
	WRAPPER.style.justifyContent = 'center';
	WRAPPER.style.alignItems = 'center';
	WRAPPER.style.backgroundColor = 'hsla(221, 51%, 16%, 0.8)';
}

//style for the form itself
function styleForm() {
	//form style
	FORM.style.height = 'auto';
	FORM.style.width = '450px';
	FORM.style.borderTopLeftRadius = '15px';
	FORM.style.borderBottomRightRadius = '15px';
	FORM.style.background = 'hsl(37, 98%, 53%)';
	FORM.style.position = 'relative';
	FORM.style.display = 'flex';
	FORM.style.justifyContent = 'center';
	FORM.style.flexDirection = 'column';
	FORM.style.alignItems = 'center';
	FORM.setAttribute('action', '/');

	//fieldset style
	FIELDSET_LEGEND.innerHTML = 'CONTACT FORM';
	FIELDSET.style.width = '90%';
	FIELDSET.style.height = '70%';
	FIELDSET.style.padding = '10px';
	FIELDSET.style.borderColor = 'hsla(221, 51%, 16%)';
	FIELDSET.style.display = 'flex';
	FIELDSET.style.justifyContent = 'center';
	FIELDSET.style.alignItems = 'center';
	FIELDSET.style.flexDirection = 'column';

	//legend style
	FIELDSET_LEGEND.style.textAlign = 'center';
	FIELDSET_LEGEND.style.padding = '10px';
	FIELDSET_LEGEND.style.color = 'hsla(221, 51%, 16%)';
	FIELDSET_LEGEND.style.fontSize = '25px';

	//form div style
	FORM_DIV.style.width = '100%';
	FORM_DIV.style.height = '100%';
	FORM_DIV.style.display = 'flex';
	FORM_DIV.style.justifyContent = 'center';
	FORM_DIV.style.alignItems = 'center';
	FORM_DIV.style.flexDirection = 'column';

	//name style
	NAME_INPUT.style.display = 'block';
	NAME_INPUT.style.width = '100%';
	NAME_INPUT.style.height = '30px';
	NAME_INPUT.style.paddingLeft = '10px';
	NAME_INPUT.style.marginBottom = '5px';
	NAME_INPUT.style.outlineColor = 'hsla(221, 51%, 16%, 0.813)';
	NAME_INPUT.style.outlineOffset = '2px';
	NAME_INPUT.style.border = 'none';
	NAME_INPUT.setAttribute('name', 'name');
	NAME_INPUT.setAttribute('type', 'text');
	NAME_INPUT.setAttribute('placeholder', 'Enter Name');

	//email style
	EMAIL_INPUT.style.display = 'block';
	EMAIL_INPUT.style.width = '100%';
	EMAIL_INPUT.style.height = '30px';
	EMAIL_INPUT.style.paddingLeft = '10px';
	EMAIL_INPUT.style.marginBottom = '5px';
	EMAIL_INPUT.style.outlineColor = 'hsla(221, 51%, 16%, 0.813)';
	EMAIL_INPUT.style.outlineOffset = '2px';
	EMAIL_INPUT.style.border = 'none';
	EMAIL_INPUT.setAttribute('email', 'email');
	EMAIL_INPUT.setAttribute('type', 'text');
	EMAIL_INPUT.setAttribute('placeholder', 'Enter Email');

	//submit button style
	SUBMIT_BTN.style.width = '100%';
	SUBMIT_BTN.style.height = '30px';
	SUBMIT_BTN.style.color = '#fff';
	SUBMIT_BTN.style.border = 'none';
	SUBMIT_BTN.style.cursor = 'pointer';
	SUBMIT_BTN.style.backgroundColor = 'hsla(221, 51%, 16%)';
	SUBMIT_BTN.style.borderTopLeftRadius = '8px';
	SUBMIT_BTN.style.borderBottomRightRadius = '8px';
	SUBMIT_BTN.setAttribute('value', 'SUBMIT');
	SUBMIT_BTN.setAttribute('type', 'submit');
	//form information style
	FORM_INFO.style.fontSize = '20px';
	FORM_INFO.style.marginLeft = '20px';

	//close button style
	// CLOSE_BTN.innerHTML = '&times';
	// CLOSE_BTN.style.color = 'hsla(221, 51%, 16%)';
	// CLOSE_BTN.style.backgroundColor = 'transparent';
	// CLOSE_BTN.style.border = 'none';
	// CLOSE_BTN.style.fontSize = '30px';
	// CLOSE_BTN.style.padding = '0';
	// CLOSE_BTN.style.margin = '0';
	// CLOSE_BTN.style.cursor = 'pointer';
	// CLOSE_BTN.style.position = 'absolute';
	// CLOSE_BTN.style.top = '-5px';
	// CLOSE_BTN.style.right = '2px';
	// CLOSE_BTN.style.zIndex = '99';
}

function displayFormInfo() {
	FORM_INFO.innerText = `Hello, ${NAME_INPUT.value}!
    Your contact information has been successfully submitted.`;
}

SUBMIT_BTN.addEventListener('click', (e) => {
	e.preventDefault();
	displayFormInfo();
});

//btns and input fields hover and mouse enter/leave states start
NAME_INPUT.addEventListener('mouseenter', () => {
	NAME_INPUT.style.backgroundColor = 'hsl(36, 11%, 74%)';
});
NAME_INPUT.addEventListener('mouseleave', () => {
	NAME_INPUT.style.backgroundColor = 'white';
});
EMAIL_INPUT.addEventListener('mouseenter', () => {
	EMAIL_INPUT.style.backgroundColor = 'hsl(36, 11%, 74%)';
});
EMAIL_INPUT.addEventListener('mouseleave', () => {
	EMAIL_INPUT.style.backgroundColor = 'white';
});
SUBMIT_BTN.addEventListener('mouseover', () => {
	SUBMIT_BTN.style.backgroundColor = 'hsla(221, 51%, 16%, 0.95)';
});
SUBMIT_BTN.addEventListener('mouseout', () => {
	SUBMIT_BTN.style.backgroundColor = 'hsla(221, 51%, 16%)';
});
// CLOSE_BTN.addEventListener('mouseover', () => {
// 	CLOSE_BTN.style.color = 'red';
// 	CLOSE_BTN.style.transform = 'scale(1.2)';
// });
// CLOSE_BTN.addEventListener('mouseout', () => {
// 	CLOSE_BTN.style.color = 'hsla(221, 51%, 16%)';
// 	CLOSE_BTN.style.transform = 'scale(1)';
// });

//btns and input fields hover and mouse enter/leave states end

WRAPPER.addEventListener('click', () => {
	WRAPPER.style.display = 'none';
});
// CLOSE_BTN.addEventListener('click', () => {
// 	WRAPPER.style.display = 'none';
// });

CONTACT_BTNS.forEach((button) => {
	button.addEventListener('click', () => {
		styleContactWrapper();
		styleForm();
	});
});

// styleContactWrapper();
// styleForm();
