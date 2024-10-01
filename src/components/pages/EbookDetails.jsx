import { useParams } from "react-router-dom"
import projects from '../../assets/Ebooks.json'

const EbookDetails = () => {

    const { id } = useParams();
    const project = projects.find(project => project.id === id);
    if (!project) { return <h1>Project not found</h1> }

    return (
        <>
            <div className="container py-5 my-5">
                <section className="py-5 my-5">
                    <div className="text-center mb-5">
                        <img className="img-fluid w-50" src={project.thumbnail} style={{
                            height: '350px',
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                            loading="lazy" />
                    </div>
                    <h1 className="mb-0 text-primary">{project.title}</h1>
                    <p className="text-secondary">{project.language}</p>
                    <p className="mb-4">{project.description}</p>
                    <p className="mb-0"><strong className="text-secondary">Formats:</strong> {project.formats.join(', ')}</p>
                    <p className="mb-0"><strong className="text-secondary">Deliverables:</strong> {project.deliverables}</p>
                    {
                        project.images && project.images >= 1 &&
                        project.images.map((image, index) => (
                            <img className="img-fluid" key={index} src={image} alt={`Image ${index + 1}`} />
                        ))}

                </section>
            </div>
        </>
    )
}

export default EbookDetails