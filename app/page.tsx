import { ResumeLoaderService } from "./services/resume-loader";
import path from 'path'

import Container from './ui/container'

export default function App() {
  const filePath = path.join(process.cwd(), './config/resume.yaml');
  const resumeLoaderService = new ResumeLoaderService(filePath);
  return (
    <Container resumeLoaderService={resumeLoaderService} />
  )
}
