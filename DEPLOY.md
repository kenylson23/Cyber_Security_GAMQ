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
- **Build Command**: `vite build`
- **Output Directory**: `dist/public`
- **Node Version**: 18.x ou superior

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
Se o build falhar, verifique:
- Node version no Vercel (usar 18.x)
- Variáveis de ambiente se necessário
- Logs de build no dashboard do Vercel