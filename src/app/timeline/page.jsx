"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Phone, MessageSquare, Video } from "lucide-react";
import { useInteraction } from "@/context/InteractionContext";

const iconMap = {
  call: { icon: <Phone size={16} />, label: "Call", color: "badge-info" },
  message: {
    icon: <MessageSquare size={16} />,
    label: "Message",
    color: "badge-success",
  },
  video: { icon: <Video size={16} />, label: "Video", color: "badge-warning" },
};

const TimelineList = ({ items }) => {
  if (items.length === 0)
    return (
      <p className="text-sm opacity-50 text-center py-6">
        No interactions yet.
      </p>
    );

  return (
    <ul className="timeline timeline-snap-icon timeline-compact timeline-vertical">
      {items.map((item, index) => {
        const meta = iconMap[item.type.toLowerCase()];
        if (!meta) return null;
        const { icon, label, color } = meta;
        return (
          <li key={index}>
            <div className="timeline-middle">
              <div className={`badge ${color} gap-1 p-3`}>{icon}</div>
            </div>
            <div className="timeline-end timeline-box mb-4 w-full">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-sm">{label}</span>
                <span className="text-xs opacity-50">{item.date}</span>
              </div>
              <p className="text-sm opacity-70 mt-1">{item.note}</p>
            </div>
            <hr />
          </li>
        );
      })}
    </ul>
  );
};

const TimelinePage = () => {
  const { getAllInteractions } = useInteraction();
  const interactions = getAllInteractions();

  const calls = interactions.filter((i) => i.type.toLowerCase() === "call");
  const messages = interactions.filter(
    (i) => i.type.toLowerCase() === "message",
  );
  const videos = interactions.filter((i) => i.type.toLowerCase() === "video");

  return (
    <div className="bg-base-100 border border-base-300 rounded-2xl p-5 shadow-sm">
      <h3 className="font-semibold text-base mb-4">Timeline</h3>

      <Tabs defaultValue="all">
        <TabsList className="w-full mb-4">
          <TabsTrigger value="all" className="flex-1">
            All
          </TabsTrigger>
          <TabsTrigger value="calls" className="flex-1 flex items-center gap-1">
            <Phone size={14} /> Calls
          </TabsTrigger>
          <TabsTrigger
            value="messages"
            className="flex-1 flex items-center gap-1"
          >
            <MessageSquare size={14} /> Messages
          </TabsTrigger>
          <TabsTrigger
            value="videos"
            className="flex-1 flex items-center gap-1"
          >
            <Video size={14} /> Video
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <TimelineList items={interactions} />
        </TabsContent>
        <TabsContent value="calls">
          <TimelineList items={calls} />
        </TabsContent>
        <TabsContent value="messages">
          <TimelineList items={messages} />
        </TabsContent>
        <TabsContent value="videos">
          <TimelineList items={videos} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TimelinePage;
