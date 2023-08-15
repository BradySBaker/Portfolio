function explodeText (text, x, y) {
  window.ctx.clearRect(0, 0, window.canvas.width, window.canvas.height);

  // Split the text into characters
  const characters = text.split('');

  window.ctx.font = '48px Arial';
  window.ctx.fillStyle = 'black';
  characters.forEach((char, index) => {
    let xPos = x + index * 40;
    let yPos = y;

    // Calculate random explosion vectors
    const dx = Math.random() * 6 - 3;
    const dy = Math.random() * 6 - 3;

    window.ctx.fillText(char, xPos, yPos);

    // Apply explosion effect
    xPos += dx;
    yPos += dy;
  });
}

export default explodeText;
