import { Button, Dialog } from "@mui/material";
import React, { useState } from "react";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

interface TrailerCompProps {
    videoUrl?: string,
    previewUrl?: string | null
}

const TrailerComp: React.FC<TrailerCompProps> = ({ videoUrl, previewUrl }) => {
    const [open, setOpen] = useState(false);
    const [hovered, setHovered] = useState(false);

    const embedUrl = videoUrl.includes("youtube.com")
        ? videoUrl.replace("watch?v=", "embed/")
        : videoUrl;

    return (
        <div className="w-50 h-70 relative">
            <Button
                className="!p-0 relative w-full h-full"
                onClick={() => setOpen(true)}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {typeof previewUrl === "string" ? (
                    <img src={previewUrl} className="w-full h-full object-cover" />
                ) : (
                    <div className="bg-black w-full h-full flex items-center justify-center">
                        <PlayArrowRoundedIcon className="absolute bg-black" />
                    </div>
                )}
                {hovered && (
                    <PlayArrowRoundedIcon className="absolute bg-black" fontSize="large" />
                )}
            </Button> 

            <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
                <div className="p-4 flex justify-center">
                    <iframe
                        className="w-full h-[400px] rounded-lg"
                        src={embedUrl}
                        title="Трейлер"
                        allowFullScreen
                    />
                </div>
            </Dialog>
        </div>
    );
};

export default TrailerComp;
