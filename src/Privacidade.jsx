import React from "react";

const CSS = `
.priv * { margin: 0; padding: 0; box-sizing: border-box; }
.priv {
  --violet: #4711cb; --ink: #16111f; --body: #524d61; --muted: #837e92;
  --line: #ece9f4; --bg: #fbfbfd; --surface: #ffffff;
  font-family: 'Hanken Grotesk', sans-serif; -webkit-font-smoothing: antialiased;
  background: var(--bg); color: var(--body); line-height: 1.7;
}
.priv-wrap { max-width: 760px; margin: 0 auto; padding: 60px 28px 100px; }
.priv-back {
  display: inline-flex; align-items: center; gap: 8px;
  color: var(--violet); font-weight: 600; font-size: 14px;
  text-decoration: none; margin-bottom: 48px;
  transition: opacity .2s;
}
.priv-back:hover { opacity: 0.75; }
.priv-draft {
  display: flex; align-items: center; gap: 10px;
  background: #fffbeb; border: 1px solid #fcd34d; border-radius: 12px;
  padding: 14px 18px; margin-bottom: 40px;
  font-size: 0.92rem; color: #92400e;
}
.priv-draft strong { font-weight: 700; }
.priv h1 {
  font-family: 'Sora', sans-serif; font-weight: 700;
  font-size: clamp(1.8rem, 4vw, 2.6rem); color: var(--ink);
  letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 10px;
}
.priv-meta { font-size: 0.88rem; color: var(--muted); margin-bottom: 48px; }
.priv h2 {
  font-family: 'Sora', sans-serif; font-weight: 600; font-size: 1.22rem;
  color: var(--ink); margin-top: 44px; margin-bottom: 14px; letter-spacing: -0.01em;
}
.priv p { margin-bottom: 14px; font-size: 1rem; }
.priv ul { padding-left: 22px; margin-bottom: 14px; }
.priv li { margin-bottom: 7px; font-size: 1rem; }
.priv a { color: var(--violet); font-weight: 600; text-decoration: none; }
.priv a:hover { text-decoration: underline; }
.priv hr { border: none; border-top: 1px solid var(--line); margin: 44px 0; }
`;

export default function Privacidade() {
  const hoje = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });

  return (
    <div className="priv">
      <style>{CSS}</style>
      <div className="priv-wrap">
        <a href="/" className="priv-back">← Voltar ao site</a>

        <div className="priv-draft">
          <span>⚠️</span>
          <span><strong>Rascunho — não é parecer jurídico.</strong> Este documento deve ser revisado por um advogado antes da publicação definitiva.</span>
        </div>

        <h1>Política de Privacidade</h1>
        <p className="priv-meta">Última atualização: {hoje}</p>

        <h2>1. Quem somos (Controlador)</h2>
        <p>
          A <strong>Kunlatek Cooperativa de Tecnologia</strong> (CNPJ 36.899.179/0001-08), com sede em
          Maceió, Alagoas, Brasil, é a controladora dos dados pessoais tratados por meio do site
          <strong> kunlatek.com.br</strong>.
        </p>
        <p>
          Contato do responsável pela proteção de dados:<br />
          <a href="mailto:contato@kunlatek.com">contato@kunlatek.com</a>
        </p>

        <h2>2. Quais dados coletamos</h2>
        <p>Coletamos dados pessoais nas seguintes situações:</p>
        <ul>
          <li><strong>Acesso ao site:</strong> endereço IP, tipo de navegador, sistema operacional, páginas visitadas, duração da visita e origem do acesso, coletados automaticamente pelos servidores e, mediante seu consentimento, pelo Google Analytics.</li>
          <li><strong>Contato via WhatsApp ou e-mail:</strong> nome, e-mail e demais informações que você fornecer voluntariamente ao entrar em contato conosco.</li>
          <li><strong>Cookies:</strong> ver seção 4 abaixo.</li>
        </ul>
        <p>Não coletamos dados sensíveis (art. 5º, II da LGPD), dados de menores de 18 anos nem realizamos decisões automatizadas com efeitos legais significativos.</p>

        <h2>3. Finalidade e base legal</h2>
        <ul>
          <li><strong>Operar e melhorar o site</strong> — interesse legítimo (art. 7º, IX da LGPD).</li>
          <li><strong>Análise de audiência via Google Analytics</strong> — <em>consentimento</em> do titular (art. 7º, I da LGPD). O GA só é carregado após você aceitar os cookies de "Desempenho e análise" no banner.</li>
          <li><strong>Responder solicitações de contato</strong> — execução de contrato ou diligências pré-contratuais (art. 7º, V) ou consentimento.</li>
        </ul>

        <h2>4. Cookies e tecnologias de rastreamento</h2>
        <p>Utilizamos as seguintes categorias de cookies:</p>
        <ul>
          <li>
            <strong>Necessários</strong> — indispensáveis para o funcionamento do site. Não requerem consentimento.
          </li>
          <li>
            <strong>Desempenho e análise</strong> — Google Analytics 4 (GA4), que coleta dados
            agregados e anônimos sobre como os visitantes utilizam o site. Só é ativado com seu
            consentimento. Os dados são processados pela Google LLC; consulte a{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Política de Privacidade do Google</a>.
          </li>
          <li>
            <strong>Marketing</strong> — não utilizamos cookies de marketing no momento.
          </li>
        </ul>
        <p>
          Você pode alterar suas preferências a qualquer momento clicando no ícone de cookie
          no canto inferior esquerdo do site.
        </p>

        <h2>5. Compartilhamento de dados</h2>
        <p>
          Não vendemos nem compartilhamos seus dados com terceiros para fins comerciais.
          Os dados de análise são processados pelo Google LLC (Google Analytics),
          conforme contrato de processamento de dados e o acordo de transferência internacional
          adotados pelo Google. Podemos divulgar dados quando exigido por lei ou ordem judicial.
        </p>

        <h2>6. Transferência internacional</h2>
        <p>
          O Google Analytics pode armazenar dados nos Estados Unidos e em outros países. O Google
          adere às cláusulas contratuais padrão aprovadas pela Comissão Europeia e mantém
          mecanismos de conformidade equivalentes para transferências internacionais.
        </p>

        <h2>7. Retenção dos dados</h2>
        <p>
          Dados coletados via Google Analytics são retidos por 14 meses (configuração padrão do GA4).
          Registros de contato são mantidos pelo período necessário ao atendimento e por até
          5 anos para fins de comprovação, salvo obrigação legal diversa.
        </p>

        <h2>8. Seus direitos (LGPD — art. 18)</h2>
        <p>Você tem direito a:</p>
        <ul>
          <li>Confirmação da existência de tratamento;</li>
          <li>Acesso aos dados;</li>
          <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
          <li>Portabilidade;</li>
          <li>Eliminação dos dados tratados com base no consentimento;</li>
          <li>Informação sobre o compartilhamento com terceiros;</li>
          <li>Revogação do consentimento a qualquer tempo;</li>
          <li>Petição à ANPD.</li>
        </ul>
        <p>
          Para exercer seus direitos, entre em contato:{" "}
          <a href="mailto:contato@kunlatek.com">contato@kunlatek.com</a>.
          Responderemos em até 15 dias úteis.
        </p>

        <h2>9. Segurança</h2>
        <p>
          Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais
          contra acesso não autorizado, perda ou destruição, incluindo HTTPS em todo o site.
        </p>

        <h2>10. Alterações nesta Política</h2>
        <p>
          Podemos atualizar esta Política periodicamente. Quando isso ocorrer, atualizaremos a
          data no topo do documento e, se as mudanças forem relevantes, exibiremos novamente o
          banner de consentimento para que você possa revisar e reconfirmar suas preferências.
        </p>

        <hr />
        <p style={{ fontSize: "0.88rem", color: "var(--muted)" }}>
          Kunlatek Cooperativa de Tecnologia · CNPJ 36.899.179/0001-08 · Maceió, Alagoas, Brasil
          ·{" "}<a href="mailto:contato@kunlatek.com">contato@kunlatek.com</a>
        </p>
      </div>
    </div>
  );
}
