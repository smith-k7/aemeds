export default function decorate(block) {
  // Loop through each row within the block
  [...block.children].forEach((row, rowIndex) => {
    // Ensure the row itself gets a class
    row.classList.add(`row-${rowIndex + 1}`);
    
    // Loop through each column within the row
    [...row.children].forEach((col, colIndex) => {
      // Ensure each column gets a class
      col.classList.add(`col-${colIndex + 1}`);
    });
  });
}