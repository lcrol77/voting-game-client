import { useEffect, useState } from "react";
import { Socket } from "socket.io-client"
import { User } from "../App"
import { classNames } from "../utils";

export function PlayerCard({ totalUserCount, user, handleClick}: PlayerCardProps) {
    return (
        <li key={user?.id} className="relative flex items-center space-x-4 py-4">
            <div className="min-w-0 flex-auto">
                <div className="flex items-center gap-x-3">
                    <h2 className="min-w-0 text-sm font-semibold leading-6 text-gray-900">
                        <a onClick={() => handleClick(user)} className="cursor-pointer flex gap-x-2">
                            <span className="truncate">{user?.name}</span>
                            <span className="whitespace-nowrap">{user?.numberOfVotes}</span>
                            <span >/</span>
                            <span className="whitespace-nowrap">{totalUserCount}</span>
                            <span className="absolute inset-0" />
                        </a>
                    </h2>
                </div>
                <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
                </div>
            </div>
        </li>
    )
}

type PlayerCardProps = {
    totalUserCount: number,
    user: User,
    handleClick: (user:User)=> void
}
