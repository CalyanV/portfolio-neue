"use client";

import Image from "next/image";
import Spline from "@splinetool/react-spline/next";

interface ProjectVisualProps {
    videoUrl?: string;
    imageUrl?: string;
    splineUrl?: string;
    title: string;
    showCaption?: boolean;
    visualCaption?: string;
}

export function ProjectVisual({
    videoUrl,
    imageUrl,
    splineUrl,
    title,
    showCaption = false,
    visualCaption,
}: ProjectVisualProps) {
    return (
        <>
            {videoUrl ? (
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900/40 dark:to-neutral-800/40 border-2 border-neutral-200 dark:border-neutral-700 shadow-2xl hover:shadow-3xl transition-shadow">
                    <video
                        src={videoUrl}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                </div>
            ) : imageUrl ? (
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900/40 dark:to-neutral-800/40 border-2 border-neutral-200 dark:border-neutral-700 shadow-2xl hover:shadow-3xl transition-shadow">
                    <Image
                        src={imageUrl}
                        alt={`${title} interface preview`}
                        fill
                        className="object-cover"
                        unoptimized={imageUrl.endsWith('.gif')}
                    />
                </div>
            ) : splineUrl ? (
                <div className="spline-wrapper relative w-full aspect-square lg:aspect-auto lg:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-teal-100 to-teal-200 dark:from-teal-900/40 dark:to-teal-800/40 border border-teal-200 dark:border-teal-700">
                    <div className="absolute inset-0 spline-container">
                        <Spline
                            scene={splineUrl}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </div>
                </div>
            ) : null}
            {showCaption && visualCaption && (
                <p className="text-center text-sm text-muted-foreground mt-4">
                    {visualCaption}
                </p>
            )}
        </>
    );
}
