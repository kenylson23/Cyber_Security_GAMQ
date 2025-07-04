# Deploy no Vercel - Kenylson-Tech

## Pré-requisitos
- Conta no Vercel
- Repositório Git com o código

## Passos para Deploy

### 1. Configuração Automática
O projeto já está configurado com:
- ✅ `vercel.json` - Configuração de build
- ✅ `.vercelignore` - Arquivos para ignorar
- ✅ SPA routing configurado

### 2. Deploy no Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Faça login na sua conta
3. Clique em "New Project"
4. Importe o repositório Git
5. Vercel detectará automaticamente as configurações
6. Clique em "Deploy"

### 3. Configurações Automáticas
- **Build Command**: `NODE_ENV=production npx vite build --config vite.config.prod.ts --mode production`
- **Output Directory**: `dist/public`
- **Node Version**: 18.x ou superior
- **Install Command**: `npm install`

### 3.1 Configurações Manuais (se necessário)
Se o deploy automático falhar, configure manualmente:
1. Build Command: `NODE_ENV=production npx vite build --config vite.config.prod.ts --mode production`
2. Output Directory: `dist/public`
3. Install Command: `npm install`
4. Node.js Version: 18.x

### 4. Resultado
- Site estático totalmente funcional
- Todas as animações 3D funcionando
- Design responsivo para mobile e desktop
- Simulador de segurança interativo

## Observações
- O formulário de contato é apenas frontend (não envia emails)
- Todas as funcionalidades 3D funcionam no navegador
- Site otimizado para performance e SEO

## Solução de Problemas

### Se o build falhar com erro "Command exited with 1":

**Opção 1: Configuração Padrão (vercel.json)**
- Arquivo já configurado no projeto
- Build command otimizado para produção

**Opção 2: Configuração Alternativa**
Se a primeira opção falhar:
1. Renomeie `vercel.json` para `vercel-backup.json`
2. Renomeie `vercel-alternative.json` para `vercel.json`
3. Faça novo deploy

**Opção 3: Configuração Manual no Vercel**
1. Acesse configurações do projeto no Vercel
2. Configure:
   - Build Command: `cd client && npx vite build --outDir ../dist/public --emptyOutDir`
   - Output Directory: `dist/public`
   - Install Command: `npm install`
   - Node.js Version: 18.x

### Verificações Gerais:
- Node version no Vercel (usar 18.x)
- Variáveis de ambiente se necessário
- Logs de build no dashboard do Vercel
- Se persistir erro, usar configuração manual