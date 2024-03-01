function download(){
  
    const text = "Hello, I have infiltrated your computer... hahahahahahhahaha!";
    
    const blob = new Blob([text], { type: 'text/plain' });
    
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    
    link.download = 'hacker-file.txt';
    document.body.appendChild(link);
  
    
    link.click();
  
    
    document.body.removeChild(link);
    
    document.body.style.backgroundColor = getRandomColor();
  }
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }