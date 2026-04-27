import Link from "next/link";
import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "The LinkedIn Playbook",
  description:
    "Manual editorial do LinkedIn em 2026: arquitetura de perfil, mecânica algorítmica, modelo de média móvel, sinais de compra, conversão e engajamento.",
  alternates: { canonical: "/blog/linkedin-playbook" },
  openGraph: {
    title: "The LinkedIn Playbook — olivmath",
    description: "Manual editorial do LinkedIn em 2026.",
    url: "/blog/linkedin-playbook",
  },
};

export default function Page() {
  return (
    <div className="lp-root">

      <header className="top">
        <Link href="/blog" className="brand">
          <span className="word">in · <em>Playbook</em></span>
          <span className="meta">LP-2026-01</span>
        </Link>
        <nav>
          <Link href="/blog">← blog</Link>
          <Link href="/" className="active">home</Link>
        </nav>
      </header>

      <div className="strip">
        <span>Edição 01 · 2026</span>
        <span>Algoritmo · Conteúdo · Conversão</span>
        <span>8 capítulos · ~22 min</span>
      </div>

      <div className="layout">

        <aside className="toc">
          <h2>Sumário</h2>
          <ol>
            <li><a href="#perfil">Perfil de alto impacto</a></li>
            <li><a href="#conteudo">Criando conteúdo</a></li>
            <li><a href="#algoritmo">Pessoas + algoritmo</a></li>
            <li><a href="#frequencia">Frequência &amp; alcance</a></li>
            <li><a href="#sinais">Sinais de compra</a></li>
            <li><a href="#vendas">Conversão de vendas</a></li>
            <li><a href="#engajamento">Engajamento</a></li>
            <li><a href="#do-dont">Faça &amp; Não faça</a></li>
          </ol>
        </aside>

        <main>

          <header className="hero">
            <div className="kicker">Manual editorial · Edição completa</div>
            <h1>O Playbook do <em>LinkedIn</em> — feito pra quem leva a sério.</h1>
            <p className="lede">Do perfil de alto impacto à mecânica do algoritmo — passando por uma estratégia de postagem fundamentada em <em>média móvel</em>, evidência de mais de 300 testes e dados de 2 milhões de posts.</p>
            <div className="byline">
              <div><span className="v">8</span><span className="l">Capítulos</span></div>
              <div><span className="v">22</span><span className="l">Min de leitura</span></div>
              <div><span className="v">5</span><span className="l">Fontes primárias</span></div>
              <div><span className="v">2026</span><span className="l">Atualizado abr</span></div>
            </div>
          </header>

          {/* ───── 01 ───── */}
          <section id="perfil">
            <div className="section-marker">
              <span className="num">01</span>
              <div>
                <span className="label">Capítulo um</span>
                <h2 className="title">Perfil de <em>alto impacto</em></h2>
              </div>
            </div>

            <div className="reading">
              <p className="dropcap">O LinkedIn deixou de ser um currículo digital. Hoje é palco de marca pessoal, descoberta de oportunidades e desenvolvimento de negócio. Montar um perfil parece simples — mas é nas decisões pequenas (foto, headline, seção sobre) que mora a diferença entre <em>passar despercebido</em> e <em>ser lembrado</em>.</p>

              <blockquote className="pullquote">A primeira impressão acontece em 3 segundos. Sua foto, headline e banner contam tudo antes do clique no &laquo;ver mais&raquo;.</blockquote>

              <h3><span className="num">1.1</span> A primeira impressão</h3>
            </div>

            <div className="profile">
              <div className="banner"></div>
              <div className="body">
                <div className="av">in</div>
                <h4>Sua Pessoa Aqui</h4>
                <p className="hl">Ajudo marcas a crescerem através de estratégias inovadoras de marketing</p>
                <div className="annot">
                  Anatomia da primeira impressão
                  <span>Foto profissional · alta qualidade · vestimenta apropriada</span>
                  <span>Banner customizado reforça marca pessoal</span>
                  <span>Headline = proposta de valor (não apenas cargo)</span>
                  <span>Link ativo para site/portfólio relevante</span>
                </div>
              </div>
            </div>

            <div className="reading">
              <h3><span className="num">1.2</span> Seção em destaque (Featured)</h3>
              <ul>
                <li><strong>Oferta</strong> — destaque ofertas especiais, cursos ou serviços. eBook gratuito, webinar, consultoria.</li>
                <li><strong>Multicanal</strong> — não linke só seu site: artigos, vídeos, podcasts, qualquer plataforma onde você contribui.</li>
              </ul>

              <h3><span className="num">1.3</span> Conteúdo: diversifique e engaje</h3>
              <ul>
                <li><strong>Multicanal</strong> — artigos, infográficos, vídeos. Atenda preferências diferentes.</li>
                <li><strong>Engaje</strong> — não apenas poste; responda comentários, participe de discussões, compartilhe outros.</li>
              </ul>

              <h3><span className="num">1.4</span> Sobre: conte sua história</h3>
              <ul>
                <li><strong>Posicionamento</strong> — quem você é, o que faz, quem atende.</li>
                <li><strong>Valor agregado</strong> — 10 anos de experiência, abordagem única, treinamento especializado.</li>
                <li><strong>Oferta</strong> — reitere os serviços. Facilite a compreensão do que você entrega.</li>
              </ul>

              <h3><span className="num">1.5</span> Prova social</h3>
              <ul>
                <li><strong>Skills</strong> — habilidades relevantes priorizadas pelas mais importantes.</li>
                <li><strong>Recomendações</strong> — peça a colegas, clientes, superiores. Recomendação bem escrita pesa mais que uma lista.</li>
              </ul>

              <h3><span className="num">1.6</span> Modo Criador</h3>
              <ul>
                <li><strong>Conteúdo no centro</strong> — posts, artigos e vídeos viram o foco do perfil.</li>
                <li><strong>Engajamento</strong> — facilita acompanhar e interagir com seguidores.</li>
              </ul>

              <h3><span className="num">1.7</span> Experiência: não é currículo</h3>
              <ul>
                <li><strong>Foco no cliente</strong> — conquistas e valor entregue. Aumentou vendas em 20%? Sistema que economizou tempo?</li>
                <li><strong>Sem formato CV</strong> — é plataforma de marca e networking. Torne envolvente.</li>
              </ul>
            </div>
          </section>

          {/* ───── 02 ───── */}
          <section id="conteudo">
            <div className="section-marker">
              <span className="num">02</span>
              <div>
                <span className="label">Capítulo dois</span>
                <h2 className="title">Criando <em>conteúdo</em></h2>
              </div>
            </div>

            <div className="reading">
              <p className="dropcap">Mais de 700 milhões de profissionais. A pergunta não é <em>se</em> publicar, mas <em>como</em> fazer cada post resistir ao scroll. Quatro princípios e quatro fórmulas resolvem 80% do trabalho.</p>

              <h3><span className="num">2.1</span> Consistência sobre frequência</h3>
              <p>Priorize consistência. 2-3 posts de alta qualidade por semana superam ruído diário.</p>

              <h3><span className="num">2.2</span> Fórmulas básicas de copywriting</h3>
            </div>

            <div className="formulas">
              <div className="formula">
                <div className="acr">AIDA</div>
                <div className="stages">Atenção · Interesse · Desejo · Ação</div>
                <p className="desc">Comece roubando atenção, alimente o interesse, gere desejo, encerre com chamada à ação.</p>
              </div>
              <div className="formula">
                <div className="acr">FAB</div>
                <div className="stages">Features · Advantages · Benefits</div>
                <p className="desc">Aponte características, vantagens sobre concorrentes e benefícios concretos.</p>
              </div>
              <div className="formula">
                <div className="acr">PASTOR</div>
                <div className="stages">Problema · Agitar · Solução · Testemunho · Oferta · Resposta</div>
                <p className="desc">Identifique a dor, agite-a, ofereça solução, prove com testemunho, faça a oferta.</p>
              </div>
              <div className="formula">
                <div className="acr">Story</div>
                <div className="stages">História · Conexão · Resolução</div>
                <p className="desc">Narre uma história relacionável e conecte com a solução de forma natural.</p>
              </div>
            </div>

            <div className="reading">
              <h3><span className="num">2.3</span> Storytelling autêntico</h3>
              <p>Pessoas se conectam com histórias genuínas. Compartilhar experiências, desafios e conquistas humaniza a marca.</p>

              <h3><span className="num">2.4</span> Guias passo a passo</h3>
              <p>Instruções claras geram valor real e te posicionam como especialista.</p>

              <h3><span className="num">2.5</span> Liderança de pensamento</h3>
              <p>Insights únicos, análises ou previsões. Liderança não é venda — é profundidade.</p>

              <h3><span className="num">2.6</span> Embaixadores de conteúdo</h3>
              <p>Funcionários, clientes, influenciadores que amplificam alcance ao compartilhar nas próprias redes.</p>

              <h3><span className="num">2.7</span> 1 Post = 1 Mensagem = 1 Objetivo</h3>
              <p>Foco único. Não empilhe múltiplas mensagens — confunde, dilui, não converte.</p>
            </div>
          </section>

          {/* ───── 03 ───── */}
          <section id="algoritmo">
            <div className="section-marker">
              <span className="num">03</span>
              <div>
                <span className="label">Capítulo três</span>
                <h2 className="title">Pessoas + <em>algoritmo</em></h2>
              </div>
            </div>

            <div className="reading">
              <p className="dropcap">Audiência primária = humano. Mas se o algoritmo não distribuir, ninguém vê. <em>Escreva para pessoas, otimize para o algoritmo.</em> As duas coisas convivem.</p>

              <h3><span className="num">3.1</span> Princípios de otimização</h3>
              <ul>
                <li><strong>Palavras-chave</strong> usadas naturalmente.</li>
                <li><strong>Posts concisos</strong>, diretos ao ponto.</li>
                <li><strong>Visuais</strong> — imagens ou vídeos engajam mais.</li>
              </ul>
            </div>

            <div className="figure">
              <div className="num">Figura 3.1</div>
              <h3>A janela crítica de 60 minutos</h3>
              <p>A primeira hora dita o alcance. Comentários e respostas do autor sinalizam ao algoritmo amplificar.</p>
              <svg viewBox="0 0 700 220" preserveAspectRatio="xMidYMid meet">
                <defs>
                  <linearGradient id="critV3" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#6B7FFF" stopOpacity="0.95"/>
                    <stop offset="50%" stopColor="#6B7FFF" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#6B7FFF" stopOpacity="0.1"/>
                  </linearGradient>
                </defs>
                <line x1="40" y1="140" x2="660" y2="140" stroke="#2a2a2a" strokeWidth="1"/>
                <rect x="40" y="86" width="620" height="54" fill="url(#critV3)"/>
                <g fontFamily="Space Grotesk, sans-serif" fontSize="10" fill="#a1a1a1" textAnchor="middle" fontWeight="600">
                  <text x="40" y="170">0 min</text><text x="195" y="170">15 min</text><text x="350" y="170">30 min</text><text x="505" y="170">45 min</text><text x="660" y="170">60 min</text>
                </g>
                <g><circle cx="40" cy="113" r="6" fill="#6B7FFF"/><text x="40" y="76" fontFamily="Space Grotesk" fontSize="10" fill="#F2F2F2" textAnchor="middle" fontWeight="700">PUBLICAR</text></g>
                <g><circle cx="195" cy="113" r="5" fill="#F2F2F2"/><text x="195" y="76" fontFamily="Space Grotesk" fontSize="10" fill="#a1a1a1" textAnchor="middle">RESPONDER</text></g>
                <g><circle cx="350" cy="113" r="5" fill="#F2F2F2"/><text x="350" y="76" fontFamily="Space Grotesk" fontSize="10" fill="#a1a1a1" textAnchor="middle">COMENTAR</text></g>
                <g><circle cx="505" cy="113" r="5" fill="#F2F2F2"/><text x="505" y="76" fontFamily="Space Grotesk" fontSize="10" fill="#a1a1a1" textAnchor="middle">REENGAJAR</text></g>
                <g><circle cx="660" cy="113" r="6" fill="#404040"/><text x="660" y="76" fontFamily="Space Grotesk" fontSize="10" fill="#525252" textAnchor="middle">FIXO</text></g>
                <text x="350" y="205" fontFamily="Fraunces, serif" fontSize="13" fontStyle="italic" fill="#d4d4d4" textAnchor="middle">Cada interação respondida na 1ª hora multiplica a distribuição.</text>
              </svg>
            </div>

            <div className="reading">
              <h3><span className="num">3.2</span> Poste de manhã (8h-10h)</h3>
              <p>Usuários estão mais ativos pela manhã. Postar nesse intervalo aumenta chances de engajamento inicial — e o engajamento inicial é tudo.</p>

              <h3><span className="num">3.3</span> Cuide do post nos primeiros 60 minutos</h3>
              <p>Engaje com cada comentário, curtida e compartilhamento. Sinaliza ao algoritmo: <em>vale amplificar</em>.</p>

              <h3><span className="num">3.4</span> Engaje antes e depois de publicar</h3>
              <p>Comente em outros antes de postar — eles tendem a retribuir.</p>

              <h3><span className="num">3.5</span> Comente no próprio post</h3>
              <p>Insight extra ou pergunta para gerar discussão impulsiona engajamento adicional.</p>

              <h3><span className="num">3.6</span> Hashtags e marcações: máximo 5</h3>
            </div>

            <div className="figure">
              <div className="num">Figura 3.2</div>
              <h3>A regra dos 5 hashtags</h3>
              <p>Mais que isso vira spam aos olhos do algoritmo. Use relevância, não quantidade.</p>
              <svg viewBox="0 0 700 80">
                <g fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="700">
                  <g><rect x="20" y="20" width="120" height="40" fill="#6B7FFF"/><text x="80" y="46" fill="#0D0D0D" textAnchor="middle">#1</text></g>
                  <g><rect x="150" y="20" width="120" height="40" fill="#6B7FFF" opacity="0.85"/><text x="210" y="46" fill="#0D0D0D" textAnchor="middle">#2</text></g>
                  <g><rect x="280" y="20" width="120" height="40" fill="#6B7FFF" opacity="0.7"/><text x="340" y="46" fill="#0D0D0D" textAnchor="middle">#3</text></g>
                  <g><rect x="410" y="20" width="120" height="40" fill="#6B7FFF" opacity="0.55"/><text x="470" y="46" fill="#0D0D0D" textAnchor="middle">#4</text></g>
                  <g><rect x="540" y="20" width="120" height="40" fill="#6B7FFF" opacity="0.4"/><text x="600" y="46" fill="#0D0D0D" textAnchor="middle">#5</text></g>
                  <line x1="668" y1="10" x2="668" y2="70" stroke="#FF6B6B" strokeWidth="2" strokeDasharray="3 3"/>
                  <text x="678" y="46" fill="#FF6B6B" fontSize="11" fontWeight="700">STOP</text>
                </g>
              </svg>
            </div>

            <div className="reading">
              <h3><span className="num">3.7</span> Termine com CTT, CTF, CTI ou PS</h3>
              <ul>
                <li><strong>CTT</strong> (Call to Think) — convide à reflexão.</li>
                <li><strong>CTF</strong> (Call to Feel) — evoque emoção.</li>
                <li><strong>CTI</strong> (Call to Implement) — encoraje ação.</li>
                <li><strong>PS</strong> — pensamento final ou toque pessoal.</li>
              </ul>
            </div>
          </section>

          {/* ───── 04 ⭐ ───── */}
          <section id="frequencia">
            <div className="section-marker">
              <span className="num">04</span>
              <div>
                <span className="label">Capítulo quatro · destaque</span>
                <h2 className="title">Frequência &amp; <em>média móvel</em></h2>
              </div>
            </div>

            <div className="reading">
              <p className="lede">Alcance no LinkedIn não é evento — é <em>tendência</em>. Trate seus números como uma média móvel de 7 dias e tudo muda.</p>

              <p className="dropcap">A maior parte do conselho público sobre LinkedIn ignora um fato fundamental: o algoritmo de 2026 não premia picos virais isolados, ele premia <em>atividade sustentada</em>. Se sua presença é descontínua, sua média móvel decai — e cada dia ausente custa o dobro: a queda de hoje vira a base do alcance de amanhã.</p>
            </div>

            <div className="stats">
              <div className="stat"><div className="v">3-4<small>/sem</small></div><div className="l">Posts/semana<br/>ponto ideal</div></div>
              <div className="stat"><div className="v">20-28<small>h</small></div><div className="l">Intervalo ideal<br/>entre posts</div></div>
              <div className="stat"><div className="v">60<small>min</small></div><div className="l">Janela crítica<br/>engajamento</div></div>
              <div className="stat"><div className="v">+62<small>%</small></div><div className="l">Quando qualidade<br/>&gt; quantidade</div></div>
            </div>

            <div className="figure">
              <div className="num">Figura 4.1 · gráfico-chave</div>
              <h3>Alcance ao longo de 30 dias</h3>
              <p>Comparação entre cadência consistente e postagem em rajadas. Ambos publicam o mesmo total de posts no mês.</p>

              <svg viewBox="0 0 760 320">
                <defs>
                  <linearGradient id="aCV3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6B7FFF" stopOpacity="0.3"/><stop offset="100%" stopColor="#6B7FFF" stopOpacity="0"/></linearGradient>
                  <linearGradient id="aBV3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#525252" stopOpacity="0.18"/><stop offset="100%" stopColor="#525252" stopOpacity="0"/></linearGradient>
                </defs>
                <g stroke="#1f1f1f" strokeWidth="1">
                  <line x1="60" y1="40" x2="720" y2="40"/><line x1="60" y1="100" x2="720" y2="100"/>
                  <line x1="60" y1="160" x2="720" y2="160"/><line x1="60" y1="220" x2="720" y2="220"/>
                  <line x1="60" y1="280" x2="720" y2="280"/>
                </g>
                <g fontFamily="Space Grotesk, sans-serif" fontSize="10" fill="#525252" textAnchor="end" fontWeight="600">
                  <text x="52" y="44">100%</text><text x="52" y="104">75%</text><text x="52" y="164">50%</text><text x="52" y="224">25%</text><text x="52" y="284">0%</text>
                </g>
                <line x1="60" y1="280" x2="720" y2="280" stroke="#404040" strokeWidth="1.5"/>
                <g fontFamily="Space Grotesk" fontSize="10" fill="#525252" textAnchor="middle" fontWeight="600">
                  <text x="60" y="305">Dia 1</text><text x="280" y="305">Dia 10</text><text x="500" y="305">Dia 20</text><text x="720" y="305">Dia 30</text>
                </g>
                <path d="M 60,160 L 80,90 L 100,200 L 130,235 L 160,260 L 200,265 L 240,150 L 270,95 L 300,210 L 340,250 L 380,265 L 420,270 L 460,140 L 490,80 L 520,200 L 560,245 L 600,265 L 640,272 L 680,275 L 720,270" fill="none" stroke="#a1a1a1" strokeWidth="2.5"/>
                <path d="M 60,160 L 80,90 L 100,200 L 130,235 L 160,260 L 200,265 L 240,150 L 270,95 L 300,210 L 340,250 L 380,265 L 420,270 L 460,140 L 490,80 L 520,200 L 560,245 L 600,265 L 640,272 L 680,275 L 720,270 L 720,280 L 60,280 Z" fill="url(#aBV3)"/>
                <path d="M 60,200 C 130,180 200,160 280,140 C 360,120 440,90 520,75 C 600,65 680,55 720,45" fill="none" stroke="#6B7FFF" strokeWidth="3"/>
                <path d="M 60,200 C 130,180 200,160 280,140 C 360,120 440,90 520,75 C 600,65 680,55 720,45 L 720,280 L 60,280 Z" fill="url(#aCV3)"/>
                <g fill="#6B7FFF">
                  <circle cx="100" cy="195" r="3"/><circle cx="160" cy="190" r="3"/><circle cx="220" cy="172" r="3"/><circle cx="280" cy="140" r="3"/>
                  <circle cx="340" cy="125" r="3"/><circle cx="400" cy="108" r="3"/><circle cx="460" cy="92" r="3"/><circle cx="520" cy="75" r="3"/>
                  <circle cx="580" cy="68" r="3"/><circle cx="640" cy="60" r="3"/><circle cx="700" cy="50" r="3"/>
                </g>
                <g fill="#a1a1a1"><circle cx="80" cy="90" r="3"/><circle cx="270" cy="95" r="3"/><circle cx="490" cy="80" r="3"/></g>
                <text x="710" y="46" fontFamily="Fraunces, serif" fontStyle="italic" fontSize="14" fill="#6B7FFF" textAnchor="end" fontWeight="500">+148% alcance</text>
                <text x="710" y="265" fontFamily="Fraunces, serif" fontStyle="italic" fontSize="14" fill="#a1a1a1" textAnchor="end" fontWeight="500">-31% no mês</text>
              </svg>

              <div className="legend">
                <span className="key"><span className="dot" style={{ background: "#6B7FFF" }}></span>Cadência consistente</span>
                <span className="key"><span className="dot" style={{ background: "#a1a1a1" }}></span>Postagem em rajada</span>
              </div>
            </div>

            <div className="reading">
              <h3><span className="num">4.1</span> Por que atividade diária importa (mesmo sem postar)</h3>
              <p>Presença diária é diferente de postagem diária. O algoritmo rastreia atividade através de:</p>
              <ul>
                <li><strong>Comentários em posts de outros</strong> — sinaliza membro ativo.</li>
                <li><strong>Reações e compartilhamentos</strong> — atividade de superfície que mantém visibilidade.</li>
                <li><strong>Visualizações de perfil e DMs</strong> — comportamento de relacionamento.</li>
              </ul>
              <p>Se não puder publicar, comente em <strong>5 a 10 posts por dia</strong>. Sua média móvel se mantém alta — e seus próprios posts terão distribuição maior quando publicar.</p>

              <blockquote className="pullquote">Pular uma semana reseta a distribuição. O algoritmo precisa de 10 a 14 dias pra reestabelecer sua base.</blockquote>

              <h3><span className="num">4.2</span> Cadência semanal recomendada</h3>
            </div>

            <div className="figure">
              <div className="num">Figura 4.2</div>
              <h3>A semana ideal — agenda de presença</h3>
              <p>Mistura de tipos de conteúdo, distribuição equilibrada e atividade diária mínima.</p>
              <div className="cadence">
                <div className="day high"><span className="name">Seg</span><span className="activity">Post longo</span><span className="detail">Story · âncora da semana</span></div>
                <div className="day med"><span className="name">Ter</span><span className="activity">Post curto</span><span className="detail">Pergunta · enquete</span></div>
                <div className="day high"><span className="name">Qua</span><span className="activity">Post longo</span><span className="detail">How-to · framework</span></div>
                <div className="day med"><span className="name">Qui</span><span className="activity">Post curto</span><span className="detail">Reflexão · curadoria</span></div>
                <div className="day high"><span className="name">Sex</span><span className="activity">Post longo</span><span className="detail">Recap · liderança</span></div>
                <div className="day"><span className="name">Sáb</span><span className="activity">Engajar</span><span className="detail">Comentários em pares</span></div>
                <div className="day"><span className="name">Dom</span><span className="activity">Engajar</span><span className="detail">Mínimo 10 min</span></div>
              </div>
            </div>

            <div className="reading">
              <h3><span className="num">4.3</span> O que o algoritmo de 2026 realmente recompensa</h3>
              <p>O algoritmo migrou de <em>alcance viral</em> para <em>profundidade e autoridade</em>. Reescreva sua noção de sucesso:</p>
            </div>

            <div className="figure">
              <div className="num">Figura 4.3</div>
              <h3>A nova matemática do engajamento</h3>
              <p>O peso relativo de cada tipo de interação mudou. Tempo de leitura e comentários ganharam.</p>
              <div className="weight">
                <div className="row">
                  <span className="l">1 leitura<br/>30 segundos</span>
                  <div className="bars"><div className="bar"><div className="fill" style={{ width: "100%" }}></div></div><span className="vs">&gt;</span><div className="bar r"><div className="fill" style={{ width: "18%" }}></div></div></div>
                  <span className="r">50 curtidas<br/>rápidas</span>
                </div>
                <div className="row">
                  <span className="l">50 comentários<br/>genuínos</span>
                  <div className="bars"><div className="bar"><div className="fill" style={{ width: "100%" }}></div></div><span className="vs">&gt;</span><div className="bar r"><div className="fill" style={{ width: "22%" }}></div></div></div>
                  <span className="r">500 curtidas<br/>passivas</span>
                </div>
                <div className="row">
                  <span className="l">Resposta autor<br/>1ª hora</span>
                  <div className="bars"><div className="bar"><div className="fill" style={{ width: "100%" }}></div></div><span className="vs">&gt;</span><div className="bar r"><div className="fill" style={{ width: "30%" }}></div></div></div>
                  <span className="r">Resposta no<br/>dia seguinte</span>
                </div>
                <div className="row">
                  <span className="l">Nicho consistente<br/>(profundidade)</span>
                  <div className="bars"><div className="bar"><div className="fill" style={{ width: "100%" }}></div></div><span className="vs">&gt;</span><div className="bar r"><div className="fill" style={{ width: "35%" }}></div></div></div>
                  <span className="r">Apelo viral<br/>amplo</span>
                </div>
              </div>
            </div>

            <div className="callout gold">
              <strong>Regra prática.</strong> Crie um <em>hábito diário de 15 minutos</em> no LinkedIn. Adicione 3 horários fixos de publicação por semana. Acompanhe seu alcance semana-a-semana — ele deve subir gradualmente, nunca em pico-e-queda.
            </div>
          </section>

          {/* ───── 05 ───── */}
          <section id="sinais">
            <div className="section-marker">
              <span className="num">05</span>
              <div>
                <span className="label">Capítulo cinco</span>
                <h2 className="title">Sinais de <em>compra</em></h2>
              </div>
            </div>

            <div className="reading">
              <p className="dropcap">Reconhecer sinais de compra é a diferença entre prospecção fria e conversa relevante. Cada interação carrega informação — e algumas são <em>mais quentes</em> que outras.</p>
            </div>

            <div className="figure">
              <div className="num">Figura 5.1</div>
              <h3>Funil de sinais — frio → quente</h3>
              <p>Hierarquia ordenada por intenção de conversão. Atue do topo pra baixo.</p>
              <div className="funnel">
                <div className="stage"><span className="id">01</span><span className="name">Visualização de perfil <small>industria/cargo relevante</small></span><span className="strength s5">Quente</span></div>
                <div className="stage"><span className="id">02</span><span className="name">Inscrição em newsletter <small>interesse profundo</small></span><span className="strength s5">Quente</span></div>
                <div className="stage"><span className="id">03</span><span className="name">Inscrição em email externo <small>via link do perfil</small></span><span className="strength s4">Forte</span></div>
                <div className="stage"><span className="id">04</span><span className="name">Engajamento frequente <small>comentários repetidos</small></span><span className="strength s4">Forte</span></div>
                <div className="stage"><span className="id">05</span><span className="name">Menção em conteúdo <small>valoriza expertise</small></span><span className="strength s3">Médio</span></div>
                <div className="stage"><span className="id">06</span><span className="name">Novo seguidor <small>interesse passivo</small></span><span className="strength s2">Tépido</span></div>
                <div className="stage"><span className="id">07</span><span className="name">Seguidor da página <small>awareness</small></span><span className="strength s1">Frio</span></div>
              </div>
            </div>

            <div className="reading">
              <h3>Ações por nível</h3>
              <ul>
                <li><strong>Quente:</strong> mensagem personalizada em até 24h. Ofereça insight ou conversa, não pitch.</li>
                <li><strong>Forte:</strong> nutra com conteúdo exclusivo segmentado.</li>
                <li><strong>Médio:</strong> agradeça, engaje publicamente, monitore evolução.</li>
                <li><strong>Tépido / Frio:</strong> mantenha cadência regular. Eles voltarão sozinhos.</li>
              </ul>
            </div>
          </section>

          {/* ───── 06 ───── */}
          <section id="vendas">
            <div className="section-marker">
              <span className="num">06</span>
              <div>
                <span className="label">Capítulo seis</span>
                <h2 className="title">Conversão de <em>vendas</em></h2>
              </div>
            </div>

            <div className="reading">
              <p className="dropcap">Cada elemento do perfil pode (e deve) puxar a conversão. <em>Atrito mata; clareza converte.</em> Sete vetores que você controla:</p>
            </div>

            <div className="checklist">
              <div className="row"><div className="num">01</div><div className="body"><strong>Link no topo do perfil</strong><span>Direcione tráfego com link direto. &ldquo;Acesse [link] para uma consultoria grátis.&rdquo;</span></div><div className="impact">↑ Tráfego</div></div>
              <div className="row"><div className="num">02</div><div className="body"><strong>Seção em destaque (oferta)</strong><span>eBooks, estudos de caso, lead magnets. Evidência tangível.</span></div><div className="impact">↑ Lead</div></div>
              <div className="row"><div className="num">03</div><div className="body"><strong>Calendly em destaque</strong><span>Linkar Calendly elimina troca de mensagens.</span></div><div className="impact">↑ Booking</div></div>
              <div className="row"><div className="num">04</div><div className="body"><strong>Contato acessível</strong><span>Email, telefone, WhatsApp/Messenger.</span></div><div className="impact">↓ Atrito</div></div>
              <div className="row"><div className="num">05</div><div className="body"><strong>CTAs claros</strong><span>&ldquo;Me chama no inbox&rdquo;, &ldquo;Veja nossa oferta em [link]&rdquo;.</span></div><div className="impact">↑ Click</div></div>
              <div className="row"><div className="num">06</div><div className="body"><strong>LinkedIn Live &amp; Áudio</strong><span>Real-time converte mais que conteúdo passivo.</span></div><div className="impact">↑ Autoridade</div></div>
              <div className="row"><div className="num">07</div><div className="body"><strong>DMs personalizadas</strong><span>Começam uma conversa, não um pitch agressivo.</span></div><div className="impact">↑ Conexão</div></div>
            </div>

            <div className="ctas">
              <div className="cta"><div className="g">→</div><div><h4>Inbound</h4><p>Featured + link bem posicionado captura leads.</p></div></div>
              <div className="cta"><div className="g">⇄</div><div><h4>Conversa</h4><p>DM + Calendly tira atrito de agendamento.</p></div></div>
              <div className="cta"><div className="g">↑</div><div><h4>Autoridade</h4><p>Live, áudio, thought leadership posicionam você.</p></div></div>
              <div className="cta"><div className="g">★</div><div><h4>Prova</h4><p>Cases, depoimentos e oferta clara fecham.</p></div></div>
            </div>
          </section>

          {/* ───── 07 ───── */}
          <section id="engajamento">
            <div className="section-marker">
              <span className="num">07</span>
              <div>
                <span className="label">Capítulo sete</span>
                <h2 className="title">Estratégia de <em>engajamento</em></h2>
              </div>
            </div>

            <div className="reading">
              <p className="dropcap">Engajamento é mão dupla. Se você só publica, o algoritmo trata você como anunciante — não como membro. Estratégia de engajamento separa contas que <em>postam</em> de contas que <em>crescem</em>.</p>

              <h3><span className="num">7.1</span> Mire +10 comentários por post</h3>
              <ul>
                <li>Crie conteúdo envolvente (insights, notícias, experiência pessoal).</li>
                <li>Use visuais (imagens, infográficos, vídeos).</li>
                <li>Termine com CTA convidando à opinião ou experiência.</li>
              </ul>

              <h3><span className="num">7.2</span> Comente no próprio post (3+)</h3>
              <ul>
                <li>Esclareça pontos.</li>
                <li>Compartilhe recursos adicionais.</li>
                <li>Agradeça à audiência.</li>
              </ul>

              <h3><span className="num">7.3</span> Lista de pares: engaje diariamente</h3>
              <ul>
                <li>Identifique figuras influentes, concorrentes, colegas.</li>
                <li>Curta, comente, compartilhe diariamente.</li>
                <li>Co-crie artigos ou webinars conjuntos.</li>
              </ul>

              <h3><span className="num">7.4</span> Lista de clientes: engaje quando relevante</h3>
              <ul>
                <li>Segmente clientes por indústria/serviços.</li>
                <li>Engaje genuinamente, agregando valor real.</li>
                <li>Ofereça conteúdo exclusivo (relatórios, whitepapers).</li>
              </ul>

              <h3><span className="num">7.5</span> Reaproveite conteúdo de bom desempenho</h3>
              <ul>
                <li>Identifique posts de maior engajamento.</li>
                <li>Reformate (artigo → infográfico, webinar → vídeos curtos).</li>
                <li>Atualize antes de repostar.</li>
              </ul>

              <h3><span className="num">7.6</span> Trate comentários como mini-posts</h3>
              <ul>
                <li>Adicione valor (perspectiva diferente ou insight extra).</li>
                <li>Seja conciso.</li>
                <li>Engaje com outros comentaristas.</li>
              </ul>

              <h3><span className="num">7.7</span> Convide ao engajamento com perguntas</h3>
              <ul>
                <li>Faça perguntas abertas.</li>
                <li>Use enquetes para tendências da indústria.</li>
                <li>Reconheça e dê follow-up nas respostas.</li>
              </ul>
            </div>
          </section>

          {/* ───── 08 ───── */}
          <section id="do-dont">
            <div className="section-marker">
              <span className="num">08</span>
              <div>
                <span className="label">Capítulo oito · síntese</span>
                <h2 className="title">Faça &amp; <em>Não Faça</em></h2>
              </div>
            </div>

            <div className="reading">
              <p className="lede">Toda regra desta edição condensada em duas colunas — leia este painel mensalmente.</p>
            </div>

            <div className="dodonts">
              <div className="col do">
                <h3><span className="ic">✓</span>Faça</h3>
                <ul>
                  <li><strong>Atualize o perfil mensalmente</strong> — reflita conquistas e habilidades.</li>
                  <li><strong>Escolha e domine seu nicho</strong> — especialização te destaca.</li>
                  <li><strong>Encontre um ritmo de conteúdo</strong> — consistência constrói confiança.</li>
                  <li><strong>Coloque o cliente no centro</strong> — conteúdo que resolve problemas.</li>
                  <li><strong>Identifique aceleradores</strong> — webinars, enquetes, formatos novos.</li>
                  <li><strong>Deixe sua oferta cristalina</strong> — elimine ambiguidade.</li>
                  <li><strong>Aproveite a jornada</strong> — engaje com líderes, aprenda diariamente.</li>
                </ul>
              </div>
              <div className="col dont">
                <h3><span className="ic">✗</span>Não Faça</h3>
                <ul>
                  <li><strong>Não envie convites com pitch</strong> — personalize, mencione interesses.</li>
                  <li><strong>Não use o perfil como anúncio</strong> — foque em valor.</li>
                  <li><strong>Não automatize prospecção em massa</strong> — qualidade vence.</li>
                  <li><strong>Não use pods de engajamento</strong> — algoritmo detecta e penaliza.</li>
                  <li><strong>Não roube conteúdo</strong> — sempre dê crédito.</li>
                  <li><strong>Não sequestre posts</strong> — engaje genuinamente.</li>
                  <li><strong>Não trate como qualquer rede social</strong> — mantenha tom profissional.</li>
                </ul>
              </div>
            </div>

            <div className="callout">
              <strong>Em uma frase.</strong> O LinkedIn premia quem aparece com consistência, escreve para humanos, otimiza para o algoritmo, e <em>conversa</em> mais do que vende.
            </div>
          </section>

          <div className="sources">
            <h3>Fontes &amp; referências</h3>
            <ol>
              <li><a href="https://web.archive.org/web/20250325191645/https://generouswork.com/comprehensive-guide-to-using-linkedin/" target="_blank" rel="noopener noreferrer">Comprehensive Guide to Using LinkedIn — Generous Work (arquivado, 2025)</a></li>
              <li><a href="https://buffer.com/resources/how-often-to-post-on-linkedin/" target="_blank" rel="noopener noreferrer">How Often Should You Post on LinkedIn — Buffer (2026)</a></li>
              <li><a href="https://sproutsocial.com/insights/linkedin-algorithm/" target="_blank" rel="noopener noreferrer">How the LinkedIn Algorithm Works — Sprout Social (2026)</a></li>
              <li><a href="https://blog.linkboost.co/linkedin-posting-frequency-best-practices-2026/" target="_blank" rel="noopener noreferrer">LinkedIn Posting Frequency — LinkBoost (2026)</a></li>
              <li><a href="https://www.growwithghost.io/blog/linkedin-algorithm-2026-what-changed-and-how-to-adapt-300-posts-tested/" target="_blank" rel="noopener noreferrer">LinkedIn Algorithm 2026 (300+ posts tested) — Grow with Ghost</a></li>
            </ol>
          </div>

          <footer className="colophon">
            LP-2026-01 · LinkedIn Playbook · Fraunces + Space Grotesk
          </footer>

        </main>
      </div>
    </div>
  );
}
