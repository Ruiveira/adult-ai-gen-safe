import "react";

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements {
      // Se precisar de elementos customizados no futuro, adicione aqui
      // Por enquanto, só estende para evitar erros em div, h1, etc.
      [elemName: string]: any;
    }
  }
}
