import './ProfileCard.css'
export default function ProfileCard({ title, handle, imgSrc, description }) {
    return (

        <div className="card ">
            <div className="card-image">
                <figure className="">
                    <img
                        src={imgSrc}
                        alt="Alt"
                    />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img
                                src={imgSrc}
                                alt="Alt"
                            />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">@johnsmith</p>
                    </div>
                </div>

                <p className="subtitle is-6">
                    {handle}
                </p>
                <div className="content">{description}</div>
            </div>
        </div>

    );
}