(function() {
  let selectedElement = null;
  let clicking = false;
  let intervalId = null;

  // Create container
  const menu = document.createElement('div');
  menu.style.position = 'fixed';
  menu.style.bottom = '20px';
  menu.style.right = '20px';
  menu.style.background = '#222';
  menu.style.color = 'white';
  menu.style.padding = '10px';
  menu.style.borderRadius = '10px';
  menu.style.zIndex = '99999';
  menu.style.fontFamily = 'Arial, sans-serif';
  menu.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
  menu.style.width = '250px';

  // Title
  const title = document.createElement('div');
  title.textContent = 'Auto Clicker';
  title.style.fontWeight = 'bold';
  title.style.marginBottom = '8px';
  menu.appendChild(title);

  // Delay input
  const delayLabel = document.createElement('label');
  delayLabel.textContent = 'Delay (ms): ';
  const delayInput = document.createElement('input');
  delayInput.type = 'number';
  delayInput.value = '500';
  delayInput.min = '10';
  delayInput.style.width = '80px';
  delayInput.style.marginBottom = '8px';
  delayLabel.appendChild(delayInput);
  menu.appendChild(delayLabel);
  menu.appendChild(document.createElement('br'));

  // Element display
  const elementDisplay = document.createElement('div');
  elementDisplay.style.margin = '6px 0';
  elementDisplay.textContent = 'Selected: None';
  elementDisplay.style.fontSize = '12px';
  elementDisplay.style.whiteSpace = 'nowrap';
  elementDisplay.style.overflow = 'hidden';
  elementDisplay.style.textOverflow = 'ellipsis';
  menu.appendChild(elementDisplay);

  // Select Element Button
  const selectBtn = document.createElement('button');
  selectBtn.textContent = 'Select Element';
  selectBtn.style.margin = '4px 0';
  selectBtn.style.width = '100%';
  selectBtn.style.padding = '6px';
  selectBtn.style.background = '#555';
  selectBtn.style.color = 'white';
  selectBtn.style.border = 'none';
  selectBtn.style.cursor = 'pointer';
  menu.appendChild(selectBtn);

  // Toggle AutoClick Button
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = 'Start AutoClick';
  toggleBtn.style.margin = '4px 0';
  toggleBtn.style.width = '100%';
  toggleBtn.style.padding = '6px';
  toggleBtn.style.background = '#4CAF50';
  toggleBtn.style.color = 'white';
  toggleBtn.style.border = 'none';
  toggleBtn.style.cursor = 'pointer';
  menu.appendChild(toggleBtn);

  document.body.appendChild(menu);

  // Element selector mode
  let selecting = false;

  selectBtn.onclick = () => {
    alert('Click any element on the page to select it.');
    selecting = true;
    document.body.style.cursor = 'crosshair';
  };

  document.addEventListener('click', function pickElement(e) {
    if (selecting) {
      e.preventDefault();
      e.stopPropagation();
      selectedElement = e.target;
      elementDisplay.textContent = `Selected: <${selectedElement.tagName.toLowerCase()} class="${selectedElement.className}">`;
      selecting = false;
      document.body.style.cursor = 'default';
    }
  }, true);

  // Start/Stop autoclicking
  toggleBtn.onclick = () => {
    const delay = parseInt(delayInput.value);
    if (!selectedElement) {
      alert('Please select an element to auto-click first.');
      return;
    }

    if (!clicking) {
      clicking = true;
      toggleBtn.textContent = 'Stop AutoClick';
      toggleBtn.style.background = '#f44336';
      intervalId = setInterval(() => {
        selectedElement.click();
      }, delay);
    } else {
      clicking = false;
      toggleBtn.textContent = 'Start AutoClick';
      toggleBtn.style.background = '#4CAF50';
      clearInterval(intervalId);
    }
  };
})();
