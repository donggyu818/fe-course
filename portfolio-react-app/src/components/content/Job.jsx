import AvatarImage from "../commons/AvatarImage";

export default function Job({name, job, period, img, alt}) {
    return(
        <>
            <AvatarImage img={img} alt={alt} />
            <div>
                {name === "google" && <p className="job-name">{job}</p>}
                {name === "google" && <p className="job-period">{period}</p>}
                {name === "samsung" && <p class="job-name">{job}</p>}
                {name === "samsung" && <p class="job-period">{period}</p>}
            </div>
        </>
    )
}