import yaml from 'https://cdn.jsdelivr.net/npm/js-yaml@4/dist/js-yaml.mjs';

async function loadYAML(url) {
  const response = await fetch(url);
  const yamlString = await response.text();
  const data = yaml.load(yamlString);
  return data;
}

function createElement(tag, className, id, text) {
    const element = document.createElement(tag);
    element.setAttribute('class', className);
    
    if (id) {
        element.setAttribute('id', id);
    }

    if (text) {
        element.textContent = text;
    }

    return element;
}

function createNameAndtitle(person) {
    const parentDiv = document.querySelector('.grid-personal-middle');
    
    const nameElement = createElement('div', 'personal-middle-name', null,  person.name);
    parentDiv.appendChild(nameElement);

    const titleElement = createElement('div', 'personal-middle-title', null, person.title);
    parentDiv.appendChild(titleElement);
}

function createMetadataItems(metadatas) {
    const container = document.querySelector('.personal-metadata-container');
    for (const metadata of metadatas) {
        const pItem = createElement('p', 'personal-metadata', metadata.id, metadata.value);
        container.appendChild(pItem);
    }
}

function updateSummary(summary) {
    const element = document.querySelector('.summary');
    element.textContent = summary;
}

function createSkillItems(skills) {
    const container = document.querySelector('.skills-grid-container');
    for (const skill of skills) {
        const skillItem = createElement('div', 'skill-item', null, skill);
        container.appendChild(skillItem);
    }
}   

function createExpereienceItems(experiences) {
    const container = document.querySelector('.experience-container');
    for (const experience of experiences) {
        const item = createElement('div', 'experience-item', null, null);
        container.appendChild(item);
        
        const header = createElement('div', 'experience-header', null, null);
        item.appendChild(header);

        const jobTitle = createElement('div', 'job-title', null, experience.position);
        const company = createElement('div', 'company', null, experience.company);
        header.appendChild(jobTitle);
        header.appendChild(company);

        const footer = createElement('div', 'section-header-footer', null, null);
        header.appendChild(footer);

        const duration = createElement('div', 'footer-duration', null, experience.duration);
        const location = createElement('div', 'footer-location', null, experience.location);
        footer.appendChild(duration);
        footer.appendChild(location);

        const tasksList = createElement('ul', 'job-tasks', null, null);
        item.appendChild(tasksList);

        for (const task of experience.tasks) {
            const taskItem = createElement('div', null, null, `- ${task}`);
            tasksList.appendChild(taskItem);
        }
    }
}

function createEducation(education) {
    const container = document.querySelector('.education-container');

    const item = createElement('div', 'education-item', null, null);
    container.appendChild(item);
        
    const header = createElement('div', 'education-header', null, null);
    item.appendChild(header);

    const degree = createElement('div', 'education-degree', null, education.degree);
    const school = createElement('div', 'education-school', null, education.school);
    header.appendChild(degree);
    header.appendChild(school);

    const footer = createElement('div', 'section-header-footer', null, null);
    header.appendChild(footer);

    const duration = createElement('div', 'footer-duration', null, education.duration);
    const location = createElement('div', 'footer-location', null, education.location);
    footer.appendChild(duration);
    footer.appendChild(location);
}

async function generateResume() {
    const resumeData = await loadYAML('/config/resume.yaml');
    console.log(resumeData);

    createNameAndtitle(resumeData.person);
    createMetadataItems(resumeData.metadatas);
    updateSummary(resumeData.summary);
    createSkillItems(resumeData.skills);
    createExpereienceItems(resumeData.experiences);
    createEducation(resumeData.education);
}

generateResume();