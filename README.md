# Pacto Sombrio

Um roguelite de cartas baseado em turnos, inspirado em Slay the Spire, rodando inteiramente no navegador em um único arquivo HTML.

## Como Jogar

Abra `index.html` em qualquer navegador moderno. Não necessita de servidor, dependências externas ou instalação.

### Controles

- **Mouse** — Navegar menus, selecionar cartas e inimigos
- **Clique em carta** — Seleciona para jogar (ataques de alvo único pedem clique no inimigo)
- **Fim do Turno** — Encerra sua vez e inicia o turno inimigo
- **Mapa** — Clique nos nós acessíveis para avançar

## Sistemas do Jogo

### Combate
- Sistema de turnos: Jogador → Inimigos
- 3 de Energia por turno, compra 5 cartas
- Bloqueio reseta a cada turno (exceto com Barricada)
- Efeitos de status: Força, Destreza, Vulnerável, Fraqueza, Veneno, Espinhos

### Cartas (~35 cartas jogáveis)
- **Ataque** (vermelho): Causam dano aos inimigos
- **Habilidade** (azul): Concedem bloqueio, compra, e efeitos utilitários
- **Poder** (dourado): Efeitos permanentes durante o combate
- **Status**: Ferida e Queimadura (não jogáveis)
- Raridades: Inicial, Comum, Incomum, Rara

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
Itens passivos permanentes coletados em elites, chefes e eventos. Exemplos: Sangue Ardente (cura pós-combate), Vajra (+1 Força), Forma Demoníaca (Força escalante).

### Eventos (5)
Encontros narrativos com escolhas que afetam HP, ouro, baralho e relíquias.

### Loja
- Comprar cartas (50-150g por raridade)
- Comprar relíquias (150-250g)
- Comprar poções (50g)
- Remover carta do baralho (75g)

### Descanso
- **Descansar**: Cura 30% do HP máximo
- **Forjar**: Melhora uma carta (+30% nos valores)

## Arquitetura

### Arquivo Único
Todo o jogo reside em `index.html` (~3200 linhas):

```
HTML/CSS          → Canvas 1100×750 + estilo mínimo
IIFE (use strict) → Encapsula todo o código do jogo
```

### Estrutura do Código

| Seção | Responsabilidade |
|-------|-----------------|
| Audio System | Web Audio API com SFX procedural (8 efeitos) |
| Math Utilities | lerp, clamp, rand, shuffle, funções de easing |
| Tween System | Animações suaves com easing configurável |
| Particle System | Partículas para dano, bloqueio, cura, etc. |
| Floating Text | Números de dano flutuantes |
| Card Data | 35 definições de cartas com propriedades |
| Enemy Data | 15 tipos de inimigos com padrões de ação |
| Game State | Estado global + estado de combate separado |
| Map Generation | Grafo procedural de 15 andares por ato |
| Card Rendering | Renderização com gradientes, ícones e word-wrap |
| Enemy Rendering | Sprites procedurais distintos por tipo |
| Combat Logic | Cálculo de dano, bloqueio, efeitos especiais |
| Screen Renderers | Menu, Mapa, Combate, Loja, Evento, Descanso, Recompensas, Vitória, Derrota |
| Input Handling | Mouse move + click com máquina de estados |
| Game Loop | requestAnimationFrame + delta time (cap 0.1s) |

### Decisões Técnicas

- **Canvas 2D puro**: Sem WebGL, frameworks ou bibliotecas
- **Arte procedural**: Todos os visuais desenhados via Canvas API
- **Áudio procedural**: Web Audio API com osciladores para SFX
- **Delta time**: Todas as animações baseadas em tempo real, não frames
- **Máquina de estados**: Transições com fade entre telas
- **Card UID**: Cada instância de carta tem ID único para rastreamento

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
