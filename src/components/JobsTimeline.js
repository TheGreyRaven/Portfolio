/* eslint-disable no-script-url */

import { Timeline, Text, Divider, Container, Grid, Col, InputWrapper, Progress, List, Space, Title } from '@mantine/core';
import { CodeReviewIcon, CodeIcon, FlameIcon } from '@primer/octicons-react';

const JobsTimeline = () => {
    return (
        <>
            <Container>
                <Title order={3}>Jobs:</Title>
                <Space h="md"/>
                <Timeline active={1} bulletSize={24} lineWidth={2} color="grape">
                    <Timeline.Item bullet={<CodeIcon size={12} />} title="Backend Developer">
                        <Text color="dimmed" size="sm">I was a part of a team of developers that were creating a mobile game streaming platform using NodeJS, WebRTC, AWS and Docker to just name a few of the things we worked with.</Text>
                        <Text size="xs" style={{ marginTop: 4 }}>2020-01 - 2021-05</Text>
                    </Timeline.Item>

                    <Timeline.Item bullet={<CodeReviewIcon size={12} />} title="Fullstack Developer / IT Technician" lineVariant="dashed">
                        <Text color="dimmed" size="sm">I worked as a fullstack developer / it technician managing virtual machines and hosting enviroments, I developed APIs and publicly available websites & I mostly used NodeJS, Express, React, MongoDB and MySQL.</Text>
                        <Text size="xs" style={{ marginTop: 4 }}>2021-05 - 2021-08</Text>
                    </Timeline.Item>

                    <Timeline.Item title="???" bullet={<FlameIcon size={12} />}>
                        <Text color="dimmed" size="sm">Currently looking for a new and exciting job!</Text>
                    </Timeline.Item>
                </Timeline>
            </Container>

            <Divider my="xl"/>

            <Container marginTop={10}>
                <Title order={3}>Skills:</Title>
                <Space h="md"/>
                <Grid>
                    <Col span={12}>
                        <InputWrapper label="Javascript: 4 years">
                            <Progress size="xl" radius="md" value={75} color="yellow" striped />
                        </InputWrapper>
                    </Col>

                    <Col span={6}>
                        <InputWrapper label=".NET / C#: 3 years">
                            <Progress size="xl" radius="md" value={60} color="green" striped />
                        </InputWrapper>
                    </Col>

                    <Col span={6}>
                        <InputWrapper label="Lua: 3 years">
                            <Progress size="xl" radius="md" value={60} color="blue" striped />
                        </InputWrapper>
                    </Col>

                    <Col span={6}>
                        <InputWrapper label="Java: 1 year">
                            <Progress size="xl" radius="md" value={40} color="orange" striped />
                        </InputWrapper>
                    </Col>

                    <Col span={6}>
                        <InputWrapper label="PHP: 2 years">
                            <Progress size="xl" radius="md" value={50} color="indigo" striped />
                        </InputWrapper>
                    </Col>

                    <Col span={6}>
                        <InputWrapper label="C++: 1 year">
                            <Progress size="xl" radius="md" value={30} color="red" striped />
                        </InputWrapper>
                    </Col>

                    <Col span={6}>
                        <InputWrapper label="HTML / CSS: 2 years">
                            <Progress size="xl" radius="md" value={70} color="gray" striped />
                        </InputWrapper>
                    </Col>

                </Grid>
            </Container>

            <Divider my="xl"/>

            <Container marginTop={10}>
                <Title order={3}>Experience:</Title>
                <Space h="md"/>
                <List>
                    <List.Item>React, React Native, Express, Hapi, Electron.</List.Item>
                    <List.Item>MySQL, MongoDB, DynamoDB.</List.Item>
                    <List.Item>Docker, oVirt, VMWare.</List.Item>
                    <List.Item>Amazon Web Services.</List.Item>
                    <List.Item>Android Development.</List.Item>
                    <List.Item>Linux (CentOS, Ubuntu, Debian).</List.Item>
                    <List.Item>CI / CD, DevOps, Git.</List.Item>
                    <List.Item>Agile Workflow, Scrum.</List.Item>
                </List>
            </Container>
        </>
    )
}

export { JobsTimeline }