var content = document.getElementById('content');
var codeInput = document.getElementById('codeInput');
var right = document.getElementById('right');
var codePreview = document.getElementById('preview');
var divider = document.createElement('div');
divider.id = 'divider';
content.appendChild(divider);

var codeInputPercent = 50;
codePreview.style.width = 100 + '%';
codePreview.style.height = 95 + '%';

function updateDivision() {
    divider.style.left = codeInputPercent + '%';
    codeInput.style.width = codeInputPercent + '%';
    right.style.width = (100 - codeInputPercent) + '%';
}

updateDivision();

divider.addEventListener('mousedown', function(e) {
    e.preventDefault();
    var lastX = e.pageX;
    document.documentElement.className += ' dragging';
    document.documentElement.addEventListener('mousemove', moveHandler, true);
    document.documentElement.addEventListener('mouseup', upHandler, true);
    function moveHandler(e) {
        e.preventDefault();
        e.stopPropagation();
        var deltaX = e.pageX - lastX;
        lastX = e.pageX;
        codeInputPercent += deltaX / parseFloat(document.defaultView.getComputedStyle(content).width) * 100;
        updateDivision();
    }
    function upHandler(e) {
        e.preventDefault();
        e.stopPropagation();
        document.documentElement.className = document.documentElement.className.replace(/\bdragging\b/, '');
        document.documentElement.removeEventListener('mousemove', moveHandler, true);
        document.documentElement.removeEventListener('mouseup', upHandler, true);
    }
}, false);