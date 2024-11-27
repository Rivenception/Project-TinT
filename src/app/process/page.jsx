import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageMeeting from '@/images/meeting.jpg'
import imageEmpower from '@/images/empower.jpg'
import imageTransform from '@/images/transform.jpg'
import imageThrive from '@/images/thrive.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Empower() {
  return (
    <Section title="Empower" image={{ src: imageEmpower }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We equip individuals with <strong className="font-semibold text-neutral-950">foundational</strong>{' '} 
          financial knowledge and essential skills, enabling them to understand key financial concepts such as 
          budgeting, saving, and managing debt.
        </p>
        <p>

          By mastering these skills, individuals begin to shift their mindset, viewing money not just as a resource, 
          but as a tool for achieving <strong className="font-semibold text-neutral-950">stability</strong>{' '}
          and growth. This rewiring fosters a proactive approach to financial decision-making, helping them 
          prioritize <strong className="font-semibold text-neutral-950">long-term goals</strong>{' '} over impulsive spending. 
        </p>
        <p>
          As they gain confidence in managing their finances, they build habits that support {' '}
          <strong className="font-semibold text-neutral-950">resilience</strong>{' '} in the face of economic challenges. 
          Ultimately, this transformed perspective lays the groundwork for sustainable financial well-being and positions them for greater 
          success in both personal and professional endeavors as contributing citizens.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Financial Literacy 1</TagListItem>
        <TagListItem>Financial Literacy 2</TagListItem>
        <TagListItem>Budgeting</TagListItem>
        <TagListItem>Credit Repair</TagListItem>
        <TagListItem>Smart Loans</TagListItem>
        <TagListItem>Financial Goal Setting</TagListItem>
      </TagList>
    </Section>
  )
}

function Transform() {
  return (
    <Section title="Transform" image={{ src: imageTransform, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based off of the empower phase, we encourage participants to apply this knowledge in practical ways, 
          helping them bridge the gap between theory and real-world financial decision-making, and fostering 
          personal growth through tailored experiences.
        </p>

      <Blockquote
        author={{ name: 'Warren Buffet', role: 'Chairman/CEO of Berkshire Hathaway' }}
        className="mt-12">
        The best investment you can make is in yourself. The more you learn, the more you earn.
      </Blockquote>

        <p>
          We equip our clients with a comprehensive toolkit and a solid foundation designed to transform 
          their aspirations of small business ownership into a tangible reality. By fostering deep, 
          thoughtful exploration, we empower them to meticulously evaluate their business ideas, refine their goals, 
          and determine the viability and potential success of their ventures.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Financial Literacy 3</TagListItem>
        <TagListItem>Business Proposals</TagListItem>
        <TagListItem>Case Studies</TagListItem>
        <TagListItem>Strategic Pillars</TagListItem>
        <TagListItem>Vision Statement</TagListItem>
        <TagListItem>Mission Statement</TagListItem>
      </TagList>
    </Section>
  )
}

function Thrive() {
  return (
    <Section title="Thrive" image={{ src: imageThrive, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          This step in our process focuses on creating long-term success focused on two primary pillars: {' '}
          <strong className="font-semibold text-neutral-950">Small Business Council</strong>{' '} and{' '}
          <strong className="font-semibold text-neutral-950">Community Accoutability</strong>.
        </p>
        <p>
          The Small Business Council serves as a collaborative network where current and former inmates can take on the role of local entrepreneurs, 
          business owners, and community leaders coming together to apply the skills learned and share resources, knowledge, and best practices. 
          Through regular meetings, workshops, and access to valuable resources, the council provides a platform for clients to grow 
          collectively while learning how to strategize and advocate for policies that support their interests.
        </p>
        <p>
          At the same time, <strong className="font-semibold text-neutral-950">Community Accoutability</strong>{' '} emphasizes the collective 
          responsibility of businesses and residents to contribute to the well-being and growth of the local community. By aligning business goals 
          with community values, we create an ecosystem where success is shared and establish a healthy mindset for project participants with regard
          to financial responsibility and good citizenship.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Small Business Council">
            A simulated small business council provides a platform for participants to collaboratively address real-world business challenges, 
            make strategic decisions, and develop leadership skills in a controlled, educational setting.
        </ListItem>
        <ListItem title="Research and Discussion">
            Participants research news articles and current affairs to be brought to the group and discuss business and community impacts
            on a bi-weekly schedule.
        </ListItem>
      </List>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Discussion Topics
      </h3>
      <TagList className="mt-4">
        <TagListItem>Market Analysis</TagListItem>
        <TagListItem>Regulatory Compliance</TagListItem>
        <TagListItem>Risk Management</TagListItem>
        <TagListItem>Workforce Development</TagListItem>
        <TagListItem>Technology Integration</TagListItem>
        <TagListItem>Forecasting</TagListItem>
      </TagList>

    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Highly Effective Advocacy and Proactive Community Impact"
      >
        <p>
          Project Time in Trenches engages with some of our most vulnerable population in
          our Connecticut communities, first and second offenders engaged in criminal
          prosecution. Our vision is to provide foundational behavioral support on a timely
          basis while creating community service opportunities for marginalized individuals.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Trust">
            Our partnerships with Clients and State and local
            officials are grounded by trust that our mission is to reduce
            crime in our great state.
          </GridListItem>
          <GridListItem title="Respect">
            Regardless of a client’s background, we provide a place
            of mutual respect for a personal situation no matter what.
          </GridListItem>
          <GridListItem title="Advocacy">
            Our Executive Team works closely with public
            defenders and prosecutors across New Haven and
            Bridgeport providing data supporting reduction in repeat
            offenses
          </GridListItem>
          <GridListItem title="Benevolence">
            We stand with our communities giving back a safer
            place to raise our families, own a business or simply enjoy the
            surroundings.
          </GridListItem>
          <GridListItem title="Leadership">
            Our Executive Team is focused on advocating within
            the criminal justice system. 
          </GridListItem>
          <GridListItem title="Integrity & Fairness">
            We strive to maintain positive outcomes
            through our programming, we are transparent at all costs.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
        We are dedicated to data-driven results and leveraging our resources to create meaningful, lasting change for our clients.
        The primary way we do that is by a re-programing habits to align with values and building a strong foundation for
        financial literacy.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Empower />
        <Transform />
        <Thrive />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
