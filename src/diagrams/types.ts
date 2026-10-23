export interface Box {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
  /** Accent outline: the parts that involve an LLM or the key control. */
  hot?: boolean;
  dashed?: boolean;
}

export interface Edge {
  /** SVG path data. Arrowhead is drawn at the end. */
  d: string;
  hot?: boolean;
  dashed?: boolean;
  /** Arrowhead at both ends. */
  both?: boolean;
  labels?: { x: number; y: number; text: string; anchor?: 'start' | 'middle' | 'end' }[];
}

export interface Zone {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
}

export interface DiagramSpec {
  id: string;
  title: string;
  desc: string;
  width: number;
  height: number;
  zones?: Zone[];
  boxes: Box[];
  edges: Edge[];
}
