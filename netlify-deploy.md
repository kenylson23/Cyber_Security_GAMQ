# Deploy no Netlify - Kenylson-Tech

## Configuração Automática

O projeto está configurado para deploy automático no Netlify com os seguintes arquivos:

### Arquivos de Configuração
- ✅ `netlify.toml` - Configuração principal do Netlify
- ✅ `vite.config.netlify.ts` - Configuração otimizada do Vite
- ✅ `build-netlify.sh` - Script de build customizado
- ✅ `_redirects` - Redirecionamentos para SPA
- ✅ `.nvmrc` - Versão do Node.js

### Comandos de Build
- **Build Command**: `npm run build:netlify`
- **Publish Directory**: `dist/public`
- **Node Version**: 18

## Passos para Deploy

### 1. Conectar ao Netlify
1. Acesse [netlify.com](https://netlify.com)
2. Faça login na sua conta
3. Clique em "New site from Git"
4. Conecte seu repositório GitHub/GitLab

### 2. Configuração no Netlify
As configurações serão detectadas automaticamente via `netlify.toml`:

```toml
[build]
  publish = "dist/public"
  command = "npm run build:netlify"

[build.environment]
  NODE_VERSION = "18"
```

### 3. Build Automático
O Netlify executará automaticamente:
1. `npm install` - Instalar dependências
2. `npm run build:netlify` - Build otimizado
3. Deploy dos arquivos de `dist/public`

## Funcionalidades Incluídas

### ✅ Otimizações de Build
- Chunking manual para melhor performance
- Minificação automática
- Remoção de console.log em produção
- Cache otimizado para assets

### ✅ SPA Routing
- Redirecionamentos configurados para client-side routing
- Suporte completo para navegação interna

### ✅ Performance
- Headers de cache configurados
- Compressão automática
- Otimização de imagens

### ✅ Compatibilidade
- Build otimizado para todas as dependências
- Suporte para Three.js e animações 3D
- Compatibilidade com todas as bibliotecas UI

## Funcionalidades do Site

### 🎯 Recursos Principais
- Hero section com animações interativas
- Simulador 3D de segurança com 4 sistemas
- Seções de serviços e sobre a empresa
- Formulário de contato com validação
- Design responsivo dourado e preto
- Navegação suave entre seções

### 📱 Responsividade
- Layout otimizado para mobile e desktop
- Simulador 3D responsivo
- Controles touch-friendly
- Navegação mobile otimizada

## Solução de Problemas

### Se o build falhar:
1. Verifique se o Node.js está na versão 18
2. Confirme que todas as dependências estão instaladas
3. Execute `./build-netlify.sh` localmente para testar

### Logs de Build
- Acesse o painel do Netlify
- Vá em "Deploys" > "Deploy log"
- Verifique erros específicos nos logs

## Comandos Úteis

```bash
# Testar build localmente
./build-netlify.sh

# Build manual
npm run build:netlify

# Verificar arquivos gerados
ls -la dist/public/
```

## Observações
- O formulário de contato funciona apenas no frontend (sem envio de email)
- Todas as animações 3D funcionam corretamente
- Site totalmente estático, sem necessidade de servidor