# Pacto Sombrio — Glossário Completo

> Referência completa de todos os itens, mecânicas e entidades do jogo.
> Arquivo fonte: `index.html`

---

## Personagens

| ID | Nome | Subtítulo | HP | Ouro | Custo (Almas) | Descrição |
|----|------|-----------|-----|------|---------------|-----------|
| `pacto` | PACTO | Guerreiro Equilibrado | 80 | 99 | Desbloqueado | Força + Bloqueio |
| `sombra` | SOMBRA | Assassino Venenoso | 70 | 99 | 150 | Veneno + Furtividade |
| `cinza` | CINZA | Mago Sombrio | 65 | 80 | 300 | Poderes + Canalização |

### Decks Iniciais

- **Pacto**: 5× Golpe (id 0), 4× Defesa (id 1), 1× Pancada (id 2)
- **Sombra**: 4× Esquiva (id 36), 4× Punhal Furtivo (id 37), 2× Nuvem Tóxica (id 38)
- **Cinza**: 4× Barreira Mental (id 46), 4× Canalizar (id 47), 2× Drenar Alma (id 48)

---

## Cartas

### Cartas Iniciais (Pacto)

| ID | Nome | Tipo | Custo | Descrição | Campos |
|----|------|------|-------|-----------|--------|
| 0 | Golpe | attack | 1 | Causa 6 de dano. | dmg: 6, tgt: 'one' |
| 1 | Defesa | skill | 1 | Ganha 5 de bloqueio. | blk: 5 |
| 2 | Pancada | attack | 2 | Causa 8 de dano. Aplica 2 Vulnerável. | dmg: 8, vuln: 2, tgt: 'one' |

### Cartas Comuns

| ID | Nome | Tipo | Custo | Descrição | Campos |
|----|------|------|-------|-----------|--------|
| 3 | Clivagem | attack | 1 | Causa 8 de dano a TODOS. | dmg: 8, tgt: 'all' |
| 4 | Onda de Ferro | attack | 1 | Causa 5 de dano. Ganha 5 de bloqueio. | dmg: 5, blk: 5, tgt: 'one' |
| 5 | Golpe de Punho | attack | 1 | Causa 9 de dano. Compra 1 carta. | dmg: 9, draw: 1, tgt: 'one' |
| 6 | Golpe Duplo | attack | 1 | Causa 5 de dano 2 vezes. | dmg: 5, hits: 2, tgt: 'one' |
| 7 | Raiva | attack | 0 | Causa 6 de dano. Adiciona cópia ao descarte. | dmg: 6, tgt: 'one', special: 'anger' |
| 8 | Golpe Selvagem | attack | 1 | Causa 12 de dano. Embaralha 1 Ferida. | dmg: 12, tgt: 'one', special: 'wildStrike' |
| 9 | Cabeçada | attack | 1 | Causa 9 de dano. | dmg: 9, tgt: 'one' |
| 10 | Sacudir | skill | 1 | Ganha 8 de bloqueio. Compra 1 carta. | blk: 8, draw: 1 |
| 11 | Fibra | skill | 1 | Ganha 7 de bloqueio. Exaure 1 carta aleatória. | blk: 7, special: 'trueGrit' |
| 12 | Transe de Batalha | skill | 0 | Compra 3 cartas. | draw: 3 |
| 13 | Grito de Guerra | skill | 0 | Compra 2 cartas. | draw: 2 |
| 14 | Intimidar | skill | 0 | Aplica 1 Fraqueza a TODOS. | weak: 1, tgt: 'all' |
| 27 | Inflamar | power | 1 | Ganha 2 de Força. | gainStr: 2 |

### Cartas Incomuns

