
import '@pankod/refine-mui';

declare module '@pankod/refine-mui' {
  interface Theme {
    status?: {
      danger?: string;
    };
  }

  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}
