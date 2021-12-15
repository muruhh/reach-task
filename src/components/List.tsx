import React from "react";

function List(props: any) {
    return (
        <div className="list container">
            {props.videos.map((videos: any) => (
                <div className={videos.id.kind == "youtube#video" ? "list__item item__video" : "list__item item__channel"} key={videos.etag}>

                    <div className="list__thumbnail">
                        <a 
                            className="list__link"
                            href={videos.id.kind == "youtube#video" ? `https://www.youtube.com/watch?v=${videos.id.videoId}`: `https://www.youtube.com/channel/${videos.id.channelId}`}>
                            
                            <img className="list__img" src={videos.snippet.thumbnails.medium.url} alt="" />
                        </a>
                    </div>

                    <div className="list__contents">
                        <h2 className="list__title">
                            <a className="list__link" href={videos.id.kind == "youtube#video" ? `https://www.youtube.com/watch?v=${videos.id.videoId}`: `https://www.youtube.com/channel/${videos.id.channelId}`}>{videos.snippet.title}</a>
                        </h2>


                        {videos.id.kind == "youtube#video" && <span className="list__channel-title">
                            <a className="list__link" href={`https://www.youtube.com/channel/${videos.snippet.channelId}`}>{videos.snippet.channelTitle}</a>
                        </span>}

                        {props.isMobile && <p className="list__description">{videos.snippet.description}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default List;
