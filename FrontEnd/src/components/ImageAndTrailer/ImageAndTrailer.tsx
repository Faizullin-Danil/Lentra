import TrailerComp from "../TrailerComp/TrailerComp";

const ImageAndTrailer = ({trailer, image}) => {
  return (
    <div className="w-[25%] flex flex-col gap-5">
                    <img src={image} className="w-80 h-120 object-cover" />
                    {film.videos.length > 0 && (
                        <div>
                            <TrailerComp 
                                previewUrl={images.length > 0 ? images[0].url : "https://example.com/default.jpg"} 
                                videoUrl={trailer} 
                                site={film.videos[0].site}
                                width="300" height="200" 
                            />
                            <h1>{film.videos[0].name}</h1>
                        </div>
                    )}
                </div>
  );
};

export default ImageAndTrailer;