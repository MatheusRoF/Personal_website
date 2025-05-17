import { Document, Paragraph, TextRun, Packer } from "docx";

/**
 * Função para gerar e baixar DOCX do conteúdo da página
 * @param {HTMLElement} element - Elemento HTML a ser convertido para Word
 * @param {string} filename - Nome do arquivo DOCX a ser baixado
 */
export const generateDocx = async (element, filename = 'documento.docx') => {
  try {
    // Extrai o texto do elemento (você pode melhorar esta lógica)
    const content = element.innerText || element.textContent;
    
    // Cria o documento Word
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: content,
                size: 24, // Tamanho da fonte (opcional)
              }),
            ],
          }),
        ],
      }],
    });

    // Gera o blob do documento
    const blob = await Packer.toBlob(doc);
    
    // Cria link de download
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    
    // Limpeza
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    return true;
  } catch (error) {
    console.error('Erro ao gerar DOCX:', error);
    return false;
  }
};