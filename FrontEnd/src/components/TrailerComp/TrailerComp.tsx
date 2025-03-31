import { Button, Dialog } from "@mui/material";
import React, { useState } from "react";
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import CloseIcon from '@mui/icons-material/Close';

interface TrailerCompProps {
    videoUrl?: string,
}

const TrailerComp: React.FC<TrailerCompProps> = ({ videoUrl }) => {
    const [open, setOpen] = useState(false);
    const [hovered, setHovered] = useState(false);

    const isYouTube = videoUrl?.includes("youtube.com");

    const embedUrl = videoUrl && videoUrl.includes("youtube.com")
        ? videoUrl.replace("watch?v=", "embed/")
        : videoUrl;

    const handleOpen = () => {
        if (isYouTube) {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);  
    };
    console.log(embedUrl)
    // console.log(isYouTube)

    return (
        <div className="w-50 h-30 relative">
            <Button
                className="!p-0 relative w-full h-full"
                onClick={handleOpen}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                {isYouTube ? (
                    <div className="bg-black w-full h-full flex items-center justify-center">
                        <PlayArrowRoundedIcon className="absolute bg-black" />
                    </div>                    
                ) : (
                    <div className="bg-black w-full h-full flex items-center justify-center">
                        <CloseIcon className="absolute bg-black" />
                    </div>
                )}
                {hovered && (
                    isYouTube ? (
                        <PlayArrowRoundedIcon className="absolute bg-black" fontSize="large" />
                    ) : (
                        <CloseIcon className="absolute bg-black" fontSize="large" />
                    )
                )}
            </Button> 

            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
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