| ID | Nome | Tipo | Custo | Descrição | Campos |
|----|------|------|-------|-----------|--------|
| 15 | Lâmina Pesada | attack | 2 | Causa 14 de dano. Força conta 3x. | dmg: 14, tgt: 'one', special: 'heavyBlade' |
| 16 | Fúria | attack | 1 | Causa 8 de dano. +5 a cada uso. | dmg: 8, tgt: 'one', special: 'rampage' |
| 17 | Gancho | attack | 2 | Causa 13 de dano. 1 Fraqueza. 1 Vulnerável. | dmg: 13, weak: 1, vuln: 1, tgt: 'one' |
| 18 | Carnificina | attack | 2 | Etérea. Causa 20 de dano. | dmg: 20, tgt: 'one', ethereal: true |
| 19 | Armadura Espectral | skill | 1 | Ganha 10 de bloqueio. | blk: 10 |
| 20 | Barreira de Fogo | skill | 2 | Ganha 12 de bloqueio. 4 de Espinhos. | blk: 12, special: 'flameBarrier' |
| 21 | Sangria | skill | 0 | Perde 3 HP. Ganha 2 de Energia. | selfDmg: 3, gainEnergy: 2 |
| 22 | Oferenda | skill | 0 | Perde 6 HP. Ganha 2 Energia. Compra 3. | selfDmg: 6, gainEnergy: 2, draw: 3 |
| 28 | Metalizar | power | 1 | Fim do turno: +3 de bloqueio. | special: 'metallicize' |
| 31 | Sem Dor | power | 1 | Ao exaurir: +3 de bloqueio. | special: 'feelNoPain' |

### Cartas Raras

| ID | Nome | Tipo | Custo | Descrição | Campos |
|----|------|------|-------|-----------|--------|
| 23 | Maça | attack | 3 | Causa 32 de dano. | dmg: 32, tgt: 'one' |
| 24 | Ceifador | attack | 2 | Causa 4 de dano a TODOS. Cura = dano causado. | dmg: 4, tgt: 'all', special: 'reaper' |
| 25 | Fogo Demoníaco | attack | 2 | Exaure a mão. 7 de dano por carta. | dmg: 7, tgt: 'one', special: 'fiendFire' |
| 26 | Impenetrável | skill | 2 | Ganha 30 de bloqueio. | blk: 30 |
| 29 | Forma Demoníaca | power | 3 | Início do turno: +2 de Força. | special: 'demonForm' |
| 30 | Barricada | power | 3 | Bloqueio não diminui. | special: 'barricade' |
| 32 | Brutalidade | power | 0 | Início do turno: -1 HP, compra 1. | special: 'brutality' |

### Cartas de Status

| ID | Nome | Tipo | Custo | Descrição | Campos |
|----|------|------|-------|-----------|--------|
| 33 | Ferida | status | — | Não pode ser jogada. | unplayable: true |
| 34 | Queimadura | status | — | Não pode ser jogada. 2 de dano no fim do turno. | unplayable: true, special: 'burn' |

### Cartas da Sombra

| ID | Nome | Tipo | Raridade | Custo | Descrição | Campos |
|----|------|------|----------|-------|-----------|--------|
| 35 | Adaga Venenosa | attack | starter_sombra | 1 | Causa 4 de dano. Aplica 3 Veneno. | dmg: 4, poison: 3, tgt: 'one' |
| 36 | Esquiva | skill | starter_sombra | 1 | Ganha 6 de bloqueio. +1 Furtividade. | blk: 6, special: 'stealth' |
| 37 | Punhal Furtivo | attack | starter_sombra | 0 | Causa 3 de dano. +2 se Furtivo. | dmg: 3, tgt: 'one', special: 'stealthStrike' |
| 38 | Nuvem Tóxica | skill | sombra_common | 2 | Aplica 5 Veneno a TODOS. | poison: 5, tgt: 'all' |
| 39 | Lâmina Envenenada | attack | sombra_common | 1 | Causa 7 de dano. Aplica 2 Veneno. | dmg: 7, poison: 2, tgt: 'one' |
| 40 | Passos Silenciosos | skill | sombra_common | 1 | Ganha 8 bloqueio. Compra 1. | blk: 8, draw: 1 |
| 41 | Emboscada | attack | sombra_uncommon | 2 | Causa 15 de dano. Furtividade dobra dano. | dmg: 15, tgt: 'one', special: 'ambush' |
| 42 | Veneno Letal | power | sombra_uncommon | 2 | Veneno inimigo +2 por turno. | special: 'lethalPoison' |
| 43 | Sombra Mortal | attack | sombra_rare | 3 | Causa 6 dano por Veneno no alvo. | dmg: 0, tgt: 'one', special: 'deathShadow' |
| 44 | Manto das Sombras | power | sombra_rare | 3 | Início turno: +2 Furtividade. | special: 'shadowCloak' |

### Cartas do Cinza

