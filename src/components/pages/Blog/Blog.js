import React, {Component} from 'react';
import "../../code/code.css"
import buildGradle from "./20181010/build-gradle"
import Groovy from "../../code/Groovy";

class Blog extends Component {
    render() {
        return (
            <div>
                <h3>20181010</h3>
                <h2>Setting Up Custom Trace/Spans with Spring Boot and Spring Cloud Sleuth</h2>
                <div>
                    <p>You have got your Spring Boot app up and running and now you want to add some metrics...great!
                        That's the right thing to do. At the end of the day metrics will help you understand how your
                        application is actually being used. Often times developers and product managers have a general
                        idea of what they want to put in front of customers, but they often end up focusing on the wrong
                        things or overlooking key things the user is showing through their behavior due to pre-disposed
                        biases on "Knowing what the customer wants". Metrics are the tool that will separate the signal
                        from the noise and let you make decisions on behaviors that drive usage of a feature vs the
                        chaos of whackamole feature development that invariably ends up in selling vaporware to keep
                        your stakeholders feeling like progress is just around the corner. Additionally we've all been
                        part of those emotionally charged debates in your Retros and Techtros. By having higher sources
                        of truth you can start basing decisions on facts.</p>
                    <p>Now just like with machine learning there is a certain level of foresight you must have. You can
                        measure anything and make it tell you an answer, it just may not be to the right question.
                        Making sure you are asking the right question is a conversation in itself....I digress. A
                        conversation for another day.</p>
                    <p>Let's show how we get metrics up on your Spring Boot app.</p>
                </div>
                <div>
                    <h3>Getting the Tools</h3>
                    <p>We'll create a Spring Boot app using the Spring Boot CLI. You can alternatively navigate to <a
                        href="https://start.spring.io">start.spring.io</a> which will generate a zip for you that you
                        can work from.</p>
                    <p>I am a big fan of working from the terminal so I'll show you how to go that route. We'll start by
                        installing the Spring Boot CLI</p>

                    <h4>Mac:</h4>
                    <p>
                        Using Homebrew install with the commmand <code>brew tap pivotal/tap && brew install
                        springboot</code>
                    </p>

                    <h4>Windows:</h4>
                    <p>
                        Using scoop to install run:
                        <p><code>scoop bucket add extras</code></p>
                        <p><code> scoop install springboot</code></p>
                    </p>

                    <h4>Manual:</h4>
                    <p>
                        You can download the Spring CLI distribution from the <a
                        href="https://repo.spring.io/release/org/springframework/boot/spring-boot-cli">Spring software
                        repository</a>:

                        Download a Zip or tarball from the above URL using the latest RELEASE

                        Cutting edge snapshot distributions are also available.

                        Once downloaded, follow the INSTALL.txt instructions from the unpacked archive. In summary,
                        there is a spring script (spring.bat for Windows) in a bin/ directory in the .zip file.
                        Alternatively, you can use java -jar with the .jar file (the script helps you to be sure that
                        the classpath is set correctly).
                    </p>
                </div>
                <div>
                    <h3>Creating the App</h3>
                    <p>From your working directory run: <code> spring init --build=gradle -g=rocks.mcnichol
                        -d=web,cloud-starter-sleuth my-app</code></p>
                    <p>This creates a folder named <code>my-app</code> which will have the skeleton of your project.
                        Going inside that directory you will find that you have a build.gradle file which should look
                        similar to this:</p>

                    <Groovy  code={buildGradle.test}/>
                </div>
            </div>
        )
    }
}

export default Blog;