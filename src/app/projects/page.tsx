"use client";

import {cn} from "@/utils/cn";
import React from "react";
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid";
import {AuroraBackground} from "@/components/ui/aurora-background";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";

export function ProjectsGrid() {
    return (
        <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                />
            ))}
        </BentoGrid>
    );
}

const Skeleton = () => (
    <div
        className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
    {
        title: "This Website",
        description: "Find the code on my Github.",
        header: <Skeleton/>,
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500"/>,
    },
    {
        title: "Temple Warrior",
        description: "A text-based python game where you must explore a temple.",
        header: <Skeleton/>,
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500"/>,
    },
    {
        title: "Rust OS",
        description: "An OS kernel made in rust, its currently a work in progress.",
        header: <Skeleton/>,
        icon: <IconSignature className="h-4 w-4 text-neutral-500"/>,
    },
    {
        title: "GMod AI NPC's",
        description:
            "A Garrys Mod mod that allows users to talk to NPC's using generative AI",
        header: <Skeleton/>,
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500"/>,
    },
    {
        title: "My Old Website",
        description: "Its the website i had before this one.",
        header: <Skeleton/>,
        icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500"/>,
    },

];

export default function ProjectsPage() {
    return (
        <div className={"dark:bg-black dark:text-white min-h-screen p-4 overscroll-none"}>
            <AuroraBackground>
                <div className={"border-2 rounded-2xl"}>
                    <h1 className={"text-center text-3xl pb-3"}>Projects</h1>
                    <ProjectsGrid/>
                </div>
            </AuroraBackground>

        </div>
    )
}