| ID | Nome | Tipo | Raridade | Custo | Descrição | Campos |
|----|------|------|----------|-------|-----------|--------|
| 45 | Faísca Arcana | attack | starter_cinza | 1 | Causa 6 de dano. Compra 1. | dmg: 6, draw: 1, tgt: 'one' |
| 46 | Barreira Mental | skill | starter_cinza | 1 | Ganha 7 de bloqueio. | blk: 7 |
| 47 | Canalizar | skill | starter_cinza | 0 | Perde 4 HP. Compra 2. | selfDmg: 4, draw: 2, special: 'channel' |
| 48 | Drenar Alma | attack | cinza_common | 1 | Causa 8 de dano. Cura 3 HP. | dmg: 8, healSelf: 3, tgt: 'one' |
| 49 | Explosão Arcana | attack | cinza_common | 2 | Causa 12 dano a TODOS. | dmg: 12, tgt: 'all' |
| 50 | Escudo Etéreo | skill | cinza_common | 1 | Ganha 10 bloqueio. Etérea. | blk: 10, ethereal: true |
| 51 | Ritual Sombrio | power | cinza_uncommon | 2 | Perde 5 HP. +3 Força permanente. | selfDmg: 5, gainStr: 3 |
| 52 | Pacto de Sangue | skill | cinza_uncommon | 0 | Perde 8 HP. Ganha 3 Energia. | selfDmg: 8, gainEnergy: 3 |
| 53 | Nova Arcana | attack | cinza_rare | 4 | Causa 50 de dano. Exaure. | dmg: 50, tgt: 'one', exhaust: true |
| 54 | Transcendência | power | cinza_rare | 3 | Início turno: Compra 2 extras. | special: 'transcend' |

### Sistema de Upgrade

Ao melhorar uma carta na Fogueira, `upgraded = true`. Efeitos:
- Nome recebe sufixo `+`
- `dmg` e `blk` multiplicados por 1.3 (arredondado para cima)
- `draw` +1
- `vuln` e `weak` +1

---

## Inimigos

| Key | Nome | HP Base | Especial | Padrão de Ações |
|-----|------|---------|----------|-----------------|
| `imp` | Imp | 28 | — | Ataque 7; Bloqueio 5 |
| `cultist` | Cultista | 42 | — | Buff STR +2; Ataque 6 |
| `skeleton` | Esqueleto | 18 | — | Ataque 8; Ataque 12 |
| `nob` | Nob | 72 | enrage | Ataque 8; Ataque 16; Ataque 8 |
| `demonKnight` | Cavaleiro Demônio | 150 | — | Ataque 12; Ataque 20; Buff STR +3; Ataque 30 |
| `darkElf` | Elfo Negro | 48 | — | Ataque 11; Multi 6×2; Debuff WEAK 1 + VUL 1 |
| `chosen` | Escolhido | 60 | — | Debuff WEAK 2; Ataque 13 |
| `snake` | Serpente | 25 | — | Ataque 7; Ataque 10 |
| `wraith` | Espectro | 85 | — | Ataque 14; Debuff WEAK 1 + VUL 1; Ataque 20 |
| `lich` | Lich | 200 | — | Ataque 15; Buff STR +5; Ataque 25; Buff STR +5 |
| `gargoyle` | Gárgula | 75 | — | Ataque 12; Bloqueio 15; Ataque 18 |
| `soulEater` | Devorador | 90 | — | Ataque 10; Ataque 15 (lifesteal) |
| `zealot` | Zelote | 35 | — | Ataque 9; Ataque 13 |
| `dragon` | Dragão | 130 | — | Ataque 20; Multi 8×3; Buff STR +3; Ataque 30 |
| `theVoid` | O Vazio | 280 | — | Ataque 18; Debuff WEAK 2 + VUL 2; Ataque 30; Multi 10×3; Buff STR +5 |

> HP em runtime varia ±10% (`makeEnemy`: `floor(hp * random(0.9, 1.1))`).
> Ações repetem ciclicamente pelo array `pattern[]`.

---

## Relíquias

