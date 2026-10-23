import type { DiagramSpec } from './types';

export const tradingAgent: DiagramSpec = {
  id: 'ta',
  title: 'AI Trading Signal Agent architecture',
  desc:
    'A data agent fetches candles, plain code extracts market structure, an LLM analysis agent produces bias and levels using lessons retrieved from pgvector, and a decision agent outputs a signal or no trade. Signals are stored in PostgreSQL. In the learning loop, a backtest engine replays each signal on later candles, a reflection step uses an LLM to turn outcomes into lessons, and the lessons are embedded and stored in pgvector for later runs.',
  width: 770,
  height: 380,
  zones: [{ x: 395, y: 150, w: 367, h: 222, label: 'LEARNING LOOP' }],
  boxes: [
    { x: 20, y: 40, w: 150, h: 50, label: 'Data agent', sub: 'candles, 5 timeframes' },
    { x: 205, y: 40, w: 165, h: 50, label: 'Features', sub: 'structure, plain code' },
    { x: 410, y: 40, w: 160, h: 50, label: 'Analysis agent', sub: 'LLM: bias, levels', hot: true },
    { x: 605, y: 40, w: 150, h: 50, label: 'Decision agent', sub: 'signal / no trade', hot: true },
    { x: 410, y: 180, w: 160, h: 50, label: 'pgvector', sub: 'lessons, notes' },
    { x: 605, y: 180, w: 150, h: 50, label: 'Signal store', sub: 'PostgreSQL' },
    { x: 625, y: 300, w: 135, h: 50, label: 'Backtest', sub: 'replays history' },
    { x: 410, y: 300, w: 150, h: 50, label: 'Reflection', sub: 'LLM writes lessons', hot: true },
  ],
  edges: [
    { d: 'M170,65 H203' },
    { d: 'M370,65 H408' },
    { d: 'M570,65 H603', hot: true },
    { d: 'M490,180 V92', labels: [{ x: 498, y: 140, text: 'similar setups', anchor: 'start' }] },
    { d: 'M680,90 V178' },
    { d: 'M692,230 V298' },
    { d: 'M625,325 H562', labels: [{ x: 593, y: 318, text: 'results' }] },
    { d: 'M485,300 V232', hot: true, labels: [{ x: 493, y: 270, text: 'embed', anchor: 'start' }] },
  ],
};
