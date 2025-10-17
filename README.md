Aqui está um modelo de arquivo README para a página, formatado para facilitar a compreensão e a manutenção do projeto. Ele explica as tecnologias usadas, a estrutura de pastas e como personalizar o conteúdo.

-----


# Projeto: Personal Trainer & Instrutor de Academia

<img width="1080" height="1080" alt="academia" src="https://github.com/user-attachments/assets/2a3db918-2448-4673-ad6a-5a119ac0cabc" />


Este projeto é um site de uma única página (single-page) para um instrutor de academia e personal trainer, desenvolvido com foco em performance e responsividade. O site apresenta seções para serviços, depoimentos, galeria de fotos e um formulário de contato.

## Tecnologias Utilizadas

  * **HTML5**: Para a estrutura e semântica da página.
  * **CSS3**: Para o design, layout e estilos, incluindo animações de rolagem e galeria de imagens.
  * **JavaScript (Vanilla JS)**: Para a interatividade da página, como o menu responsivo, animações de rolagem e funcionalidade de copiar e-mail.
  * **Font Awesome**: Para ícones de redes sociais e serviços.
  * **Google Fonts**: Para a fonte 'Poppins'.

## Funcionalidades Principais

  * **Menu de Navegação**: Um menu fixo no topo da página com links para as seções principais.
  * **Seção de Herói**: Uma imagem de fundo com sobreposição, título e chamada para ação.
  * **Galeria de Momentos**: Uma galeria de imagens com animação de rolagem automática para destacar momentos de treino.
  * **Seção Sobre Mim**: Informações sobre o instrutor, com uma foto de perfil e um bloco para agendamento de consulta gratuita.
  * **Seção de Serviços**: Lista os serviços oferecidos com ícones.
  * **Depoimentos**: Exibe depoimentos de clientes com fotos.
  * **Formulário de Contato**: Um formulário que usa a função `mailto` para enviar a mensagem diretamente para o e-mail do personal trainer.
  * **Animação na Rolagem (Scroll Reveal)**: Os elementos da página aparecem com uma animação suave à medida que o usuário rola a página. Essa funcionalidade é otimizada com a técnica "throttle" para melhorar a performance.
  * **Ano Automático no Rodapé**: O ano no rodapé é atualizado automaticamente via JavaScript.

## Estrutura de Arquivos

```
/
├── index.html         // A estrutura principal da página
├── style.css          // Todos os estilos e layout CSS
├── script.js          // Onde a mágica de JavaScript acontece
└── /img/              // Pasta para armazenar as imagens do site
    ├── personal.png
    ├── trei.png
    ├── ...
```

## Como Personalizar o Conteúdo

Para personalizar este site, você precisará editar os arquivos diretamente.

### `index.html`

  * **Textos e Títulos**: Altere o nome do instrutor, a descrição na seção de herói, o texto da seção "Sobre Mim" e os depoimentos.
  * **Imagens**: Substitua as imagens na pasta `/img/` por suas próprias. Certifique-se de manter os mesmos nomes de arquivo ou atualizar os caminhos no `index.html`.
  * **Links de Navegação**: Mude os links (`href="#secao"`) ou adicione novas seções, se necessário.

### `style.css`

  * **Cores**: Altere as variáveis de cor no `:root` para ajustar o esquema de cores principal do site.
  * **Tipografia**: Mude as fontes ou tamanhos de texto, se desejar.

### `script.js`

  * **Informações de Contato**: Altere o `trainerName` e o `trainerEmail` para os seus dados. Atualmente, o `trainerEmail` é obtido do elemento com `id="emailText"` no HTML, então certifique-se de que ele esteja correto.
  * **Funcionalidades de JS**: Não é recomendado alterar o código JavaScript a menos que você tenha conhecimento em programação, pois ele controla a interatividade e as animações da página.

## Observações

  * O formulário de contato usa um link `mailto`, o que significa que ele abrirá o cliente de e-mail padrão do usuário (como o Outlook, Gmail, etc.) com os campos de assunto e corpo pré-preenchidos. Ele não envia a mensagem diretamente do site.
  * A seção "Galeria de Momentos" tem uma animação contínua. Para que a animação funcione perfeitamente, as imagens na galeria (`gallery-track`) foram duplicadas no HTML.
