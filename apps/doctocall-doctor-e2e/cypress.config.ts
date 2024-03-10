import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run doctocall-doctor:serve:development',
        production: 'nx run doctocall-doctor:serve:production',
      },
      ciWebServerCommand: 'nx run doctocall-doctor:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
