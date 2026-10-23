import type { DiagramSpec } from './types';

export const supportOps: DiagramSpec = {
  id: 'so',
  title: 'Support-Ops AI Agent graph',
  desc:
    'A ticket is classified by the LLM, with a labelled keyword fallback. It routes to a read-only answer, to a plan, or to escalation. A planned action goes through a limit check in code: over the limit it is escalated, within the limit it reaches a human approval gate, and only after approval is the database written. A React UI streams the live trace over SSE and sends the reviewer decision to the approval gate.',
  width: 780,
  height: 440,
  boxes: [
    { x: 20, y: 150, w: 130, h: 50, label: 'Ticket', sub: 'customer request' },
    { x: 190, y: 150, w: 150, h: 50, label: 'Classify', sub: 'LLM, labelled fallback', hot: true },
    { x: 400, y: 40, w: 160, h: 50, label: 'Answer', sub: 'read-only reply' },
    { x: 400, y: 150, w: 160, h: 50, label: 'Plan', sub: 'proposed action' },
    { x: 400, y: 300, w: 160, h: 50, label: 'Escalate', sub: 'hand to a person' },
    { x: 600, y: 150, w: 150, h: 50, label: 'Limit check', sub: 'code: 14 days, $200' },
    { x: 600, y: 260, w: 150, h: 56, label: 'Human approval', sub: 'interrupt(), once', hot: true },
    { x: 600, y: 370, w: 150, h: 50, label: 'DB write', sub: 'trial or credit' },
    { x: 20, y: 370, w: 320, h: 50, label: 'React UI', sub: 'live trace over SSE · reviewer decides' },
  ],
  edges: [
    { d: 'M150,175 H188' },
    { d: 'M340,175 H370 V65 H398' },
    { d: 'M340,175 H398' },
    { d: 'M340,175 H370 V325 H398', labels: [{ x: 362, y: 290, text: 'legal, unclear', anchor: 'end' }] },
    { d: 'M560,175 H598' },
    { d: 'M615,200 V240 H480 V298', labels: [{ x: 548, y: 233, text: 'over limit' }] },
    { d: 'M675,200 V258', hot: true, labels: [{ x: 683, y: 234, text: 'within limit', anchor: 'start' }] },
    { d: 'M675,316 V368', hot: true, labels: [{ x: 683, y: 347, text: 'approved', anchor: 'start' }] },
    { d: 'M340,395 H580 V288 H598', dashed: true, labels: [{ x: 460, y: 388, text: 'approve / reject' }] },
  ],
};
