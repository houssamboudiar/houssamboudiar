import type { DiagramSpec } from './types';

export const mobilityOne: DiagramSpec = {
  id: 'm1',
  title: 'Mobility One architecture',
  desc:
    'Inside a TypeScript monorepo, shared validation rules feed the Angular app, which calls the backend through a typed client generated from OpenAPI. Today the client talks to a stand-in NestJS backend that follows the same conventions; later the same client points at the Spring Boot API with only a URL change. The Angular app and the Tauri desktop app both sign in through Keycloak, and the desktop app binds each session to a key in the PC TPM chip.',
  width: 770,
  height: 420,
  zones: [{ x: 8, y: 10, w: 502, h: 300, label: 'TYPESCRIPT MONOREPO' }],
  boxes: [
    { x: 30, y: 40, w: 200, h: 50, label: 'Shared rules', sub: 'validation' },
    { x: 30, y: 140, w: 200, h: 50, label: 'Angular app', sub: 'operator & user admin', hot: true },
    { x: 30, y: 240, w: 200, h: 50, label: 'OpenAPI client', sub: 'generated, typed' },
    { x: 290, y: 240, w: 200, h: 50, label: 'Stand-in NestJS', sub: 'same rules & conventions' },
    { x: 290, y: 350, w: 200, h: 50, label: 'Spring Boot API', sub: 'backend team', dashed: true },
    { x: 560, y: 40, w: 190, h: 50, label: 'Keycloak', sub: 'sign-in, roles' },
    { x: 560, y: 140, w: 190, h: 50, label: 'Tauri desktop app', sub: 'ticket offices', hot: true },
    { x: 560, y: 240, w: 190, h: 50, label: 'TPM chip', sub: 'key bound to this PC' },
  ],
  edges: [
    { d: 'M130,90 V138' },
    { d: 'M130,190 V238' },
    { d: 'M230,265 H288', labels: [{ x: 259, y: 258, text: 'now' }] },
    {
      d: 'M130,290 V375 H288',
      dashed: true,
      labels: [{ x: 210, y: 368, text: 'later: new URL' }],
    },
    { d: 'M230,155 H520 V65 H558', labels: [{ x: 375, y: 148, text: 'sign-in (OIDC)' }] },
    { d: 'M655,140 V92', labels: [{ x: 663, y: 120, text: 'sign-in', anchor: 'start' }] },
    {
      d: 'M655,190 V238',
      hot: true,
      labels: [{ x: 663, y: 219, text: 'bound to key', anchor: 'start' }],
    },
  ],
};
