import yaml from 'https://cdn.jsdelivr.net/npm/js-yaml@4/dist/js-yaml.mjs';

async function loadYAML(url) {
  const response = await fetch(url);
  const yamlString = await response.text();
  const data = yaml.load(yamlString);
  return data;
}

function createElement(tag, className, id, text) {
    const element = document.createElement(tag);

    if (className) {
        element.setAttribute('class', className);
    }
    
    if (id) {
        element.setAttribute('id', id);
    }

    if (text) {
        element.textContent = text;
    }

    return element;
}

function createNameAndtitle(person) {
    const parentDiv = document.querySelector('.personal-details-container');
    
    const nameElement = createElement('h1', 'personal-details-name', null,  person.name);
    parentDiv.appendChild(nameElement);

    const titleElement = createElement('h3', 'personal-details-title', null, person.title);
    parentDiv.appendChild(titleElement);
}

function iconForMetadata(id) {
    switch (id) {
        case 'email':
            return 'fa-solid fa-envelope';
        case 'phone':
            return 'fa-solid fa-phone';
        case 'linkedin':
            return 'fa-brands fa-linkedin';
        case 'location':
            return 'fa-solid fa-location-dot';
        default: 
            return null;
    }
}

function createMetadataItems(metadatas) {
    const container = document.querySelector('.personal-metadata-container');
    for (const metadata of metadatas) {
        const pItem = createElement('p', 'personal-metadata', metadata.id, metadata.value);
        if (metadata.link) {
            pItem.style.cursor = 'pointer';
            pItem.setAttribute('onclick', `window.open('${metadata.link}', '_blank')`);
        }

        const iconClass = iconForMetadata(metadata.id);
        if (iconClass) {
            const rightIcon = createElement('span', `${iconClass} metadata-icon-right`, null, null);
            rightIcon.setAttribute('style', 'padding-left: 12px;');
            pItem.appendChild(rightIcon);

            const leftIcon = createElement('span', `${iconClass} metadata-icon-left`, null, null);
            leftIcon.setAttribute('style', 'padding-right: 12px;');
            pItem.prepend(leftIcon);
        }

        container.appendChild(pItem);
    }
}

function createSummary(summary) {
    const container = document.querySelector('.summary-container');
    const element = createElement('div', 'summary-content', null, summary);
    container.appendChild(element);
}

function createSkillItems(skills) {
    const container = document.querySelector('.skills-container');
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

        const jobTitle = createElement('h3', 'job-title', null, experience.position);
        header.appendChild(jobTitle);

        const company = createElement('h4', 'company', null, experience.company.name);
        header.appendChild(company);

        const hyperlink = createElement('span', 'fa-solid fa-arrow-up-right-from-square', null, null);
        hyperlink.setAttribute('style', 'padding-left: 8px; cursor: pointer; font-size: 0.7em; color: var(--hyperlink-color);');
        hyperlink.setAttribute('onclick', `window.open('${experience.company.website}', '_blank')`);
        company.appendChild(hyperlink);

        const footer = createElement('div', 'section-header-footer', null, null);
        header.appendChild(footer);

        const duration = createElement('div', 'footer-duration', null, experience.duration);
        const location = createElement('div', 'footer-location', null, experience.location);
        footer.appendChild(duration);
        footer.appendChild(location);

        const tasksList = createElement('div', 'job-tasks', null, null);
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

    createNameAndtitle(resumeData.person);
    createMetadataItems(resumeData.metadatas);
    createSummary(resumeData.summary);
    createSkillItems(resumeData.skills);
    createExpereienceItems(resumeData.experiences);
    createEducation(resumeData.education);
}

generateResume();