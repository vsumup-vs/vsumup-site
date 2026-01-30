export interface Pattern {
  name: string;
  implementation: string;
}

export interface PatternsData {
  architectural: Pattern[];
  ai_collaboration: Pattern[];
  security_infra: Pattern[];
}

export const patterns: PatternsData = {
  architectural: [
    {
      name: "Multi-Tenancy",
      implementation:
        "Prisma $extends() intercepts queries to auto-inject organizationId filters on 46+ models.",
    },
    {
      name: "State Machine",
      implementation:
        "7-state lifecycle: DRAFT → IN_PROGRESS → PENDING_APPROVAL → APPROVED → COMPLETED.",
    },
  ],
  ai_collaboration: [
    {
      name: "AI Orchestration",
      implementation:
        "Conversation-to-initiative parsing using Anthropic Claude SDK.",
    },
    {
      name: "Webhooks",
      implementation:
        "Automatic retry logic across 11 event types with HMAC signature verification.",
    },
  ],
  security_infra: [
    {
      name: "Credential Shield",
      implementation:
        "Field-level AES-256-GCM encryption for stored API credentials.",
    },
    {
      name: "Audit Trail",
      implementation:
        "Immutable logging for 20+ action types ensuring a complete security trail.",
    },
  ],
};

export type PatternCategory = keyof PatternsData;
