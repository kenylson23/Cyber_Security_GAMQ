# Solução: Problema "client/index.html" não encontrado

## Problemas Identificados

### 1. Problema de Path
O erro indica que o build não conseguiu encontrar o módulo de entrada `client/index.html`.

### 2. Problema de BigInt (ES2015)
Erro: "Big integer literals are not available in the configured target environment (es2015)"

## Causas Raiz
1. Problema de configuração nos caminhos do Vite quando executado no ambiente do Netlify
2. Target JavaScript muito antigo (es2015) não suporta BigInt literals usados pelas dependências modernas

## Solução Implementada

### 1. Configurações Corrigidas

**Arquivo**: `vite.config.minimal.ts`
- Caminhos absolutos usando `__dirname` e `fileURLToPath`
- Root configurado para `client` directory
- Output directory configurado para `dist/public`

**Arquivo**: `netlify.toml`
- Build command corrigido: `npx vite build --config vite.config.minimal.ts --mode production`
- Publish directory: `dist/public`

### 2. Estrutura de Arquivos Verificada
```
projeto/
├── client/
│   ├── index.html ✅ (existe)
│   ├── src/
│   └── public/
│       └── _redirects ✅ (para SPA routing)
├── vite.config.minimal.ts ✅ (configuração corrigida)
├── netlify.toml ✅ (comando de build corrigido)
└── build-netlify.sh ✅ (script de teste local)
```

### 3. Configurações Otimizadas
- **Minificação**: esbuild (mais rápido que terser)
- **Target**: es2020 (suporte para BigInt e features modernas)
- **Chunks**: Inline dinâmico (reduz complexidade)
- **Sourcemap**: Desabilitado (build mais rápido)
- **BigInt Support**: Habilitado via target es2020

## Como Resolver no Netlify

### Opção 1: Deploy Automático
1. Faça commit das mudanças
2. Conecte o repositório ao Netlify
3. As configurações do `netlify.toml` serão aplicadas automaticamente

### Opção 2: Configuração Manual
Se o automático falhar, configure manualmente no painel do Netlify:

**Build settings:**
- Build command: `npx vite build --config vite.config.minimal.ts --mode production`
- Publish directory: `dist/public`
- Node version: 18

### Opção 3: Teste Local
Execute o script para verificar se o build funciona:
```bash
./build-netlify.sh
```

## Arquivos de Configuração Disponíveis

1. **`vite.config.turbo.ts`** - Ultra-rápida, sem minificação (recomendada)
2. **`vite.config.minimal.ts`** - Configuração equilibrada
3. **`vite.config.fast.ts`** - Configuração básica
4. **`vite.config.netlify.ts`** - Configuração com chunking manual

## Verificações Pós-Deploy

Após o deploy bem-sucedido, verifique:
- ✅ Site carrega corretamente
- ✅ Navegação interna funciona (SPA routing)
- ✅ Simulador 3D funciona
- ✅ Formulário de contato funciona
- ✅ Design responsivo funciona

## Troubleshooting

### Se ainda houver erro de path:
1. Verifique se o arquivo `client/index.html` existe no repositório
2. Confirme que o repositório foi sincronizado corretamente
3. Verifique os logs de build no painel do Netlify

### Se o build demorar muito:
- Use `vite.config.fast.ts` (sem minificação)
- Aumente o timeout no Netlify (se possível)

### Se o site não carregar:
- Verifique se `client/public/_redirects` existe
- Confirme que `dist/public` é o diretório correto