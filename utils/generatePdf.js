/**
 * Função aprimorada para gerar e baixar PDF profissional
 * @param {HTMLElement} element - Elemento HTML a ser convertido
 * @param {string} filename - Nome do arquivo (sem extensão)
 * @param {Object} options - Opções personalizadas
 * @returns {Promise<boolean>} - Retorna true se bem-sucedido
 */
export const generatePdf = async (element, filename = 'documento', options = {}) => {
  try {
    if (typeof window === 'undefined') return false;

    // Carrega as bibliotecas necessárias
    const { default: html2pdf } = await import('html2pdf.js');
    const { default: jsPDF } = await import('jspdf');
    await import('jspdf-autotable');

    // Clona o elemento para manipulação
    const elementToPrint = element.cloneNode(true);
    
    // Aplica estilos específicos para PDF
    applyPdfStyles(elementToPrint);

    // Configurações padrão
    const defaultOptions = {
      margin: [0.5, 0.5, 0.5, 0.5], // [top, left, bottom, right] em cm
      filename: `${filename}.pdf`,
      image: { 
        type: 'jpeg', 
        quality: 1 // Máxima qualidade
      },
      html2canvas: { 
        scale: 3, // Maior resolução
        logging: false,
        useCORS: true,
        allowTaint: true,
        letterRendering: true,
        dpi: 300 // Alta DPI
      },
      jsPDF: { 
        unit: 'cm',
        format: 'a4',
        orientation: 'portrait',
        hotfixes: ["px_scaling"] // Corrige escala de pixels
      },
      pagebreak: {
        mode: ['avoid-all', 'css', 'legacy'],
        before: '.page-break-before',
        after: '.page-break-after',
        avoid: 'img, h1, h2, h3, h4, h5, h6'
      }
    };

    // Mescla com opções personalizadas
    const finalOptions = { ...defaultOptions, ...options };

    // Gera o PDF
    const pdfGenerator = html2pdf()
      .set(finalOptions)
      .from(elementToPrint)
      .toPdf()
      .get('pdf')
      .then((pdf) => {
        // Aplica estilos adicionais diretamente no PDF
        const totalPages = pdf.internal.getNumberOfPages();
        
        for (let i = 1; i <= totalPages; i++) {
          pdf.setPage(i);
          
          // Cabeçalho
          pdf.setFontSize(10);
          pdf.setTextColor(100);
          pdf.text(`Currículo Profissional - Matheus Rodrigues`, 1, 1);
          
          // Rodapé
          pdf.text(`Página ${i} de ${totalPages}`, 
            pdf.internal.pageSize.width - 2, 
            pdf.internal.pageSize.height - 0.5
          );
        }
        
        return pdf;
      })
      .save();

    return true;
  } catch (error) {
    console.error('Erro ao gerar PDF:', error);
    return false;
  }
};

/**
 * Aplica estilos específicos para o PDF
 * @param {HTMLElement} element - Elemento a ser estilizado
 */
function applyPdfStyles(element) {
  // Remove elementos indesejados
  const elementsToRemove = [
    '.no-print', 
    'button', 
    'nav', 
    'footer', 
    'script',
    '.back-button'
  ];
  
  elementsToRemove.forEach(selector => {
    element.querySelectorAll(selector).forEach(el => el.remove());
  });

  // Adiciona estilos CSS
  const style = document.createElement('style');
  style.textContent = `
    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      color: #333;
      padding: 1cm;
    }
    h1, h2, h3, h4 {
      color: #2c3e50;
      margin-top: 0.5cm;
      margin-bottom: 0.3cm;
    }
    h1 { font-size: 16pt; }
    h2 { font-size: 14pt; }
    h3 { font-size: 12pt; }
    p, li {
      font-size: 11pt;
      text-align: justify;
      margin-bottom: 0.2cm;
    }
    a {
      color: #2563eb;
      text-decoration: none;
    }
    ul, ol {
      margin-left: 1cm;
      padding-left: 0.5cm;
    }
    .section {
      margin-bottom: 0.5cm;
      page-break-inside: avoid;
    }
    .page-break {
      page-break-after: always;
    }
    .no-break {
      page-break-inside: avoid;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin: 0.5cm 0;
      page-break-inside: avoid;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 0.3cm;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
    .signature-line {
      margin-top: 1.5cm;
      border-top: 1px solid #333;
      width: 8cm;
    }
  `;
  
  element.prepend(style);

  // Processa imagens para PDF
  element.querySelectorAll('img').forEach(img => {
    img.style.maxWidth = '100%';
    img.style.height = 'auto';
    img.style.display = 'block';
    img.style.margin = '0 auto';
  });

  // Adiciona classes para controle de quebras de página
  const sections = element.querySelectorAll('section, .section');
  sections.forEach((section, index) => {
    if (index % 3 === 0 && index !== 0) {
      section.classList.add('page-break-before');
    }
    section.classList.add('no-break');
  });
}