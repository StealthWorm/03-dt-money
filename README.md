# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

***npx json-server server.json -p 3333 (define port) -w (watch modifications) -d 500 (set delay to transactions)***
***npx eslint src --ext .tsx,.ts (para rodar o lint em arquivos com extensão especifica)***

**Por que um componente renderiza?**

- Hooks changed(mudou estado, contexto, reducer);
- Props changed (mudou propriedades);
- Parent rerendered (componente pai renderizou);

**Qual o fluxo de renderização?**

1. O react recria o HTML da interface do componente
2. Compara a versão HTML recriada com a versão anterior
3. SE mudou alguma coisa ,ele reescreve o HTML na tela

**Memo: (só é recomendado em componentes com HTML muito pesado, pois senão acaba sendo muito custoso)**
0. Hooks changed, Props changed(deep comparison)
0.1. Comparar a versão anterior dos hooks e props
0.2  SE mudou algo, ele vai permitir a nova renderização.

**o hook "useMemo()" funciona como o "memo", porem ao invés de memorizar componentes eles memoriza vaiáveis**
**0 hook "useCallback()" funciona para memorizar funções, evitando renderizações adicionais**
