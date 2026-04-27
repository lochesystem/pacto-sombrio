# Pacto Sombrio

Um roguelite de cartas baseado em turnos, inspirado em Slay the Spire, rodando inteiramente no navegador em um único arquivo HTML.

## Jogar Agora

- **Web**: [lochesystem.github.io/pacto-sombrio](https://lochesystem.github.io/pacto-sombrio/)
- **Android (APK)**: [Baixar na aba Releases](https://github.com/lochesystem/pacto-sombrio/releases/latest)

O APK é gerado automaticamente via GitHub Actions a cada atualização do jogo.

### Instalação do APK

1. Baixe o `app-release.apk` da página de Releases
2. No Android, permita "Instalar de fontes desconhecidas" nas configurações
3. Abra o APK para instalar — o jogo roda em fullscreen imersivo

## Controles

- **Mouse/Touch** — Navegar menus, selecionar cartas e inimigos
- **Clique em carta** — Seleciona para jogar (ataques de alvo único pedem clique no inimigo)
- **Fim do Turno** — Encerra sua vez e inicia o turno inimigo
- **Mapa** — Clique nos nós acessíveis para avançar
- **ESC** — Pausa | **H** — Ajuda (desktop)

## Personagens

| Personagem | Estilo | HP | Ouro |
|------------|--------|----|------|
| Pacto | Guerreiro equilibrado (Força + Bloqueio) | 80 | 99 |
| Sombra | Assassino (Veneno + Furtividade) | 70 | 99 |
| Cinza | Mago sombrio (Dano alto + Auto-dano) | 65 | 99 |

## Sistemas do Jogo

### Combate
- Sistema de turnos: Jogador → Inimigos
- 3 de Energia por turno, compra 5 cartas
- Bloqueio reseta a cada turno (exceto com Barricada)
- Efeitos de status: Força, Destreza, Vulnerável, Fraqueza, Veneno, Espinhos

### Cartas (~50 cartas jogáveis)
- **Ataque** (vermelho): Causam dano aos inimigos
- **Habilidade** (azul): Concedem bloqueio, compra, e efeitos utilitários
- **Poder** (dourado): Efeitos permanentes durante o combate
- **Status**: Ferida e Queimadura (não jogáveis)
- Raridades: Inicial, Comum, Incomum, Rara
- Cartas podem ser melhoradas na Forja (+30% nos valores)

### Mapa
- 3 Atos com 15 andares cada
- Tipos de nó: Combate, Elite, Evento, Loja, Descanso, Chefe
- Caminhos conectados com escolha de rota pelo jogador

### Inimigos
- **Ato 1**: Imp, Cultista, Esqueleto, Nob (elite), Cavaleiro Demônio (chefe)
- **Ato 2**: Elfo Negro, Escolhido, Serpente, Espectro (elite), Lich (chefe)
- **Ato 3**: Gárgula, Devorador, Zelote, Dragão (elite), O Vazio (chefe)
- Cada inimigo tem padrão de ações com intenções visíveis

### Relíquias (10)
Itens passivos permanentes coletados em elites, chefes e eventos:

| Relíquia | Efeito |
|----------|--------|
| 🩸 Sangue Ardente | Cura 6 HP ao fim do combate |
| ⚡ Vajra | +1 de Força permanente |
| ⚓ Âncora | 10 de Bloqueio no início do combate |
| 🛡 Grampo de Chifre | 14 de Bloqueio no turno 2 |
| 🔆 Lanterna | +1 Energia no turno 1 |
| 🎒 Bolsa de Preparo | Compra 2 extras no turno 1 |
| 🍄 Cogumelo Estranho | +1 turno de Vulnerável |
| ✒ Pena Afiada | A cada 10 ataques: dano dobrado |
| 🪡 Agulha e Linha | +4 Destreza no início do combate |
| 💀 Crânio Demoníaco | +50% dano quando HP < 50% |

### Poções (4)
Consumíveis de uso único durante o combate: Cura, Bloqueio, Força, Energia.

### Eventos (5)
Encontros narrativos com escolhas que afetam HP, ouro, baralho e relíquias.

### Loja
- Comprar cartas (50-150g por raridade)
- Comprar relíquias (150-250g)
- Comprar poções (50g)
- Remover carta do baralho (75g)

### Descanso
- **Descansar**: Cura 30% do HP máximo
- **Forjar**: Melhora uma carta (+30% nos valores, preview ao hover)

### Meta-progressão
- Troféus desbloqueáveis (Bronze, Prata, Ouro, Platina)
- Bestiário de inimigos encontrados
- Biblioteca de cartas (Cardex) com zoom
- Melhorias permanentes entre runs

## Arquitetura

### Arquivo Único
Todo o jogo reside em `index.html` (~10.600 linhas):

```
HTML/CSS          → Canvas responsivo + 100dvh + fullscreen API
JavaScript        → Encapsula todo o código do jogo
```

### Estrutura do Código

| Seção | Responsabilidade |
|-------|-----------------|
| Audio System | Web Audio API com SFX procedural (8 efeitos) + BGM em camadas |
| Math Utilities | lerp, clamp, rand, shuffle, funções de easing |
| Tween System | Animações suaves com easing configurável |
| Particle System | Partículas para dano, bloqueio, cura, etc. |
| Floating Text | Números de dano flutuantes |
| Card Data | ~50 definições de cartas com upgrade dinâmico |
| Enemy Data | 15 tipos de inimigos com padrões de ação |
| Relic Data | 10 relíquias com ícones emoji |
| Game State | Estado global + estado de combate separado |
| Map Generation | Grafo procedural de 15 andares por ato |
| Card Rendering | Renderização com gradientes, ícones e word-wrap |
| Enemy Rendering | Sprites procedurais distintos por tipo |
| Combat Logic | Cálculo de dano, bloqueio, efeitos especiais |
| Screen Renderers | Menu, Mapa, Combate, Loja, Evento, Descanso, Recompensas, Vitória, Derrota |
| Tutorial | Sistema guiado com spotlight e setas |
| Input Handling | Mouse + touch com máquina de estados |
| Game Loop | requestAnimationFrame + delta time (cap 0.1s) |

### Decisões Técnicas

- **Canvas 2D puro**: Sem WebGL, frameworks ou bibliotecas
- **Arte procedural**: Todos os visuais desenhados via Canvas API
- **Áudio procedural**: Web Audio API com osciladores para SFX
- **Delta time**: Todas as animações baseadas em tempo real, não frames
- **Máquina de estados**: Transições com fade entre telas
- **Card UID**: Cada instância de carta tem ID único para rastreamento
- **PWA**: Service worker + manifest para instalação como app
- **Fullscreen API**: Imersão total no mobile via touchend

### Android App

O diretório `android/` contém um projeto Android mínimo com WebView que carrega o jogo do GitHub Pages em fullscreen imersivo. O APK é gerado automaticamente pelo GitHub Actions (`.github/workflows/build-apk.yml`) a cada push que altere `index.html` ou `android/`.

### Paleta de Cores

| Elemento | Cor |
|----------|-----|
| Fundo | `#0a0a1a` |
| Painéis | `rgba(20,20,40,0.92)` |
| Ataque | `#cc3333` → `#661a1a` |
| Habilidade | `#3366cc` → `#1a3366` |
| Poder | `#cc9933` → `#664d1a` |
| HP | `#e74c3c` |
| Bloqueio | `#3498db` |
| Energia | `#f39c12` |
| Ouro | `#f4d03f` |
| Texto | `#e8e0d0` |
