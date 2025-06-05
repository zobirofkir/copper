import ProjectComponent from '@/components/ProjectComponent'
import { Head, usePage } from '@inertiajs/react'

const ProjectPage = () => {
  const { projects, categories } = usePage().props as any;
  
  return (
    <section>
        <Head title="Projets" />
        <div>
            <ProjectComponent />
        </div>
    </section>
  )
}

export default ProjectPage