# Dream2Discern — content source for the project page
Extracted from `arxiv_dream2discern.tex` (Sept 2026 preprint). Keep page copy in sync with this file.

## Meta
- Title: **Dream2Discern: Learning from Hard Latent Variants for Runtime Failure Prediction in Multi-Agent Systems**
- Authors: Boxuan Zhang¹, Jianing Zhu², Xiaotian Han³, Ruixiang Tang¹
- Affiliations: ¹Rutgers University · ²The University of Texas at Austin · ³Amazon
- Code: https://github.com/ZBox1005/Dream2Discern
- Contact: {boxuan.zhang, ruixiang.tang}@rutgers.edu
- Status: Research preprint, September 2026 (arXiv id TBD)

## Brand (from dream2discern_preprint.cls)
- d2dInk #153A43 · d2dMuted #61757B · d2dTeal #269E95 · d2dDream #8864CF · d2dAlert #E96D79 · d2dBlue #268BD2 · d2dPale #F2F9FA · d2dLine #C9DFE2 · table highlight #D9F0F8
- Type: XCharter (prose + headings), Latin Modern Mono (code). Web stand-ins: Charter / "XCharter" → fallback serif; mono → JetBrains Mono / ui-monospace.

## Abstract (verbatim)
Reliable deployment of LLM-based multi-agent systems calls for runtime auditors that predict terminal outcomes from observed execution prefixes. These auditors typically learn from a limited corpus of trajectories with verified outcomes. Expanding this corpus requires costly execution and verification, yet broader failure coverage alone provides no explicit criterion for identifying prefixes that the current auditor finds difficult to classify. To this end, we propose *Dream2Discern*, a runtime auditor trained through implicit augmentation guided by its own prediction loss. During *Dream*, we select perturbations of the auditor's representation operators to increase prediction loss on recorded prefixes, yielding *hard latent variants*. During *Discern*, the auditor learns to predict execution outcomes from these variants using the original labels. The variants are regenerated as the auditor learns, turning a limited corpus into a renewable source of hard examples and requiring no additional trajectory collection or outcome verification. Extensive evaluations on AFTraj-2K and StepShield show that *Dream2Discern* outperforms competitive failure auditors and achieves over 90% trajectory-level weighted accuracy on both benchmarks while balancing prediction accuracy and timeliness.

## Research question (verbatim)
Can we identify and exploit the current auditor's hard cases without acquiring additional labeled trajectories?
Key insight: "Our key insight is to use the auditor's own prediction loss as a criterion for deciding which variants to construct."

## Motivation numbers
- Mean rollout + verification time per trajectory (AFTraj-2K): Math 87.3s · Coding 58.6s · HotpotQA 72.9s · GAIA 107.4s
- Editing: 326 verified continuations. Original→Edited outcome: S→S 203 (94.9%), S→F 11 (5.1%), F→S 96 (85.7%), F→F 16 (14.3%). "Among verified continuations from failed source trajectories, 85.7% succeed."
- Fig 2b held-out class-balanced BCE: Original 0.520 · +Edited 0.578 · +Dream 0.704
- Fig 2 caption: (a) Original and edited prefixes overlap in a shared PCA projection. (b) Training with edits does not reduce held-out class-balanced BCE. A temporary Dream perturbation selected on training prefixes raises this loss with the Original head fixed.

## Method
- Auditor f_Θ: frozen LLM φ0 (e.g., Qwen3-8B) + LoRA on q/v projections after a fixed intermediate block + classification head g_ψ on last-token hidden state; Θ=(a,ψ). s = σ(g_ψ(h_{φ0,a}(X))).
- ① Labeled prefixes: class-balanced batch (m success + m failure prefixes), inputs & labels unchanged.
- ② Dream: with auditor fixed, search shared, bounded, low-rank perturbations V to q/v projection weights that increase batch prediction loss. Head fixed. Ascent → Rank-r SVD → Accept (backtracking: halve up to 6 points, accept first strict increase; else V=0). Fresh search per batch.
  - W_j(a)=W_j^0+κ_L B_jA_j ,  W_j(a) ↦ W_j(a)+V_j
  - U_{γ,r} = {V : ‖V‖_ω ≤ γ, rank(V_j) ≤ r ∀j}
  - V*_B(Θ) ∈ argmax_{V∈U_{γ,r}} L_B(Θ,V)
  - Prop. 1 (optimal linearized perturbation): V^lin_j = γ ω_j C_{j,r} / g_r ; max = γ g_r
- ③ Discern: hold V̂_B fixed (stop-grad), update LoRA adapters + head: min_Θ L_B(Θ, sg[V̂_B]). Prop. 2: |L_B(Θ,V̂_B) − L_B(Θ,0) − ρ_B g_r| ≤ (β/2) ρ_B²
- ④ Runtime auditing: discard perturbation (V=0); s_{i,t}=f_Θ(X_{i,t}), Ŷ_{i,t}=1{s_{i,t} ≥ ζ_t}; step-dependent thresholds calibrated offline on successful training trajectories (max-rank percentile).
- Fig 3 caption ①–④ (verbatim): Labeled prefixes. We form a class-balanced batch from recorded success and failure prefixes, keeping their inputs and outcome labels unchanged throughout the training steps. / Dream. With the auditor fixed, we search for shared, bounded, low-rank perturbations to its query and value projection weights that increase batch prediction loss. / Discern. Holding the selected perturbation fixed, we update the LoRA adapters and prediction head to minimize the loss on the resulting hard latent variants. / Runtime auditing. We discard the perturbation and apply a calibrated threshold to each prefix score to predict failure during execution.

## Setup
- Benchmarks: AFTraj-2K (in-domain; math, coding, tool use) · StepShield (out-of-domain at template level; safety monitoring)
- Metrics: AUROC↑, FPR95↓, wACC↑, TWA↑ (trajectory level, max prefix score; α=0.05)
- Backbones: Qwen3-4B, Qwen3-8B, Llama-3.2-3B-Instruct, Llama-3.1-8B-Instruct. AdamW, 100-step warm start + 4 epochs. 3 seeds on Qwen3.

## Headline claims
- >90% trajectory-level wACC on both benchmarks
- Outperforms strongest auditor baseline by up to 11.11% wACC (StepShield: 90.28 vs AgentForesight-7B 79.17)
- 4B auditor exceeds Claude-Sonnet-4.6 in StepShield wACC and TWA
- Case study: D2D predicts failure at step 7 (GT error step), w/o perturbation at step 9 after TEST_FAILED — two interactions earlier.
- Mechanism: Dream increases loss on every one of 50 batches (32 prefixes each); random perturbations cluster near zero. Error rate rises across Dream-sensitivity quintiles.

## Conclusion (verbatim)
In this paper, we highlight that broader failure coverage alone does not identify the current auditor's hard cases, motivating implicit augmentation guided by prediction loss. To realize this idea, we present Dream2Discern, a runtime auditor that learns from hard latent variants without acquiring additional labeled trajectories. Dream constructs these variants through loss-guided operator perturbations, and Discern learns from them using the original outcome labels. The learned auditor operates without perturbations at runtime. Evaluations on AFTraj-2K and StepShield across model families demonstrate improved runtime failure prediction. These findings support targeting the auditor's current prediction difficulties to improve learning from a fixed trajectory corpus.

## Table data
Main table, Llama table and ablation table are encoded in the page logic (`Dream2Discern.dc.html` → `TABLES`). Source: tex lines ~800–1095.
