🌿 Espaço de Oração

Um ambiente digital criado para proporcionar paz, reflexão e espiritualidade, oferecendo um espaço simples, intuitivo e acolhedor para oração, intenções e mensagens inspiradoras.

O projeto foi desenvolvido em React + Vite, com interface totalmente responsiva, animações suaves e paleta personalizada baseada no violeta espiritual.
O site também funciona como PWA (Progressive Web App), podendo ser instalado no celular ou desktop.

✨ Funcionalidades principais
🕊️ Seção: Quero Orar

Orienta o visitante a reservar um momento de silêncio e introspecção. Inclui:

Mensagem motivacional

Trecho de reflexão

UI minimalista e focada no conteúdo

📿 Oração do Dia

Uma oração exibida com destaque, com cartão elegante e bordas arredondadas.
O componente é isolado e reutilizável.

💬 Intenções de Oração (EmailJS)

Formulário para envio de intenções, totalmente funcional sem backend, utilizando EmailJS.
Inclui:

Feedback visual de sucesso/erro

Validação de campos

Mensagem de confirmação estilizada com a paleta violeta e dourado suave

🕯️ Mais Conteúdos (Cards Interativos)

Três cards com imagens, cada um contendo:

Front (texto principal)

Back (texto secundário exibido no hover)

Efeitos: zoom suave, borda dourada e overlay roxo translúcido

As seções são acessíveis pelo menu fixo no topo.

🙏 Sobre Nós

Página institucional contendo:

Texto inspirador sobre o propósito do espaço

Seção “O que acreditamos” com três pilares apresentados em estilo editorial

Layout totalmente responsivo

🖼️ Galeria (Em Construção)

Página com contador regressivo até o lançamento oficial.
Inclui:

Contador animado

Layout limpo

PWA splash adaptado

Mensagem “Estamos chegando em breve”.

🎨 Identidade Visual

Paleta violeta espiritual utilizada no projeto:

Primário: #5E2B97

Violeta Claro: #A884F3

Lilás Névoa: #E9D8FD

Roxo Crepuscular: #3C1A63

Dourado Suave: #EACB76

Neutros: #2A2A2A, #FFFFFF

Logo personalizado feito com elementos circulares em gradiente violeta.

📱 PWA — Aplicativo Instalável

Este projeto suporta PWA e pode ser instalado no celular ou desktop.

Implementações:

manifest.json configurado com nome, short name, descrição, cores e ícones

Ícones 192x192 e 512x512 otimizados

Suporte "Add to Home Screen" (A2HS)

Favicon atualizado

Build no Vite configurado para servir corretamente os assets

☁️ Deploy e Hospedagem — Firebase Hosting

O deploy é feito via Firebase:

firebase deploy


O projeto utiliza:

Firebase Hosting

HTTPS automático

Suporte a SPA (Single Page Application)

Redirecionamentos configurados

🧱 Tecnologias utilizadas
Front-end

React 18

Vite

TypeScript

React Router DOM

CSS Modules

Paleta customizada

Integrações

EmailJS (envio de intenções sem backend)

Firebase Hosting

PWA

Manifest

Custom icons

Instalação nativa no dispositivo

📂 Estrutura do projeto
src/
 ├── assets/
 ├── components/
 │     ├── Banner/
 │     ├── Content/
 │     ├── DailyPrayer/
 │     ├── Forms/
 │     ├── Header/
 │     ├── Location/
 │     ├── ScrollToTop/
 │     └── Footer/
 ├── pages/
 │     ├── Home/
 │     ├── About/
 │     └── Gallery/
 ├── App.tsx
 └── main.tsx

public/
 ├── manifest.json
 ├── logo-192.png
 └── logo-512.png

⚙️ Como rodar o projeto localmente
# instalar dependências
npm install

# rodar em ambiente de desenvolvimento
npm run dev

# gerar build
npm run build

🚀 Deploy no Firebase
firebase login
firebase init
firebase deploy

💛 Licença

Este projeto foi desenvolvido para fins espirituais e comunitários.
Sinta-se livre para adaptar, evoluir ou contribuir.