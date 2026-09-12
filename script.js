// =====================================================
// MENU MOBILE
// =====================================================

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});


// =====================================================
// ANO DO RODAPÉ
// =====================================================

document.getElementById("year").textContent =
  new Date().getFullYear();


// =====================================================
// PROJETOS
// =====================================================
//
// Para adicionar um novo projeto:
//
// 1. Copie um dos projetos abaixo.
// 2. Cole depois dele.
// 3. Altere as informações.
// 4. Coloque a imagem na pasta correta.
//
// Não precisa alterar o HTML.
//
// =====================================================


const projects = [

  // ===================================================
  // REDES
  // ===================================================

  {
    category: "redes",

    title: "Configuração de DHCP",

    description:
      "Simulação de uma rede local utilizando roteador, switch e computadores clientes, com distribuição automática de endereços IP através do DHCP.",

    image: "imagens/projetos/dhcp.png",

    technologies: [
      "DHCP",
      "IPv4",
      "LAN"
    ],

    file:
      "https://github.com/gabriellyheber22/estudos_de_redes/tree/main/configuracao-dhcp"
  },


  {
    category: "redes",

    title: "Configuração de HTTP Server",

    description:
      "Configuração de uma rede cliente-servidor com servidor HTTP, switch e computador cliente para testar a comunicação através de um serviço web.",

    image: "imagens/projetos/http-server.png",

    technologies: [
      "HTTP",
      "Servidor",
      "IPv4"
    ],

    file:
      "https://github.com/gabriellyheber22/estudos_de_redes/tree/main/configuracao-http-server"
  },


  {
    category: "redes",

    title: "Rede SOHO",

    description:
      "Projeto de infraestrutura de rede para um pequeno escritório, utilizando conexões cabeadas e Wi-Fi, computadores, notebook, smartphone e impressora.",

    image: "imagens/projetos/rede-soho.png",

    technologies: [
      "SOHO",
      "Wi-Fi",
      "LAN"
    ],

    file:
      "https://github.com/gabriellyheber22/estudos_de_redes/tree/main/configuracao-rede-soho"
  },


  {
    category: "redes",

    title: "Rede Corporativa",

    description:
      "Projeto de uma rede corporativa estruturada em camadas, separando núcleo, distribuição e acesso para diferentes setores da infraestrutura.",

    image: "imagens/projetos/rede-corporativa.png",

    technologies: [
      "Core",
      "Distribuição",
      "Acesso"
    ],

    file:
      "https://github.com/gabriellyheber22/estudos_de_redes/tree/main/rede-corporativa"
  },


  {
    category: "redes",

    title: "Redes em Camadas",

    description:
      "Simulação de uma rede estruturada em camadas com testes de conectividade utilizando ICMP para verificar a comunicação entre os dispositivos.",

    image: "imagens/projetos/redes-em-camadas.png",

    technologies: [
      "ICMP",
      "Ping",
      "Roteamento"
    ],

    file:
      "https://github.com/gabriellyheber22/estudos_de_redes/tree/main/redes-em-camadas"
  },


  // ===================================================
  // FRONT-END
  // ===================================================
  //
  // DESATIVADO POR ENQUANTO.
  //
  // Quando começar a desenvolver projetos Front-end,
  // basta retirar os comentários e adicionar os projetos.
  //
  // ===================================================

  /*
  {
    category: "frontend",

    title: "Meu primeiro site",

    description:
      "Site desenvolvido utilizando HTML, CSS e JavaScript.",

    image: "imagens/projetos/meu-site.png",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],

    link:
      "https://seu-site.com"
  },
  */

];


// =====================================================
// GERADOR DOS CARDS
// =====================================================

function createProjectCard(project) {

  const technologies = project.technologies
    .map(technology => `<span>${technology}</span>`)
    .join("");


  // Se o projeto tiver um arquivo .pkt
  // cria botão de download.

  let action = "";

  if (project.file) {

    action = `
      <a
        href="${project.file}"
        target="_blank"
        class="project-link">

        Ver projeto →

      </a>
    `;

  }


  // Se futuramente o projeto tiver um site
  // cria botão para abrir o site.

  if (project.link) {

    action = `
      <a
        href="${project.link}"
        target="_blank"
        rel="noopener noreferrer"
        class="project-link">

        Ver projeto →

      </a>
    `;

  }


  return `

    <article class="project">

      <div class="project-image">

        <img
          src="${project.image}"
          alt="${project.title}"
          loading="lazy"
        >

      </div>


      <div class="project-body">

        <p class="tag">
          ${project.category === "redes"
            ? "REDES"
            : "FRONT-END"}
        </p>


        <h3>
          ${project.title}
        </h3>


        <p>
          ${project.description}
        </p>


        <div class="project-tags">

          ${technologies}

        </div>


        ${action}

      </div>

    </article>

  `;
}


// =====================================================
// CARREGAR PROJETOS DE REDES
// =====================================================

function loadProjects(category, containerId) {

  const container =
    document.getElementById(containerId);

  if (!container) return;


  const filteredProjects =
    projects.filter(project =>
      project.category === category
    );


  container.innerHTML =
    filteredProjects
      .map(createProjectCard)
      .join("");
}


// =====================================================
// INICIALIZAÇÃO
// =====================================================

loadProjects(
  "redes",
  "network-projects"
);


// =====================================================
// FRONT-END
// =====================================================
//
// Quando habilitar a seção Front-end no HTML,
// descomente também:
//
// loadProjects(
//   "frontend",
//   "frontend-projects"
// );
//
// =====================================================