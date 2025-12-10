# 🌿 Espaço de Oração  
Um ambiente digital dedicado à **paz, reflexão e espiritualidade**.  
Criado para oferecer um espaço simples, intuitivo e acolhedor, onde qualquer pessoa pode orar, registrar intenções ou encontrar inspiração diária.

Este projeto utiliza **React + Vite**, com design responsivo, animações suaves e uma paleta baseada no **violeta espiritual**.  
Também funciona como **PWA**, permitindo instalação no celular ou desktop.

---

## ✨ Funcionalidades principais

### 🕊️ Quero Orar  
Uma seção para orientar o visitante a reservar um momento de silêncio e contemplação.  
Inclui textos suaves, UI minimalista e foco total no conteúdo.

---

### 📿 Oração do Dia  
Componente dedicado com cartão estilizado contendo uma oração diária.  
Totalmente isolado e reutilizável.

---

### 💬 Intenções de Oração (EmailJS)  
Formulário funcional para envio de intenções sem backend.  
Recursos:
- Envio via **EmailJS**
- Mensagem de sucesso estilizada com dourado e violeta
- Validação automática
- Interface clara e acolhedora

---

### 🕯️ Mais Conteúdos  
Seção com três cards interativos, cada um com:
- Imagens em alta qualidade
- Frase frontal
- Texto complementar revelado no hover
- Efeitos de zoom, overlay violeta e borda dourada

---

### 🙏 Sobre Nós  
Página institucional contendo:
- Texto sobre a missão do projeto
- Seção "No que acreditamos" com três pilares (Deus é bom, Nada é impossível, Somos importantes)
- Layout editorial e responsivo

---

### 🖼️ Galeria (Em construção)  
Página com **contador regressivo** até o lançamento oficial.
Recursos:
- Contador animado (dias, horas, minutos e segundos)
- Layout minimalista
- Integração com PWA para exibição consistente

---

## 🎨 Identidade Visual

Paleta violeta espiritual utilizada no projeto:

| Cor | Hexadecimal |
|-----|-------------|
| Primário | `#5E2B97` |
| Violeta Claro | `#A884F3` |
| Lilás Névoa | `#E9D8FD` |
| Roxo Crepuscular | `#3C1A63` |
| Dourado Suave | `#EACB76` |
| Neutros | `#2A2A2A`, `#FFFFFF` |

Logo em formato circular estilizado, criado especialmente para o projeto.

---

## 📱 PWA — Aplicativo Instalável  
Este site pode ser instalado no dispositivo graças ao suporte a PWA.

Configurações incluídas:
- `manifest.json` configurado
- Ícones 192×192 e 512×512
- Background e theme color personalizadas
- Splash e ícones adaptados

---

## ☁️ Deploy — Firebase Hosting

O site está preparado para ser implantado facilmente no **Firebase Hosting**.

Comando:

```bash
firebase deploy
