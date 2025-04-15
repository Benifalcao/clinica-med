
    // 2. Mostrar mensagem ao clicar nos links
  const mensagem = document.createElement("div");
  mensagem.id = "mensagem";
  mensagem.innerText = "Carregando seção...";
  mensagem.style.cssText = `
    display: none; position: fixed; top: 10px; left: 50%; transform: translateX(-50%);
    background-color: #004488; color: white; padding: 10px 20px; border-radius: 8px; z-index: 1000;
  `;
  document.body.appendChild(mensagem);
  
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      mensagem.style.display = "block";
      setTimeout(() => mensagem.style.display = "none", 1500);
    });
  });
  
  // 3. Botão de voltar ao topo
  const btnTopo = document.createElement("button");
  btnTopo.innerText = "↑";
  btnTopo.id = "btnTopo";
  btnTopo.style.cssText = `
    display: none; position: fixed; bottom: 20px; right: 20px;
    background-color: #004488; color: white; border: none;
    border-radius: 50%; padding: 10px 15px; cursor: pointer; z-index: 1000;
  `;
  document.body.appendChild(btnTopo);
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      btnTopo.style.display = "block";
    } else {
      btnTopo.style.display = "none";
    }
  });
  
  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  