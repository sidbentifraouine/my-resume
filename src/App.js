import React from 'react'
import me from './images/me.jpg'
import styled from 'styled-components'

const resume = {
  intro: {
    name: 'Sid Bentifraouine',
    job: 'Ingénieur Frontend',
    phone: '+33 6 01 06 98 92',
    email: 'sidbentifraouine@gmail.com',
    website: 'www.sidbentifraouine.com',
    address: {
      street: '6 Allée du Château',
      door: 'Bat. C Appt. 13',
      zipCode: '59110',
      city: 'LA MADELEINE',
      country: 'FRANCE'
    },
    pitch:
      'Je suis une personne curieuse, qui aime apprendre et partager avec les autres, relever de nouveaux défis dans le but de me surpasser, afin d’essayer d’être le changement que je veux voir dans ce monde.'
  },
  experience: [
    {
      company: 'NoConsulting',
      title: 'Ingénieur Frontend',
      location: { city: 'Lille', country: 'France' },
      description:
        'J’ai travaillé sur plusieurs projets en “Agilité/Scrum“ en tant que développeur Frontend et encadreur technique sur du React, React Native, Vue et Angular.',
      data: { from: 2017, to: 2019 },
      projectExamples: [
        {
          title: 'HNL (Heart Never Lies) — Développeur Frontend',
          summary:
            'HNL est une société proposant une solution de marketing émotionnel. L’outil est composé de capteurs spécifiques, reliés à une application Web/Desktop. Dans un souci de portabilité, NoConsulting est intervenue dans la création d’une application mobile permettant la mesure.',
          actions: [
            'Chiffrage projet',
            'Mise en place des environnements pour la partie mobile',
            'Conception et implémentation'
          ],
          techStack: [
            'Ionic',
            'Cordova',
            'Capacitor',
            'Angular',
            'JavaScript',
            'TypeScript',
            'Git',
            'JIRA',
            'Agile(Scrum)'
          ]
        },
        {
          title: 'Nauticoncept — Développeur Frontend',
          summary: (
            <>
              La société Nauticoncept est un acteur du marché du nautisme. Le
              métier historique est de proposer un système de “boîte noire”
              permettant de recueillir toutes les informations des bateaux
              équipés.
              <br />
              Nauticoncept est également dotée d’une plateforme de gestion de
              bateau (maintenance, tracking…). Les besoins des clients ont amené
              Nauticoncept à opter pour la refonte de l’outil ainsi qu’à ajouter
              de nombreuses fonctionnalités (planification, réservation…). J'ai
              donc pu intervenir sur les deux parties de leur projet:
              maintenance de la version 1 (React), puis sa refonte (Angular).
            </>
          ),
          actions: [
            'Correction de bugs',
            'Assainissement du code source',
            'Chiffrage du projet',
            'Mise en place des environnements',
            'Conception et implémentation',
            'Revue de code'
          ],
          techStack: [
            'React',
            'Angular',
            'JavaScript',
            'TypeScript',
            'Git',
            'JIRA',
            'Agile(Scrum)'
          ]
        }
      ]
    }
  ],
  education: [
    {
      school: 'Université Polytechnique des Hauts-de-France',
      location: { city: 'Valenciennes', country: 'France' },
      year: 2019,
      degree:
        "Master Informatique parcours Technologies Nouvelles des Systèmes d'Information",
      distiction: 'Mention Bien'
    },
    {
      school: 'Université Polytechnique des Hauts-de-France',
      location: { city: 'Valenciennes', country: 'France' },
      year: 2017,
      degree: 'Licence Informatique',
      distiction: 'Mention Assez Bien'
    },
    {
      school: 'Université des Sciences et de la Technologie Houari-Boumédiène',
      location: { city: 'Alger', country: 'Algérie' },
      year: 2016,
      degree: 'Licence Informatique',
      distiction: 'Major de Promotion'
    }
  ],
  abilities: [
    {
      domain: 'Langues parlées',
      skills: [
        { label: 'Kabyle', level: 'langue maternelle' },
        { label: 'Arabe', level: 'courant' },
        { label: 'Français', level: 'courant/DELF B2' },
        { label: 'Anglais', level: 'courant/TOIEC: 845' }
      ]
    },
    {
      domain: 'Méthodologie',
      skills: [{ label: 'Agile/Scrum' }, { label: 'Modélisation: UML, Merise' }]
    },
    {
      domain: 'Design',
      skills: [{ label: 'Sketch' }, { label: 'Zeplin' }, { label: 'Figma' }]
    },
    {
      domain: 'Frontend',
      skills: [
        { label: 'HTML' },
        { label: 'CSS' },
        { label: 'JavaScript' },
        { label: 'React' },
        { label: 'React Native' },
        { label: 'Next(SSR)' },
        { label: 'Redux' },
        { label: 'Apollo' },
        { label: 'Jest' },
        { label: 'Vue' },
        { label: 'Nuxt(SSR)' },
        { label: 'Angular' },
        { label: 'Ionic' },
        { label: 'Storybook' }
      ]
    },
    {
      domain: 'Backend',
      skills: [
        { label: 'Node' },
        { label: 'Express' },
        { label: 'API: RESTful, GraphQL' },
        { label: 'Prisma' },
        { label: 'MySQL' },
        { label: 'PostgreSQL' }
      ]
    },
    {
      domain: 'Outillage',
      skills: [{ label: 'Webpack' }, { label: 'Parcel' }, { label: 'Git' }]
    }
  ]
}

