"use client";

import { Phone, MessageSquare, Video, BarChart3 } from "lucide-react";
import { useInteraction } from "@/context/InteractionContext";

const statItems = [
  { key: "call", label: "Calls", icon: Phone, color: "badge-info" },
  {
    key: "message",
    label: "Messages",
    icon: MessageSquare,
    color: "badge-success",
  },
  { key: "video", label: "Videos", icon: Video, color: "badge-warning" },
];

const StatsPage = () => {
  const { getInteractionTotals } = useInteraction();
  const totals = getInteractionTotals();
  const { call, message, video, total } = totals;

  const topType = statItems
    .filter((item) => totals[item.key] > 0)
    .sort((a, b) => totals[b.key] - totals[a.key])[0];

  const percent = (value) => (total ? Math.round((value / total) * 100) : 0);

  return (
    <div className="lg:w-10/12 w-11/12 mx-auto lg:my-16 md:my-10 my-6 space-y-6">
      <div className="bg-base-100 border border-base-300 rounded-2xl p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-primary font-semibold">
              Interaction stats
            </p>
            <h1 className="text-3xl font-bold mt-2">Contact breakdown</h1>
            <p className="text-sm opacity-70 mt-2 max-w-2xl">
              Review total counts and type distribution for calls, messages, and
              video interactions across all contacts.
            </p>
          </div>
          <div className="badge badge-lg badge-primary gap-2 text-base-100">
            <BarChart3 size={18} />
            {total} total interactions
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {statItems.map(({ key, label, icon: Icon, color }) => (
          <div
            key={key}
            className="bg-base-100 border border-base-300 rounded-2xl p-5 shadow-sm"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className={`badge ${color} rounded-full p-3`}>
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-sm opacity-60">{label}</p>
                  <p className="text-2xl font-bold">{totals[key] || 0}</p>
                </div>
              </div>
              <span className="text-sm opacity-60">
                {percent(totals[key])}%
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-base-100 border border-base-300 rounded-2xl p-5 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-semibold text-base">Interaction mix</h2>
            <p className="text-sm opacity-70 mt-1">
              A quick breakdown of each contact type in your relationship
              activity.
            </p>
          </div>
          <div className="rounded-full border border-base-300 px-3 py-2 text-sm font-medium text-secondary">
            Top interaction: {topType ? topType.label : "No activity yet"}
          </div>
        </div>

        <div className="mt-5 space-y-4">
          {statItems.map(({ key, label }) => (
            <div key={key}>
              <div className="flex justify-between text-sm opacity-70 mb-2">
                <span>{label}</span>
                <span>{percent(totals[key])}%</span>
              </div>
              <progress
                className="progress progress-primary w-full"
                value={percent(totals[key])}
                max="100"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default StatsPage;
