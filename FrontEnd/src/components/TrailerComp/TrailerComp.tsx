import { Button, Dialog } from "@mui/material";
import React, { useState } from "react";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TheatersIcon from '@mui/icons-material/Theaters';

interface TrailerCompProps {
    videoUrl?: string,
    site?: string,
    width?: string,
    height?: string
    previewUrl?: string | null
}

const normalizeYouTubeUrl = (url?: string) => {
    if (!url) return undefined;
    let videoId;

    if (url.includes("watch?v=")) {
        videoId = url.split("watch?v=")[1].split("&")[0];
    } else if (url.includes("/v/")) {
        videoId = url.split("/v/")[1].split("&")[0];
    } else if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1].split("?")[0];
    } else if (url.includes("/embed/")) {
        return url; // уже в нужном формате
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

const TrailerComp: React.FC<TrailerCompProps> = ({ previewUrl, videoUrl, width, height }) => {
    const [open, setOpen] = useState(false);
    const [hovered, setHovered] = useState(false);

    const youtubeUrl = normalizeYouTubeUrl(videoUrl);
    const isYoutube = videoUrl?.includes("youtube.com") || videoUrl?.includes("youtu.be");

    const handleOpenVideo = () => {
        window.open(videoUrl, "_blank");
    };

    return (
        isYoutube ? (
            <div style={{ width: `${width}px`, height: `${height}px` }} className="relative bg-black">
                <Button
                    className="!p-0 relative w-full h-full"
                    onClick={() => setOpen(true)}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <div className="w-full h-full flex items-center justify-center">
                        { previewUrl && <img
                            src={previewUrl}
                            className="w-full h-full object-cover"
                        />}
                        <YouTubeIcon color="error" className="absolute " />
                    </div>
                    {hovered && (
                        <YouTubeIcon color="error" className="absolute" fontSize="large" />
                    )}
                </Button>

                <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
                    <div className="p-4 flex justify-center">
                        <iframe
                            className="w-full h-[400px] rounded-lg"
                            src={youtubeUrl}
                            title="Трейлер"
                            allowFullScreen
                        />
                    </div>
                </Dialog>
            </div>
        ) : (
            <div style={{ width: `${width}px`, height: `${height}px` }} className="relative bg-black">
                <Button
                    className="!p-0 relative w-full h-full"
                    onClick={handleOpenVideo}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <div className="w-full h-full flex items-center justify-center">
                        { previewUrl && <img
                            src={previewUrl}
                            className="w-full h-full object-cover"
                        />}
                        <TheatersIcon color="warning" className="absolute bg-black " />
                    </div>
                    {hovered && (
                        <TheatersIcon color="warning" className="absolute bg-black" fontSize="large" />
                    )}
                </Button>
            </div>
        )
    );
};

export default TrailerComp;
