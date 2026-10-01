// Result tables from the Dream2Discern paper (Tables 1–3). Edit numbers here; the page reads this file.
// Cell format: [value, std|null, mark] — mark: 'b' best, 'u' second-best, '' none.
export const METRICS = [
  { key: 'AUROC', dir: 'up' }, { key: 'FPR95', dir: 'down' }, { key: 'wACC', dir: 'up' }, { key: 'TWA', dir: 'up' }
];

const c = (v, s = null, m = '') => [v, s, m];

export const MAIN = [
  { group: 'Open-weight LLM judges', rows: [
    { method: 'Qwen3-4B', af: [c(69.63), c(86.39), c(55.12), c(51.65)], ss: [c(81.07), c(82.41), c(50.46), c(49.12)] },
    { method: 'Qwen3-8B', af: [c(67.18), c(80.47), c(56.93), c(52.83)], ss: [c(84.95), c(88.89), c(62.96), c(53.08)] },
    { method: 'Qwen3-32B', af: [c(69.79), c(82.25), c(56.33), c(52.70)], ss: [c(90.70), c(70.37), c(58.80), c(52.31)] },
    { method: 'Llama3.2-3B-it', af: [c(59.60), c(90.53), c(54.22), c(51.21)], ss: [c(78.88), c(86.11), c(50.93), c(50.28)] },
    { method: 'Llama3.1-8B-it', af: [c(58.02), c(94.08), c(53.01), c(51.49)], ss: [c(83.49), c(76.85), c(50.00), c(49.56)] },
    { method: 'LlamaGuard3-8B', af: [c(57.45), c(94.08), c(54.22), c(50.07)], ss: [c(83.02), c(86.11), c(75.00), c(56.05)] },
  ]},
  { group: 'Closed-source LLM judges', rows: [
    { method: 'GPT-5.4', af: [c(50.53), c(99.41), c(45.48), c(37.53)], ss: [c(88.30), c(58.33), c(65.74), c(41.90)] },
    { method: 'Claude-Sonnet-4.6', af: [c(70.90), c(100.00), c(63.86), c(54.83)], ss: [c(95.58, null, 'b'), c(38.89, null, 'b'), c(87.04), c(56.79, null, 'u')] },
    { method: 'Grok-4.3', af: [c(71.57), c(95.27), c(65.96), c(52.34)], ss: [c(91.48), c(58.33), c(82.87), c(54.31)] },
    { method: 'Kimi-K2.7-Code', af: [c(73.57), c(100.00), c(68.67), c(54.43)], ss: [c(90.50), c(54.07), c(85.19), c(54.38)] },
  ]},
  { group: 'Token uncertainty', rows: [
    { method: 'Max Entropy-8B', af: [c(53.58), c(95.86), c(49.10), c(47.92)], ss: [c(53.70), c(90.74), c(49.54), c(48.87)] },
    { method: 'Avg. Entropy-8B', af: [c(66.20), c(90.53), c(49.70), c(47.26)], ss: [c(57.54), c(91.67), c(50.46), c(49.46)] },
    { method: 'Max NLL-8B', af: [c(45.20), c(97.63), c(51.20), c(48.27)], ss: [c(51.58), c(93.52), c(50.00), c(49.02)] },
    { method: 'Avg. NLL-8B', af: [c(48.09), c(99.41), c(54.52), c(50.48)], ss: [c(57.58), c(87.96), c(50.46), c(50.20)] },
  ]},
  { group: 'Failure auditors', rows: [
    { method: 'AgentDebug-8B', af: [c(56.78), c(87.57), c(51.81), c(48.73)], ss: [c(75.77), c(85.19), c(58.33), c(51.38)] },
    { method: 'AgentForesight-7B', af: [c(83.75), c(89.94), c(77.11), c(59.33)], ss: [c(83.37), c(77.78), c(79.17), c(56.13)] },
    { method: 'SAFE-Qwen3-4B', seeded: true, af: [c(94.76, 0.39), c(41.42, 3.13), c(84.74, 1.94), c(68.83, 0.81)], ss: [c(84.47, 0.72), c(63.27, 6.17), c(66.20, 5.09), c(52.40, 1.71)] },
    { method: 'SAFE-Qwen3-8B', seeded: true, af: [c(92.69, 0.81), c(55.62, 11.34), c(85.74, 1.22), c(66.57, 0.39)], ss: [c(79.45, 3.01), c(63.89, 10.43), c(61.73, 6.96), c(50.67, 1.55)] },
    { method: 'H&S-Qwen3-4B', seeded: true, af: [c(90.84, 1.26), c(72.98, 11.96), c(88.76, 1.14), c(70.27, 0.43)], ss: [c(85.02, 0.96), c(86.42, 5.66), c(70.99, 2.83), c(54.74, 1.33)] },
    { method: 'H&S-Qwen3-8B', seeded: true, af: [c(89.54, 0.57), c(89.15, 6.73), c(87.45, 1.42), c(69.01, 1.42)], ss: [c(81.58, 2.56), c(81.17, 7.54), c(69.75, 0.96), c(53.82, 0.69)] },
    { method: 'TRACES-Qwen3-4B', seeded: true, af: [c(91.98, 1.18), c(60.75, 16.25), c(88.35, 1.14), c(69.90, 1.38)], ss: [c(85.37, 2.72), c(59.88, 7.98), c(64.66, 2.28), c(52.45, 2.52)] },
    { method: 'TRACES-Qwen3-8B', seeded: true, af: [c(92.63, 0.64), c(65.88, 12.32), c(87.05, 1.04), c(69.91, 0.48)], ss: [c(79.25, 1.86), c(79.63, 12.04), c(70.83, 2.12), c(48.52, 2.66)] },
    { method: 'Dream2Discern-Qwen3-4B', ours: true, af: [c(95.45, 0.16, 'u'), c(38.86, 7.81, 'u'), c(90.96, 0.60, 'u'), c(72.61, 0.38, 'u')], ss: [c(93.62, 0.68), c(42.28, 2.33, 'u'), c(90.28, 0.46, 'b'), c(57.67, 0.35, 'b')] },
    { method: 'Dream2Discern-Qwen3-8B', ours: true, af: [c(95.82, 0.43, 'b'), c(31.95, 3.07, 'b'), c(91.47, 0.17, 'b'), c(73.45, 0.71, 'b')], ss: [c(93.95, 0.63, 'u'), c(53.09, 8.40), c(87.50, 0.93, 'u'), c(55.69, 1.10)] },
  ]},
];

