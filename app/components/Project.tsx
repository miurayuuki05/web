import { getProject } from "@/sanity/sanity.query";
import { Inter } from "next/font/google";

const inter = Inter({weight:"800", subsets: ['latin']})


export default async function Project() {
    const project = await getProject();

    return (
        <div className={inter.className + " text-center pt-20"} id="project">
            <div className="mb-20">
                <p className="text-3xl">PROJECTS</p>
            </div>
            <div className="flex flex-wrap justify-evenly gap-20">
                {project && project.map((data : any) => (
                    <div key={project.title}>
                        <a href={data.link} target="_blank"><img className="md:w-96 md:h-96 w-64 h-64 object-cover hover:border-4 duration-200 mx-10" src={data.imageUrl} alt="project"/></a>
                        <p>{data.title}</p>
                    </div>

                ))}
            </div>
        </div>
    );
}