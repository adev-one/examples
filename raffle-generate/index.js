const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

const width = 2480;
const height = 3508;

const numbers = 200;
const columns = 2;
const rows = 10;
const numbersPerPage = columns * rows; //20
const pagesNumber = Math.ceil(numbers / numbersPerPage); // 10

(async () => {
    console.log(pagesNumber)
    // create context
    const canvas = createCanvas(width, height); //tela
    const context = canvas.getContext('2d');
    
    const template = await loadImage('./assets/template.jpg');
  
    context.fillStyle = '#000000';
	context.font = '32pt Sans';
    context.textBaseline = 'top';

    // fill numbers
    let number = 1;

    for (let page = 1; page <= pagesNumber; page++) {
        context.drawImage(template, 0, 0, width, height);

        let x = 240;
        let x1 = 720;
        
        for (let column = 1; column <= columns; column++) {
            let y = 13;
            
            for (let row = 1; row <= rows; row++) {
                context.fillText(number, x, y);
                context.fillText(number, x1, y);
                
                y += 350 - (row * 0.01);
                number++;
            }

            x += 1240; 
            x1 += 1240;
        }

        // export image    
        const buffer = canvas.toBuffer('image/jpeg');
        const filePath = `assets/result/page_${page}.jpg`;
        fs.writeFileSync(filePath, buffer);

        console.log(`Page ${page} Processada`)
    }    
})();
