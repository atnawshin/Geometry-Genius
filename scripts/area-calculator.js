function calculateTriangleArea() {
    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const base = parseFloat(baseField.value);
    console.log(base);

    // get triangle height value
    const heightField = document.getElementById('triangle-height');
    const height = parseFloat(heightField.value);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);

    // show triangle area
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area.toFixed(2);

    addToCalculationEntry('Triangle', area);
}

function calculateRectangleArea() {
    const width = parseFloat(document.getElementById('rectangle-width').value);

    const length = parseFloat(document.getElementById('rectangle-length').value);

    // validate input
    if (isNaN(width) || isNaN(length)) {
        // console.log('width is not a number');
        alert('Please insert a number.');
        return;
    }

    // calculate area
    const area = width * length;

    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area.toFixed(2);

    addToCalculationEntry('Rectangle', area);
}

// reusable function --> reduce duplicate code
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    // console.log(base);

    const height = getInputValue('parallelogram-height');
    // console.log(height);

    if (isNaN(base) || isNaN(height)) {
        alert('Please insert number');
        return;
    }

    const area = base * height;
    setElementInnerText('parallelogram-area', area.toFixed(2));

    // add to calculation entry
    addToCalculationEntry('Parallelogram', area);
}

function calculateRhombusArea() {
    const diagonal1 = getInputValue('rhombus-diagonal1');
    const diagonal2 = getInputValue('rhombus-diagonal2');

    const area = 0.5 * diagonal1 * diagonal2;
    const roundedArea = area.toFixed(2);
    // const intArea = parseInt(area);

    setElementInnerText('rhombus-area', roundedArea);

    addToCalculationEntry('Rhombus', roundedArea);
}

function calculatePentagonArea() {
    const pentagonApothem = getInputValue('pentagon-apothem');
    const pentagonSideLength = getInputValue('pentagon-side-length');

    const area = 0.5 * pentagonApothem * pentagonSideLength;
    const roundedArea = area.toFixed(2);
    // const intArea = parseInt(area);

    setElementInnerText('pentagon-area', roundedArea);

    addToCalculationEntry('Pentagon', roundedArea);
}

function calculateEllipseArea() {
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');

    const area = Math.PI * majorRadius * minorRadius;
    const roundedArea = area.toFixed(2);
    // const intArea = parseInt(area);

    setElementInnerText('ellipse-area', roundedArea);

    addToCalculationEntry('Ellipse', roundedArea);
}

// reusable get value field in number
function getInputValue(fieldId) {
    const value = parseFloat((document.getElementById(fieldId)).value);
    return value;
}

// reusable set span,p,div, etc text
function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;   //as area r man vary kortese tai etakeo variable hisabe nibo
}

/* 
Data Validation
    1. set the proper type of the input field. (number,data,email)
    2. check type 
            * typeOf
            * isNaN -> Not A Number
*/

/* 
    1. get the element where you want to add the dynamic HTML
    2. create an element you want to add
    3. if needed add some class
    4. set inner HTML. It could be dynamic Template String
    5. append the created element as a child of the parent
*/

function addToCalculationEntry(areaType, area) {
    console.log(areaType + ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class = "btn btn-success">Convert</button>`;

    calculationEntry.appendChild(p);
}
