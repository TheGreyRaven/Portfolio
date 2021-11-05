/* eslint-disable no-script-url */

import { Timeline, Text, Divider, Container, Grid, Col, InputWrapper, Progress, List, Space, Title } from '@mantine/core';
import { CodeReviewIcon, CodeIcon, FlameIcon } from '@primer/octicons-react';

const timeLine = [{
    title: "Backend Developer",
    icon: <CodeIcon size={12} />,
    desc: "I was a part of a team of developers that were creating a mobile game streaming platform using NodeJS, WebRTC, AWS and Docker to just name a few of the things we worked with.",
    period: "2020-01 - 2021-05"
},
{
    title: "Fullstack Developer / IT Technician",
    icon: <CodeReviewIcon size={12} />,
    desc: "I worked as a fullstack developer / it technician managing virtual machines and hosting enviroments, I developed APIs and publicly available websites & I mostly used NodeJS, Express, React, MongoDB and MySQL.",
    period: "2021-05 - 2021-08",
    dashed: true
}, {
    title: "???",
    icon: <FlameIcon size={12} />,
    desc: "Currently looking for a new and exciting job!"
}]

const mySkills = [{
    span: 12, language: "Javascript: 4 years", experience: 75, color: "yellow"
}, {
    span: 6, language: ".NET / C#: 3 years", experience: 60, color: "green"
}, {
    span: 6, language: "Lua: 3 years", experience: 60, color: "blue"
}, {
    span: 6, language: "Java: 1 year", experience: 40, color: "orange"
}, {
    span: 6, language: "PHP: 2 years", experience: 50, color: "indigo"
}, {
    span: 6, language: "C++: 1 year", experience: 30, color: "red"
}, {
    span: 6, language: "HTML / CSS: 2 years", experience: 60, color: "gray"
}]

const JobsTimeline = () => {
    return (
        <>
            <Container>
                <Title order={3}>Jobs:</Title>
                <Space h="md"/>
                <Timeline active={1} bulletSize={24} lineWidth={2} color="grape">
                    {timeLine.map((job, index) => {
                        return (
                            <Timeline.Item bullet={job.icon} title={job.title} lineVariant={job.dashed ? "dashed" : "solid"} key={index}>
                                <Text color="dimmed" size="sm">{job.desc}</Text>
                                <Text size="xs" style={{ marginTop: 4 }}>{job.period}</Text>
                            </Timeline.Item>
                        )
                    })}
                </Timeline>
            </Container>

            <Divider my="xl"/>

            <Container>
                <Title order={3}>Skills:</Title>
                <Space h="md"/>
                <Grid>
                    {mySkills.map((skill, index) => {
                        return (
                            <Col span={skill.span} key={index}>
                                <InputWrapper label={skill.language}>
                                    <Progress size="xl" radius="md" value={skill.experience} color={skill.color} striped />
                                </InputWrapper>
                            </Col>
                        )
                    })}
                </Grid>
            </Container>

            <Divider my="xl"/>

            <Container>
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