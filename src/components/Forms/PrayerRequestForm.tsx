import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./PrayerRequestForm.css";

type PrayerFormData = {
  nome: string;
  email: string;
  nomesParaOracao: string;
};

export function PrayerRequestForm() {
  const [formData, setFormData] = useState<PrayerFormData>({
    nome: "",
    email: "",
    nomesParaOracao: "",
  });

  const [captchaOk, setCaptchaOk] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [mensagem, setMensagem] = useState<string | null>(null);

  // atualiza os campos de texto do formulário
  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setMensagem(null);

    // validação básica dos campos obrigatórios
    if (!formData.nome || !formData.email || !formData.nomesParaOracao) {
      setMensagem("Por favor, preencha todos os campos.");
      return;
    }

    if (!captchaOk) {
      setMensagem("Confirme que você não é um robô.");
      return;
    }

    try {
      setEnviando(true);

      // aqui montamos os dados que vão para o template do EmailJS
      const templateParams = {
        nome: formData.nome,
        email: formData.email,
        nomesParaOracao: formData.nomesParaOracao,
      };

      // chamada ao EmailJS usando service, template e public key
      await emailjs.send(
        "service_55t8rtb",
        "template_peg2ml9",
        templateParams,
        "D5dRYDT5SlXcMfPP3"
      );

      setMensagem(
        "Intenção enviada com sucesso. Ela será incluída em nossas orações diárias."
      );
      setFormData({
        nome: "",
        email: "",
        nomesParaOracao: "",
      });
      setCaptchaOk(false);
    } catch (error) {
      console.error(error);
      setMensagem(
        "Não foi possível enviar agora. Tente novamente em alguns instantes."
      );
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section className="section prayer-form-section" id="intencoes-oracao">
      <h2>Inclua alguém em nossas orações diárias</h2>
      <p>
        Preencha seus dados e escreva o nome das pessoas que você deseja incluir
        em nossas intenções de oração.
      </p>

      <form className="prayer-form" onSubmit={handleSubmit}>
        <div className="prayer-form-field">
          <label htmlFor="nome">Seu nome</label>
          <input
            id="nome"
            name="nome"
            type="text"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite seu nome"
          />
        </div>

        <div className="prayer-form-field">
          <label htmlFor="email">Seu e-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="seuemail@exemplo.com"
          />
        </div>

        <div className="prayer-form-field">
          <label htmlFor="nomesParaOracao">Nome(s) para oração</label>
          <textarea
            id="nomesParaOracao"
            name="nomesParaOracao"
            rows={4}
            value={formData.nomesParaOracao}
            onChange={handleChange}
            placeholder="Digite o nome das pessoas que você quer incluir em oração."
          />
        </div>

        <div className="prayer-form-captcha">
          <label>
            <input
              type="checkbox"
              checked={captchaOk}
              onChange={(event) => setCaptchaOk(event.target.checked)}
            />
            <span>Não sou robô</span>
          </label>
          <small>
            Este é um captcha simples. Depois podemos trocar por reCAPTCHA oficial.
          </small>
        </div>

        {mensagem && <div className="prayer-form-message">{mensagem}</div>}

        <button
          type="submit"
          className="prayer-form-button"
          disabled={enviando}
        >
          {enviando ? "Enviando..." : "Enviar intenção de oração"}
        </button>
      </form>
    </section>
  );
}
