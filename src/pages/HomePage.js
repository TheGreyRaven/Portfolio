import { Center, Card, Tabs, Tab, Container } from '@mantine/core';
import { PersonIcon, BriefcaseIcon, GearIcon } from '@primer/octicons-react';
import { useMediaQuery } from 'react-responsive';
import { AboutMe } from '../components/AboutMe';
import { JobsTimeline } from '../components/JobsTimeline';
import { Projects } from '../components/Projects';
import { WelcomeText } from '../components/WelcomeText';

function HomePage() {
  const isMobile = useMediaQuery({ query: '(max-width: 760px)' })

  return (
    <>
      <WelcomeText/>
      <Center style={{marginTop: 25, paddingBottom: '5%'}}>
        <Container size="md">
          <Card padding="xl" shadow="xs">
            <Tabs color="grape" grow>
              <Tab label={isMobile ? "" : "About me"} icon={<PersonIcon />}>
                <AboutMe/>
              </Tab>

              <Tab label={isMobile ? "" : "Jobs & Skills"} icon={<BriefcaseIcon />}>
                <JobsTimeline/>
              </Tab>

              <Tab label={isMobile ? "" : "Projects"} icon={<GearIcon />}>
                <Projects/>
              </Tab>
            </Tabs>
          </Card>
        </Container>
      </Center>
    </>
  );
}

export { HomePage }