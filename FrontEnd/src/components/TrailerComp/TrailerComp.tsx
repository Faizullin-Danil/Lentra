import { Button, Dialog } from "@mui/material";
import React, { useState } from "react";
import YouTubeIcon from '@mui/icons-material/YouTube';
import TheatersIcon from '@mui/icons-material/Theaters';

interface TrailerCompProps {
    videoUrl?: string,
    site?: string,
    width?: string,
    height?: string
}

const TrailerComp: React.FC<TrailerCompProps> = ({ videoUrl, width, height }) => {
    const [open, setOpen] = useState(false);
    const [hovered, setHovered] = useState(false);


    const youtubeUrl = videoUrl && videoUrl.includes("youtube.com")
        ? videoUrl.replace("watch?v=", "embed/")
        : videoUrl;

    const isYoutube = videoUrl?.includes("youtube.com");

    const handleOpenVideo = () => {
        window.open(videoUrl, "_blank");
    };

    return (
        isYoutube ? (<div className={`w-${width} h-${height} relative`}>
                <Button
                    className="!p-0 relative w-full h-full"
                    onClick={() => setOpen(true)}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <div className="bg-black w-full h-full flex items-center justify-center">
                        <YouTubeIcon color="error" className="absolute bg-black" />
                    </div>                    
                    {hovered && (
                        <YouTubeIcon color="error" className="absolute bg-black" fontSize="large" />
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
            </div>) : (
            <div className={`w-${width} h-${height} relative`}>
                <Button
                    className="!p-0 relative w-full h-full"
                    onClick={handleOpenVideo}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <div className="bg-black w-full h-full flex items-center justify-center">
                        <TheatersIcon color="warning" className="absolute bg-black" />
                    </div>                    
                    {hovered && (
                        <TheatersIcon color="warning" className="absolute bg-black" fontSize="large" />
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
        )
        
    );
};

export default TrailerComp;