| ID | Nome | Descrição | Cor |
|----|------|-----------|-----|
| `burningBlood` | Sangue Ardente | Cura 6 HP ao fim do combate. | `#cc3333` |
| `vajra` | Vajra | +1 de Força permanente. | `#cc6633` |
| `anchor` | Âncora | 10 de Bloqueio no início do combate. | `#3366cc` |
| `hornCleat` | Grampo de Chifre | 14 de Bloqueio no turno 2. | `#6666aa` |
| `lantern` | Lanterna | +1 Energia no turno 1. | `#f39c12` |
| `bagOfPrep` | Bolsa de Preparo | Compra 2 extras no turno 1. | `#886633` |
| `oddMushroom` | Cogumelo Estranho | +1 turno de Vulnerável. | `#66aa44` |
| `penNib` | Pena Afiada | A cada 10 ataques: dano dobrado. | `#444466` |
| `threadNeedle` | Agulha e Linha | +4 Destreza no início do combate. | `#aaaacc` |
| `demonSkull` | Crânio Demoníaco | +50% dano quando HP < 50%. | `#882222` |

---

## Poções

| ID | Nome | Descrição | Cor | Uso |
|----|------|-----------|-----|-----|
| `heal` | Poção de Cura | Cura 30% do HP máximo. | `#33cc33` | Qualquer momento |
| `block` | Poção de Bloqueio | Ganha 12 de Bloqueio. | `#3366cc` | Apenas em combate |
| `strength` | Poção de Força | +2 Força neste combate. | `#cc3333` | Apenas em combate |
| `energy` | Poção de Energia | Ganha 2 de Energia. | `#f39c12` | Apenas em combate |

> Máximo de 3 poções. Clique no slot durante o combate para usar.

---

## Eventos

| Nome | Descrição | Escolhas |
|------|-----------|----------|
| Santuário Sombrio | Um altar sombrio pulsa com energia maligna... | Oferecer sangue (`darkShrine`); Ignorar (`leave`) |
| Parede Viva | Uma parede pulsante... | Remover carta (`removeCard`); Ganhar 50 ouro (`gold50`) |
| Biblioteca Antiga | Estantes empoeiradas... | Estudar / ganhar carta (`gainCard`); Descansar / curar 20% (`heal20`) |
| Poço Místico | Águas luminescentes... | Beber (`mysticPool`); Ignorar (`leave`) |
| Altar Negro | Figuras encapuzadas... | Sacrificar (`darkAltar`); Ganhar 80 ouro (`gold80`) |

---

## Upgrades Permanentes (Altar das Almas)

| ID | Categoria | Nome | Nível Máx | Custos (Almas) | Efeito |
|----|-----------|------|-----------|----------------|--------|
| `hp1` | Vitalidade | +5 HP Inicial | 5 | 15, 25, 40, 60, 80 | +5 HP máximo por nível |
| `gold1` | Vitalidade | +15 Ouro Inicial | 3 | 20, 35, 55 | +15 ouro inicial por nível |
| `potion1` | Vitalidade | Poção Extra | 1 | 50 | Começa com Poção de Cura |
| `heal1` | Vitalidade | +3 HP pós-combate | 3 | 30, 50, 75 | +3 HP após cada combate por nível |
| `cardChoice` | Arsenal | +1 Escolha de Carta | 1 | 80 | +1 opção nas recompensas |
| `energy1` | Arsenal | +1 Energia 1° turno | 1 | 100 | +1 energia no primeiro turno |
| `removeCard` | Arsenal | Remover carta grátis/Ato | 1 | 60 | Remoção gratuita por ato |
| `startRelic` | Relíquias | Relíquia Inicial Aleatória | 1 | 120 | Começa com uma relíquia aleatória |

---

## Troféus

### Bronze (10)

| ID | Nome | Descrição |
|----|------|-----------|
| `firstBlood` | Primeiro Sangue | Vença seu primeiro combate. |
| `cardCollector` | Colecionador | Tenha 15+ cartas no deck. |
| `goldHoarder` | Avarento | Acumule 200+ de ouro em uma run. |
| `potionUser` | Alquimista Iniciante | Use uma poção. |
| `firstForge` | Ferreiro | Melhore uma carta na fogueira. |
| `firstRelic` | Achado Raro | Obtenha uma relíquia. |
| `shopVisit` | Cliente Fiel | Compre algo na loja. |
| `survivor` | Sobrevivente | Sobreviva com 5 HP ou menos. |
| `tenKills` | Caçador | Derrote 10 inimigos no total. |
| `firstRun` | Primeiro Passo | Complete uma run. |

### Prata (8)

