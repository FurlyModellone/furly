# furly.dev

Sito di Furly: la home e una pagina per ogni app (Sheng e Xue), in inglese e italiano, nello stile Lacca
(lacca nera e foglia d'oro) di Loong, Sheng e Xue.

HTML, CSS e JS statici, senza build.

```
index.html          home: app, principi, chi sono, contatti
sheng/index.html    pagina di Sheng
xue/index.html      pagina di Xue
404.html            pagina non trovata (Cloudflare Pages la usa da sola)
_headers            intestazioni di sicurezza e cache per Cloudflare Pages
assets/style.css    temi e componenti
assets/site.js      lingua EN/IT (ricordata nel browser), comparse, easter egg
assets/*.png        icone delle app (da build/icon.png di Sheng e Xue)
```

## Lingua

Ogni testo c'è in tutte e due le lingue (`<span lang="en">` e `<span lang="it">`); il CSS mostra solo quella
scelta in `<html data-lang>`. Al primo accesso vale la lingua del browser, poi la scelta resta salvata.

## Anteprima

```bash
npx serve .
```

## Pubblicazione su Cloudflare Pages

Workers & Pages → Create → Pages → Connect to Git → repo `furly`, branch `main`.
Framework preset: **None**, build command: vuoto, output directory: `/`.
Poi Custom domains → `furly.dev`.
