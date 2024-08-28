export default function decorate(block) {
  // Loop through each row within the block
  [...block.children].forEach((row, rowIndex) => {
    // Ensure the row itself gets a class
    row.classList.add(`row-${rowIndex + 1}`);
    
    // Loop through each column within the row
    [...row.children].forEach((col, colIndex) => {
      // Ensure each column gets a class
      col.classList.add(`col-${colIndex + 1}`);
      
      // Add a unique class to all picture tags within each column
      const pictures = col.querySelectorAll('picture');
      pictures.forEach((picture, pictureIndex) => {
        picture.classList.add(`special-picture-${rowIndex + 1}-${colIndex + 1}-${pictureIndex + 1}`);
        
        // Add links to specific social media icons
        const img = picture.querySelector('img');
        if (img) {
          let link = document.createElement('a');
          switch (pictureIndex) {
            case 0:
              link.href = 'https://www.facebook.com/Infosys';
              break;
            case 1:
              link.href = 'https://x.com/Infosys';
              break;
            case 2:
              link.href = 'https://www.linkedin.com/company/infosys/posts/?feedView=all';
              break;
          }
          link.style.display = 'inline-block';
          link.style.marginLeft = '10px'; // Add margin if needed
          img.parentNode.insertBefore(link, img);
          link.appendChild(img);
        }
      });

      // Function to create links and update paragraphs
      function addLinkToParagraph(pTag, url) {
        const link = document.createElement('a');
        link.href = url;
        link.textContent = pTag.textContent; // Preserve the text
        link.style.color = 'white'; // Set the text color to white
        link.style.textDecoration = 'none'; // Remove the underline
        pTag.textContent = ''; // Clear the original text
        pTag.appendChild(link); // Add the link
      }

      // Add links based on specific columns and text content
      const pTags = col.querySelectorAll('p');
      pTags.forEach((pTag) => {
        const text = pTag.textContent.trim();

        if (rowIndex === 1 && colIndex === 0) {
          // Specific handling for row-2 col-1
          const links = {
            'Terms of Use': 'https://www.infosys.com/terms-of-use.html',
            'Privacy Statement': 'https://www.infosys.com/privacy-statement.html',
            'Cookie Policy': 'https://www.infosys.com/privacy-statement/cookie-policy.html',
            'Safe Harbour Provision': 'https://www.infosys.com/safe-harbor-provision.html',
            'Trademarks': 'https://www.infosys.com/trademarks.html'
          };
          
          // Split the text into individual terms and create links
          pTag.innerHTML = text.split('|').map(term => {
            const trimmedTerm = term.trim();
            const url = links[trimmedTerm];
            if (url) {
              return `<a href="${url}" style="color: white; text-decoration: none; margin-right: 10px;">${trimmedTerm}</a>`;
            }
            return trimmedTerm;
          }).join(' | ');
        } else {
          switch (text) {
            case 'Americans':
              addLinkToParagraph(pTag, 'https://www.infosys.com/confluence/americas-confluences.html');
              break;
            case 'Insights':
              addLinkToParagraph(pTag, 'https://www.infosys.com/confluence/insights.html');
              break;
            case 'EMEA':
              addLinkToParagraph(pTag, 'https://www.infosys.com/confluence/emea-confluences.html');
              break;
            case 'Virtual':
              addLinkToParagraph(pTag, 'https://www.infosys.com/confluence/virtual.html');
              break;
            case 'APAC':
              addLinkToParagraph(pTag, 'https://www.infosys.com/confluence/apac-confluences.html');
              break;
            case 'Follow Us':
              // Remove link from "Follow Us" text
              const followUsLink = pTag.querySelector('a');
              if (followUsLink) {
                pTag.textContent = followUsLink.textContent; // Keep the text only
              }
              break;
          }
        }
      });
    });
  });

  // Update link for specific picture
  const specificPicture = document.querySelector('picture.special-picture-1-1-1 a');
  if (specificPicture) {
    specificPicture.href = 'https://www.infosys.com/confluence.html';
  }
}







