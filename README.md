# jansouza.com

Homepage estática de jansouza.com. HTML puro, sem build.

```
index.html            página principal (CSS e JS inline)
assets/avatar.jpg     foto
favicon.*             ícones (mesmos do garden)
```

## Adicionar um link

Em `index.html`, copie um bloco `<li>` dentro de `<ul class="links">` e troque
`href`, ícone, título e descrição.

## Testar localmente

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Deploy no Cloudflare Pages

Opção 1, via Git (deploy automático a cada push):

1. Suba esta pasta para um repositório no GitHub.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Framework preset: **None**. Build command: vazio. Build output directory: `/`.
4. Depois do primeiro deploy: Custom domains → adicionar `jansouza.com`
   (e `www.jansouza.com`, se quiser).

Opção 2, upload direto pela CLI:

```bash
npx wrangler pages deploy . --project-name=jansouza-home
```

Se o DNS de `jansouza.com` já está no Cloudflare, o registro do domínio custom é
criado automaticamente. O `garden.jansouza.com` continua apontando para onde está hoje.
