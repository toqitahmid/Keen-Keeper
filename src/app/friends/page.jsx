"use client";
import { User, GoalIcon } from "lucide-react";
import Image from "next/image";
import profile from '../../assets/profile.png'
import { useEffect, useState } from "react";
import Link from "next/link";
const FriendsPage = () => {
  const [friendData, setFriendData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/friend.json")
      .then((res) => res.json())
      .then((data) => {
        setFriendData(data);
        setLoading(false);
      });
  }, []);

  if(loading){
    return(

      <div className="flex justify-center items-center h-[30vh]">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    )
  }
  return (
    <div className="lg:w-9/12 md:w-10/12 w-11/12 mx-auto bg-base-200 rounded-2xl lg:my-20 md:my-10 my-8">
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-3 p-2">
        {friendData.map((friend) => (
          <div key={friend.id}>
            <div className="p-5 bg-white rounded-xl shadow">
              <div className="flex flex-row-reverse justify-between">
                <Image
                  src={profile}
                  alt="profile"
                  className="w-20 sm:w-30 sm:h-26 h-18 rounded-full ring ring-primary ring-offset-base-200 ring-offset-2"
                ></Image>
                <div
                  className={`${friend.status === "Over due" && "badge badge-warning"}
                  ${friend.status === "On track" && "badge badge-secondary"}
                  ${friend.status === "Almost due" && "badge badge-success"}
                  `}
                >
                  {friend.status}
                </div>
              </div>
              <div className="divider"></div>
              <div className="flex items-center gap-1">
                <User></User>
                <h1 className="font-semibold">{friend.name}</h1>
              </div>
              <div className="flex items-center gap-1 mt-1">
                <GoalIcon></GoalIcon>
                <h1 className="opacity-70">{friend.goal}</h1>
              </div>
              <div className="flex gap-2 mt-1">
                {friend.tags.map((tag, index) => (
                  <div key={index}>
                    <h1 className="badge badge-accent badge-soft">{tag}</h1>
                  </div>
                ))}
              </div>

              <div className="flex flex-row-reverse">
                <Link href= {`home/${friend.id}`} className="btn btn-ghost">See More</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;
