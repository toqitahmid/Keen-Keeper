"use client";
import { createContext, useContext, useState, useEffect } from "react";

const InteractionContext = createContext();

export const InteractionProvider = ({ children }) => {
  const [interactions, setInteractions] = useState(() => {
    if (typeof window === "undefined") return {};
    const saved = localStorage.getItem("interactions");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem("interactions", JSON.stringify(interactions));
  }, [interactions]);

  const logInteraction = (friendId, type) => {
    const newItem = {
      type,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      note: `${type.charAt(0).toUpperCase() + type.slice(1)} interaction`,
    };

    setInteractions((prev) => ({
      ...prev,
      [friendId]: [newItem, ...(prev[friendId] || [])],
    }));
  };

  const getInteractions = (friendId) => interactions[friendId] || [];
  const getAllInteractions = () => Object.values(interactions).flat();
  const getInteractionTotals = () => {
    const totals = { call: 0, message: 0, video: 0, total: 0 };
    getAllInteractions().forEach((interaction) => {
      const type = interaction.type?.toLowerCase();
      if (type && type in totals) {
        totals[type] += 1;
      }
      totals.total += 1;
    });
    return totals;
  };

  return (
    <InteractionContext.Provider
      value={{
        logInteraction,
        getInteractions,
        getAllInteractions,
        getInteractionTotals,
      }}
    >
      {children}
    </InteractionContext.Provider>
  );
};

export const useInteraction = () => useContext(InteractionContext);
