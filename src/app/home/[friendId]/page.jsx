"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import profile from "../../../assets/profile.png";
import {
  Phone,
  MessageSquare,
  Video,
  Bell,
  Archive,
  Trash2,
  Pencil,
} from "lucide-react";

import { useInteraction } from "@/context/InteractionContext";
import HistoryTab from "@/components/HistoryTab";

const Page = () => {
  const { friendId } = useParams();
  const { logInteraction } = useInteraction();
  const [friend, setFriend] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friend.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((f) => parseInt(f.id) === parseInt(friendId));
        setFriend(found || null);
        setLoading(false);
      });
  }, [friendId]);

  if (loading) {
    return (
      <div className="h-[50vh] flex justify-center items-center">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    );
  }

  if (!friend) {
    return (
      <div className="h-[30vh] flex justify-center items-center">
        <p className="lg:text-5xl md:text-2xl font-semibold">
          Details Not Found!
        </p>
      </div>
    );
  }

  const { name, status, bio, goal, next_due_date, tags, preferred_contact } =
    friend;
  const daysSince = 62;
  return (
    <div className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto lg:my-16 md:my-10 my-6">
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* LEFT — Profile Card */}
        <div className="md:col-span-1 flex flex-col gap-4">
          <div className="bg-base-100 border border-base-300 rounded-2xl p-6 flex flex-col items-center text-center gap-2 shadow-sm">
            <Image
              src={profile}
              alt="profile"
              className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
            />
            <h2 className="text-xl font-bold mt-1">{name}</h2>
            <span className="badge badge-error text-white">{status}</span>
            {tags?.map((tag, i) => (
              <span key={i} className="badge badge-success text-white">
                {tag}
              </span>
            ))}
            {bio && <p className="text-sm opacity-60 italic mt-1">{bio}</p>}
            {preferred_contact && (
              <p className="text-sm opacity-50">
                Preferred: {preferred_contact}
              </p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-sm">
            <button className="w-full flex items-center gap-3 px-5 py-4 hover:bg-base-200 transition border-b border-base-300 text-sm font-medium">
              <Bell size={17} /> Snooze 2 Weeks
            </button>
            <button className="w-full flex items-center gap-3 px-5 py-4 hover:bg-base-200 transition border-b border-base-300 text-sm font-medium">
              <Archive size={17} /> Archive
            </button>
            <button className="w-full flex items-center gap-3 px-5 py-4 hover:bg-base-200 transition text-error text-sm font-medium">
              <Trash2 size={17} /> Delete
            </button>
          </div>
        </div>

        {/* RIGHT — Stats + Details */}
        <div className="md:col-span-2 flex flex-col gap-4">
          {/* Stat Cards Row */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-base-100 border border-base-300 rounded-2xl p-4 text-center shadow-sm">
              <p className="text-2xl md:text-3xl font-bold">{daysSince}</p>
              <p className="text-xs md:text-sm opacity-50 mt-1">
                Days Since Contact
              </p>
            </div>
            <div className="bg-base-100 border border-base-300 rounded-2xl p-4 text-center shadow-sm">
              <p className="text-2xl md:text-3xl font-bold">{goal}</p>
              <p className="text-xs md:text-sm opacity-50 mt-1">Goal (Days)</p>
            </div>
            <div className="bg-base-100 border border-base-300 rounded-2xl p-4 text-center shadow-sm">
              <p className="text-lg md:text-xl font-bold">{next_due_date}</p>
              <p className="text-xs md:text-sm opacity-50 mt-1">Next Due</p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-base-100 border border-base-300 rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-base">Relationship Goal</h3>
              <button className="btn btn-xs btn-outline">
                <Pencil size={13} /> Edit
              </button>
            </div>
            <p className="text-sm opacity-70">
              Connect every <span className="font-bold">{goal} days</span>
            </p>
          </div>

          {/* Quick Check-In */}

          <div className="bg-base-100 border border-base-300 rounded-2xl p-5 shadow-sm">
            <h3 className="font-semibold text-base mb-4">Quick Check-In</h3>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => {
                  logInteraction(friendId, "call");
                }}
                className="flex flex-col items-center justify-center gap-2 border border-base-300 rounded-xl p-4 hover:bg-base-200 transition"
              >
                <Phone size={22} />
                <span className="text-sm">Call</span>
              </button>
              <button
                onClick={() => {
                  logInteraction(friendId, "message");
                }}
                className="flex flex-col items-center justify-center gap-2 border border-base-300 rounded-xl p-4 hover:bg-base-200 transition"
              >
                <MessageSquare size={22} />
                <span className="text-sm">Text</span>
              </button>
              <button
                onClick={() => {
                  logInteraction(friendId, "video");
                }}
                className="flex flex-col items-center justify-center gap-2 border border-base-300 rounded-xl p-4 hover:bg-base-200 transition"
              >
                <Video size={22} />
                <span className="text-sm">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mt-6">
        <HistoryTab />
      </div> */}
    </div>
  );
};

export default Page;
