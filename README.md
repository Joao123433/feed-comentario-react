# Feed Comentário React App
Este projeto foi desenvolvido utilizando TypeScript, React e Vite, o aplicativo consiste em uma seção de comentários, onde os usuários podem adicionar novos posts.

## Link para o Projeto
https://joao123433.github.io/feed-comentario-react/

## Estrutura do Projeto
`App.tsx:` O componente principal do aplicativo. Ele renderiza a seção de comentários, utiliza o formulário NewPostForm para adicionar novos posts e exibe a lista de posts existentes.
`NewPostForm.tsx:` Componente que contém um formulário para adicionar novos posts. Ele utiliza o hook personalizado usePost para gerenciar o estado dos posts.
`Post.tsx:` Componente responsável por exibir um post na seção de comentários. Recebe as propriedades email, date e comment.
`InputText.tsx:` Um componente que representa um campo de entrada de texto. É utilizado no formulário para capturar o email do usuário.
`TextArea.tsx:` Componente semelhante ao InputText.tsx, mas específico para áreas de texto. Utilizado para capturar o comentário do usuário.
`usePost.ts:` Um hook personalizado que gerencia o estado dos posts. Armazena os posts no localStorage e fornece uma função addPost para adicionar novos posts.

## Como Executar o App
1. Certifique-se de ter o ambiente de desenvolvimento configurado para o React.
2. Clone o repositório e navegue até o diretório do projeto.
3. Instale as dependências usando `npm install` ou `yarn install`.
4. Execute o aplicativo com `npm dev` ou `yarn dev`.
5. Acesse o aplicativo no navegador através do endereço `http://localhost:5173`.

## Notas Importantes
- O aplicativo utiliza TypeScript para fornecer uma experiência de desenvolvimento mais segura e robusta.
- A lista de comentários é armazenada no `localStorage`, proporcionando persistência de dados entre sessões.
- Os componentes `InputText` e `TextArea` são componentes reutilizáveis para entrada de texto.