function App() {
  return (
    <Container>
      <Header>
        <img src={me} alt='logo' />
        <h1>{resume.intro.name}</h1>
        <h2>{resume.intro.job}</h2>
      </Header>
      <Content>
        <Sidebar>
          <ul>
            <li>
              <a href={`tel:${resume.intro.phone}`}>{resume.intro.phone}</a>
            </li>
            <li>
              <a href={`mailto:${resume.intro.email}`}>{resume.intro.email}</a>
            </li>
            <li>
              <a
                href={`http://${resume.intro.website}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {resume.intro.website}
              </a>
            </li>
            <li>
              <p>
                {resume.intro.address.street} <br /> {resume.intro.address.door}{' '}
                <br />
                {resume.intro.address.zipCode} {resume.intro.address.city}{' '}
                <br />
                {resume.intro.address.country}
              </p>
            </li>
            <li>Permis B</li>
          </ul>
        </Sidebar>
        <AboutMe>
          <Section>
            <h3>Profil</h3>
            <p>{resume.intro.pitch}</p>
          </Section>
          <Section>
            <h3>Expériences Professionnelles</h3>
            {resume.experience.map(
              ({
                company,
                title,
                location: { city, country },
                data: { from, to },
                description,
                projectExamples
              }) => (
                <div key={company}>
                  <h4>
                    {title} chez {company}, {city}, {country} — {from}-{to}
                  </h4>
                  <p>{description}</p>
                  <h5>Exemples de projets</h5>
                  {projectExamples.map(
                    ({ title, summary, actions, techStack }) => (
                      <div key={title}>
                        <h5>{title}</h5>
                        <p>{summary}</p>
                        <ul>
                          {actions.map((actionName) => (
                            <li>{actionName}</li>
                          ))}
                        </ul>
                        <p>
                          {techStack.map((techName, index) => (
                            <span key={techName}>
                              {techName}
                              {index !== techStack.length - 1 && ' | '}
                            </span>
                          ))}
                        </p>
                      </div>
                    )
                  )}
                </div>
              )
            )}
          </Section>
          <Education>
            <h3>Formation</h3>
            {resume.education.map(
              ({
                school,
                location: { city, country },
                year,
                degree,
                distiction
              }) => (
                <div key={year}>
                  <h4>
                    {school}, {city}, {country} — {year}
                  </h4>
                  <h4 style={{ color: '#030209' }}>{degree}</h4>
                  <h5>{distiction}</h5>
                </div>
              )
            )}
          </Education>
          <Abilities>
            <h3>Compétences</h3>
            {resume.abilities.map(({ domain, skills }) => (
              <div key={domain}>
                <h4>{domain}</h4>
                <p>
                  {skills.map(({ label, level }, index) => (
                    <>
                      {label}
                      {level && ` (${level})`}
                      {index !== skills.length - 1 ? `, ` : '.'}
                    </>
                  ))}
                </p>
              </div>
            ))}
          </Abilities>
          <Hobbies>
            <h3>Loisirs</h3>
            <p>
              Volontariat avec l’association{' '}
              <strong>“Aide aux Orphelins”</strong> (Empathie), Dessin
              & peinture (Imagination), Piano (Autodidacte), Football (Travail
              d’équipe et Leadership), Randonnée (Aventure), Pêche (Patience),
              Cyclisme (Persévérance)
            </p>
          </Hobbies>
        </AboutMe>
      </Content>
    </Container>
  )
}

export default App

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 0;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    border-radius: 50%;
    width: 6rem;
  }
  h1 {
    text-transform: uppercase;
  }
  h2 {
    text-transform: uppercase;
  }
`

const Content = styled.div`
  display: flex;
`
const Sidebar = styled.div`
  width: 30vw;
  font-size: 0.85rem;
  ul {
    list-style: none;
    li {
      margin-bottom: 0.5rem;
      a {
        text-decoration: none;
        color: black;
        font-weight: 600;
      }
    }
  }
`
const AboutMe = styled.div`
  width: 70vw;
  padding: 1rem;
`

const Section = styled.div`
  margin-top: 2rem;
  li {
    margin: 0;
  }
`

const Education = styled.div`
  margin-top: 2rem;
  ul {
    list-style: none;
    padding: 0;
  }
`

const Abilities = styled.div`
  div {
    h4 {
      color: #6babd2;
    }
  }
`
const Hobbies = styled.div``
