type TimelineState = "done" | "current" | "upcoming";

type TimelineStep = {
  label: string;
  time: string | null;
  state: TimelineState;
};

const STEP_SEQUENCE = [
  "pending",
  "assigned",
  "picked_up",
  "in_transit",
  "delivered",
] as const;

const STEP_LABELS: Record<(typeof STEP_SEQUENCE)[number], string> = {
  pending: "Order Created",
  assigned: "Rider Assigned",
  picked_up: "Package Picked Up",
  in_transit: "Out for Delivery",
  delivered: "Delivered",
};

export function buildOrderTimeline(
  history: { status: string; changed_at: string }[],
  currentStatus: string,
): TimelineStep[] {
  return STEP_SEQUENCE.map((step) => {
    const match = history.find((h) => h.status === step);

    if (step === currentStatus) {
      return {
        label: STEP_LABELS[step],
        time: match?.changed_at ?? null,
        state: "current",
      };
    }

    if (match) {
      return {
        label: STEP_LABELS[step],
        time: match.changed_at,
        state: "done",
      };
    }

    return { label: STEP_LABELS[step], time: null, state: "upcoming" };
  });
}
