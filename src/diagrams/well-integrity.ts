import type { DiagramSpec } from './types';

export const wellIntegrity: DiagramSpec = {
  id: 'wims',
  title: 'Well Integrity Management System architecture',
  desc:
    'SCADA sends pressure readings over OPC UA to a NestJS API, which stores them in PostgreSQL and streams readings and alarms to the React app over SSE; operators acknowledge alarms back to the API. Rule checks read history from PostgreSQL every 15 minutes and feed a risk model that writes ratings and due dates back. The AI assistant receives questions from the React app, queries PostgreSQL through read-only tools scoped to the user role, and runs on a local Qwen3 model with a cloud fallback outside the site.',
  width: 770,
  height: 450,
  zones: [{ x: 8, y: 10, w: 754, h: 350, label: 'ON-PREMISE SITE' }],
  boxes: [
    { x: 20, y: 40, w: 140, h: 50, label: 'SCADA', sub: 'pressure sensors' },
    { x: 220, y: 40, w: 170, h: 50, label: 'NestJS API', sub: 'OPC UA client' },
    { x: 560, y: 40, w: 180, h: 50, label: 'React 19 app', sub: 'Keycloak SSO' },
    { x: 220, y: 170, w: 170, h: 50, label: 'PostgreSQL', sub: 'readings, audit log' },
    { x: 20, y: 170, w: 135, h: 50, label: 'Rule checks', sub: 'every 15 min' },
    { x: 20, y: 280, w: 135, h: 50, label: 'Risk model', sub: 'engineering rules' },
    { x: 560, y: 170, w: 180, h: 56, label: 'AI assistant', sub: 'LangGraph · FastAPI', hot: true },
    { x: 560, y: 290, w: 180, h: 50, label: 'Qwen3, local', sub: 'primary model', hot: true },
    { x: 560, y: 385, w: 180, h: 50, label: 'Cloud fallback', sub: 'Azure OpenAI · Anthropic', dashed: true },
  ],
  edges: [
    { d: 'M160,65 H218', labels: [{ x: 190, y: 58, text: 'OPC UA' }] },
    { d: 'M390,58 H558', labels: [{ x: 475, y: 51, text: 'SSE: readings, alarms' }] },
    { d: 'M560,78 H392', labels: [{ x: 475, y: 96, text: 'acknowledge' }] },
    { d: 'M305,90 V168', labels: [{ x: 313, y: 134, text: 'store', anchor: 'start' }] },
    { d: 'M220,195 H157', labels: [{ x: 188, y: 188, text: 'history' }] },
    { d: 'M87,220 V278' },
    { d: 'M155,305 H305 V222', labels: [{ x: 230, y: 298, text: 'ratings, due dates' }] },
    { d: 'M650,90 V168', hot: true, labels: [{ x: 658, y: 134, text: 'question', anchor: 'start' }] },
    {
      d: 'M560,198 H392',
      hot: true,
      labels: [
        { x: 475, y: 191, text: 'read-only tools' },
        { x: 475, y: 214, text: 'scoped to user role' },
      ],
    },
    { d: 'M650,226 V288', hot: true },
    { d: 'M740,198 H754 V410 H742', dashed: true, labels: [{ x: 748, y: 375, text: 'fallback', anchor: 'end' }] },
  ],
};
