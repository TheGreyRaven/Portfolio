import { Blockquote, TypographyStylesProvider } from "@mantine/core"

const AboutMe = () => {
    return (
        <>
            <TypographyStylesProvider>
                <Blockquote cite="– My mom">
                    You spend way to much time infront of the computer!
                </Blockquote>
                <p>
                    Ever since I was a toddler I have always had a huge interest in cars, electronics, computers and just technology in general.
                </p>

                <p>
                    When I was about 10 I managed to get my hands on an old computer that I took up to my room and disassembled completely and that went great,
                    until I tried to assemble it back togeheter lets just say that it did not work after that! 
                </p>

                <p>
                    Around the age of 13 was very interested in how websites and applications worked and how they were made,
                    I bought a book about C++ programming which might not have been the best starting point for a 13 year old but I read it through and console based text game and I have not stopped programming since!
                </p>

                <p>
                    During the years I tried out a bunch of different programming languages and today have decent knowledge in .NET, PHP, Lua, C++ Javascript (NodeJS & regular), HTML, CSS and Java.
                    I really like to try out and learn new languages, frameworks and tools!
                </p>

                <p>
                    On my freetime I have a couple of things that I enjoy doing, I have and old BMW E36 that is a project car and the plans is to do a complete renovation of both the body and engine.
                    I also enjoy going for long drives without any destination, usually I just pick the first road I see and follow it to see where I end up.
                </p>

                <p>
                    The last 2 things I love to do is playing online games with my friends and to work on my own small projects,
                    currently I'm working on a small React Native application that hooks into an app called Snapchat and save images that are recived and bypass the screenshot detection without notifying the user.
                </p>
            </TypographyStylesProvider>
        </>
    )
}

export { AboutMe }