// Table 2 — Llama backbones. Metrics: AUROC, wACC, TWA.
export const LLAMA = {
  'AFTraj-2K': {
    'Llama3.2-3B-it': [
      { method: 'SAFE', v: [c(94.62, 0.09, 'u'), c(85.54, 4.64, 'u'), c(69.12, 2.94, 'u')] },
      { method: 'H&S', v: [c(91.46, 0.67), c(83.23, 4.52), c(61.98, 5.25)] },
      { method: 'TRACES', v: [c(91.88, 0.57), c(85.54, 4.44, 'u'), c(66.73, 4.30)] },
      { method: 'Dream2Discern', ours: true, v: [c(95.62, 0.61, 'b'), c(91.27, 0.30, 'b'), c(73.38, 0.18, 'b')] },
    ],
    'Llama3.1-8B-it': [
      { method: 'SAFE', v: [c(94.64, 0.37, 'u'), c(86.75, 2.17), c(68.89, 1.65)] },
      { method: 'H&S', v: [c(88.55, 0.93), c(71.29, 7.58), c(56.96, 4.66)] },
      { method: 'TRACES', v: [c(92.64, 1.30), c(88.15, 2.26, 'u'), c(69.75, 2.16, 'u')] },
      { method: 'Dream2Discern', ours: true, v: [c(95.91, 0.35, 'b'), c(91.16, 0.63, 'b'), c(72.30, 0.54, 'b')] },
    ],
  },
  'StepShield': {
    'Llama3.2-3B-it': [
      { method: 'SAFE', v: [c(66.18, 0.83), c(59.57, 0.53), c(51.28, 1.33)] },
      { method: 'H&S', v: [c(71.21, 7.03), c(58.18, 2.71), c(51.57, 1.26, 'u')] },
      { method: 'TRACES', v: [c(76.56, 3.20, 'u'), c(62.04, 2.45, 'u'), c(50.44, 4.21)] },
      { method: 'Dream2Discern', ours: true, v: [c(90.08, 1.78, 'b'), c(82.25, 4.20, 'b'), c(55.01, 2.26, 'b')] },
    ],
    'Llama3.1-8B-it': [
      { method: 'SAFE', v: [c(82.82, 2.41), c(64.20, 0.71), c(53.61, 0.24, 'u')] },
      { method: 'H&S', v: [c(87.54, 1.81, 'u'), c(59.26, 1.22), c(52.61, 1.33)] },
      { method: 'TRACES', v: [c(89.59, 2.65, 'b'), c(77.78, 3.24, 'u'), c(56.01, 0.72, 'b')] },
      { method: 'Dream2Discern', ours: true, v: [c(86.78, 1.92), c(79.48, 2.94, 'b'), c(49.06, 2.67)] },
    ],
  },
};

// Table 3 — perturbation-strategy ablation. Metrics: AUROC, wACC, TWA.
export const ABLATION = {
  'AFTraj-2K': {
    'Qwen3-4B': [
      { method: 'w/o Perturbation', v: [c(95.01, null, 'u'), c(90.96, null, 'b'), c(71.75, null, 'u')] },
      { method: 'w/ Random Pert.', v: [c(94.40), c(89.16), c(68.24)] },
      { method: 'w/ Dream Pert.', ours: true, v: [c(95.31, null, 'b'), c(90.36, null, 'u'), c(72.28, null, 'b')] },
    ],
    'Qwen3-8B': [
      { method: 'w/o Perturbation', v: [c(93.65), c(90.06, null, 'u'), c(71.04, null, 'u')] },
      { method: 'w/ Random Pert.', v: [c(94.60, null, 'u'), c(89.46), c(69.80)] },
      { method: 'w/ Dream Pert.', ours: true, v: [c(96.21, null, 'b'), c(91.57, null, 'b'), c(73.70, null, 'b')] },
    ],
  },
  'StepShield': {
    'Qwen3-4B': [
      { method: 'w/o Perturbation', v: [c(89.78), c(84.72, null, 'u'), c(53.10, null, 'u')] },
      { method: 'w/ Random Pert.', v: [c(91.20, null, 'u'), c(84.26), c(52.78)] },
      { method: 'w/ Dream Pert.', ours: true, v: [c(92.91, null, 'b'), c(90.28, null, 'b'), c(57.48, null, 'b')] },
    ],
    'Qwen3-8B': [
      { method: 'w/o Perturbation', v: [c(93.82), c(87.96), c(57.32, null, 'u')] },
      { method: 'w/ Random Pert.', v: [c(94.37, null, 'u'), c(89.81, null, 'b'), c(57.72, null, 'b')] },
      { method: 'w/ Dream Pert.', ours: true, v: [c(94.59, null, 'b'), c(88.43, null, 'u'), c(56.42)] },
    ],
  },
};
