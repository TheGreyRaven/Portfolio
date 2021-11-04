import { TypographyStylesProvider, Tabs, Tab, Anchor } from "@mantine/core"
import { useMediaQuery } from 'react-responsive';

const Projects = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 760px)' })

    return (
        <Tabs grow color="grape" variant="outline" orientation={isMobile ? "horizontal" : "vertical"}>
            <Tab label={isMobile ? "SFRP" : "SWEDISHFAMILY.NET"}>
                <TypographyStylesProvider>
                    <p>
                        Back in 2016 I took over a small roleplaying server that was based on the FiveM framework for Grand Theft Auto: V, the community only had around 200 members at the time.
                    </p>

                    <p>
                        With time I started to learn Lua and I started working on improving the server with faster MySQL queries, new fun activites for the players, new jobs and so on.
                        With time the server grew in popularity and it happened FAST, the server was whitelisted and we would get around 100 applications each day that we had to read through carefully.
                    </p>

                    <p>
                        In order for a player to apply for whitelist on the server he or she had to be over the age of 18 and have a detailed description about the character they want to play as.
                        If the application would be accepted we would then have a short interview with them so we could get an impression about the player and it he or she would fit in.
                    </p>

                    <p>
                        Due to us having such a strict ruleset and the players keeping their roleplaying to a high quality we grew ever more,
                        we started to have a lot of streamers from Twitch.tv that streamed on our server and we would have around 600 people watching their streams in total each day.
                    </p>

                    <p>
                        I ran the server for 4 years before I eventually had to shut it down as I could not maintain the server and have a normal job at the same time,
                        I learned that managing such a popular and active server is like a full time job and I had to be available 24/7 in case of any issues.
                        We ended up with over 4000 registered members on our website and over 3000 members on our Discord server!
                    </p>

                    <Anchor href="https://swedishfamily.net" color="grape">Visit the SWEDISHFAMILY website!</Anchor>
                </TypographyStylesProvider>
            </Tab>

            <Tab label="SnapTrap">
                <TypographyStylesProvider>
                    <p>
                        I have always liked figure out how things work and mess with things that I should probably not mess with.
                    </p>

                    <p>
                        I was interested in Java and Android so I started a small project called SnapTrap which is esentially a small "hack" for an app called Snapchat.
                        The main function of SnapTrap is to "hook" into Snapchat and modify the app at runtime using a framework called: Xposed in order to save recived images and completely bypass its screenshot detection.
                    </p>

                    <p>
                        Since the Snapchat APK is obfuscated I had to reverse engineer the APK in order to figure out where the function for the screenshot detection is located and then "hook" into it and replace that function with a empty return.
                        Usually on a non hooked version of Snapchat the user sending the image will get a notification if the receiving user screenshoted the image, SnapTrap completely disabled that function and can screenshot undetected.
                    </p>

                    <p>
                        In order to save the images the user can either screenshot them or when opening Snapchat the project will navigate into the private folder of Snapchat and extract the cached images and convert them back into their normal file extension.
                        The project is made in React Native for the UI and in the back its using regular Java!
                    </p>

                    <Anchor href="https://snaptrap.io" color="grape">Visit SnapTrap website!</Anchor>
                </TypographyStylesProvider>
            </Tab>
        </Tabs>
    )
}

export { Projects }