| ID | Nome | Descrição |
|----|------|-----------|
| `actClear1` | Além do Primeiro Ato | Complete o Ato 1. |
| `actClear2` | Profundezas | Complete o Ato 2. |
| `eliteSlayer` | Matador de Elites | Derrote 5 elites no total. |
| `relicHoarder` | Coleção Sagrada | Tenha 5+ relíquias em uma run. |
| `hundredKills` | Centurião | Derrote 100 inimigos no total. |
| `bigDamage` | Golpe Devastador | Cause 50+ dano em um único ataque. |
| `unlockChar` | Novo Aliado | Desbloqueie um personagem. |
| `altarUpgrade5` | Devoto | Compre 5 upgrades no Altar. |

### Ouro (5)

| ID | Nome | Descrição |
|----|------|-----------|
| `victoryPacto` | Pacto Selado | Vença a run com Pacto. |
| `victorySombra` | Sombra Eterna | Vença a run com Sombra. |
| `victoryCinza` | Cinzas ao Vento | Vença a run com Cinza. |
| `thousandKills` | Lenda Sombria | Derrote 1000 inimigos no total. |
| `allRelics` | Relicário Completo | Colete todas as 10 relíquias. |

### Platina (1)

| ID | Nome | Descrição |
|----|------|-----------|
| `platinum` | Pacto Sombrio: Platina | Desbloqueie todos os outros troféus. |

> Cores dos tiers: Bronze `#cd7f32`, Prata `#c0c0c0`, Ouro `#ffd700`, Platina `#00ccff`

---

## Status e Efeitos

### Buffs do Jogador

| Código | Nome | Descrição |
|--------|------|-----------|
| STR | Força | Aumenta o dano de cada ataque. |
| DEX | Destreza | Aumenta o bloqueio ganho por cartas. |
| THN | Espinhos | Reflete dano ao ser atacado. |
| FURT | Furtividade | Bônus de dano no próximo ataque furtivo. |
| BARRICADE | Barricada | Bloqueio persiste entre turnos. |
| MTL | Metalizar | Ganha bloqueio automaticamente no fim do turno. |
| DEM | Forma Demoníaca | Ganha Força extra no início de cada turno. |
| MANTO | Manto das Sombras | Ganha Furtividade no início de cada turno. |
| VEN.L | Veneno Letal | Veneno dos inimigos aumenta por turno. |
| TRANS | Transcendência | Compra cartas extras no início do turno. |

### Debuffs do Jogador

| Código | Nome | Descrição |
|--------|------|-----------|
| VUL | Vulnerável | Recebe 50% mais dano. Dura X turnos. |
| WEAK | Fraco | Causa 25% menos dano. Dura X turnos. |

### Status dos Inimigos

| Status | Descrição |
|--------|-----------|
| Bloqueio | Reduz dano recebido. Reseta por turno. |
| Força (STR) | Aumenta dano de ataques do inimigo. |
| Vulnerável | Inimigo recebe 50% mais dano. |
| Fraco | Inimigo causa 25% menos dano. |
| Veneno (☠) | Perde HP no início de cada turno. Stack diminui 1 por turno. |

---

## Tipos de Nó do Mapa

| Ícone | Tipo | Descrição |
|-------|------|-----------|
| ⚔ | `combat` | Batalha contra inimigos normais |
| 💀 | `elite` | Inimigos mais fortes, melhores recompensas |
| 👑 | `boss` | Chefe do ato |
| ? | `event` | Evento aleatório com escolhas |
| $ | `shop` | Loja para comprar cartas, relíquias e poções |
| 🔥 | `rest` | Fogueira: curar HP ou melhorar carta |

---

## Tipos de Carta

| Tipo | Código | Cor | Descrição |
|------|--------|-----|-----------|
| Ataque | `attack` | Vermelho | Causa dano aos inimigos |
| Habilidade | `skill` | Azul | Bloqueio, buffs ou efeitos |
| Poder | `power` | Amarelo | Efeito permanente no combate (jogue uma vez) |
| Status | `status` | — | Cartas negativas que entopem o deck |

---

## Estrutura do Jogo

- **3 Atos** com ~15 andares cada
- **Mapa procedural** com múltiplos caminhos
- **Combate por turnos** com sistema de energia/cartas
- **Progressão roguelite**: Almas Sombrias como moeda permanente
- **Meta-progressão**: Altar das Almas (upgrades) + desbloqueio de personagens
- **Troféus**: 24 conquistas + Platina
