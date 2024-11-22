import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageRickMingione from '@/images/team/rick-mingione.jpg'
import imageCoryLoftis from '@/images/team/cory-loftis.jpg'
import imageDeanRobert from '@/images/team/dean-robert.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Transforming Challenges into Opportunities for Lasting Impact."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values and vision of a better world.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Community" invert>
            We work together with clients, partners, and the broader community to create a support network 
            that promotes healing, growth, and success.
          </GridListItem>
          <GridListItem title="Sustainability" invert>
            We are committed to ensuring that our work creates lasting change by supporting individuals 
            on their long-term journey of reintegration and success.
          </GridListItem>
          <GridListItem title="Compassion" invert>
            We meet individuals where they are, listening without judgment and offering support with 
            understanding and care.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Dean Robert',
        role: 'Founder / CEO',
        image: { src: imageDeanRobert },
      },
      // {
      //   name: 'Michael Foster',
      //   role: 'Co-Founder / CTO',
      //   image: { src: imageMichaelFoster },
      // },
      // {
      //   name: 'Dries Vincent',
      //   role: 'Partner & Business Relations',
      //   image: { src: imageDriesVincent },
      // },
    ],
  },
  {
    title: 'Team',
    people: [
      {
        name: 'Rick Mingione',
        role: 'Software Developer / Technical Advisor',
        image: { src: imageRickMingione },
      },
      {
        name: 'Cory Loftis',
        role: 'Senior Designer / Product Manager',
        image: { src: imageCoryLoftis },
      },
      // {
      //   name: 'Leonard Krasner',
      //   role: 'VP, User Experience',
      //   image: { src: imageLeonardKrasner },
      // },
      // {
      //   name: 'Blake Reid',
      //   role: 'Junior Copywriter',
      //   image: { src: imageBlakeReid },
      // },
      // {
      //   name: 'Kathryn Murphy',
      //   role: 'VP, Human Resources',
      //   image: { src: imageKathrynMurphy },
      // },
      // {
      //   name: 'Whitney Francis',
      //   role: 'Content Specialist',
      //   image: { src: imageWhitneyFrancis },
      // },
      // {
      //   name: 'Jeffrey Webb',
      //   role: 'Account Coordinator',
      //   image: { src: imageJeffreyWebb },
      // },
      // {
      //   name: 'Benjamin Russel',
      //   role: 'Senior Developer',
      //   image: { src: imageBenjaminRussel },
      // },
      // {
      //   name: 'Angela Fisher',
      //   role: 'Front-end Developer',
      //   image: { src: imageAngelaFisher },
      // },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
          Project: Time In Trenches was founded on the belief that everyone deserves the opportunity to rebuild 
          and reclaim their future. We recognize the profound gap between incarcerated individuals and their 
          successful reintegration into society, and are committed to bridging that divide. Through financial 
          literacy, rehabilitation programs, and goal-setting initiatives, we empower formerly incarcerated 
          individuals with the tools they need to develop strong, lasting habits and build a foundation for 
          responsible, productive lives. Our mission is to transform lives by fostering the skills and mindset 
          necessary for these individuals to become valuable, contributing members of their communities. 
          At Project: Time In Trenches, we don’t just help people survive life after prison—we help them thrive.
          </p>
          <p>
            At Project: Time In Trenches, we’re more than just colleagues — we’re a family. This
            means we pay very little and volunteer our time and effort because we believe our work
            matters. Our work embodies our collective belief in the power of “second chances” and the
            potential for transformative change. We want our partners to share in the optimistic belief
            that all lives matter.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="2" label="Underpaid employees" />
          <StatListItem value="1" label="Placated clients" />
          <StatListItem value="$0" label="Funding" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Our team of experienced designers and developers has just one thing on their mind; working on your ideas to draw a smile on the face of your users worldwide. From conducting Brand Sprints to UX Design."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
